// ============================================================================
// UTILITY FUNCTIONS
// Common utilities used across the application
// ============================================================================

/**
 * Show toast notification
 * @param {string} message - Message to display
 * @param {string} type - Type: 'success', 'error', or 'info'
 */
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  const icon = document.getElementById('toastIcon');
  const iconCont = document.getElementById('toastIconContainer');
  const tmsg = document.getElementById('toastMessage');
  
  if (!toast || !tmsg) return alert(message);
  
  tmsg.textContent = message;
  
  if(type === 'success') {
    iconCont.className = 'p-2 rounded-xl bg-emerald-50 text-emerald-500';
    icon.setAttribute('data-lucide', 'check-circle');
  } else if(type === 'error') {
    iconCont.className = 'p-2 rounded-xl bg-red-50 text-red-500';
    icon.setAttribute('data-lucide', 'alert-circle');
  } else {
    iconCont.className = 'p-2 rounded-xl bg-sky-50 text-sky-500';
    icon.setAttribute('data-lucide', 'info');
  }
  
  if (window.lucide && lucide.createIcons) {
    lucide.createIcons();
  }
  
  toast.classList.remove('translate-y-32', 'opacity-0');
  setTimeout(() => {
    toast.classList.add('translate-y-32', 'opacity-0');
  }, 3000);
}

/**
 * Toggle modal visibility
 * @param {string} modalId - ID of the modal to toggle
 */
function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.toggle('hidden');
  }
}

/**
 * Toggle mobile menu visibility
 */
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
  if (window.lucide && lucide.createIcons) {
    lucide.createIcons();
  }
}

/**
 * Open logout modal
 */
function openLogoutModal() {
  const modal = document.getElementById('logoutModal');
  if (modal) modal.classList.remove('hidden');
}

/**
 * Close logout modal
 */
function closeLogoutModal() {
  const modal = document.getElementById('logoutModal');
  if (modal) modal.classList.add('hidden');
}

/**
 * Confirm logout action
 */
function confirmLogout() {
  closeLogoutModal();
  currentUser = null;
  localStorage.removeItem('currentUser');
  updateAuthUI();
  navigateTo('home');
  showToast('Sesi Berakhir', 'info');
}

/**
 * Logout user
 */
function logout() {
  openLogoutModal();
}

/**
 * Update authentication UI based on login state
 */
function updateAuthUI() {
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const adminBadge = document.getElementById('adminBadge');
  
  if (currentUser) {
    if (loginBtn) loginBtn.classList.add('hidden');
    if (logoutBtn) logoutBtn.classList.remove('hidden');
    if (adminBadge) adminBadge.classList.remove('hidden');
  } else {
    if (loginBtn) loginBtn.classList.remove('hidden');
    if (logoutBtn) logoutBtn.classList.add('hidden');
    if (adminBadge) adminBadge.classList.add('hidden');
  }
}

// Export functions globally for HTML inline handlers
window.showToast = showToast;
window.toggleModal = toggleModal;
window.toggleMobileMenu = toggleMobileMenu;
window.openLogoutModal = openLogoutModal;
window.closeLogoutModal = closeLogoutModal;
window.confirmLogout = confirmLogout;
window.logout = logout;
window.updateAuthUI = updateAuthUI;
