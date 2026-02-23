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
  showToast('Pendaftaran Berhasil Dikirim', 'success');
  setTimeout(() => navigateTo('home'), 1500);
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

// small safety export for dev
if (typeof module !== 'undefined') module.exports = { handleRegister, toggleComplaintField, handleLogin };
