// ============================================================================
// Admin Dashboard Logic for Klinik Pratama
// ============================================================================
// This file handles all admin dashboard functionality
// Dependencies: shared.js (must be loaded before this file)
// ============================================================================

// ============================================================================
// STATE & CONFIGURATION
// ============================================================================
let currentPage = 'dashboard';
let filteredRegistrations = []; // For filtered display

// ============================================================================
// AUTHENTICATION & NAVIGATION
// ============================================================================
function checkAuth() {
  if (!currentUser) {
    window.location.href = 'index.html';
    return false;
  }
  return true;
}

// Navigation
function navigateTo(page) {
  if (!checkAuth()) return;
  currentPage = page;
  const app = document.getElementById('admin-app');
  if (!app) return;
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  switch(page) {
    case 'dashboard': app.innerHTML = renderAdminDashboard(); break;
    case 'services': app.innerHTML = renderAdminServices(); break;
    case 'medicines': app.innerHTML = renderAdminMedicines(); break;
    case 'registrations': app.innerHTML = renderAdminRegistrations(); break;
    case 'profile': app.innerHTML = renderAdminProfile(); break;
    default: app.innerHTML = renderAdminDashboard();
  }
  
  setupAdminInteractions();
  
  if (window.lucide && lucide.createIcons) {
    lucide.createIcons();
  }
}

// Form pendaftaran khusus admin
function handleAdminRegister(event) {
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
  save(LS_KEYS.registrations, registrations);
  showToast('Pendaftaran admin tersimpan', 'success');
  event.target.reset();
  navigateTo('registrations');
}

// Toggle complaint field for admin form
function toggleAdminComplaintField() {
  const select = document.getElementById('adminServiceSelect');
  const complaintField = document.getElementById('adminComplaintField');
  const genderSelect = document.getElementById('adminGenderSelect');
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
  
  // Handle gender field visibility
  if (genderSelect) {
    const genderWrapper = genderSelect.closest('.space-y-2');
    if (isYogaIbuHamil) {
      if (genderWrapper) genderWrapper.classList.add('hidden');
      genderSelect.value = 'Perempuan';
    } else {
      if (genderWrapper) genderWrapper.classList.remove('hidden');
      genderSelect.value = '';
    }
  }
}

// Hapus pendaftaran dari tabel admin
function deleteRegistration(index) {
  registrations.splice(index, 1);
  save(LS_KEYS.registrations, registrations);
  navigateTo('registrations');
  showToast('Data dihapus', 'info');
}

// Tandai pendaftaran selesai
function completeRegistration(index) {
  if (!registrations[index]) return;
  registrations[index].status = 'Selesai';
  save(LS_KEYS.registrations, registrations);
  navigateTo('registrations');
  showToast('Status pasien ditandai selesai', 'success');
}

// Cetak slip pasien untuk pemeriksaan dokter
function printPatientSlip(index) {
  const reg = registrations[index];
  if (!reg) return;
  
  // Generate nomor antrian berdasarkan index + 1
  const queueNumber = String(index + 1).padStart(3, '0');
  
  // Buat konten untuk print
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
      </script>
    </body>
    </html>
  `;
  
  // Buka jendela baru untuk print
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(printContent);
    printWindow.document.close();
  } else {
    showToast('Gagal membuka jendela print. Mohon izinkan popup.', 'error');
  }
}

// Filter registrations based on selected period
function filterRegistrations() {
  const filterValue = document.getElementById('registrationFilter').value;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (filterValue === 'all') {
    filteredRegistrations = [...registrations];
  } else if (filterValue === 'today') {
    const todayStr = today.toISOString().slice(0, 10);
    filteredRegistrations = registrations.filter(r => r.visitDate === todayStr);
  } else if (filterValue === 'week') {
    const weekAgo = new Date(today);
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weekAgoStr = weekAgo.toISOString().slice(0, 10);
    const todayStr = today.toISOString().slice(0, 10);
    filteredRegistrations = registrations.filter(r => r.visitDate >= weekAgoStr && r.visitDate <= todayStr);
  } else if (filterValue === 'month') {
    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const monthStartStr = monthStart.toISOString().slice(0, 10);
    const monthEndStr = monthEnd.toISOString().slice(0, 10);
    filteredRegistrations = registrations.filter(r => r.visitDate >= monthStartStr && r.visitDate <= monthEndStr);
  } else if (filterValue === 'year') {
    const yearStart = new Date(today.getFullYear(), 0, 1);
    const yearEnd = new Date(today.getFullYear(), 11, 31);
    const yearStartStr = yearStart.toISOString().slice(0, 10);
    const yearEndStr = yearEnd.toISOString().slice(0, 10);
    filteredRegistrations = registrations.filter(r => r.visitDate >= yearStartStr && r.visitDate <= yearEndStr);
  }
  
  // Re-render current page to show filtered data
  navigateTo(currentPage);
}

// Print Registration Report with letterhead
function printRegistrationReport() {
  const filterValue = document.getElementById('registrationFilter').value;
  const filterLabels = {
    today: 'Hari Ini',
    week: 'Minggu Ini',
    month: 'Bulan Ini',
    year: 'Tahun Ini',
    all: 'Semua Data'
  };
  
  const totalRegs = filteredRegistrations.length;
  const waitingRegs = filteredRegistrations.filter(r => r.status === 'Menunggu').length;
  const finishedRegs = filteredRegistrations.filter(r => r.status === 'Selesai').length;
  
  const today = new Date();
  let periodLabel = filterLabels[filterValue];
  let periodDetail = '';
  
  if (filterValue === 'today') {
    periodDetail = today.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  } else if (filterValue === 'month') {
    periodDetail = today.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
  } else if (filterValue === 'year') {
    periodDetail = today.getFullYear().toString();
  } else if (filterValue === 'week') {
    const weekAgo = new Date(today);
    weekAgo.setDate(weekAgo.getDate() - 7);
    periodDetail = `${weekAgo.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })} - ${today.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}`;
  }
  
  const printContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Laporan Pendaftaran Pasien - Klinik Pratama</title>
      <style>
        @page { size: A4; margin: 20mm; }
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Times New Roman', serif;
          color: #000;
          line-height: 1.3;
        }
        .kop-surat {
          text-align: center;
          border-bottom: 3px double #000;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        .clinic-header {
          font-size: 20px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 5px;
        }
        .clinic-subheader {
          font-size: 12px;
          font-style: italic;
          margin-bottom: 5px;
        }
        .clinic-address {
          font-size: 11px;
          margin-bottom: 3px;
        }
        .clinic-phone {
          font-size: 11px;
        }
        .document-title {
          text-align: center;
          font-size: 16px;
          font-weight: bold;
          margin: 20px 0;
          text-decoration: underline;
        }
        .info-section {
          margin-bottom: 15px;
        }
        .info-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
          font-size: 12px;
        }
        .summary-box {
          background-color: #e3f2fd;
          border: 2px solid #2196f3;
          border-radius: 8px;
          padding: 12px;
          margin: 15px 0;
        }
        .summary-row {
          display: flex;
          justify-content: space-around;
          font-size: 13px;
          font-weight: bold;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          font-size: 11px;
        }
        th, td {
          border: 1px solid #000;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f0f0f0;
          font-weight: bold;
          text-align: center;
          font-size: 11px;
        }
        td {
          font-size: 11px;
        }
        .status-menunggu {
          background-color: #fff3cd;
          color: #856404;
          font-weight: bold;
          text-align: center;
        }
        .status-selesai {
          background-color: #d4edda;
          color: #155724;
          font-weight: bold;
          text-align: center;
        }
        .signature-section {
          margin-top: 40px;
          display: flex;
          justify-content: space-between;
        }
        .signature-box {
          width: 45%;
          text-align: center;
        }
        .signature-line {
          margin-top: 60px;
          border-top: 1px solid #000;
          padding-top: 5px;
          font-weight: bold;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
          font-size: 10px;
          font-style: italic;
        }
        .stamp-box {
          width: 80px;
          height: 80px;
          border: 2px dashed #ccc;
          border-radius: 50%;
          display: inline-block;
          margin: 10px auto;
          line-height: 80px;
          color: #ccc;
          font-size: 10px;
        }
        .no-data {
          text-align: center;
          padding: 40px;
          font-style: italic;
          color: #666;
        }
      </style>
    </head>
    <body>
      <!-- Kop Surat -->
      <div class="kop-surat">
        <div class="clinic-header">KLINIK PRATAMA</div>
        <div class="clinic-subheader">Layanan Kesehatan Terpercaya</div>
        <div class="clinic-address">Jl. Kesehatan No. 123, Kota Sehat</div>
        <div class="clinic-phone">Telp: (021) 123-4567 | Email: info@klinikpratama.id</div>
      </div>
      
      <!-- Document Title -->
      <div class="document-title">LAPORAN PENDAFTARAN PASIEN</div>
      
      <!-- Info Section -->
      <div class="info-section">
        <div class="info-row">
          <span>Tanggal Cetak: ${today.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span>Jam: ${new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB</span>
        </div>
        <div class="info-row">
          <span>Periode: ${periodLabel}</span>
          <span>${periodDetail ? 'Tanggal: ' + periodDetail : ''}</span>
        </div>
      </div>
      
      ${(() => {
        if (totalRegs === 0) {
          return `
            <div class="no-data">
              <p style="font-size: 14px; margin-bottom: 10px;">📭 Tidak ada data pendaftaran</p>
              <p style="font-size: 12px;">Belum ada data pendaftaran pasien pada periode ${periodDetail || filterLabels[filterValue]}</p>
            </div>
          `;
        }
        
        return `
          <!-- Table -->
          <table>
            <thead>
              <tr>
                <th style="width: 5%;">No</th>
                <th style="width: 25%;">Nama Pasien</th>
                <th style="width: 15%;">Umur / Gender</th>
                <th style="width: 20%;">Layanan</th>
                <th style="width: 15%;">Tanggal</th>
                <th style="width: 10%;">Status</th>
                <th style="width: 10%;">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              ${filteredRegistrations.map((reg, idx) => `
                <tr>
                  <td style="text-align: center;">${idx + 1}</td>
                  <td>${reg.name}</td>
                  <td style="text-align: center;">${reg.age} th / ${reg.gender}</td>
                  <td>${reg.service}</td>
                  <td style="text-align: center;">${reg.visitDate}</td>
                  <td class="${reg.status === 'Menunggu' ? 'status-menunggu' : 'status-selesai'}">${reg.status}</td>
                  <td style="text-align: center;">${reg.status === 'Selesai' ? '✓' : '-'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          
          <!-- Signature Section -->
          <div class="signature-section">
            <div class="signature-box">
              <div>Mengetahui,</div>
              <div>Kepala Klinik</div>
              <div class="signature-line">dr. Fadhila Noholo</div>
            </div>
            <div class="signature-box">
              <div>Dibuat oleh,</div>
              <div>Administrasi</div>
              <div class="signature-line">Administrasi Klinik</div>
            </div>
          </div>
          
          <!-- Stamp Box -->
          <div style="text-align: center; margin-top: 20px;">
            <div class="stamp-box">Cap Klinik</div>
          </div>
        `;
      })()}
      
      <!-- Footer -->
      <div class="footer">
        Dokumen ini dicetak secara otomatis dan sah tanpa tanda tangan dan stempel.
      </div>
      
      <script>
        window.onload = function() {
          window.print();
        };
      </script>
    </body>
    </html>
  `;
  
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(printContent);
    printWindow.document.close();
  } else {
    showToast('Gagal membuka jendela print. Mohon izinkan popup.', 'error');
  }
}

// Export Registration to Excel
function exportRegistrationToExcel() {
  const filterValue = document.getElementById('registrationFilter').value;
  const filterLabels = {
    today: 'Hari_Ini',
    week: 'Minggu_Ini',
    month: 'Bulan_Ini',
    year: 'Tahun_Ini',
    all: 'Semua_Data'
  };
  
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "KLINIK PRATAMA - LAPORAN PENDAFTARAN PASIEN\n";
  csvContent += `Periode: ${filterLabels[filterValue]}\n`;
  csvContent += `Tanggal Cetak: ${new Date().toLocaleDateString('id-ID')}\n\n`;
  csvContent += "No,Nama Pasien,Umur,Gender,Layanan,Tanggal Daftar,Status,Keluhan\n";
  
  filteredRegistrations.forEach((reg, idx) => {
    csvContent += `${idx + 1},"${reg.name}",${reg.age},${reg.gender},"${reg.service}",${reg.visitDate},${reg.status},"${reg.complaint || '-'}"\n`;
  });
  
  if (filteredRegistrations.length > 0) {
    const waiting = filteredRegistrations.filter(r => r.status === 'Menunggu').length;
    const finished = filteredRegistrations.filter(r => r.status === 'Selesai').length;
    csvContent += `\nTotal Pasien:,${filteredRegistrations.length}\n`;
    csvContent += `Menunggu:,${waiting}\n`;
    csvContent += `Selesai:,${finished}\n`;
  }
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Laporan_Pendaftaran_${filterLabels[filterValue]}_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('File Excel berhasil diunduh', 'success');
}

// Toggle status stok obat
function toggleMedStatus(index) {
  medicineStock[index].status = medicineStock[index].status === 'Tersedia' ? 'Habis' : 'Tersedia';
  save(LS_KEYS.medicines, medicineStock);
  navigateTo('medicines');
}

// Handle medicine outflow (pengeluaran obat)
function handleMedicineOutflow(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const medId = parseInt(formData.get('medId'));
  const amount = parseInt(formData.get('amount'));
  const patient = formData.get('patient')?.toString().trim() || '';
  
  if (isNaN(medId) || isNaN(amount) || amount < 1) {
    showToast('Jumlah tidak valid', 'error');
    return;
  }
  
  const med = medicineStock[medId];
  if (!med) {
    showToast('Obat tidak ditemukan', 'error');
    return;
  }
  
  if (med.qty != null && med.qty < amount) {
    showToast('Stok obat tidak mencukupi', 'error');
    return;
  }
  
  // Update stock
  if (med.qty != null) {
    med.qty -= amount;
    if (med.qty <= 0) {
      med.status = 'Habis';
    }
  }
  save(LS_KEYS.medicines, medicineStock);
  
  // Record outflow
  const outflows = load('medicineOutflow', []);
  const now = new Date();
  outflows.push({
    id: Date.now(),
    medicineId: medId,
    medicineName: med.name,
    medicineDosis: med.dosis || '',
    amount: amount,
    patient: patient,
    date: now.toISOString().slice(0,10),
    time: now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
  });
  save('medicineOutflow', outflows);
  
  showToast(`Berhasil mencatat pengeluaran ${amount} ${med.name}`, 'success');
  event.target.reset();
  navigateTo('medicines');
}

// ============================================================================
// EVENT HANDLERS & INTERACTIONS
// ============================================================================

function setupAdminInteractions() {
  // Form tambah layanan
  const serviceForm = document.getElementById('adminServiceForm');
  if (serviceForm) {
    serviceForm.onsubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(serviceForm);
      const name = formData.get('name')?.toString().trim();
      const desc = formData.get('desc')?.toString().trim() || '';
      const schedule = formData.get('schedule')?.toString().trim() || 'Senin - Sabtu (08:00 - 14:00)';
      const doctor = formData.get('doctor')?.toString().trim() || 'Tim Klinik Pratama';
      if (!name) return;
      const id = 'adm-' + Date.now();
      servicesData.push({
        id,
        name,
        icon: 'stethoscope',
        desc,
        detail: desc || 'Layanan medis tambahan.',
        schedule,
        doctor,
      });
      persistServices();
      serviceForm.reset();
      navigateTo('services');
      showToast('Layanan baru ditambahkan', 'success');
    };
  }

  document.querySelectorAll('[data-admin-service-delete]').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-admin-service-delete');
      if (!confirm('Hapus layanan ini dari daftar?')) return;
      const idx = servicesData.findIndex((s) => s.id === id);
      if (idx !== -1) {
        servicesData.splice(idx, 1);
        persistServices();
        navigateTo('services');
      }
    };
  });

  // Stok obat: form tambah + edit/hapus
  const medForm = document.getElementById('adminMedForm');
  if (medForm) {
    medForm.onsubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(medForm);
      const name = formData.get('name')?.toString().trim();
      const dosis = formData.get('dosis')?.toString().trim();
      if (!name) return;
      const qtyRaw = formData.get('qty')?.toString().trim();
      const qty = qtyRaw ? parseInt(qtyRaw, 10) || 0 : null;
      medicineStock.push({
        id: Date.now(),
        name,
        dosis,
        qty,
        status: 'Tersedia',
      });
      persistMedicines();
      medForm.reset();
      navigateTo('medicines');
      showToast('Obat baru ditambahkan', 'success');
    };
  }

  document.querySelectorAll('[data-med-delete]').forEach((btn) => {
    btn.onclick = () => {
      const idx = parseInt(btn.getAttribute('data-med-delete'), 10);
      if (Number.isNaN(idx)) return;
      if (!confirm('Hapus obat ini dari daftar?')) return;
      medicineStock.splice(idx, 1);
      persistMedicines();
      navigateTo('medicines');
    };
  });

  document.querySelectorAll('[data-med-edit]').forEach((btn) => {
    btn.onclick = () => {
      const idx = parseInt(btn.getAttribute('data-med-edit'), 10);
      if (Number.isNaN(idx)) return;
      const item = medicineStock[idx];
      if (!item) return;
      const current = item.qty != null ? item.qty : 0;
      const next = prompt('Stok baru untuk obat ini:', current);
      if (next === null) return;
      const qty = parseInt(next, 10);
      if (Number.isNaN(qty) || qty < 0) {
        alert('Masukkan angka stok yang valid.');
        return;
      }
      item.qty = qty;
      persistMedicines();
      navigateTo('medicines');
      showToast('Stok obat diperbarui', 'success');
    };
  });
}

// Update profil admin (nama, email, username & password)
function handleAdminProfileUpdate(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = (formData.get('profileName') || '').toString().trim();
  const email = (formData.get('profileEmail') || '').toString().trim();
  const username = (formData.get('profileUsername') || '').toString().trim();
  const password = (formData.get('profilePassword') || '').toString();
  
  if (!name) {
    alert('Nama tidak boleh kosong.');
    return;
  }
  if (!username) {
    alert('Username tidak boleh kosong.');
    return;
  }
  
  currentUser = currentUser || {};
  currentUser.name = name;
  currentUser.email = email;
  currentUser.username = username;
  
  // Only update password if provided
  if (password && password.length > 0) {
    currentUser.password = password;
  }
  
  save(LS_KEYS.user, currentUser);
  showToast('Profil admin diperbarui', 'success');
  navigateTo('profile');
}

// Mobile menu functions
function toggleMobileMenu() {
  const sidebar = document.getElementById('mobileSidebar');
  const overlay = document.getElementById('mobileMenuOverlay');
  if (sidebar && overlay) {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
  }
}

function closeMobileMenu() {
  const sidebar = document.getElementById('mobileSidebar');
  const overlay = document.getElementById('mobileMenuOverlay');
  if (sidebar && overlay) {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  }
}

function confirmLogout() {
  closeLogoutModal();
  currentUser = null;
  localStorage.removeItem(LS_KEYS.user);
  window.location.href = 'index.html';
}
