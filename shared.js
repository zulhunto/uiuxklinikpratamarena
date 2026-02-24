// Shared utilities for Klinik Pratama
// This file contains common functions and data used by both index.html and admin.html

// LocalStorage keys
const LS_KEYS = {
  services: 'servicesData',
  medicines: 'medicineStock',
  registrations: 'registrations',
  user: 'currentUser',
};

// Default services data
const defaultServicesData = [
  { id: 'kia', name: 'Pelayanan KIA', icon: 'baby', desc: 'Kesehatan Ibu & Anak terpadu.', detail: 'Layanan ANC terpadu, imunisasi dasar lengkap, serta konsultasi nutrisi ibu dan anak.', schedule: 'Senin - Sabtu (08:00 - 14:00)', doctor: 'Dr. Sarah Amelia, Sp.A' },
  { id: 'pemeriksaan', name: 'Pemeriksaan Umum', icon: 'stethoscope', desc: 'Konsultasi dokter umum profesional.', detail: 'Pemeriksaan kesehatan rutin, pengobatan penyakit ringan, dan rujukan medis.', schedule: '24 Jam (Shift Dokter)', doctor: 'Dr. Budi Santoso' },
  { id: 'yoga', name: 'Yoga Ibu Hamil', icon: 'flower-2', desc: 'Kelas fisik persiapan persalinan.', detail: 'Relaksasi tubuh dan pikiran untuk membantu kelancaran proses persalinan normal.', schedule: 'Selasa & Kamis (16:00)', doctor: 'Bidan Ratna' },
  { id: 'sunat', name: 'Pelayanan Sunat', icon: 'scissors', desc: 'Metode modern, minim rasa sakit.', detail: 'Layanan sirkumsisi menggunakan metode laser atau klamp dengan pemulihan cepat.', schedule: 'Jumat - Minggu (09:00)', doctor: 'Dr. Ahmad Fauzi' },
  { id: 'kb', name: 'Layanan KB', icon: 'shield-check', desc: 'Perencanaan keluarga yang aman.', detail: 'Pemasangan IUD, implan, suntik, serta konsultasi kontrasepsi yang privat.', schedule: 'Senin - Rabu (08:00)', doctor: 'Bidan Siti Nurhayati' },
  { id: 'gigi', name: 'Kesehatan Gigi', icon: 'smile', desc: 'Perawatan gigi dan mulut lengkap.', detail: 'Scaling, penambalan, pencabutan, dan konsultasi kesehatan gigi primer.', schedule: 'Senin - Jumat (15:00)', doctor: 'Drg. Linda Wati' }
];

// Default medicine stock
const defaultMedicineStock = [
  { id: 1, name: 'Paracetamol 500mg', dosis: '500mg', qty: 50, status: 'Tersedia', addedDate: new Date().toISOString().slice(0, 10), addedTime: '08:00' },
  { id: 2, name: 'Amoxicillin 500mg', dosis: '500mg', qty: 30, status: 'Tersedia', addedDate: new Date().toISOString().slice(0, 10), addedTime: '08:15' },
  { id: 3, name: 'Antasida Doen', dosis: '-', qty: 0, status: 'Habis', addedDate: new Date().toISOString().slice(0, 10), addedTime: '08:30' },
  { id: 4, name: 'Vitamin C 500mg', dosis: '500mg', qty: 100, status: 'Tersedia', addedDate: new Date().toISOString().slice(0, 10), addedTime: '09:00' },
  { id: 5, name: 'Captopril 25mg', dosis: '25mg', qty: 25, status: 'Tersedia', addedDate: new Date().toISOString().slice(0, 10), addedTime: '09:15' }
];

// LocalStorage helpers
function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Initialize shared data
let servicesData = load(LS_KEYS.services, defaultServicesData);
let medicineStock = load(LS_KEYS.medicines, defaultMedicineStock);
let registrations = load(LS_KEYS.registrations, []);
let currentUser = load(LS_KEYS.user, null);

// Migrate old medicine data to new format (dosis only)
function migrateMedicineData() {
  const currentData = load(LS_KEYS.medicines, []);
  if (!currentData || currentData.length === 0) return;
  
  let needsMigration = false;
  const migratedData = currentData.map(med => {
    // Check if medicine has old format with usage field
    if (med.usage) {
      needsMigration = true;
      // Remove usage field, keep only dosis
      const { usage, ...cleanMed } = med;
      return cleanMed;
    }
    // Also migrate old format where dosis contains usage pattern
    if (med.dosis && med.dosis.includes('×')) {
      needsMigration = true;
      // Extract strength from name if possible
      const nameMatch = med.name.match(/\d+mg/i);
      const strength = nameMatch ? nameMatch[0] : '-';
      
      return {
        ...med,
        dosis: strength
      };
    }
    return med;
  });
  
  if (needsMigration) {
    save(LS_KEYS.medicines, migratedData);
    medicineStock = migratedData; // Update global variable
    console.log('✓ Medicine data migrated (usage field removed)');
  }
}

// Run migration on page load
migrateMedicineData();

// Persist functions
function persistServices() {
  save(LS_KEYS.services, servicesData);
}

function persistMedicines() {
  save(LS_KEYS.medicines, medicineStock);
}

function persistRegistrations() {
  save(LS_KEYS.registrations, registrations);
}

// Service helpers
function getServiceById(id) {
  return servicesData.find(s => s.id === id);
}

function getServiceByName(name) {
  return servicesData.find(s => s.name === name);
}

// Check if service requires complaint field
function requiresComplaint(serviceName) {
  const name = (serviceName || '').toLowerCase();
  return name.includes('umum') || name.includes('gigi');
}

// Check if service is Yoga Ibu Hamil (hides gender field)
function isYogaIbuHamil(serviceName) {
  const name = (serviceName || '').toLowerCase();
  return name.includes('yoga') || name.includes('ibu hamil');
}

// ==================== ROLE MANAGEMENT ====================

const ROLES = {
  ADMIN: 'admin',
  APOTEKER: 'apoteker'
};

// Default users (admin and apoteker)
const defaultUsers = [
  { 
    id: 'admin-1', 
    username: 'admin', 
    password: 'admin123', 
    name: 'Administrasi Klinik', 
    role: ROLES.ADMIN,
    email: 'admin@klinikpratama.id',
    phone: '0812-3456-7890'
  },
  { 
    id: 'apoteker-1', 
    username: 'apoteker', 
    password: 'apoteker123', 
    name: 'Apoteker Klinik', 
    role: ROLES.APOTEKER,
    email: 'apoteker@klinikpratama.id',
    phone: '0812-9876-5432'
  }
];

// Users management
let users = load('users', defaultUsers);

function persistUsers() {
  save('users', users);
}

// Get user by credentials
function authenticateUser(username, password) {
  return users.find(u => u.username === username && u.password === password);
}

// Get user by ID
function getUserById(id) {
  return users.find(u => u.id === id);
}

// Get all users (for admin)
function getAllUsers() {
  return [...users];
}

// Add new user
function addUser(userData) {
  const newUser = {
    id: 'user-' + Date.now(),
    ...userData
  };
  users.push(newUser);
  persistUsers();
  return newUser;
}

// Update user
function updateUser(id, updates) {
  const idx = users.findIndex(u => u.id === id);
  if (idx !== -1) {
    users[idx] = { ...users[idx], ...updates };
    persistUsers();
    return users[idx];
  }
  return null;
}

// Delete user
function deleteUser(id) {
  const idx = users.findIndex(u => u.id === id);
  if (idx !== -1 && users[idx].role !== ROLES.ADMIN) {
    users.splice(idx, 1);
    persistUsers();
    return true;
  }
  return false;
}

// Check if user has role
function hasRole(user, role) {
  return user && user.role === role;
}

// Redirect based on role
function redirectByRole(role) {
  if (role === ROLES.ADMIN) {
    window.location.href = 'admin.html';
  } else if (role === ROLES.APOTEKER) {
    window.location.href = 'apoteker.html';
  } else {
    window.location.href = 'index.html';
  }
}

// Get dashboard URL by role
function getDashboardUrl(role) {
  if (role === ROLES.ADMIN) return 'admin.html';
  if (role === ROLES.APOTEKER) return 'apoteker.html';
  return 'index.html';
}
