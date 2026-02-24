// ============================================================================
// ADMIN RENDERERS - Template Functions for Admin Dashboard
// Separate file for all UI rendering logic
// Dependencies: shared.js (must be loaded before this file)
// ============================================================================

function renderAdminSidebar(active) {
  const adminName = currentUser?.name || 'Admin';
  return `
    <aside class="hidden md:flex flex-col w-64 bg-white/90 backdrop-blur-xl border-r border-slate-100 shadow-[4px_0_24px_rgba(15,23,42,0.05)] h-screen fixed left-0 top-0 z-40">
      <div class="h-20 flex items-center px-7 border-b border-slate-50/50 shrink-0">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-sky-500/40">
            <i data-lucide="activity" class="w-5 h-5"></i>
          </div>
          <div class="leading-tight">
            <p class="text-[16px] font-extrabold tracking-tight text-slate-900">Klinik<span class="text-sky-500">Pratama</span></p>
          </div>
        </div>
      </div>
      <nav class="flex-1 px-4 py-6 space-y-1 overflow-y-auto text-[13px]">
        <p class="px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-[0.18em] mb-3">Overview</p>
        <button onclick="navigateTo('dashboard')" class="w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${active === 'dashboard' ? 'bg-sky-50 text-sky-600 font-semibold shadow-[0_8px_20px_-10px_rgba(56,189,248,0.6)]' : 'text-slate-500 hover:bg-slate-50 hover:text-sky-600'}">
          <i data-lucide="layout-dashboard" class="w-5 h-5"></i>
          <span>Dashboard</span>
        </button>
        <button onclick="navigateTo('services')" class="w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${active === 'services' ? 'bg-sky-50 text-sky-600 font-semibold shadow-[0_8px_20px_-10px_rgba(56,189,248,0.6)]' : 'text-slate-500 hover:bg-slate-50 hover:text-sky-600'}">
          <i data-lucide="heart-pulse" class="w-5 h-5"></i>
          <span>Layanan</span>
        </button>
        <button onclick="navigateTo('registrations')" class="w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${active === 'registrations' ? 'bg-sky-50 text-sky-600 font-semibold shadow-[0_8px_20px_-10px_rgba(56,189,248,0.6)]' : 'text-slate-500 hover:bg-slate-50 hover:text-sky-600'}">
          <i data-lucide="users" class="w-5 h-5"></i>
          <span>Pendaftaran</span>
        </button>
        <p class="px-4 pt-4 text-[11px] font-semibold text-slate-400 uppercase tracking-[0.18em] mb-1">Akun</p>
        <button onclick="navigateTo('profile')" class="w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${active === 'profile' ? 'bg-sky-50 text-sky-600 font-semibold shadow-[0_8px_20px_-10px_rgba(56,189,248,0.6)]' : 'text-slate-500 hover:bg-slate-50 hover:text-sky-600'}">
          <i data-lucide="user-circle-2" class="w-5 h-5"></i>
          <span>Profil Admin</span>
        </button>
      </nav>
      <div class="p-4 border-t border-slate-100 shrink-0">
        <button onclick="logout()" class="group w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-rose-50 transition-all duration-300">
          <div class="w-10 h-10 rounded-lg bg-rose-500 text-white flex items-center justify-center shadow-md shadow-rose-200 group-hover:shadow-lg group-hover:shadow-rose-300 group-hover:scale-105 transition-all duration-300">
            <i data-lucide="log-out" class="w-5 h-5"></i>
          </div>
          <span class="text-sm font-semibold text-slate-700 group-hover:text-rose-600 transition-colors">Logout</span>
        </button>
      </div>
    </aside>

    <!-- Mobile Header -->
    <header class="md:hidden fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-100">
      <div class="flex items-center justify-between px-4 py-3">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center text-white">
            <i data-lucide="activity" class="w-4 h-4"></i>
          </div>
          <span class="text-base font-bold text-slate-900">Klinik<span class="text-sky-500">Pratama</span></span>
        </div>
        <button onclick="toggleMobileMenu()" class="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
          <i data-lucide="menu" class="w-5 h-5"></i>
        </button>
      </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div id="mobileMenuOverlay" class="md:hidden fixed inset-0 z-50 bg-black/50 hidden" onclick="closeMobileMenu()"></div>

    <!-- Mobile Sidebar -->
    <aside id="mobileSidebar" class="md:hidden fixed top-0 left-0 bottom-0 w-72 bg-white z-50 transform -translate-x-full transition-transform duration-300 ease-in-out">
      <div class="h-16 flex items-center justify-between px-5 border-b border-slate-100">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center text-white">
            <i data-lucide="activity" class="w-4 h-4"></i>
          </div>
          <span class="text-sm font-bold text-slate-900">Admin Panel</span>
        </div>
        <button onclick="closeMobileMenu()" class="p-2 text-slate-400 hover:bg-slate-100 rounded-lg">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>
      <nav class="p-4 space-y-1">
        <button onclick="navigateTo('dashboard'); closeMobileMenu();" class="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active === 'dashboard' ? 'bg-sky-50 text-sky-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}">
          <i data-lucide="layout-dashboard" class="w-5 h-5"></i>
          <span>Dashboard</span>
        </button>
        <button onclick="navigateTo('services'); closeMobileMenu();" class="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active === 'services' ? 'bg-sky-50 text-sky-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}">
          <i data-lucide="heart-pulse" class="w-5 h-5"></i>
          <span>Layanan</span>
        </button>
        <button onclick="navigateTo('registrations'); closeMobileMenu();" class="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active === 'registrations' ? 'bg-sky-50 text-sky-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}">
          <i data-lucide="users" class="w-5 h-5"></i>
          <span>Pendaftaran</span>
        </button>
        <button onclick="navigateTo('profile'); closeMobileMenu();" class="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active === 'profile' ? 'bg-sky-50 text-sky-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}">
          <i data-lucide="user-circle-2" class="w-5 h-5"></i>
          <span>Profil Admin</span>
        </button>
        <div class="pt-4 mt-4 border-t border-slate-100">
          <button onclick="logout()" class="group w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-rose-500 transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-rose-500 text-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-rose-300 group-hover:scale-105 transition-all duration-300">
              <i data-lucide="log-out" class="w-5 h-5"></i>
            </div>
            <span class="text-sm font-semibold text-slate-700 group-hover:text-white transition-colors">Logout</span>
          </button>
        </div>
      </nav>
    </aside>
  `;
}

// Render Admin Dashboard
function renderAdminDashboard() {
  const totalServices = servicesData.length;
  const totalMedicines = medicineStock.length;
  const totalRegs = registrations.length;
  const todayRegs = registrations.filter(r => r.visitDate === new Date().toISOString().slice(0,10)).length;
  const chartHeights = [35, 45, 60, 40, 70, 55];
  const chartColors = [
    'from-sky-300 to-sky-200',
    'from-sky-400 to-sky-300',
    'from-sky-500 to-sky-400',
    'from-blue-400 to-sky-400',
    'from-blue-500 to-blue-400',
    'from-indigo-400 to-blue-400'
  ];
  const todayLabel = new Date().toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const adminName = currentUser?.name || 'Admin';
  
  return `
    <section class="bg-[#f5f7fb] min-h-screen w-full overflow-x-hidden">
      <div class="flex h-screen overflow-hidden w-full">
        ${renderAdminSidebar('dashboard')}
        <main class="flex-1 flex flex-col md:ml-64 pt-14 md:pt-0 overflow-y-auto overflow-x-hidden min-w-0 relative">
          <!-- Top Bar -->
          <div class="sticky top-0 z-30 px-4 sm:px-8 lg:px-10 py-4 flex items-center justify-between bg-white/95 backdrop-blur-xl border-b border-slate-100">
            <div>
              <h1 class="text-lg font-bold text-slate-900">Dashboard</h1>
              <p class="text-xs text-slate-400">Ringkasan klinik hari ini</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                <i data-lucide="calendar" class="w-4 h-4"></i>
                <span>${todayLabel}</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-50 border border-slate-200">
                <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-400 text-white flex items-center justify-center text-xs font-bold">
                  ${adminName.charAt(0).toUpperCase()}
                </div>
                <span class="text-sm font-medium text-slate-700 hidden sm:block">${adminName}</span>
              </div>
            </div>
          </div>

          <div class="px-4 sm:px-8 lg:px-10 py-6 space-y-6">
            <!-- Welcome Banner -->
            <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-sky-50/30 to-blue-50/50 border border-sky-100 shadow-lg shadow-sky-100/50">
              <!-- Decorative Elements -->
              <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-sky-200/40 to-blue-300/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
              <div class="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-200/30 to-indigo-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
              <div class="absolute top-1/2 right-1/4 w-32 h-32 bg-sky-300/20 rounded-full blur-2xl"></div>
              
              <!-- Grid Pattern Overlay -->
              <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 1px 1px, #0ea5e9 1px, transparent 0); background-size: 24px 24px;"></div>
              
              <div class="relative px-6 py-10 sm:px-12 sm:py-12">
                <div class="flex items-center justify-between gap-6">
                  <div class="space-y-4 flex-1">
                    <!-- Status Badge -->
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-sky-100">
                      <span class="relative flex h-2.5 w-2.5">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
                      </span>
                      <span class="text-xs font-semibold text-sky-600">Sistem Online</span>
                    </div>
                    
                    <!-- Title -->
                    <div class="space-y-2">
                      <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                        Selamat datang, <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">${adminName}</span>
                      </h2>
                      <p class="text-sm sm:text-base text-slate-500 max-w-lg leading-relaxed">Kelola layanan, stok obat, dan pendaftaran pasien dengan mudah dalam satu dashboard.</p>
                    </div>
                    
                    <!-- Quick Stats -->
                    <div class="flex items-center gap-4 pt-2">
                      <div class="flex items-center gap-2 text-xs text-slate-400">
                        <div class="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
                          <i data-lucide="calendar" class="w-4 h-4 text-sky-500"></i>
                        </div>
                        <span>${todayLabel}</span>
                      </div>
                      <div class="h-4 w-px bg-slate-200"></div>
                      <div class="flex items-center gap-2 text-xs text-slate-400">
                        <div class="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                          <i data-lucide="check-circle" class="w-4 h-4 text-emerald-500"></i>
                        </div>
                        <span>Semua sistem normal</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Decorative Icon Card -->
                  <div class="hidden lg:flex flex-col items-center gap-4">
                    <div class="relative">
                      <div class="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl blur-lg opacity-30 scale-110"></div>
                      <div class="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-xl shadow-sky-200">
                        <i data-lucide="activity" class="w-12 h-12 text-white"></i>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <div class="w-2 h-2 rounded-full bg-sky-400 animate-bounce"></div>
                      <div class="w-2 h-2 rounded-full bg-sky-400 animate-bounce" style="animation-delay: 0.1s"></div>
                      <div class="w-2 h-2 rounded-full bg-sky-400 animate-bounce" style="animation-delay: 0.2s"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stat Cards -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-all">
                    <i data-lucide="heart-pulse" class="w-6 h-6"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-2xl font-bold text-slate-900">${totalServices}</p>
                    <p class="text-xs text-slate-500">Layanan</p>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-medium">Aktif</span>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <i data-lucide="pill" class="w-6 h-6"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-2xl font-bold text-slate-900">${totalMedicines}</p>
                    <p class="text-xs text-slate-500">Obat</p>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-sky-50 text-sky-600 text-[10px] font-medium">Apotek</span>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all">
                    <i data-lucide="users" class="w-6 h-6"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-2xl font-bold text-slate-900">${totalRegs}</p>
                    <p class="text-xs text-slate-500">Pendaftaran</p>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 text-[10px] font-medium">Total</span>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-all">
                    <i data-lucide="calendar-check" class="w-6 h-6"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-2xl font-bold text-slate-900">${todayRegs}</p>
                    <p class="text-xs text-slate-500">Hari Ini</p>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 text-[10px] font-medium">Jadwal</span>
                </div>
              </div>
            </div>

            <!-- Charts Row -->
            <div class="grid lg:grid-cols-2 gap-6">
              <!-- Modern Area Chart -->
              <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <div class="flex items-center justify-between mb-6">
                  <div>
                    <h3 class="text-sm font-bold text-slate-900">Trafik Pendaftaran</h3>
                    <p class="text-xs text-slate-400 mt-0.5">Real-time trafik 6 bulan terakhir</p>
                  </div>
                  <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
                    <span class="relative flex h-2 w-2">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span class="text-[10px] font-semibold text-emerald-600">Live</span>
                  </div>
                </div>
                
                <!-- Modern Area Chart Container -->
                <div class="relative h-64">
                  <!-- Gradient Background -->
                  <div class="absolute inset-0 bg-gradient-to-br from-sky-50/30 via-transparent to-blue-50/20 rounded-xl"></div>
                  
                  <!-- Y-axis labels -->
                  <div class="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-[10px] text-slate-400 font-medium">
                    <span>100</span>
                    <span>75</span>
                    <span>50</span>
                    <span>25</span>
                    <span>0</span>
                  </div>
                  
                  <!-- Chart Area -->
                  <div class="ml-14 h-full flex flex-col">
                    <!-- Grid lines -->
                    <div class="flex-1 relative overflow-hidden">
                      <div class="absolute inset-0 flex flex-col justify-between">
                        <div class="border-t border-slate-100/60"></div>
                        <div class="border-t border-slate-100/60"></div>
                        <div class="border-t border-slate-100/60"></div>
                        <div class="border-t border-slate-100/60"></div>
                        <div class="border-t border-slate-100/60"></div>
                      </div>
                      
                      <!-- SVG Area Chart -->
                      <svg class="absolute inset-0 w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="skyAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.3"/>
                            <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0.05"/>
                          </linearGradient>
                          <linearGradient id="skyLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#0ea5e9"/>
                            <stop offset="100%" stop-color="#3b82f6"/>
                          </linearGradient>
                        </defs>
                        
                        ${(() => {
                          const maxValue = 100;
                          const chartWidth = 600;
                          const chartHeight = 300;
                          const padding = { top: 20, right: 0, bottom: 40, left: 0 };
                          const graphWidth = chartWidth - padding.left - padding.right;
                          const graphHeight = chartHeight - padding.top - padding.bottom;
                          
                          // Calculate points
                          const points = chartHeights.map((v, i) => {
                            const x = padding.left + (i / (chartHeights.length - 1)) * graphWidth;
                            const y = padding.top + (1 - (v * 1.5 / maxValue)) * graphHeight;
                            return { x, y, value: v * 1.5 };
                          });
                          
                          // Create smooth curve using catmull-rom spline
                          function createSmoothPath(points) {
                            if (points.length === 0) return '';
                            
                            let d = `M ${points[0].x},${points[0].y}`;
                            
                            for (let i = 0; i < points.length - 1; i++) {
                              const p0 = points[Math.max(0, i - 1)];
                              const p1 = points[i];
                              const p2 = points[i + 1];
                              const p3 = points[Math.min(points.length - 1, i + 2)];
                              
                              const cp1x = p1.x + (p2.x - p0.x) / 6;
                              const cp1y = p1.y + (p2.y - p0.y) / 6;
                              const cp2x = p2.x - (p3.x - p1.x) / 6;
                              const cp2y = p2.y - (p3.y - p1.y) / 6;
                              
                              d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
                            }
                            
                            return d;
                          }
                          
                          const linePath = createSmoothPath(points);
                          const areaPath = `${linePath} L ${points[points.length - 1].x},${chartHeight - padding.bottom} L ${padding.left},${chartHeight - padding.bottom} Z`;
                          
                          return `
                            <!-- Area Fill -->
                            <path d="${areaPath}" fill="url(#skyAreaGradient)" />
                            
                            <!-- Smooth Line -->
                            <path d="${linePath}" fill="none" stroke="url(#skyLineGradient)" stroke-width="3" stroke-linecap="round" />
                            
                            <!-- Data Points -->
                            ${points.map((p, i) => `
                              <g class="group cursor-pointer">
                                <circle cx="${p.x}" cy="${p.y}" r="6" fill="#0ea5e9" stroke="#ffffff" stroke-width="2" class="transition-all duration-300 group-hover:r-8" />
                                <text x="${p.x}" y="${p.y - 12}" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a" class="opacity-0 group-hover:opacity-100 transition-opacity">${Math.round(p.value)}</text>
                              </g>
                            `).join('')}
                          `;
                        })()}
                      </svg>
                      
                      <!-- X-axis labels -->
                      <div class="absolute bottom-0 left-0 right-0 flex justify-around px-3 text-[10px] text-slate-500 font-medium">
                        ${['Jan','Feb','Mar','Apr','Mei','Jun'].map((m, i) => `
                          <span>${m}</span>
                        `).join('')}
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Footer Stats -->
                <div class="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px]">
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 rounded-full bg-gradient-to-br from-sky-400 to-blue-500"></div>
                    <span class="text-slate-500">Total: <strong class="text-slate-700">${chartHeights.reduce((a,b) => a+b, 0) * 1.5} pasien</strong></span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-slate-400">Rata-rata:</span>
                    <span class="font-bold text-slate-700">${Math.round(chartHeights.reduce((a,b) => a+b, 0) / chartHeights.length * 1.5)}/bulan</span>
                  </div>
                </div>
              </div>

              <!-- Service Distribution Chart -->
              <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <div class="flex items-center justify-between mb-6">
                  <div>
                    <h3 class="text-sm font-bold text-slate-900">Distribusi Layanan</h3>
                    <p class="text-xs text-slate-400 mt-0.5">Pendaftaran per layanan hari ini</p>
                  </div>
                </div>
                
                <!-- Donut Chart -->
                <div class="flex items-center justify-center gap-8">
                  <div class="relative w-32 h-32">
                    <svg class="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <!-- Background circle -->
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#f1f5f9" stroke-width="12"/>
                      <!-- Data segments -->
                      <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gradient1)" stroke-width="12" 
                        stroke-dasharray="${todayRegs > 0 ? 60 : 0} 251" stroke-dashoffset="0" stroke-linecap="round"/>
                      <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gradient2)" stroke-width="12" 
                        stroke-dasharray="${todayRegs > 0 ? 40 : 0} 251" stroke-dashoffset="${todayRegs > 0 ? -60 : 0}" stroke-linecap="round"/>
                      <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gradient3)" stroke-width="12" 
                        stroke-dasharray="${todayRegs > 0 ? 30 : 0} 251" stroke-dashoffset="${todayRegs > 0 ? -100 : 0}" stroke-linecap="round"/>
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stop-color="#38bdf8"/>
                          <stop offset="100%" stop-color="#3b82f6"/>
                        </linearGradient>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stop-color="#34d399"/>
                          <stop offset="100%" stop-color="#10b981"/>
                        </linearGradient>
                        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stop-color="#fbbf24"/>
                          <stop offset="100%" stop-color="#f59e0b"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <!-- Center text -->
                    <div class="absolute inset-0 flex flex-col items-center justify-center">
                      <span class="text-2xl font-bold text-slate-800">${todayRegs}</span>
                      <span class="text-[10px] text-slate-400">Hari Ini</span>
                    </div>
                  </div>
                  
                  <!-- Legend -->
                  <div class="space-y-3">
                    <div class="flex items-center gap-2">
                      <div class="w-3 h-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-500"></div>
                      <span class="text-xs text-slate-600">Pemeriksaan Umum</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"></div>
                      <span class="text-xs text-slate-600">Kesehatan Gigi</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
                      <span class="text-xs text-slate-600">Pelayanan KIA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Services & Recent Activity Row -->
            <div class="grid lg:grid-cols-3 gap-6">
              <!-- Services Card -->
              <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <div class="flex items-center justify-between mb-5">
                  <div>
                    <h3 class="text-sm font-bold text-slate-900">Layanan</h3>
                    <p class="text-xs text-slate-400 mt-0.5">Layanan tersedia</p>
                  </div>
                  <button onclick="navigateTo('services')" class="p-2 rounded-lg bg-slate-50 text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition-all">
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                  </button>
                </div>
                <div class="space-y-3">
                  ${servicesData.slice(0,4).map(s => `
                    <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-sky-50 transition-colors cursor-pointer" onclick="navigateTo('services')">
                      <div class="w-10 h-10 rounded-lg bg-white text-sky-500 flex items-center justify-center shadow-sm">
                        <i data-lucide="${s.icon || 'heart-pulse'}" class="w-5 h-5"></i>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-semibold text-slate-800 truncate">${s.name}</p>
                        <p class="text-[10px] text-slate-400">${s.schedule}</p>
                      </div>
                      <i data-lucide="chevron-right" class="w-4 h-4 text-slate-300"></i>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Recent Activity Card -->
              <div class="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <div class="flex items-center justify-between mb-5">
                  <div>
                    <h3 class="text-sm font-bold text-slate-900">Aktivitas Terbaru</h3>
                    <p class="text-xs text-slate-400 mt-0.5">Pendaftaran pasien terakhir</p>
                  </div>
                  <button onclick="navigateTo('registrations')" class="text-xs text-sky-500 font-medium hover:underline">Lihat Semua</button>
                </div>
                <div class="space-y-3">
                  ${registrations.slice(0,5).map((reg, idx) => `
                    <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                      <div class="w-10 h-10 rounded-lg ${idx % 2 === 0 ? 'bg-sky-100 text-sky-500' : 'bg-emerald-100 text-emerald-500'} flex items-center justify-center shrink-0">
                        <i data-lucide="user" class="w-5 h-5"></i>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-semibold text-slate-800 truncate">${reg.name}</p>
                        <p class="text-[10px] text-slate-400">${reg.service} • ${reg.visitDate}</p>
                      </div>
                      <span class="px-2 py-1 rounded-full text-[10px] font-medium ${reg.status === 'Selesai' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}">${reg.status}</span>
                    </div>
                  `).join('') || `
                    <div class="text-center py-8 text-slate-400">
                      <i data-lucide="inbox" class="w-12 h-12 mx-auto mb-3 opacity-50"></i>
                      <p class="text-sm">Belum ada pendaftaran</p>
                    </div>
                  `}
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button onclick="navigateTo('services')" class="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-sky-200 transition-all text-left group">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 text-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                  <i data-lucide="heart-pulse" class="w-7 h-7"></i>
                </div>
                <span class="text-base font-bold text-slate-800">Layanan</span>
              </button>
              
              <button onclick="navigateTo('registrations')" class="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-amber-200 transition-all text-left group">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                  <i data-lucide="users" class="w-7 h-7"></i>
                </div>
                <span class="text-base font-bold text-slate-800">Pendaftaran</span>
              </button>
              
              <button onclick="navigateTo('profile')" class="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all text-left group">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                  <i data-lucide="user-circle" class="w-7 h-7"></i>
                </div>
                <span class="text-base font-bold text-slate-800">Profil</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </section>
  `;
}

// Render Admin Services
function renderAdminServices() {
  const todayLabel = new Date().toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const adminName = currentUser?.name || 'Admin';
  const totalServices = servicesData.length;
  
  return `
    <section class="bg-[#f5f7fb] min-h-screen w-full overflow-x-hidden">
      <div class="flex h-screen overflow-hidden w-full">
        ${renderAdminSidebar('services')}
        <main class="flex-1 flex flex-col md:ml-64 pt-14 md:pt-0 overflow-y-auto overflow-x-hidden min-w-0 relative">
          <!-- Top Bar -->
          <div class="sticky top-0 z-30 px-4 sm:px-8 lg:px-10 py-4 flex items-center justify-between bg-white/95 backdrop-blur-xl border-b border-slate-100">
            <div>
              <h1 class="text-lg font-bold text-slate-900">Layanan</h1>
              <p class="text-xs text-slate-400">Pengaturan daftar layanan</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                <i data-lucide="calendar" class="w-4 h-4"></i>
                <span>${todayLabel}</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-50 border border-slate-200">
                <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-400 text-white flex items-center justify-center text-xs font-bold">
                  ${adminName.charAt(0).toUpperCase()}
                </div>
                <span class="text-sm font-medium text-slate-700 hidden sm:block">${adminName}</span>
              </div>
            </div>
          </div>
          <div class="px-4 sm:px-8 lg:px-10 py-6 space-y-6">
            <!-- Hero Banner -->
            <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-sky-50/30 to-blue-50/50 border border-sky-100 shadow-lg shadow-sky-100/50">
              <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-sky-200/40 to-blue-300/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
              <div class="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-200/30 to-indigo-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
              <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 1px 1px, #0ea5e9 1px, transparent 0); background-size: 24px 24px;"></div>
              <div class="relative px-6 py-10 sm:px-12 sm:py-12">
                <div class="flex items-center justify-between gap-6">
                  <div class="space-y-4 flex-1">
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-sky-100">
                      <div class="w-2.5 h-2.5 rounded-full bg-sky-500"></div>
                      <span class="text-xs font-semibold text-sky-600">${totalServices} Layanan Aktif</span>
                    </div>
                    <div class="space-y-2">
                      <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                        Kelola <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Layanan</span>
                      </h2>
                      <p class="text-sm sm:text-base text-slate-500 max-w-lg leading-relaxed">Tambah, sesuaikan, dan rapikan daftar layanan yang akan terlihat oleh pasien di halaman utama.</p>
                    </div>
                  </div>
                  <div class="hidden lg:flex flex-col items-center gap-4">
                    <div class="relative">
                      <div class="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl blur-lg opacity-30 scale-110"></div>
                      <div class="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-xl shadow-sky-200">
                        <i data-lucide="heart-pulse" class="w-12 h-12 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stats Row -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center">
                    <i data-lucide="heart-pulse" class="w-6 h-6"></i>
                  </div>
                  <div>
                    <p class="text-2xl font-bold text-slate-900">${totalServices}</p>
                    <p class="text-xs text-slate-500">Total Layanan</p>
                  </div>
                </div>
              </div>
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
                    <i data-lucide="check-circle" class="w-6 h-6"></i>
                  </div>
                  <div>
                    <p class="text-2xl font-bold text-slate-900">${totalServices}</p>
                    <p class="text-xs text-slate-500">Aktif</p>
                  </div>
                </div>
              </div>
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
                    <i data-lucide="star" class="w-6 h-6"></i>
                  </div>
                  <div>
                    <p class="text-2xl font-bold text-slate-900">${servicesData.filter(s => s.id && !s.id.startsWith('adm-')).length}</p>
                    <p class="text-xs text-slate-500">Default</p>
                  </div>
                </div>
              </div>
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center">
                    <i data-lucide="plus-circle" class="w-6 h-6"></i>
                  </div>
                  <div>
                    <p class="text-2xl font-bold text-slate-900">${servicesData.filter(s => s.id && s.id.startsWith('adm-')).length}</p>
                    <p class="text-xs text-slate-500">Tambahan</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid lg:grid-cols-3 gap-6">
              <!-- Services List Card -->
              <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden lg:col-span-2">
                <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 class="text-sm font-bold text-slate-900">Daftar Layanan</h3>
                    <p class="text-xs text-slate-400 mt-0.5">Kelola layanan klinik</p>
                  </div>
                  <button onclick="navigateTo('services')" class="p-2 rounded-lg bg-slate-50 text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition-all">
                    <i data-lucide="refresh-cw" class="w-4 h-4"></i>
                  </button>
                </div>
                <div class="divide-y divide-slate-50">
                  ${servicesData.length === 0 ? `
                    <div class="px-6 py-10 text-center text-slate-300 text-sm italic">Belum ada layanan terdaftar.</div>
                  ` : servicesData.map((s, idx) => `
                    <div class="p-4 hover:bg-slate-50/70 transition-colors group">
                      <div class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          idx % 4 === 0 ? 'bg-sky-50 text-sky-500' : idx % 4 === 1 ? 'bg-indigo-50 text-indigo-500' : idx % 4 === 2 ? 'bg-emerald-50 text-emerald-500' : 'bg-amber-50 text-amber-500'
                        }">
                          <i data-lucide="${s.icon || 'heart-pulse'}" class="w-6 h-6"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                          <div class="flex items-start justify-between gap-2">
                            <div>
                              <h4 class="text-sm font-bold text-slate-900">${s.name}</h4>
                              <p class="text-xs text-slate-500 mt-0.5 line-clamp-2">${s.desc || 'Tidak ada deskripsi'}</p>
                              <div class="flex flex-wrap items-center gap-3 mt-2">
                                ${s.schedule ? `<span class="text-[10px] text-slate-400 flex items-center gap-1"><i data-lucide="clock" class="w-3 h-3"></i> ${s.schedule}</span>` : ''}
                                ${s.doctor ? `<span class="text-[10px] text-slate-400 flex items-center gap-1"><i data-lucide="user-md" class="w-3 h-3"></i> ${s.doctor}</span>` : ''}
                              </div>
                            </div>
                            <div class="flex items-center gap-2">
                              <button onclick="editService(${idx})" class="p-2 rounded-lg text-slate-300 hover:text-sky-500 hover:bg-sky-50 transition-all opacity-0 group-hover:opacity-100" title="Edit layanan">
                                <i data-lucide="edit-2" class="w-4 h-4"></i>
                              </button>
                              <button class="p-2 rounded-lg text-slate-300 hover:text-rose-500 hover:bg-rose-50 transition-all opacity-0 group-hover:opacity-100" data-admin-service-delete="${s.id}" title="Hapus layanan">
                                <i data-lucide="trash-2" class="w-4 h-4"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Right Column: Add Service & Quick Info -->
              <div class="space-y-6">
                <!-- Add New Service Card -->
                <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <div class="flex items-center gap-3 mb-5">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
                      <i data-lucide="plus" class="w-5 h-5 text-white"></i>
                    </div>
                    <div>
                      <h3 class="text-sm font-bold text-slate-900">Tambah Layanan</h3>
                      <p class="text-xs text-slate-400">Input layanan baru</p>
                    </div>
                  </div>
                  <form id="adminServiceForm" class="space-y-4">
                    <div>
                      <label class="block text-xs font-semibold text-slate-700 mb-2">Nama Layanan</label>
                      <div class="relative">
                        <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <i data-lucide="heart-pulse" class="w-4 h-4"></i>
                        </div>
                        <input id="admin-service-name" name="name" required class="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" placeholder="Contoh: Konsultasi Umum" />
                      </div>
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-slate-700 mb-2">Deskripsi</label>
                      <div class="relative">
                        <div class="absolute left-4 top-3 text-slate-400">
                          <i data-lucide="file-text" class="w-4 h-4"></i>
                        </div>
                        <textarea name="desc" rows="3" class="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all resize-none" placeholder="Jelaskan layanan ini..."></textarea>
                      </div>
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-slate-700 mb-2">Jadwal (Opsional)</label>
                      <div class="relative">
                        <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <i data-lucide="clock" class="w-4 h-4"></i>
                        </div>
                        <input name="schedule" class="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" placeholder="Contoh: Senin - Jumat (08:00 - 16:00)" />
                      </div>
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-slate-700 mb-2">Dokter/Penanggung Jawab</label>
                      <div class="relative">
                        <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <i data-lucide="user-md" class="w-4 h-4"></i>
                        </div>
                        <input name="doctor" class="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" placeholder="Contoh: Dr. Budi Santoso" />
                      </div>
                    </div>
                    <button type="submit" class="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-400 text-white text-sm font-semibold hover:bg-amber-500 transition-all shadow-sm shadow-amber-100 hover:shadow-md hover:shadow-amber-200">
                      <i data-lucide="save" class="w-4 h-4"></i>
                      <span>Simpan Layanan</span>
                    </button>
                  </form>
                </div>

                <!-- Info Card -->
                <div class="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl border border-sky-100 p-6">
                  <div class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0">
                      <i data-lucide="info" class="w-5 h-5 text-sky-500"></i>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-slate-800 mb-1">Tips Pengelolaan</h4>
                      <ul class="text-xs text-slate-600 space-y-1.5">
                        <li class="flex items-start gap-1.5">
                          <i data-lucide="check" class="w-3 h-3 text-emerald-500 mt-0.5 shrink-0"></i>
                          <span>Berikan deskripsi yang jelas</span>
                        </li>
                        <li class="flex items-start gap-1.5">
                          <i data-lucide="check" class="w-3 h-3 text-emerald-500 mt-0.5 shrink-0"></i>
                          <span>Tentukan jadwal operasional</span>
                        </li>
                        <li class="flex items-start gap-1.5">
                          <i data-lucide="check" class="w-3 h-3 text-emerald-500 mt-0.5 shrink-0"></i>
                          <span>Hapus layanan yang tidak aktif</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  `;
}

// Render Admin Medicines
function renderAdminMedicines() {
  const todayLabel = new Date().toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const adminName = currentUser?.name || 'Admin';
  const totalItems = medicineStock.length;
  const totalAvailable = medicineStock.filter(m => m.status === 'Tersedia').length;
  
  return `
    <section class="bg-[#f5f7fb] min-h-screen w-full overflow-x-hidden">
      <div class="flex h-screen overflow-hidden w-full">
        ${renderAdminSidebar('medicines')}
        <main class="flex-1 flex flex-col md:ml-64 pt-14 md:pt-0 overflow-y-auto overflow-x-hidden min-w-0 relative">
          <!-- Top Bar -->
          <div class="sticky top-0 z-30 px-4 sm:px-8 lg:px-10 py-4 flex items-center justify-between bg-white/95 backdrop-blur-xl border-b border-slate-100">
            <div>
              <h1 class="text-lg font-bold text-slate-900">Stok Obat</h1>
              <p class="text-xs text-slate-400">Monitoring inventory apotek</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                <i data-lucide="calendar" class="w-4 h-4"></i>
                <span>${todayLabel}</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-50 border border-slate-200">
                <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-400 text-white flex items-center justify-center text-xs font-bold">
                  ${adminName.charAt(0).toUpperCase()}
                </div>
                <span class="text-sm font-medium text-slate-700 hidden sm:block">${adminName}</span>
              </div>
            </div>
          </div>
          <div class="px-4 sm:px-8 lg:px-10 py-6 space-y-6">
            <!-- Hero Banner -->
            <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-sky-50/30 to-blue-50/50 border border-sky-100 shadow-lg shadow-sky-100/50">
              <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-sky-200/40 to-blue-300/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
              <div class="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-200/30 to-indigo-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
              <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 1px 1px, #0ea5e9 1px, transparent 0); background-size: 24px 24px;"></div>
              <div class="relative px-6 py-10 sm:px-12 sm:py-12">
                <div class="flex items-center justify-between gap-6">
                  <div class="space-y-4 flex-1">
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-sky-100">
                      <div class="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                      <span class="text-xs font-semibold text-emerald-600">${totalAvailable} Obat Tersedia</span>
                    </div>
                    <div class="space-y-2">
                      <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                        Stok <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Obat</span>
                      </h2>
                      <p class="text-sm sm:text-base text-slate-500 max-w-lg leading-relaxed">Pantau dan ubah status ketersediaan obat agar pelayanan resep tetap lancar.</p>
                    </div>
                  </div>
                  <div class="hidden lg:flex flex-col items-center gap-4">
                    <div class="relative">
                      <div class="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl blur-lg opacity-30 scale-110"></div>
                      <div class="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-xl shadow-sky-200">
                        <i data-lucide="pill" class="w-12 h-12 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between text-[11px] text-slate-500">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                <span class="font-semibold text-slate-700">Item obat: ${totalItems}</span>
              </div>
              <div class="hidden sm:flex items-center gap-2">
                <span class="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Tersedia: ${totalAvailable}</span>
                </span>
              </div>
            </div>

            <!-- Stats Row -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center">
                    <i data-lucide="pill" class="w-6 h-6"></i>
                  </div>
                  <div>
                    <p class="text-2xl font-bold text-slate-900">${totalItems}</p>
                    <p class="text-xs text-slate-500">Total Obat</p>
                  </div>
                </div>
              </div>
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
                    <i data-lucide="check-circle" class="w-6 h-6"></i>
                  </div>
                  <div>
                    <p class="text-2xl font-bold text-slate-900">${totalAvailable}</p>
                    <p class="text-xs text-slate-500">Tersedia</p>
                  </div>
                </div>
              </div>
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
                    <i data-lucide="x-circle" class="w-6 h-6"></i>
                  </div>
                  <div>
                    <p class="text-2xl font-bold text-slate-900">${totalItems - totalAvailable}</p>
                    <p class="text-xs text-slate-500">Habis</p>
                  </div>
                </div>
              </div>
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
                    <i data-lucide="trending-down" class="w-6 h-6"></i>
                  </div>
                  <div>
                    <p class="text-2xl font-bold text-slate-900">${(load('medicineOutflow', []) || []).length}</p>
                    <p class="text-xs text-slate-500">Keluar Hari Ini</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid lg:grid-cols-3 gap-6">
              <!-- Medicine Stock Table -->
              <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden lg:col-span-2">
                <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 class="text-sm font-bold text-slate-900">Daftar Obat</h3>
                    <p class="text-xs text-slate-400 mt-0.5">Kelola stok dan status ketersediaan</p>
                  </div>
                  <button onclick="navigateTo('medicines')" class="p-2 rounded-lg bg-slate-50 text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition-all">
                    <i data-lucide="refresh-cw" class="w-4 h-4"></i>
                  </button>
                </div>
                <div class="overflow-x-auto">
                  <table class="w-full text-left text-sm">
                    <thead>
                      <tr class="bg-slate-50/60 border-b border-slate-100 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                        <th class="px-6 py-3">Obat</th>
                        <th class="px-6 py-3 text-right">Dosis</th>
                        <th class="px-6 py-3 text-right">Stok</th>
                        <th class="px-6 py-3 text-right">Status</th>
                        <th class="px-6 py-3 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${medicineStock.length === 0 ? `
                        <tr>
                          <td colspan="5" class="px-6 py-10 text-center text-slate-300 text-sm italic">Belum ada data obat tersimpan.</td>
                        </tr>
                      ` : medicineStock.map((med, idx) => `
                        <tr class="border-b border-slate-50 hover:bg-slate-50/70 transition-colors">
                          <td class="px-6 py-4">
                            <div class="flex items-center gap-3">
                              <div class="w-10 h-10 rounded-xl flex items-center justify-center ${
                                idx % 3 === 0 ? 'bg-sky-50 text-sky-500' : idx % 3 === 1 ? 'bg-indigo-50 text-indigo-500' : 'bg-emerald-50 text-emerald-500'
                              }">
                                <i data-lucide="pill" class="w-5 h-5"></i>
                              </div>
                              <div>
                                <p class="text-sm font-semibold text-slate-800">${med.name}</p>
                                <p class="text-xs text-slate-400">${med.dosis || '-'}</p>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 text-right text-sm text-slate-600">${med.dosis || '-'}</td>
                          <td class="px-6 py-4 text-right">
                            <span class="text-sm font-semibold text-slate-800">${med.qty != null ? med.qty : '-'}</span>
                            <span class="text-xs text-slate-400">pcs</span>
                          </td>
                          <td class="px-6 py-4 text-right">
                            <button onclick="toggleMedStatus(${idx})" class="text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${med.status === 'Tersedia' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-rose-50 text-rose-600 border border-rose-100'}">
                              ${med.status}
                            </button>
                          </td>
                          <td class="px-6 py-4 text-right space-x-1">
                            <button class="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 text-slate-500 hover:border-sky-500 hover:text-sky-600 transition-all" data-med-edit="${idx}" title="Edit stok">
                              <i data-lucide="pencil" class="w-4 h-4"></i>
                            </button>
                            <button class="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 text-slate-400 hover:border-rose-500 hover:text-rose-600 transition-all" data-med-delete="${idx}" title="Hapus obat">
                              <i data-lucide="trash-2" class="w-4 h-4"></i>
                            </button>
                          </td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Right Column: Add Medicine & Outflow -->
              <div class="space-y-6">
                <!-- Add New Medicine Card -->
                <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <div class="flex items-center gap-3 mb-5">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
                      <i data-lucide="plus" class="w-5 h-5 text-white"></i>
                    </div>
                    <div>
                      <h3 class="text-sm font-bold text-slate-900">Tambah Obat Baru</h3>
                      <p class="text-xs text-slate-400">Input data obat baru</p>
                    </div>
                  </div>
                  <form id="adminMedForm" class="space-y-4">
                    <div>
                      <label class="block text-xs font-semibold text-slate-700 mb-2">Nama Obat</label>
                      <div class="relative">
                        <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <i data-lucide="pill" class="w-4 h-4"></i>
                        </div>
                        <input name="name" required class="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" placeholder="Contoh: Paracetamol" />
                      </div>
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-slate-700 mb-2">Dosis</label>
                      <div class="relative">
                        <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <i data-lucide="gauge" class="w-4 h-4"></i>
                        </div>
                        <input name="dosis" required class="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" placeholder="Contoh: 500mg" />
                      </div>
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-slate-700 mb-2">Jumlah Stok</label>
                      <div class="relative">
                        <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <i data-lucide="package" class="w-4 h-4"></i>
                        </div>
                        <input name="qty" type="number" min="0" required class="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" placeholder="Contoh: 100" />
                      </div>
                    </div>
                    <button type="submit" class="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all">
                      <i data-lucide="save" class="w-4 h-4"></i>
                      <span>Simpan Obat</span>
                    </button>
                  </form>
                </div>

                <!-- Daily Outflow Card -->
                <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <div class="flex items-center justify-between mb-5">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                        <i data-lucide="arrow-up-right" class="w-5 h-5 text-amber-500"></i>
                      </div>
                      <div>
                        <h3 class="text-sm font-bold text-slate-900">Pengeluaran Obat</h3>
                        <p class="text-xs text-slate-400">Hari ini: ${todayLabel}</p>
                      </div>
                    </div>
                    <span class="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">${(load('medicineOutflow', []) || []).length} Transaksi</span>
                  </div>
                  
                  <!-- Outflow Form -->
                  <form id="medicineOutflowForm" onsubmit="handleMedicineOutflow(event)" class="space-y-3 mb-4">
                    <div>
                      <label class="block text-xs font-semibold text-slate-700 mb-1.5">Pilih Obat</label>
                      <select name="medId" required class="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all">
                        <option value="">Pilih obat...</option>
                        ${medicineStock.filter(m => m.status === 'Tersedia').map((med, idx) => `
                          <option value="${idx}">${med.name} ${med.dosis || ''} (Stok: ${med.qty || 0})</option>
                        `).join('')}
                      </select>
                    </div>
                    <div class="flex gap-3">
                      <div class="flex-1">
                        <label class="block text-xs font-semibold text-slate-700 mb-1.5">Jumlah</label>
                        <input name="amount" type="number" min="1" required class="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" placeholder="Jumlah" />
                      </div>
                      <div class="flex-1">
                        <label class="block text-xs font-semibold text-slate-700 mb-1.5">Untuk</label>
                        <input name="patient" type="text" class="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" placeholder="Nama pasien (opsional)" />
                      </div>
                    </div>
                    <button type="submit" class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 transition-all">
                      <i data-lucide="arrow-up-circle" class="w-4 h-4"></i>
                      <span>Catat Pengeluaran</span>
                    </button>
                  </form>

                  <!-- Outflow List -->
                  <div class="border-t border-slate-100 pt-4">
                    <p class="text-xs font-semibold text-slate-500 mb-3">Riwayat Hari Ini</p>
                    <div class="space-y-2 max-h-48 overflow-y-auto">
                      ${(() => {
                        const outflows = load('medicineOutflow', []) || [];
                        const today = new Date().toISOString().slice(0,10);
                        const todayOutflows = outflows.filter(o => o.date === today);
                        if (todayOutflows.length === 0) {
                          return '<p class="text-xs text-slate-400 text-center py-4">Belum ada pengeluaran hari ini</p>';
                        }
                        return todayOutflows.slice().reverse().map(o => `
                          <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                            <div class="flex items-center gap-2">
                              <div class="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                                <i data-lucide="arrow-up" class="w-4 h-4 text-amber-500"></i>
                              </div>
                              <div>
                                <p class="text-xs font-semibold text-slate-800">${o.medicineName}</p>
                                <p class="text-[10px] text-slate-400">${o.time} ${o.patient ? '• ' + o.patient : ''}</p>
                              </div>
                            </div>
                            <span class="text-xs font-bold text-amber-600">-${o.amount}</span>
                          </div>
                        `).join('');
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  `;
}

// Render Admin Registrations
function renderAdminRegistrations() {
  const todayLabel = new Date().toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const adminName = currentUser?.name || 'Admin';
  const totalRegs = registrations.length;
  const finishedRegs = registrations.filter(r => r.status === 'Selesai').length;
  const waitingRegs = totalRegs - finishedRegs;
  
  // Initialize filtered registrations with all data
  if (filteredRegistrations.length === 0) {
    filteredRegistrations = [...registrations];
  }
  
  return `
    <section class="bg-[#f5f7fb] min-h-screen w-full overflow-x-hidden">
      <div class="flex h-screen overflow-hidden w-full">
        ${renderAdminSidebar('registrations')}
        <main class="flex-1 flex flex-col md:ml-64 pt-14 md:pt-0 overflow-y-auto overflow-x-hidden min-w-0 relative">
          <!-- Top Bar -->
          <div class="sticky top-0 z-30 px-4 sm:px-8 lg:px-10 py-4 flex items-center justify-between bg-white/95 backdrop-blur-xl border-b border-slate-100">
            <div>
              <h1 class="text-lg font-bold text-slate-900">Pendaftaran</h1>
              <p class="text-xs text-slate-400">Administrasi antrian pasien</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                <i data-lucide="calendar" class="w-4 h-4"></i>
                <span>${todayLabel}</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-50 border border-slate-200">
                <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-400 text-white flex items-center justify-center text-xs font-bold">
                  ${adminName.charAt(0).toUpperCase()}
                </div>
                <span class="text-sm font-medium text-slate-700 hidden sm:block">${adminName}</span>
              </div>
            </div>
          </div>
          <div class="px-4 sm:px-8 lg:px-10 py-6 space-y-6">
            <!-- Hero Banner -->
            <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-sky-50/30 to-blue-50/50 border border-sky-100 shadow-lg shadow-sky-100/50">
              <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-sky-200/40 to-blue-300/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
              <div class="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-200/30 to-indigo-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
              <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 1px 1px, #0ea5e9 1px, transparent 0); background-size: 24px 24px;"></div>
              <div class="relative px-6 py-10 sm:px-12 sm:py-12">
                <div class="flex items-center justify-between gap-6">
                  <div class="space-y-4 flex-1">
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-sky-100">
                      <div class="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                      <span class="text-xs font-semibold text-amber-600">${waitingRegs} Menunggu</span>
                    </div>
                    <div class="space-y-2">
                      <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Pendaftaran</span> Pasien
                      </h2>
                      <p class="text-sm sm:text-base text-slate-500 max-w-lg leading-relaxed">Kelola data pendaftaran dan input pasien baru langsung dari loket administrasi.</p>
                    </div>
                  </div>
                  <div class="hidden lg:flex flex-col items-center gap-4">
                    <div class="relative">
                      <div class="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl blur-lg opacity-30 scale-110"></div>
                      <div class="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-xl shadow-sky-200">
                        <i data-lucide="users" class="w-12 h-12 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between text-[11px] text-slate-500">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                <span class="font-semibold text-slate-700">Total pendaftaran: ${totalRegs}</span>
              </div>
              <div class="hidden sm:flex items-center gap-2">
                <span class="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>Menunggu: ${waitingRegs}</span>
                </span>
                <span class="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Selesai: ${finishedRegs}</span>
                </span>
              </div>
            </div>

            <!-- Stats Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-all">
                    <i data-lucide="users" class="w-6 h-6"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-2xl font-bold text-slate-900">${totalRegs}</p>
                    <p class="text-xs text-slate-500">Total Pendaftaran</p>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 text-[10px] font-medium">Semua Waktu</span>
                </div>
              </div>
              
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all">
                    <i data-lucide="clock" class="w-6 h-6"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-2xl font-bold text-slate-900">${waitingRegs}</p>
                    <p class="text-xs text-slate-500">Menunggu</p>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 text-[10px] font-medium">Belum Selesai</span>
                </div>
              </div>
              
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <i data-lucide="check-circle" class="w-6 h-6"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-2xl font-bold text-slate-900">${finishedRegs}</p>
                    <p class="text-xs text-slate-500">Selesai</p>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 text-[10px] font-medium">Terkelola</span>
                </div>
              </div>
            </div>

            <div class="grid lg:grid-cols-3 gap-6">
              <div class="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 class="text-sm font-bold text-slate-900">Data Pendaftaran</h3>
                    <p class="text-xs text-slate-400 mt-0.5">Daftar pasien terdaftar</p>
                  </div>
                  <div class="flex items-center gap-2">
                    <!-- Filter Dropdown -->
                    <select id="registrationFilter" onchange="filterRegistrations()" class="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500">
                      <option value="today">Hari Ini</option>
                      <option value="week">Minggu Ini</option>
                      <option value="month">Bulan Ini</option>
                      <option value="year">Tahun Ini</option>
                      <option value="all">Semua Data</option>
                    </select>
                    <button onclick="printRegistrationReport()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 text-sky-600 hover:bg-sky-100 transition-all text-xs font-semibold" title="Print Laporan Pendaftaran">
                      <i data-lucide="printer" class="w-3.5 h-3.5"></i>
                      <span class="hidden sm:inline">Print</span>
                    </button>
                    <button onclick="exportRegistrationToExcel()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-all text-xs font-semibold" title="Export to Excel">
                      <i data-lucide="file-spreadsheet" class="w-3.5 h-3.5"></i>
                      <span class="hidden sm:inline">Excel</span>
                    </button>
                  </div>
                </div>
                <div class="overflow-x-auto">
                  <table class="w-full text-left text-sm">
                    <thead>
                      <tr class="bg-slate-50/60 border-b border-slate-100 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                        <th class="px-6 py-3">Pasien</th>
                        <th class="px-6 py-3">Layanan</th>
                        <th class="px-6 py-3">Tanggal</th>
                        <th class="px-6 py-3">Status</th>
                        <th class="px-6 py-3 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${(filteredRegistrations.length === 0 ? registrations : filteredRegistrations).length === 0 ? `
                        <tr>
                          <td colspan="5" class="px-6 py-10 text-center text-slate-300 text-sm italic">Belum ada data pendaftaran masuk.</td>
                        </tr>
                      ` : (filteredRegistrations.length === 0 ? registrations : filteredRegistrations).map((reg, idx) => `
                        <tr class="border-b border-slate-50 hover:bg-slate-50/70 transition-colors">
                          <td class="px-6 py-4">
                            <p class="font-semibold text-slate-800">${reg.name}</p>
                            <p class="text-[11px] text-slate-400 font-semibold uppercase tracking-tight">${reg.gender} • ${reg.age}th</p>
                          </td>
                          <td class="px-6 py-4">
                            <p class="text-[13px] font-semibold text-slate-700">${reg.service}</p>
                          </td>
                          <td class="px-6 py-4 text-[13px] text-slate-500">${reg.visitDate}</td>
                          <td class="px-6 py-4">
                            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                              reg.status === 'Selesai' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                            }">${reg.status}</span>
                          </td>
                          <td class="px-6 py-4 text-right space-x-1">
                            <button onclick="printPatientSlip(${registrations.indexOf(reg)})" class="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 text-sky-500 hover:border-sky-500 hover:bg-sky-50 transition-all" title="Cetak Slip Pasien">
                              <i data-lucide="printer" class="w-3.5 h-3.5"></i>
                            </button>
                            <button onclick="completeRegistration(${registrations.indexOf(reg)})" class="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 text-emerald-500 hover:border-emerald-500 hover:bg-emerald-50 transition-all" title="Tandai selesai">
                              <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
                            </button>
                            <button onclick="deleteRegistration(${registrations.indexOf(reg)})" class="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 text-slate-400 hover:border-rose-500 hover:text-rose-600 transition-all" title="Hapus">
                              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                            </button>
                          </td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <div class="flex items-center gap-3 mb-5">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
                    <i data-lucide="plus" class="w-5 h-5 text-white"></i>
                  </div>
                  <div>
                    <h3 class="text-sm font-bold text-slate-900">Tambah Pendaftaran</h3>
                    <p class="text-xs text-slate-400">Input pasien baru</p>
                  </div>
                </div>
                <form id="adminRegForm" onsubmit="handleAdminRegister(event)" class="space-y-4">
                  <div class="space-y-2">
                    <label class="text-xs font-semibold text-slate-700">Nama Lengkap <span class="text-rose-500">*</span></label>
                    <div class="relative">
                      <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <i data-lucide="user" class="w-4 h-4"></i>
                      </div>
                      <input id="admin-reg-name" name="name" required class="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" placeholder="Nama pasien" />
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-3">
                    <div class="space-y-2">
                      <label class="text-xs font-semibold text-slate-700">NIK</label>
                      <div class="relative">
                        <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <i data-lucide="id-card" class="w-4 h-4"></i>
                        </div>
                        <input name="nik" maxlength="16" class="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" placeholder="16 digit" />
                      </div>
                    </div>
                    <div class="space-y-2">
                      <label class="text-xs font-semibold text-slate-700">Umur <span class="text-rose-500">*</span></label>
                      <div class="relative">
                        <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <i data-lucide="calendar" class="w-4 h-4"></i>
                        </div>
                        <input name="age" type="number" required class="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" placeholder="Tahun" />
                      </div>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <label class="text-xs font-semibold text-slate-700">Jenis Kelamin <span class="text-rose-500">*</span></label>
                    <div class="relative">
                      <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <i data-lucide="users" class="w-4 h-4"></i>
                      </div>
                      <select name="gender" id="adminGenderSelect" required class="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all appearance-none">
                        <option value="">Pilih</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <label class="text-xs font-semibold text-slate-700">No HP / WhatsApp <span class="text-rose-500">*</span></label>
                    <div class="relative">
                      <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <i data-lucide="phone" class="w-4 h-4"></i>
                      </div>
                      <input name="phone" type="tel" required class="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" placeholder="081234567890" />
                    </div>
                  </div>
                  <div class="space-y-2">
                    <label class="text-xs font-semibold text-slate-700">Alamat <span class="text-rose-500">*</span></label>
                    <div class="relative">
                      <div class="absolute left-4 top-3 text-slate-400">
                        <i data-lucide="home" class="w-4 h-4"></i>
                      </div>
                      <textarea name="address" rows="2" required class="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all resize-none" placeholder="Alamat lengkap"></textarea>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <label class="text-xs font-semibold text-slate-700">Pilih Layanan <span class="text-rose-500">*</span></label>
                    <div class="relative">
                      <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <i data-lucide="heart-pulse" class="w-4 h-4"></i>
                      </div>
                      <select name="service" id="adminServiceSelect" required onchange="toggleAdminComplaintField()" class="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all appearance-none">
                        ${servicesData.map(s => `<option value="${s.name}" data-id="${s.id}">${s.name}</option>`).join('')}
                      </select>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <label class="text-xs font-semibold text-slate-700">Tanggal Kunjungan <span class="text-rose-500">*</span></label>
                    <div class="relative">
                      <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <i data-lucide="calendar-days" class="w-4 h-4"></i>
                      </div>
                      <input name="visitDate" type="date" required class="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" />
                    </div>
                  </div>
                  <div id="adminComplaintField" class="space-y-2 hidden">
                    <label class="text-xs font-semibold text-slate-700">Keluhan <span class="text-rose-500">*</span></label>
                    <div class="relative">
                      <div class="absolute left-4 top-3 text-slate-400">
                        <i data-lucide="message-square" class="w-4 h-4"></i>
                      </div>
                      <textarea name="complaint" rows="3" class="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all resize-none" placeholder="Jelaskan keluhan pasien..."></textarea>
                    </div>
                  </div>
                  <button type="submit" class="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-400 text-white text-sm font-semibold hover:bg-amber-500 transition-all shadow-sm shadow-amber-100 hover:shadow-md hover:shadow-amber-200">
                    <i data-lucide="save" class="w-4 h-4"></i>
                    <span>Simpan Pendaftaran</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  `;
}

// Render Admin Profile
function renderAdminProfile() {
  const name = currentUser?.name || 'Administrasi Klinik';
  const email = currentUser?.email || 'admin@klinikpratama.local';
  const username = currentUser?.username || 'admin';
  const initial = name.charAt(0).toUpperCase();
  
  return `
    <section class="bg-[#f5f7fb] min-h-screen w-full overflow-x-hidden">
      <div class="flex h-screen overflow-hidden w-full">
        ${renderAdminSidebar('profile')}
        <main class="flex-1 flex flex-col md:ml-64 pt-14 md:pt-0 overflow-y-auto overflow-x-hidden min-w-0 relative">
          <!-- Top Bar -->
          <div class="sticky top-0 z-30 px-4 sm:px-8 lg:px-10 py-4 flex items-center justify-between bg-white/95 backdrop-blur-xl border-b border-slate-100">
            <div>
              <h1 class="text-lg font-bold text-slate-900">Profil Saya</h1>
              <p class="text-xs text-slate-400">Kelola informasi akun Anda</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                <i data-lucide="calendar" class="w-4 h-4"></i>
                <span>${new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-50 border border-slate-200">
                <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 text-white flex items-center justify-center text-xs font-bold">
                  ${initial}
                </div>
                <span class="text-sm font-medium text-slate-700 hidden sm:block">${name}</span>
              </div>
            </div>
          </div>

          <div class="px-4 sm:px-8 lg:px-10 py-8 space-y-6">
            <!-- Profile Header Card -->
            <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 shadow-xl shadow-sky-200/50">
              <!-- Decorative Elements -->
              <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div class="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
              <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 24px 24px;"></div>
              
              <div class="relative px-6 py-8 sm:px-10 sm:py-12">
                <div class="flex flex-col sm:flex-row items-center gap-6">
                  <!-- Avatar -->
                  <div class="relative">
                    <div class="absolute inset-0 bg-white/20 rounded-full blur-xl scale-110"></div>
                    <div class="relative w-28 h-28 rounded-full bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl flex items-center justify-center shadow-2xl border-4 border-white/30">
                      <div class="w-24 h-24 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-white text-4xl font-bold shadow-inner">
                        ${initial}
                      </div>
                    </div>
                    <div class="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-sky-400 border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <!-- Info -->
                  <div class="flex-1 text-center sm:text-left space-y-3">
                    <div>
                      <h2 class="text-3xl font-bold text-white mb-1">${name}</h2>
                      <p class="text-sm text-white/80 font-medium">Administrasi • Klinik Pratama</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                      <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                        <i data-lucide="mail" class="w-3.5 h-3.5 text-white"></i>
                        <span class="text-xs font-medium text-white">${email || '-'}</span>
                      </div>
                      <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                        <i data-lucide="shield" class="w-3.5 h-3.5 text-white"></i>
                        <span class="text-xs font-medium text-white">Administrasi</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Status Badge -->
                  <div class="hidden lg:flex flex-col items-center gap-2">
                    <div class="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                      <div class="flex items-center gap-2">
                        <span class="relative flex h-2.5 w-2.5">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                        </span>
                        <span class="text-xs font-semibold text-white">Active Now</span>
                      </div>
                    </div>
                    <div class="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                      <p class="text-xs font-semibold text-white">Member Since</p>
                      <p class="text-xs font-bold text-white">2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content Grid -->
            <div class="grid lg:grid-cols-3 gap-6">
              <!-- Left Column - Quick Info -->
              <div class="lg:col-span-1 space-y-6">
                <!-- Account Stats Card -->
                <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                  <h3 class="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i data-lucide="activity" class="w-4 h-4 text-sky-500"></i>
                    Ringkasan Akun
                  </h3>
                  <div class="space-y-3">
                    <div class="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                      <div class="flex items-center gap-2">
                        <div class="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center">
                          <i data-lucide="user" class="w-4 h-4 text-sky-500"></i>
                        </div>
                        <span class="text-xs text-slate-600 font-medium">Role</span>
                      </div>
                      <span class="inline-flex items-center px-2 py-1 rounded-lg bg-sky-50 text-sky-600 text-[10px] font-bold">
                        <span class="w-1.5 h-1.5 rounded-full bg-sky-500 mr-1.5"></span>
                        Administrasi
                      </span>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                      <div class="flex items-center gap-2">
                        <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                          <i data-lucide="shield-check" class="w-4 h-4 text-emerald-500"></i>
                        </div>
                        <span class="text-xs text-slate-600 font-medium">Status</span>
                      </div>
                      <span class="inline-flex items-center px-2 py-1 rounded-lg bg-emerald-50 text-emerald-600 text-[10px] font-bold">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                        Verified
                      </span>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                      <div class="flex items-center gap-2">
                        <div class="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                          <i data-lucide="at-sign" class="w-4 h-4 text-indigo-500"></i>
                        </div>
                        <span class="text-xs text-slate-600 font-medium">Username</span>
                      </div>
                      <span class="text-xs font-bold text-slate-900">${currentUser?.username || 'admin'}</span>
                    </div>
                  </div>
                </div>

                <!-- Quick Actions Card -->
                <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                  <h3 class="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i data-lucide="zap" class="w-4 h-4 text-amber-500"></i>
                    Aksi Cepat
                  </h3>
                  <div class="space-y-2">
                    <button onclick="document.getElementById('passwordSection').classList.toggle('hidden')" class="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all group">
                      <div class="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-500 transition-all">
                        <i data-lucide="lock" class="w-4 h-4 text-indigo-500 group-hover:text-white transition-all"></i>
                      </div>
                      <span class="text-xs font-semibold text-slate-700 group-hover:text-slate-900">Ganti Password</span>
                      <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400 ml-auto group-hover:text-slate-600"></i>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Right Column - Edit Form -->
              <div class="lg:col-span-2">
                <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <div class="flex items-center justify-between mb-6">
                    <div>
                      <h3 class="text-base font-bold text-slate-900">Informasi Akun</h3>
                      <p class="text-xs text-slate-400 mt-0.5">Perbarui informasi profil Anda</p>
                    </div>
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-sky-200">
                      <i data-lucide="user-edit" class="w-5 h-5 text-white"></i>
                    </div>
                  </div>
                  
                  <form id="adminProfileForm" onsubmit="handleAdminProfileUpdate(event)" class="space-y-5">
                    <div class="grid sm:grid-cols-2 gap-5">
                      <div class="sm:col-span-2">
                        <label class="block text-xs font-semibold text-slate-600 mb-2">Nama Lengkap</label>
                        <div class="relative">
                          <div class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400">
                            <i data-lucide="user"></i>
                          </div>
                          <input type="text" name="profileName" value="${name}" placeholder="Masukkan nama lengkap" class="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all">
                        </div>
                      </div>
                      
                      <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-2">Email</label>
                        <div class="relative">
                          <div class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400">
                            <i data-lucide="mail"></i>
                          </div>
                          <input type="email" name="profileEmail" value="${email}" placeholder="email@example.com" class="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all">
                        </div>
                      </div>
                      
                      <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-2">Username</label>
                        <div class="relative">
                          <div class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400">
                            <i data-lucide="at-sign"></i>
                          </div>
                          <input type="text" name="profileUsername" value="${currentUser?.username || 'admin'}" placeholder="username" class="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all">
                        </div>
                      </div>
                    </div>
                    
                    <!-- Password Section -->
                    <div id="passwordSection" class="hidden border-t border-slate-100 pt-5 mt-5">
                      <div class="flex items-center gap-2 mb-4">
                        <div class="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center">
                          <i data-lucide="lock-keyhole" class="w-4 h-4 text-rose-500"></i>
                        </div>
                        <div>
                          <p class="text-sm font-bold text-slate-900">Keamanan</p>
                          <p class="text-xs text-slate-400">Ubah password untuk keamanan</p>
                        </div>
                      </div>
                      <div class="space-y-3">
                        <div>
                          <label class="block text-xs font-semibold text-slate-600 mb-2">Password Saat Ini</label>
                          <input type="password" name="currentPassword" placeholder="••••••••" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all">
                        </div>
                        <div>
                          <label class="block text-xs font-semibold text-slate-600 mb-2">Password Baru</label>
                          <input type="password" name="profilePassword" placeholder="Minimal 8 karakter" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all">
                        </div>
                      </div>
                    </div>
                    
                    <div class="flex items-center gap-3 pt-4">
                      <button type="submit" class="flex-1 px-4 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-xl text-sm font-bold hover:from-sky-600 hover:to-indigo-600 transition-all shadow-lg shadow-sky-200 hover:shadow-xl hover:shadow-sky-300 hover:-translate-y-0.5">
                        Simpan Perubahan
                      </button>
                      <button type="button" onclick="navigateTo('dashboard')" class="px-4 py-3 bg-slate-50 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-100 transition-all border border-slate-200">
                        Batal
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  `;
}

// Initialize Admin App
window.onload = function() {
  if (!checkAuth()) return;
  navigateTo('dashboard');
};

// Expose functions to global
window.navigateTo = navigateTo;
window.handleAdminRegister = handleAdminRegister;
window.toggleAdminComplaintField = toggleAdminComplaintField;
window.deleteRegistration = deleteRegistration;
window.completeRegistration = completeRegistration;
// ============================================================================
// GLOBAL EXPORTS
// ============================================================================

window.toggleMedStatus = toggleMedStatus;
window.handleAdminProfileUpdate = handleAdminProfileUpdate;
window.openLogoutModal = openLogoutModal;
window.closeLogoutModal = closeLogoutModal;
window.confirmLogout = confirmLogout;
window.logout = logout;
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.handleMedicineOutflow = handleMedicineOutflow;
window.filterRegistrations = filterRegistrations;
window.printRegistrationReport = printRegistrationReport;
window.exportRegistrationToExcel = exportRegistrationToExcel;

// Export render functions globally
window.renderAdminSidebar = renderAdminSidebar;
window.renderAdminDashboard = renderAdminDashboard;
window.renderAdminServices = renderAdminServices;
window.renderAdminMedicines = renderAdminMedicines;
window.renderAdminRegistrations = renderAdminRegistrations;
window.renderAdminProfile = renderAdminProfile;

