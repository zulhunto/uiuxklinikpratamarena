// ============================================================================
// SCRIPT.JS - Main Application Logic
// Business logic, event handlers, and initialization
// Note: Requires shared.js, utils.js, renderers.js, and router.js loaded before this file
// ============================================================================

// ============================================================================
// REGISTRATION HANDLER
// ============================================================================

/**
 * Handle registration form submission
 */
function handleRegister(event){
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = {
    id: Date.now(),
    name: formData.get('name'),
    nik: formData.get('nik') || '',
    age: formData.get('age'),
    gender: formData.get('gender'),
    phone: formData.get('phone'),
    address: formData.get('address'),
    service: formData.get('service'),
    visitDate: formData.get('visitDate'),
    complaint: formData.get('complaint') || '',
    status: 'Menunggu',
  };
  registrations.unshift(data);
  localStorage.setItem('registrations', JSON.stringify(registrations));
  
  // Show patient slip modal instead of redirect
  showToast('Pendaftaran Berhasil Dikirim', 'success');
  openPatientSlipModal();
}

// ============================================================================
// FORM HELPERS
// ============================================================================

/**
 * Toggle complaint field based on selected service
 */
function toggleComplaintField() {
  const select = document.getElementById('serviceSelect');
  const complaintField = document.getElementById('complaintField');
  const genderSection = document.getElementById('genderSection');
  const selectedOption = select.options[select.selectedIndex];
  const serviceId = selectedOption.getAttribute('data-id');
  const serviceName = selectedOption.value.toLowerCase();
  
  // Show complaint field only for pemeriksaan umum and kesehatan gigi
  const showComplaint = serviceId === 'umum' || 
                        serviceId === 'gigi' || 
                        serviceName.includes('umum') || 
                        serviceName.includes('gigi');
  
  // Hide gender field for yoga ibu hamil (automatically female)
  const isYogaIbuHamil = serviceId === 'yoga' || 
                         serviceName.includes('yoga') || 
                         serviceName.includes('ibu hamil');
  
  if (complaintField) {
    if (showComplaint) {
      complaintField.classList.remove('hidden');
      complaintField.querySelector('textarea').setAttribute('required', 'required');
    } else {
      complaintField.classList.add('hidden');
      complaintField.querySelector('textarea').removeAttribute('required');
    }
  }
  
  // Handle gender section visibility
  if (genderSection) {
    if (isYogaIbuHamil) {
      genderSection.classList.add('hidden');
      // Auto-select female
      const femaleRadio = genderSection.querySelector('input[value="Perempuan"]');
      if (femaleRadio) femaleRadio.checked = true;
    } else {
      genderSection.classList.remove('hidden');
    }
  }
}

// ============================================================================
// AUTHENTICATION
// ============================================================================

/**
 * Handle login form submission
 */
function handleLogin(){
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Use shared authenticate function from shared.js
  const user = authenticateUser(username, password);
  
  if(user) {
    currentUser = { 
      id: user.id,
      role: user.role, 
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone
    };
    save(LS_KEYS.user, currentUser);
    updateAuthUI();
    toggleModal('loginModal');
    showToast('Login berhasil', 'success');
    
    // Redirect based on role
    setTimeout(() => {
      redirectByRole(user.role);
    }, 1000);
  } else {
    showToast('Username atau password salah', 'error');
  }
}

// ============================================================================
// PATIENT SLIP FUNCTIONS
// ============================================================================

/**
 * Open patient slip modal after successful registration
 */
function openPatientSlipModal() {
  const modal = document.getElementById('patientSlipModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.lucide && lucide.createIcons) {
      lucide.createIcons();
    }
  }
}

/**
 * Close patient slip modal
 */
function closePatientSlipModal() {
  const modal = document.getElementById('patientSlipModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    // Redirect to home after closing
    setTimeout(() => navigateTo('home'), 300);
  }
}

/**
 * Print patient slip from index.html registration
 */
function printPatientSlipFromIndex() {
  // Get the latest registration (first item in array)
  const reg = registrations[0];
  if (!reg) {
    showToast('Data pendaftaran tidak ditemukan', 'error');
    return;
  }
  
  // Generate nomor antrian based on index + 1
  const queueNumber = String(registrations.length).padStart(3, '0');
  
  // Create print content
  const printContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Slip Pasien - ${reg.name}</title>
      <style>
        @page { size: A6; margin: 15mm; }
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f8fafc;
          color: #1e293b;
          line-height: 1.4;
        }
        .container {
          max-width: 500px;
          margin: 0 auto;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        .header {
          background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%);
          color: white;
          padding: 20px 24px;
          text-align: center;
          position: relative;
        }
        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 200px;
          height: 200px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
        }
        .clinic-name {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 4px;
          letter-spacing: 0.5px;
        }
        .clinic-tagline {
          font-size: 11px;
          opacity: 0.9;
          font-weight: 400;
        }
        .content {
          padding: 24px;
        }
        .patient-info {
          background: #f1f5f9;
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 16px;
        }
        .info-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          font-size: 13px;
        }
        .info-row:last-child {
          margin-bottom: 0;
        }
        .info-label {
          font-weight: 600;
          color: #64748b;
          min-width: 100px;
        }
        .info-value {
          font-weight: 600;
          color: #1e293b;
          text-align: right;
        }
        .queue-section {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border: 2px solid #fbbf24;
          border-radius: 12px;
          padding: 16px;
          text-align: center;
          margin-bottom: 16px;
        }
        .queue-label {
          font-size: 11px;
          color: #92400e;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 6px;
        }
        .queue-number {
          font-size: 42px;
          font-weight: 900;
          color: #b45309;
          line-height: 1;
        }
        .service-section {
          background: #ecfdf5;
          border-left: 4px solid #10b981;
          border-radius: 8px;
          padding: 14px 16px;
          margin-bottom: 16px;
        }
        .service-label {
          font-size: 11px;
          color: #059669;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 6px;
          font-weight: 700;
        }
        .service-name {
          font-size: 16px;
          font-weight: 700;
          color: #064e3b;
        }
        .complaint-section {
          background: #fff1f2;
          border-left: 4px solid #f43f5e;
          border-radius: 8px;
          padding: 14px 16px;
          margin-bottom: 16px;
        }
        .complaint-label {
          font-size: 11px;
          color: #be123c;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 6px;
          font-weight: 700;
        }
        .complaint-text {
          font-size: 13px;
          color: #881337;
          line-height: 1.5;
          font-style: italic;
        }
        .footer {
          background: #f8fafc;
          border-top: 2px dashed #e2e8f0;
          padding: 16px 24px;
          text-align: center;
          font-size: 11px;
          color: #64748b;
        }
        .timestamp {
          display: inline-block;
          background: white;
          padding: 6px 12px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          margin-top: 8px;
          font-size: 10px;
          font-weight: 600;
        }
        .note {
          margin-top: 12px;
          font-size: 10px;
          color: #94a3b8;
          font-style: italic;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header -->
        <div class="header">
          <div class="clinic-name">KLINIK PRATAMA</div>
          <div class="clinic-tagline">Layanan Kesehatan Terpercaya</div>
        </div>
        
        <!-- Content -->
        <div class="content">
          <!-- Patient Info -->
          <div class="patient-info">
            <div class="info-row">
              <span class="info-label">Nama Pasien</span>
              <span class="info-value">${reg.name}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Umur / Gender</span>
              <span class="info-value">${reg.age} th / ${reg.gender}</span>
            </div>
            ${reg.nik ? `
            <div class="info-row">
              <span class="info-label">NIK</span>
              <span class="info-value">${reg.nik}</span>
            </div>
            ` : ''}
            <div class="info-row">
              <span class="info-label">Tanggal Daftar</span>
              <span class="info-value">${reg.visitDate}</span>
            </div>
          </div>
          
          <!-- Queue Number -->
          <div class="queue-section">
            <div class="queue-label">Nomor Antrian</div>
            <div class="queue-number">${queueNumber}</div>
          </div>
          
          <!-- Service -->
          <div class="service-section">
            <div class="service-label">Layanan Pemeriksaan</div>
            <div class="service-name">${reg.service}</div>
          </div>
          
          <!-- Complaint (if any) -->
          ${reg.complaint && reg.complaint.trim() ? `
          <div class="complaint-section">
            <div class="complaint-label">Keluhan Utama</div>
            <div class="complaint-text">"${reg.complaint}"</div>
          </div>
          ` : ''}
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <div>Silakan menuju ruang pemeriksaan</div>
          <div class="timestamp">
            📅 ${new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            <br/>
            🕐 ${new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB
          </div>
          <div class="note">Slip ini wajib dibawa selama proses pemeriksaan</div>
        </div>
      </div>
      
      <script>
        window.onload = function() {
          window.print();
        };
      <\/script>
    </body>
    </html>
  `;
  
  // Open new window for print
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(printContent);
    printWindow.document.close();
  } else {
    showToast('Gagal membuka jendela print. Mohon izinkan popup.', 'error');
  }
}

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Initialize application when DOM is ready
 */
window.onload = function(){
  updateAuthUI();
  // make sure content exists
  const content = document.getElementById('app-content');
  if (!content) return;
  navigateTo('home');
  if (window.lucide && lucide.createIcons) lucide.createIcons();
};

// ============================================================================
// GLOBAL EXPORTS
// Expose functions to global scope for inline HTML event handlers
// ============================================================================

window.handleRegister = handleRegister;
window.toggleComplaintField = toggleComplaintField;
window.handleLogin = handleLogin;
window.openPatientSlipModal = openPatientSlipModal;
window.closePatientSlipModal = closePatientSlipModal;
window.printPatientSlipFromIndex = printPatientSlipFromIndex;

// small safety export for dev
if (typeof module !== 'undefined') module.exports = { handleRegister, toggleComplaintField, handleLogin };
