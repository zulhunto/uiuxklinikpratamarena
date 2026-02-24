// ============================================================================
// Apoteker Dashboard Logic for Klinik Pratama
// ============================================================================
// This file handles all apoteker dashboard functionality
// Dependencies: shared.js (must be loaded before this file)
// ============================================================================

// ============================================================================
// STATE & CONFIGURATION
// ============================================================================
let currentPage = 'dashboard';

// ============================================================================
// AUTHENTICATION & NAVIGATION
// ============================================================================
function checkAuth() {
  if (!currentUser || currentUser.role !== ROLES.APOTEKER) {
    window.location.href = 'index.html';
    return false;
  }
  return true;
}

// Navigation
function navigateTo(page) {
  if (!checkAuth()) return;
  currentPage = page;
  const app = document.getElementById('app');
  if (!app) return;
  
  switch(page) {
    case 'dashboard': app.innerHTML = renderApotekerDashboard(); break;
    case 'medicines': app.innerHTML = renderApotekerMedicines(); break;
    case 'outflow': app.innerHTML = renderApotekerOutflow(); break;
    case 'profile': app.innerHTML = renderApotekerProfile(); break;
    default: app.innerHTML = renderApotekerDashboard();
  }
  
  if (window.lucide) lucide.createIcons();
  setupApotekerInteractions();
}

// ============================================================================
// INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Setup edit medicine form listener
  const editForm = document.getElementById('editMedicineForm');
  if (editForm) {
    editForm.addEventListener('submit', saveEditedMedicine);
  }
  
  if (checkAuth()) {
    navigateTo('dashboard');
  }
});

// ============================================================================
// UI RENDER FUNCTIONS
// ============================================================================

// Sidebar Component
