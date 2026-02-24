// ============================================================================
// APOTEKER RENDERERS - Template Functions for Pharmacist Dashboard
// Separate file for all UI rendering logic
// Dependencies: shared.js (must be loaded before this file)
// ============================================================================

function renderApotekerSidebar(activePage) {
  const menu = [
    { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
    { id: 'medicines', label: 'Manajemen Stok Obat', icon: 'pill' },
    { id: 'outflow', label: 'Pengeluaran', icon: 'package-minus' },
    { id: 'profile', label: 'Profil', icon: 'user-circle' },
  ];
  
  return `
    <aside class="hidden md:flex flex-col w-64 bg-white/90 backdrop-blur-xl border-r border-slate-100 shadow-[4px_0_24px_rgba(15,23,42,0.05)] h-screen fixed left-0 top-0 z-40">
      <div class="h-20 flex items-center px-7 border-b border-slate-50/50 shrink-0">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/40">
            <i data-lucide="pill" class="w-5 h-5"></i>
          </div>
          <div class="leading-tight">
            <p class="text-[16px] font-extrabold tracking-tight text-slate-900">Klinik<span class="text-emerald-500">Pratama</span></p>
          </div>
        </div>
      </div>
      <nav class="flex-1 px-4 py-6 space-y-1 overflow-y-auto text-[13px]">
        <p class="px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-[0.18em] mb-3">Overview</p>
        ${menu.slice(0, 3).map(m => `
          <button onclick="navigateTo('${m.id}')" 
            class="w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${activePage === m.id ? 'bg-emerald-50 text-emerald-600 font-semibold shadow-[0_8px_20px_-10px_rgba(16,185,129,0.6)]' : 'text-slate-500 hover:bg-slate-50 hover:text-emerald-600'}">
            <i data-lucide="${m.icon}" class="w-5 h-5"></i>
            <span>${m.label}</span>
          </button>
        `).join('')}
        <p class="px-4 pt-4 text-[11px] font-semibold text-slate-400 uppercase tracking-[0.18em] mb-1">Akun</p>
        <button onclick="navigateTo('profile')" 
          class="w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${activePage === 'profile' ? 'bg-emerald-50 text-emerald-600 font-semibold shadow-[0_8px_20px_-10px_rgba(16,185,129,0.6)]' : 'text-slate-500 hover:bg-slate-50 hover:text-emerald-600'}">
          <i data-lucide="user-circle-2" class="w-5 h-5"></i>
          <span>Profil Apoteker</span>
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
          <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white">
            <i data-lucide="pill" class="w-4 h-4"></i>
          </div>
          <span class="text-base font-bold text-slate-900">Klinik<span class="text-emerald-500">Pratama</span></span>
        </div>
        <button onclick="toggleMobileMenu()" class="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
          <i data-lucide="menu" class="w-5 h-5"></i>
        </button>
      </div>
    </header>
    
    <!-- Mobile Menu Drawer -->
    <div id="mobile-menu" class="fixed inset-0 z-50 hidden">
      <div class="absolute inset-0 bg-black/50" onclick="toggleMobileMenu()"></div>
      <div class="absolute left-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform -translate-x-full" id="mobile-drawer">
        <div class="p-4 border-b border-slate-100 flex items-center justify-between">
          <span class="font-bold text-slate-800">Menu</span>
          <button onclick="toggleMobileMenu()" class="p-2 rounded-lg hover:bg-slate-100">
            <i data-lucide="x" class="w-5 h-5 text-slate-600"></i>
          </button>
        </div>
        <nav class="p-4 space-y-1">
          ${menu.map(m => `
            <button onclick="navigateTo('${m.id}'); toggleMobileMenu();" 
              class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activePage === m.id ? 'bg-emerald-50 text-emerald-600' : 'text-slate-600 hover:bg-slate-50'}">
              <i data-lucide="${m.icon}" class="w-5 h-5"></i>
              <span>${m.label}</span>
            </button>
          `).join('')}
          <div class="pt-4 mt-4 border-t border-slate-100">
            <button onclick="logout(); toggleMobileMenu();" class="group w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-rose-500 transition-all duration-300">
              <div class="w-10 h-10 rounded-lg bg-rose-500 text-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-rose-300 group-hover:scale-105 transition-all duration-300">
                <i data-lucide="log-out" class="w-5 h-5"></i>
              </div>
              <span class="text-sm font-semibold text-slate-700 group-hover:text-white transition-colors">Logout</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  `;
}

// Render Dashboard
function renderApotekerDashboard() {
  const totalMeds = medicineStock.length;
  const availableMeds = medicineStock.filter(m => m.status === 'Tersedia').length;
  const lowStockMeds = medicineStock.filter(m => (m.qty || 0) < 10 && m.status === 'Tersedia').length;
  const todayOutflow = load('medicineOutflow', []).filter(o => o.date === new Date().toISOString().slice(0,10)).length;
  
  const apotekerName = currentUser?.name || 'Apoteker';
  const todayLabel = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
  
  return `
    <section class="bg-[#f5f7fb] min-h-screen w-full overflow-x-hidden">
      <div class="flex h-screen overflow-hidden w-full">
        ${renderApotekerSidebar('dashboard')}
        <main class="flex-1 flex flex-col md:ml-64 pt-14 md:pt-0 overflow-y-auto overflow-x-hidden min-w-0 relative">
          <!-- Top Bar - Sticky -->
          <div class="sticky top-0 z-30 px-4 sm:px-8 lg:px-10 py-4 flex items-center justify-between bg-white/95 backdrop-blur-xl border-b border-slate-100">
            <div>
              <h1 class="text-lg font-bold text-slate-900">Dashboard</h1>
              <p class="text-xs text-slate-400">Ringkasan apotek hari ini</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                <i data-lucide="calendar" class="w-4 h-4"></i>
                <span>${todayLabel}</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-50 border border-slate-200">
                <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 text-white flex items-center justify-center text-xs font-bold">
                  ${apotekerName.charAt(0).toUpperCase()}
                </div>
                <span class="text-sm font-medium text-slate-700 hidden sm:block">${apotekerName}</span>
              </div>
            </div>
          </div>

          <div class="px-4 sm:px-8 lg:px-10 py-6 space-y-6 max-w-full">
            <!-- Welcome Banner - Matching Admin Hero Size & Design -->
            <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/50 border border-emerald-100 shadow-lg shadow-emerald-100/50">
              <!-- Decorative Elements -->
              <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200/40 to-teal-300/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
              <div class="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-teal-200/30 to-emerald-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
              <div class="absolute top-1/2 right-1/4 w-32 h-32 bg-emerald-300/20 rounded-full blur-2xl"></div>
              
              <!-- Grid Pattern Overlay -->
              <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0); background-size: 24px 24px;"></div>
              
              <div class="relative px-6 py-10 sm:px-12 sm:py-12">
                <div class="flex items-center justify-between gap-6">
                  <div class="space-y-4 flex-1">
                    <!-- Status Badge -->
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-emerald-100">
                      <span class="relative flex h-2.5 w-2.5">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span class="text-xs font-semibold text-emerald-600">Sistem Online</span>
                    </div>
                    
                    <!-- Title -->
                    <div class="space-y-2">
                      <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                        Selamat datang, <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">${apotekerName}</span>
                      </h2>
                      <p class="text-sm sm:text-base text-slate-500 max-w-lg leading-relaxed">Kelola stok obat dan pantau pengeluaran harian dengan mudah dalam satu dashboard.</p>
                    </div>
                    
                    <!-- Quick Stats -->
                    <div class="flex items-center gap-4 pt-2">
                      <div class="flex items-center gap-2 text-xs text-slate-400">
                        <div class="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                          <i data-lucide="calendar" class="w-4 h-4 text-emerald-500"></i>
                        </div>
                        <span>${todayLabel}</span>
                      </div>
                      <div class="h-4 w-px bg-slate-200"></div>
                      <div class="flex items-center gap-2 text-xs text-slate-400">
                        <div class="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                          <i data-lucide="check-circle" class="w-4 h-4 text-teal-500"></i>
                        </div>
                        <span>Semua sistem normal</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Decorative Icon Card -->
                  <div class="hidden lg:flex flex-col items-center gap-4">
                    <div class="relative">
                      <div class="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl blur-lg opacity-30 scale-110"></div>
                      <div class="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-xl shadow-emerald-200">
                        <i data-lucide="pill" class="w-12 h-12 text-white"></i>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <div class="w-2 h-2 rounded-full bg-emerald-400 animate-bounce"></div>
                      <div class="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" style="animation-delay: 0.1s"></div>
                      <div class="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" style="animation-delay: 0.2s"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stat Cards -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <i data-lucide="pill" class="w-6 h-6"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-2xl font-bold text-slate-900">${totalMeds}</p>
                    <p class="text-xs text-slate-500">Jenis Obat</p>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 text-[10px] font-medium">Total</span>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-all">
                    <i data-lucide="check-circle" class="w-6 h-6"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-2xl font-bold text-slate-900">${availableMeds}</p>
                    <p class="text-xs text-slate-500">Stok Tersedia</p>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-sky-50 text-sky-600 text-[10px] font-medium">Tersedia</span>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all">
                    <i data-lucide="alert-triangle" class="w-6 h-6"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-2xl font-bold text-slate-900">${lowStockMeds}</p>
                    <p class="text-xs text-slate-500">Stok Menipis</p>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 text-[10px] font-medium">Perhatian</span>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <i data-lucide="arrow-up-from-line" class="w-6 h-6"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-2xl font-bold text-slate-900">${todayOutflow}</p>
                    <p class="text-xs text-slate-500">Pengeluaran</p>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 text-[10px] font-medium">Hari Ini</span>
                </div>
              </div>
            </div>

            <!-- Charts Row -->
            <div class="grid lg:grid-cols-2 gap-6">
              <!-- Modern Area Chart -->
              <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <div class="flex items-center justify-between mb-6">
                  <div>
                    <h3 class="text-sm font-bold text-slate-900">Trafik Pengeluaran</h3>
                    <p class="text-xs text-slate-400 mt-0.5">Real-time trafik 7 hari terakhir</p>
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
                  <div class="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-teal-50/20 rounded-xl"></div>
                  
                  <!-- Y-axis labels -->
                  <div class="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-[10px] text-slate-400 font-medium">
                    <span>50</span>
                    <span>40</span>
                    <span>30</span>
                    <span>20</span>
                    <span>10</span>
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
                          <linearGradient id="emeraldAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#10b981" stop-opacity="0.3"/>
                            <stop offset="100%" stop-color="#10b981" stop-opacity="0.05"/>
                          </linearGradient>
                          <linearGradient id="emeraldLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#10b981"/>
                            <stop offset="100%" stop-color="#14b8a6"/>
                          </linearGradient>
                        </defs>
                        
                        ${(() => {
                          const outflows = load('medicineOutflow', []) || [];
                          const days = [];
                          for (let i = 6; i >= 0; i--) {
                            const date = new Date();
                            date.setDate(date.getDate() - i);
                            const dateStr = date.toISOString().slice(0, 10);
                            const count = outflows.filter(o => o.date === dateStr).length;
                            days.push(count);
                          }
                          
                          const maxValue = Math.max(...days, 1);
                          const chartWidth = 600;
                          const chartHeight = 300;
                          const padding = { top: 20, right: 0, bottom: 40, left: 0 };
                          const graphWidth = chartWidth - padding.left - padding.right;
                          const graphHeight = chartHeight - padding.top - padding.bottom;
                          
                          // Calculate points
                          const points = days.map((count, i) => {
                            const x = padding.left + (i / (days.length - 1)) * graphWidth;
                            const y = padding.top + (1 - (count / maxValue * 0.8)) * graphHeight;
                            return { x, y, count };
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
                          
                          const dayNames = ['Min','Sen','Sel','Rab','Kam','Jum','Sab'];
                          const todayIndex = new Date().getDay();
                          
                          return `
                            <!-- Area Fill -->
                            <path d="${areaPath}" fill="url(#emeraldAreaGradient)" />
                            
                            <!-- Smooth Line -->
                            <path d="${linePath}" fill="none" stroke="url(#emeraldLineGradient)" stroke-width="3" stroke-linecap="round" />
                            
                            <!-- Data Points -->
                            ${points.map((p, i) => {
                              const actualDayIndex = (todayIndex + i) % 7;
                              const isToday = i === points.length - 1;
                              return `
                                <g class="group cursor-pointer">
                                  <circle cx="${p.x}" cy="${p.y}" r="${isToday ? 8 : 6}" fill="${isToday ? '#10b981' : '#14b8a6'}" stroke="#ffffff" stroke-width="2" class="transition-all duration-300 group-hover:r-8" />
                                  ${p.count > 0 ? `
                                    <text x="${p.x}" y="${p.y - 12}" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a" class="opacity-0 group-hover:opacity-100 transition-opacity">${p.count}</text>
                                  ` : ''}
                                </g>
                              `;
                            }).join('')}
                            
                            <!-- X-axis labels -->
                            <g class="text-slate-500 font-medium">
                              ${points.map((p, i) => {
                                const actualDayIndex = (todayIndex + i) % 7;
                                const isToday = i === points.length - 1;
                                return `
                                  <text x="${p.x}" y="${chartHeight - padding.bottom + 20}" text-anchor="middle" font-size="12" class="${isToday ? 'fill-emerald-600 font-bold' : 'fill-slate-500'}">${dayNames[actualDayIndex]}</text>
                                `;
                              }).join('')}
                            </g>
                          `;
                        })()}
                      </svg>
                    </div>
                  </div>
                </div>
                
                <!-- Footer Stats -->
                <div class="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px]">
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500"></div>
                    <span class="text-slate-500">Total: <strong class="text-slate-700">${(() => {
                      const outflows = load('medicineOutflow', []) || [];
                      const today = new Date().toISOString().slice(0, 10);
                      const weekAgo = new Date();
                      weekAgo.setDate(weekAgo.getDate() - 7);
                      return outflows.filter(o => o.date >= weekAgo.toISOString().slice(0, 10) && o.date <= today).reduce((sum, o) => sum + (o.amount || 0), 0);
                    })()} item</strong></span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-slate-400">Rata-rata:</span>
                    <span class="font-bold text-slate-700">${(() => {
                      const outflows = load('medicineOutflow', []) || [];
                      const today = new Date().toISOString().slice(0, 10);
                      const weekAgo = new Date();
                      weekAgo.setDate(weekAgo.getDate() - 7);
                      const total = outflows.filter(o => o.date >= weekAgo.toISOString().slice(0, 10) && o.date <= today).reduce((sum, o) => sum + (o.amount || 0), 0);
                      return Math.round(total / 7);
                    })()}/hari</span>
                  </div>
                </div>
              </div>

              <!-- Stok Masuk Card -->
              <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <div class="flex items-center justify-between mb-6">
                  <div>
                    <h3 class="text-sm font-bold text-slate-900">Pemasukan Stok</h3>
                    <p class="text-xs text-slate-400 mt-0.5">Obat baru ditambahkan</p>
                  </div>
                  <div class="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <i data-lucide="package-plus" class="w-5 h-5 text-emerald-500"></i>
                  </div>
                </div>
                
                <div class="space-y-4">
                  <div class="flex items-center justify-between p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                        <i data-lucide="trending-up" class="w-5 h-5 text-emerald-500"></i>
                      </div>
                      <div>
                        <p class="text-sm font-semibold text-slate-800">Total Pemasukan Bulan Ini</p>
                        <p class="text-xs text-slate-500">Obat baru ditambahkan</p>
                      </div>
                    </div>
                    <span class="text-2xl font-bold text-emerald-600">+12</span>
                  </div>
                  
                  <div class="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                        <i data-lucide="calendar" class="w-5 h-5 text-slate-500"></i>
                      </div>
                      <div>
                        <p class="text-sm font-semibold text-slate-800">Pemasukan Hari Ini</p>
                        <p class="text-xs text-slate-500">Obat baru</p>
                      </div>
                    </div>
                    <span class="text-xl font-bold text-slate-700">+3</span>
                  </div>
                  
                  <div class="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                        <i data-lucide="boxes" class="w-5 h-5 text-slate-500"></i>
                      </div>
                      <div>
                        <p class="text-sm font-semibold text-slate-800">Total Stok Saat Ini</p>
                        <p class="text-xs text-slate-500">Semua obat</p>
                      </div>
                    </div>
                    <span class="text-xl font-bold text-slate-700">${medicineStock.reduce((sum, m) => sum + (m.qty || 0), 0)}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button onclick="navigateTo('medicines')" class="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all text-left group">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                  <i data-lucide="pill" class="w-7 h-7"></i>
                </div>
                <span class="text-base font-bold text-slate-800">Stok Obat</span>
              </button>
              
              <button onclick="navigateTo('outflow')" class="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all text-left group">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                  <i data-lucide="package-minus" class="w-7 h-7"></i>
                </div>
                <span class="text-base font-bold text-slate-800">Pengeluaran</span>
              </button>
              
              <button onclick="navigateTo('profile')" class="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-teal-200 transition-all text-left group">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 text-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                  <i data-lucide="user-circle" class="w-7 h-7"></i>
                </div>
                <span class="text-base font-bold text-slate-800">Profil</span>
              </button>
            </div>
          </div>
        </main>
      </div>
      
      ${renderLogoutModal()}
    </section>
  `;
}

// Render Medicines Page
function renderApotekerMedicines() {
  const todayLabel = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
  const apotekerName = currentUser?.name || 'Apoteker';
  const totalItems = medicineStock.length;
  const totalAvailable = medicineStock.filter(m => m.status === 'Tersedia').length;
  const todayOutflow = load('medicineOutflow', []).filter(o => o.date === new Date().toISOString().slice(0,10)).length;
  
  return `
    <section class="bg-[#f5f7fb] min-h-screen w-full overflow-x-hidden">
      <div class="flex h-screen overflow-hidden w-full">
        ${renderApotekerSidebar('medicines')}
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
                <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 text-white flex items-center justify-center text-xs font-bold">
                  ${apotekerName.charAt(0).toUpperCase()}
                </div>
                <span class="text-sm font-medium text-slate-700 hidden sm:block">${apotekerName}</span>
              </div>
            </div>
          </div>
          <div class="px-4 sm:px-8 lg:px-10 py-6 space-y-6">
            <!-- Hero Banner -->
            <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/50 border border-emerald-100 shadow-lg shadow-emerald-100/50">
              <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200/40 to-teal-300/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
              <div class="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-teal-200/30 to-emerald-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
              <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0); background-size: 24px 24px;"></div>
              <div class="relative px-6 py-10 sm:px-12 sm:py-12">
                <div class="flex items-center justify-between gap-6">
                  <div class="space-y-4 flex-1">
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-emerald-100">
                      <div class="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                      <span class="text-xs font-semibold text-emerald-600">${totalAvailable} Obat Tersedia</span>
                    </div>
                    <div class="space-y-2">
                      <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                        Stok <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Obat</span>
                      </h2>
                      <p class="text-sm sm:text-base text-slate-500 max-w-lg leading-relaxed">Pantau dan ubah status ketersediaan obat agar pelayanan resep tetap lancar.</p>
                    </div>
                  </div>
                  <div class="hidden lg:flex flex-col items-center gap-4">
                    <div class="relative">
                      <div class="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl blur-lg opacity-30 scale-110"></div>
                      <div class="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-xl shadow-emerald-200">
                        <i data-lucide="pill" class="w-12 h-12 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between text-[11px] text-slate-500">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
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
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <i data-lucide="pill" class="w-6 h-6"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-2xl font-bold text-slate-900">${totalItems}</p>
                    <p class="text-xs text-slate-500">Total Obat</p>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 text-[10px] font-medium">Total</span>
                </div>
              </div>
              
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-white transition-all">
                    <i data-lucide="check-circle" class="w-6 h-6"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-2xl font-bold text-slate-900">${totalAvailable}</p>
                    <p class="text-xs text-slate-500">Tersedia</p>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-sky-50 text-sky-600 text-[10px] font-medium">Tersedia</span>
                </div>
              </div>
              
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-all">
                    <i data-lucide="x-circle" class="w-6 h-6"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-2xl font-bold text-slate-900">${totalItems - totalAvailable}</p>
                    <p class="text-xs text-slate-500">Habis</p>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 text-[10px] font-medium">Stok Habis</span>
                </div>
              </div>
              
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all">
                    <i data-lucide="arrow-up-from-line" class="w-6 h-6"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-2xl font-bold text-slate-900">${todayOutflow}</p>
                    <p class="text-xs text-slate-500">Keluar Hari Ini</p>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 text-[10px] font-medium">Hari Ini</span>
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
                  <div class="flex items-center gap-2">
                    <button onclick="printMedicineInflowToday()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-all text-xs font-semibold" title="Print Obat Masuk Hari Ini">
                      <i data-lucide="circle-arrow-down" class="w-3.5 h-3.5"></i>
                      <span class="hidden sm:inline">Obat Masuk</span>
                    </button>
                    <button onclick="printMedicineList()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 text-sky-600 hover:bg-sky-100 transition-all text-xs font-semibold" title="Print Daftar Obat">
                      <i data-lucide="printer" class="w-3.5 h-3.5"></i>
                      <span class="hidden sm:inline">Print</span>
                    </button>
                    <button onclick="exportMedicineToExcel()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-all text-xs font-semibold" title="Export to Excel">
                      <i data-lucide="file-spreadsheet" class="w-3.5 h-3.5"></i>
                      <span class="hidden sm:inline">Excel</span>
                    </button>
                    <button onclick="navigateTo('medicines')" class="p-2 rounded-lg bg-slate-50 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 transition-all">
                      <i data-lucide="refresh-cw" class="w-4 h-4"></i>
                    </button>
                  </div>
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
                                idx % 3 === 0 ? 'bg-emerald-50 text-emerald-500' : idx % 3 === 1 ? 'bg-teal-50 text-teal-500' : 'bg-sky-50 text-sky-500'
                              }">
                                <i data-lucide="pill" class="w-5 h-5"></i>
                              </div>
                              <div>
                                <p class="text-sm font-semibold text-slate-800">${med.name}</p>
                                <p class="text-xs text-slate-400">${med.dosis || '-'}</p>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 text-right text-sm">
                            <span class="font-semibold text-slate-800">${med.dosis || '-'}</span>
                          </td>
                          <td class="px-6 py-4 text-right">
                            <span class="text-sm font-semibold text-slate-800">${med.qty != null ? med.qty : '-'}</span>
                            <span class="text-xs text-slate-400">pcs</span>
                          </td>
                          <td class="px-6 py-4 text-right">
                            <button onclick="toggleMedStatusApoteker(${idx})" class="text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${med.status === 'Tersedia' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-rose-50 text-rose-600 border border-rose-100'}">
                              ${med.status}
                            </button>
                          </td>
                          <td class="px-6 py-4 text-right space-x-1">
                            <button onclick="editMedicineApoteker(${idx})" class="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 text-slate-500 hover:border-emerald-500 hover:text-emerald-600 transition-all" title="Edit obat">
                              <i data-lucide="pencil" class="w-4 h-4"></i>
                            </button>
                            <button onclick="deleteMedicineApoteker(${idx})" class="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 text-slate-400 hover:border-rose-500 hover:text-rose-600 transition-all" title="Hapus obat">
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
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                      <i data-lucide="plus" class="w-5 h-5 text-white"></i>
                    </div>
                    <div>
                      <h3 class="text-sm font-bold text-slate-900">Tambah Obat Baru</h3>
                      <p class="text-xs text-slate-400">Input data obat baru</p>
                    </div>
                  </div>
                  <form id="apotekerMedForm" class="space-y-4">
                    <div>
                      <label class="block text-xs font-semibold text-slate-700 mb-2">Nama Obat</label>
                      <div class="relative">
                        <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <i data-lucide="pill" class="w-4 h-4"></i>
                        </div>
                        <input name="name" required class="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="Contoh: Paracetamol" />
                      </div>
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-slate-700 mb-2">Dosis</label>
                      <div class="relative">
                        <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <i data-lucide="gauge" class="w-4 h-4"></i>
                        </div>
                        <input name="dosis" required class="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="Contoh: 500mg" />
                      </div>
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-slate-700 mb-2">Jumlah Stok</label>
                      <div class="relative">
                        <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <i data-lucide="package" class="w-4 h-4"></i>
                        </div>
                        <input name="qty" type="number" min="0" required class="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="Contoh: 100" />
                      </div>
                    </div>
                    <button type="submit" class="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-400 text-white text-sm font-semibold hover:bg-amber-500 transition-all shadow-sm shadow-amber-100 hover:shadow-md hover:shadow-amber-200">
                      <i data-lucide="save" class="w-4 h-4"></i>
                      <span>Simpan Obat</span>
                    </button>
                  </form>
                </div>

                <!-- Low Stock Alert Card -->
                <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <div class="flex items-center justify-between mb-5">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                        <i data-lucide="alert-triangle" class="w-5 h-5 text-amber-500"></i>
                      </div>
                      <div>
                        <h3 class="text-sm font-bold text-slate-900">Stok Menipis</h3>
                        <p class="text-xs text-slate-400">Perlu segera diisi</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="space-y-3">
                    ${(() => {
                      const lowStockMeds = medicineStock.filter(m => (m.qty || 0) < 10 && m.status === 'Tersedia');
                      if (lowStockMeds.length === 0) {
                        return `
                          <div class="text-center py-8">
                            <div class="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-3">
                              <i data-lucide="check-circle" class="w-8 h-8 text-emerald-500"></i>
                            </div>
                            <p class="text-sm font-semibold text-slate-700">Semua Stok Aman</p>
                            <p class="text-xs text-slate-400 mt-1">Tidak ada obat dengan stok menipis</p>
                          </div>
                        `;
                      }
                      
                      return lowStockMeds.slice(0, 5).map((med, idx) => {
                        const percentage = Math.min(((med.qty || 0) / 50) * 100, 100);
                        const barColor = (med.qty || 0) < 5 ? 'bg-rose-500' : 'bg-amber-500';
                        return `
                          <div class="p-3 rounded-xl bg-slate-50 border border-slate-100">
                            <div class="flex items-center justify-between mb-2">
                              <div class="flex items-center gap-2">
                                <div class="w-8 h-8 rounded-lg ${idx % 3 === 0 ? 'bg-emerald-50 text-emerald-500' : idx % 3 === 1 ? 'bg-teal-50 text-teal-500' : 'bg-sky-50 text-sky-500'} flex items-center justify-center">
                                  <i data-lucide="pill" class="w-4 h-4"></i>
                                </div>
                                <div>
                                  <p class="text-xs font-semibold text-slate-800">${med.name}</p>
                                  <p class="text-[10px] text-slate-400">${med.dosis || '-'}</p>
                                </div>
                              </div>
                              <span class="text-xs font-bold ${barColor.replace('bg-', 'text-')}">${med.qty} pcs</span>
                            </div>
                            <div class="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                              <div class="${barColor} h-full rounded-full transition-all duration-500" style="width: ${percentage}%"></div>
                            </div>
                          </div>
                        `;
                      }).join('');
                    })()}
                  </div>
                  
                  ${medicineStock.filter(m => (m.qty || 0) < 10 && m.status === 'Tersedia').length > 0 ? `
                    <button onclick="navigateTo('outflow')" class="w-full mt-3 px-4 py-2.5 bg-amber-500 text-white rounded-xl text-xs font-semibold hover:bg-amber-600 transition-all flex items-center justify-center gap-2">
                      <i data-lucide="plus" class="w-4 h-4"></i>
                      <span>Catat Pengeluaran</span>
                    </button>
                  ` : ''}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      ${renderLogoutModal()}
    </section>
  `;
}

// Render Outflow Page
function renderApotekerOutflow() {
  const todayLabel = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
  const apotekerName = currentUser?.name || 'Apoteker';
  const outflowData = load('medicineOutflow', []);
  const todayOutflow = outflowData.filter(o => o.date === new Date().toISOString().slice(0,10));
  
  return `
    <section class="bg-[#f5f7fb] min-h-screen w-full overflow-x-hidden">
      <div class="flex h-screen overflow-hidden w-full">
        ${renderApotekerSidebar('outflow')}
        <main class="flex-1 flex flex-col md:ml-64 pt-14 md:pt-0 overflow-y-auto overflow-x-hidden min-w-0 relative">
          <div class="sticky top-0 z-30 px-4 sm:px-8 lg:px-10 py-4 flex items-center justify-between bg-white/95 backdrop-blur-xl border-b border-slate-100">
            <div>
              <h1 class="text-lg font-bold text-slate-900">Pengeluaran Obat</h1>
              <p class="text-xs text-slate-400">Catatan obat keluar per hari</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                <i data-lucide="calendar" class="w-4 h-4"></i>
                <span>${todayLabel}</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-50 border border-slate-200">
                <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 text-white flex items-center justify-center text-xs font-bold">
                  ${apotekerName.charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
          </div>

          <div class="px-4 sm:px-8 lg:px-10 py-6 space-y-6 max-w-full">
            <!-- Hero Banner - Matching Admin Hero Size & Design -->
            <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/50 border border-emerald-100 shadow-lg shadow-emerald-100/50">
              <!-- Decorative Elements -->
              <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200/40 to-teal-300/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
              <div class="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-teal-200/30 to-emerald-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
              <div class="absolute top-1/2 right-1/4 w-32 h-32 bg-emerald-300/20 rounded-full blur-2xl"></div>
              
              <!-- Grid Pattern Overlay -->
              <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0); background-size: 24px 24px;"></div>
              
              <div class="relative px-6 py-10 sm:px-12 sm:py-12">
                <div class="flex items-center justify-between gap-6">
                  <div class="space-y-4 flex-1">
                    <!-- Status Badge -->
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-emerald-100">
                      <div class="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                      <span class="text-xs font-semibold text-emerald-600">${todayOutflow.length} Transaksi Hari Ini</span>
                    </div>
                    
                    <!-- Title -->
                    <div class="space-y-2">
                      <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                        Pengeluaran <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Obat</span>
                      </h2>
                      <p class="text-sm sm:text-base text-slate-500 max-w-lg leading-relaxed">Catat dan pantau pengeluaran obat per hari untuk inventory yang akurat.</p>
                    </div>
                  </div>
                  <div class="hidden lg:flex flex-col items-center gap-4">
                    <div class="relative">
                      <div class="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl blur-lg opacity-30 scale-110"></div>
                      <div class="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-xl shadow-emerald-200">
                        <i data-lucide="package-minus" class="w-12 h-12 text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Summary Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <i data-lucide="package-minus" class="w-6 h-6"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-2xl font-bold text-slate-900">${todayOutflow.length}</p>
                    <p class="text-xs text-slate-500">Transaksi Keluar</p>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 text-[10px] font-medium">Hari Ini</span>
                </div>
              </div>
              
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-white transition-all">
                    <i data-lucide="pill" class="w-6 h-6"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-2xl font-bold text-slate-900">${todayOutflow.reduce((sum, o) => sum + (o.amount || 0), 0)}</p>
                    <p class="text-xs text-slate-500">Item Keluar</p>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 text-[10px] font-medium">Total</span>
                </div>
              </div>
              
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <i data-lucide="trending-up" class="w-6 h-6"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-2xl font-bold text-slate-900">${todayOutflow.length > 0 ? Math.round(todayOutflow.reduce((sum, o) => sum + (o.amount || 0), 0) / todayOutflow.length) : 0}</p>
                    <p class="text-xs text-slate-500">Item/Transaksi</p>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 text-[10px] font-medium">Rata-rata</span>
                </div>
              </div>
              
              <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-all">
                    <i data-lucide="clock" class="w-6 h-6"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-xl font-bold text-slate-900 truncate w-full">${todayOutflow.length > 0 ? todayOutflow[0].time : '-'}</p>
                    <p class="text-xs text-slate-500">Update</p>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 text-[10px] font-medium">Terakhir</span>
                </div>
              </div>
            </div>

            <!-- Add Outflow Form Card -->
            <div class="relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
              <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500"></div>
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="text-base font-bold text-slate-900">Catat Pengeluaran Obat</h3>
                  <p class="text-xs text-slate-400 mt-1">Isi formulir untuk mencatat pengeluaran obat</p>
                </div>
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-200">
                  <i data-lucide="clipboard-plus" class="w-6 h-6 text-white"></i>
                </div>
              </div>
              
              <form id="apotekerOutflowForm" class="grid sm:grid-cols-4 gap-4">
                <div class="sm:col-span-1">
                  <label class="block text-xs font-semibold text-slate-600 mb-2">Pilih Obat</label>
                  <select name="medId" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer">
                    <option value="">-- Pilih Obat --</option>
                    ${medicineStock.filter(m => m.status === 'Tersedia').map((m, i) => `<option value="${i}">${m.name} (Stok: ${m.qty || 0})</option>`).join('')}
                  </select>
                </div>
                
                <div class="sm:col-span-1">
                  <label class="block text-xs font-semibold text-slate-600 mb-2">Jumlah Keluar</label>
                  <input type="number" name="amount" placeholder="0" min="1" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-center font-semibold">
                </div>
                
                <div class="sm:col-span-1">
                  <label class="block text-xs font-semibold text-slate-600 mb-2">Nama Pasien (Opsional)</label>
                  <input type="text" name="patient" placeholder="Kosongkan jika umum" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all">
                </div>
                
                <div class="sm:col-span-1 flex items-end">
                  <button type="submit" class="w-full px-4 py-3 bg-gradient-to-r from-teal-400 to-emerald-400 text-white rounded-xl text-sm font-semibold hover:from-teal-500 hover:to-emerald-500 transition-all flex items-center justify-center gap-2 shadow-sm shadow-teal-100 hover:shadow-md hover:shadow-teal-200">
                    <i data-lucide="save" class="w-4 h-4"></i>
                    <span>Catat Pengeluaran</span>
                  </button>
                </div>
              </form>
            </div>

            <!-- Outflow History Card -->
            <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div class="p-5 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 class="text-base font-bold text-slate-900">Riwayat Pengeluaran Hari Ini</h3>
                  <p class="text-xs text-slate-400 mt-0.5">${todayOutflow.length} transaksi tercatat</p>
                </div>
                <div class="flex items-center gap-2">
                  <button onclick="printOutflowHistory()" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-400 text-white hover:bg-blue-500 transition-all text-xs font-semibold shadow-sm shadow-blue-100" title="Print Riwayat">
                    <i data-lucide="printer" class="w-4 h-4"></i>
                    <span class="hidden sm:inline">Print</span>
                  </button>
                  <button onclick="exportOutflowToExcel()" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-400 text-white hover:bg-teal-500 transition-all text-xs font-semibold shadow-sm shadow-teal-100" title="Export to Excel">
                    <i data-lucide="file-spreadsheet" class="w-4 h-4"></i>
                    <span class="hidden sm:inline">Excel</span>
                  </button>
                </div>
              </div>
              <div class="divide-y divide-slate-100">
                ${todayOutflow.length > 0 ? todayOutflow.map((o, index) => `
                  <div class="p-4 hover:bg-slate-50/50 transition-colors">
                    <div class="flex items-center justify-between gap-4">
                      <div class="flex items-center gap-3 flex-1">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-400 flex items-center justify-center shadow-sm">
                          <i data-lucide="arrow-up-from-line" class="w-5 h-5 text-white"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                          <div class="flex items-center gap-2 mb-1">
                            <p class="text-sm font-semibold text-slate-700 truncate">${o.medicineName}</p>
                            <span class="px-2 py-0.5 rounded-md bg-teal-50 text-teal-600 text-[10px] font-semibold border border-teal-100">#${index + 1}</span>
                          </div>
                          <div class="flex items-center gap-3 text-xs text-slate-400">
                            <span class="flex items-center gap-1.5">
                              <i data-lucide="user" class="w-3.5 h-3.5"></i>
                              ${o.patient || 'Pasien Umum'}
                            </span>
                            <span class="flex items-center gap-1.5">
                              <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                              ${o.time}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="text-right">
                        <p class="text-lg font-bold text-teal-500">+${o.amount}</p>
                        <p class="text-[10px] text-slate-400 font-medium">ITEM KELUAR</p>
                      </div>
                    </div>
                  </div>
                `).join('') : `
                  <div class="p-10 text-center">
                    <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center">
                      <i data-lucide="inbox" class="w-10 h-10 text-teal-400 opacity-50"></i>
                    </div>
                    <p class="text-base font-semibold text-slate-600 mb-1">Belum ada pengeluaran hari ini</p>
                    <p class="text-xs text-slate-400">Gunakan formulir di atas untuk mencatat pengeluaran obat pertama Anda</p>
                  </div>
                `}
              </div>
              ${todayOutflow.length > 0 ? `
                <div class="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <p class="text-xs font-medium text-slate-500">Total ditampilkan: ${todayOutflow.length} transaksi</p>
                  <p class="text-xs font-semibold text-teal-500">${todayOutflow.reduce((sum, o) => sum + (o.amount || 0), 0)} item keluar</p>
                </div>
              ` : ''}
            </div>
          </div>
        </main>
      </div>
      ${renderLogoutModal()}
    </section>
  `;
}

// Render Profile Page
function renderApotekerProfile() {
  const todayLabel = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
  const apotekerName = currentUser?.name || 'Apoteker';
  const user = getUserById(currentUser?.id) || currentUser;
  
  return `
    <section class="bg-[#f5f7fb] min-h-screen w-full overflow-x-hidden">
      <div class="flex h-screen overflow-hidden w-full">
        ${renderApotekerSidebar('profile')}
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
                <span>${todayLabel}</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-50 border border-slate-200">
                <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 text-white flex items-center justify-center text-xs font-bold">
                  ${apotekerName.charAt(0).toUpperCase()}
                </div>
                <span class="text-sm font-medium text-slate-700 hidden sm:block">${apotekerName}</span>
              </div>
            </div>
          </div>

          <div class="px-4 sm:px-8 lg:px-10 py-8 space-y-6">
            <!-- Profile Header Card -->
            <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 shadow-xl shadow-emerald-200/50">
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
                      <div class="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-4xl font-bold shadow-inner">
                        ${apotekerName.charAt(0).toUpperCase()}
                      </div>
                    </div>
                    <div class="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-emerald-400 border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <!-- Info -->
                  <div class="flex-1 text-center sm:text-left space-y-3">
                    <div>
                      <h2 class="text-3xl font-bold text-white mb-1">${user.name}</h2>
                      <p class="text-sm text-white/80 font-medium">Apoteker • Klinik Pratama</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                      <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                        <i data-lucide="mail" class="w-3.5 h-3.5 text-white"></i>
                        <span class="text-xs font-medium text-white">${user.email || '-'}</span>
                      </div>
                      <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                        <i data-lucide="at-sign" class="w-3.5 h-3.5 text-white"></i>
                        <span class="text-xs font-medium text-white">${user.username || '-'}</span>
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
                    <i data-lucide="activity" class="w-4 h-4 text-emerald-500"></i>
                    Ringkasan Akun
                  </h3>
                  <div class="space-y-3">
                    <div class="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                      <div class="flex items-center gap-2">
                        <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                          <i data-lucide="pill" class="w-4 h-4 text-emerald-500"></i>
                        </div>
                        <span class="text-xs text-slate-600 font-medium">Role</span>
                      </div>
                      <span class="text-xs font-bold text-slate-900 capitalize">${user.role}</span>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                      <div class="flex items-center gap-2">
                        <div class="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center">
                          <i data-lucide="shield-check" class="w-4 h-4 text-sky-500"></i>
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
                        <div class="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                          <i data-lucide="award" class="w-4 h-4 text-amber-500"></i>
                        </div>
                        <span class="text-xs text-slate-600 font-medium">Username</span>
                      </div>
                      <span class="text-xs font-bold text-slate-900">${user.username}</span>
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
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-200">
                      <i data-lucide="user-edit" class="w-5 h-5 text-white"></i>
                    </div>
                  </div>
                  
                  <form id="apotekerProfileForm" class="space-y-5">
                    <div class="grid sm:grid-cols-2 gap-5">
                      <div class="sm:col-span-2">
                        <label class="block text-xs font-semibold text-slate-600 mb-2">Nama Lengkap</label>
                        <div class="relative">
                          <div class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400">
                            <i data-lucide="user"></i>
                          </div>
                          <input type="text" name="name" value="${user.name}" placeholder="Masukkan nama lengkap" class="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all">
                        </div>
                      </div>
                      
                      <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-2">Email</label>
                        <div class="relative">
                          <div class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400">
                            <i data-lucide="mail"></i>
                          </div>
                          <input type="email" name="email" value="${user.email || ''}" placeholder="email@example.com" class="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all">
                        </div>
                      </div>
                      
                      <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-2">Username</label>
                        <div class="relative">
                          <div class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400">
                            <i data-lucide="at-sign"></i>
                          </div>
                          <input type="text" name="username" value="${user.username || ''}" placeholder="username" class="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all">
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
                          <input type="password" name="newPassword" placeholder="Minimal 8 karakter" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all">
                        </div>
                      </div>
                    </div>
                    
                    <div class="flex items-center gap-3 pt-4">
                      <button type="submit" class="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl text-sm font-bold hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 hover:-translate-y-0.5">
                        Simpan Perubahan
                      </button>
                      <button type="button" onclick="document.getElementById('apotekerProfileForm').reset()" class="px-4 py-3 bg-slate-50 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-100 transition-all border border-slate-200">
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
      ${renderLogoutModal()}
    </section>
  `;
}

// Logout Modal
function renderLogoutModal() {
  return `
    <div id="logout-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/30 backdrop-blur-sm">
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        <div class="p-8 text-center">
          <!-- Icon -->
          <div class="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center mx-auto mb-6">
            <i data-lucide="log-out" class="w-8 h-8 text-rose-500"></i>
          </div>
          
          <!-- Title and Description -->
          <h3 class="text-xl font-bold text-slate-800 mb-3">Keluar dari sistem?</h3>
          <p class="text-sm text-slate-500 leading-relaxed mb-8">
            Anda akan keluar dari akun apoteker dan perlu login kembali untuk mengakses dashboard.
          </p>
          
          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-3">
            <button onclick="confirmLogout()" class="flex-1 bg-rose-500 text-white py-3.5 rounded-2xl font-bold hover:bg-rose-600 transition-all shadow-md shadow-rose-200 hover:shadow-lg hover:shadow-rose-300 text-sm">
              Ya, Logout
            </button>
            <button onclick="closeLogoutModal()" class="flex-1 bg-slate-50 text-slate-700 py-3.5 rounded-2xl font-semibold hover:bg-slate-100 transition-all border border-slate-200 text-sm">
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function openLogoutModal() {
  const modal = document.getElementById('logout-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeLogoutModal() {
  const modal = document.getElementById('logout-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function confirmLogout() {
  currentUser = null;
  save(LS_KEYS.user, null);
  window.location.href = 'index.html';
}

function logout() {
  openLogoutModal();
}

function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  const menu = document.getElementById('mobile-menu');
  if (drawer && menu) {
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      setTimeout(() => drawer.classList.remove('-translate-x-full'), 10);
    } else {
      drawer.classList.add('-translate-x-full');
      setTimeout(() => menu.classList.add('hidden'), 300);
    }
  }
}

// ============================================================================
// EVENT HANDLERS & INTERACTIONS
// ============================================================================

function setupApotekerInteractions() {
  // Medicine form
  const medForm = document.getElementById('apotekerMedForm');
  if (medForm) {
    medForm.onsubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(medForm);
      const name = formData.get('name')?.toString().trim();
      const dosis = formData.get('dosis')?.toString().trim();
      const qty = parseInt(formData.get('qty')?.toString() || '0');
      
      if (!name) return;
      
      const now = new Date();
      medicineStock.push({
        id: Date.now(),
        name,
        dosis,
        qty,
        status: qty > 0 ? 'Tersedia' : 'Habis',
        addedDate: now.toISOString().slice(0, 10), // YYYY-MM-DD
        addedTime: now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) // HH:MM
      });
      persistMedicines();
      medForm.reset();
      navigateTo('medicines');
      showToast('Obat berhasil ditambahkan', 'success');
    };
  }

  // Outflow form
  const outflowForm = document.getElementById('apotekerOutflowForm');
  if (outflowForm) {
    outflowForm.onsubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(outflowForm);
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
      
      if ((med.qty || 0) < amount) {
        showToast('Stok tidak mencukupi', 'error');
        return;
      }
      
      // Update stock
      med.qty = (med.qty || 0) - amount;
      if (med.qty <= 0) med.status = 'Habis';
      persistMedicines();
      
      // Record outflow
      const outflow = load('medicineOutflow', []);
      const now = new Date();
      outflow.unshift({
        id: Date.now(),
        medicineId: med.id,
        medicineName: med.name,
        amount,
        patient,
        date: now.toISOString().slice(0, 10),
        time: now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      });
      save('medicineOutflow', outflow);
      
      outflowForm.reset();
      navigateTo('outflow');
      showToast('Pengeluaran berhasil dicatat', 'success');
    };
  }

  // Profile form
  const profileForm = document.getElementById('apotekerProfileForm');
  if (profileForm) {
    profileForm.onsubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(profileForm);
      const updates = {
        name: formData.get('name')?.toString().trim() || currentUser.name,
        email: formData.get('email')?.toString().trim() || currentUser.email,
        phone: formData.get('phone')?.toString().trim() || currentUser.phone
      };
      
      const currentPassword = formData.get('currentPassword')?.toString();
      const newPassword = formData.get('newPassword')?.toString();
      
      if (currentPassword && newPassword) {
        const user = getUserById(currentUser.id);
        if (user && user.password === currentPassword) {
          updates.password = newPassword;
        } else {
          showToast('Password saat ini salah', 'error');
          return;
        }
      }
      
      const updated = updateUser(currentUser.id, updates);
      if (updated) {
        currentUser = { ...currentUser, ...updates };
        save(LS_KEYS.user, currentUser);
        profileForm.reset();
        navigateTo('profile');
        showToast('Profil berhasil diperbarui', 'success');
      }
    };
  }
}

// Medicine actions
function toggleMedStatusApoteker(index) {
  medicineStock[index].status = medicineStock[index].status === 'Tersedia' ? 'Habis' : 'Tersedia';
  persistMedicines();
  navigateTo('medicines');
}

function deleteMedicineApoteker(index) {
  if (!confirm('Hapus obat ini?')) return;
  medicineStock.splice(index, 1);
  persistMedicines();
  navigateTo('medicines');
  showToast('Obat dihapus', 'info');
}

// Edit medicine with modal
function editMedicineApoteker(index) {
  const med = medicineStock[index];
  if (!med) return;
  
  // Populate form with medicine data
  document.getElementById('editMedicineIndex').value = index;
  document.getElementById('editMedicineName').value = med.name;
  document.getElementById('editMedicineDosis').value = med.dosis || '';
  document.getElementById('editMedicineQty').value = med.qty != null ? med.qty : '';
  
  // Show modal
  document.getElementById('editMedicineModal').classList.remove('hidden');
}

// Close edit medicine modal
function closeEditMedicineModal() {
  document.getElementById('editMedicineModal').classList.add('hidden');
  document.getElementById('editMedicineForm').reset();
}

// Save edited medicine
function saveEditedMedicine(event) {
  event.preventDefault();
  
  const index = parseInt(document.getElementById('editMedicineIndex').value);
  const name = document.getElementById('editMedicineName').value.trim();
  const dosis = document.getElementById('editMedicineDosis').value.trim();
  const qty = parseInt(document.getElementById('editMedicineQty').value);
  
  // Validate name and qty
  if (!name) {
    showToast('Nama obat tidak boleh kosong', 'error');
    return;
  }
  
  if (isNaN(qty) || qty < 0) {
    showToast('Jumlah stok harus angka valid', 'error');
    return;
  }
  
  // Update medicine data
  medicineStock[index] = {
    ...medicineStock[index],
    name,
    dosis,
    qty
  };
  
  persistMedicines();
  closeEditMedicineModal();
  navigateTo('medicines');
  showToast('Obat berhasil diperbarui', 'success');
}

// Toast notification
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  const colors = {
    success: 'bg-emerald-500',
    error: 'bg-rose-500',
    info: 'bg-slate-700'
  };
  
  toast.className = `${colors[type]} text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-2 min-w-[200px] transform transition-all duration-300 translate-x-full`;
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle' : type === 'error' ? 'alert-circle' : 'info'}" class="w-4 h-4"></i>
    <span class="text-sm font-medium">${message}</span>
  `;
  
  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();
  
  setTimeout(() => toast.classList.remove('translate-x-full'), 10);
  setTimeout(() => {
    toast.classList.add('translate-x-full');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Persist medicine stock to localStorage
function persistMedicines() {
  save(LS_KEYS.medicines, medicineStock);
}

// ============================================================================
// PRINT & EXPORT FUNCTIONS
// ============================================================================

// Print Daftar Obat dengan Kop Surat
function printMedicineList() {
  const printContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Daftar Stok Obat - Klinik Pratama</title>
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
      <div class="document-title">LAPORAN STOK OBAT</div>
      
      <!-- Info Section -->
      <div class="info-section">
        <div class="info-row">
          <span>Tanggal Cetak: ${new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span>Jam: ${new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB</span>
        </div>
        <div class="info-row">
          <span>Total Item: ${medicineStock.length} obat</span>
          <span>Total Stok: ${medicineStock.reduce((sum, m) => sum + (m.qty || 0), 0)} pcs</span>
        </div>
      </div>
      
      <!-- Table -->
      <table>
        <thead>
          <tr>
            <th style="width: 5%;">No</th>
            <th style="width: 35%;">Nama Obat</th>
            <th style="width: 20%;">Dosis</th>
            <th style="width: 15%;">Stok</th>
            <th style="width: 15%;">Status</th>
            <th style="width: 10%;">Keterangan</th>
          </tr>
        </thead>
        <tbody>
          ${medicineStock.map((med, idx) => `
            <tr>
              <td style="text-align: center;">${idx + 1}</td>
              <td>${med.name}</td>
              <td>${med.dosis || '-'}</td>
              <td style="text-align: center;">${med.qty != null ? med.qty : 0} pcs</td>
              <td style="text-align: center;">${med.status}</td>
              <td style="text-align: center;">${(med.qty || 0) < 10 && med.status === 'Tersedia' ? '<strong>SEGERA ISI</strong>' : '-'}</td>
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
          <div>Disiapkan oleh,</div>
          <div>Apoteker</div>
          <div class="signature-line">${currentUser?.name || 'Apoteker'}</div>
        </div>
      </div>
      
      <!-- Stamp Box -->
      <div style="text-align: center; margin-top: 20px;">
        <div class="stamp-box">Cap Klinik</div>
      </div>
      
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

// Export Medicine List to Excel
function exportMedicineToExcel() {
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "KLINIK PRATAMA - LAPORAN STOK OBAT\n";
  csvContent += `Tanggal Cetak: ${new Date().toLocaleDateString('id-ID')}\n\n`;
  csvContent += "No,Nama Obat,Dosis,Stok (pcs),Status,Keterangan\n";
  
  medicineStock.forEach((med, idx) => {
    const keterangan = (med.qty || 0) < 10 && med.status === 'Tersedia' ? 'SEGERA ISI' : '';
    csvContent += `${idx + 1},"${med.name}","${med.dosis || '-'}",${med.qty != null ? med.qty : 0},${med.status},"${keterangan}"\n`;
  });
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Laporan_Stok_Obat_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('File Excel berhasil diunduh', 'success');
}

// Print Riwayat Pengeluaran dengan Kop Surat
function printOutflowHistory() {
  const outflowData = load('medicineOutflow', []) || [];
  const todayOutflow = outflowData.filter(o => o.date === new Date().toISOString().slice(0,10));
  const totalAmount = todayOutflow.reduce((sum, o) => sum + (o.amount || 0), 0);
  
  const printContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Riwayat Pengeluaran Obat - Klinik Pratama</title>
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
        .summary-section {
          margin-top: 20px;
          padding: 10px;
          border: 2px solid #000;
          background-color: #f9f9f9;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
          font-size: 12px;
        }
        .total-row {
          font-weight: bold;
          font-size: 14px;
          border-top: 2px solid #000;
          padding-top: 5px;
          margin-top: 5px;
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
      <div class="document-title">LAPORAN PENGELUARAN OBAT</div>
      
      <!-- Info Section -->
      <div class="info-section">
        <div class="info-row">
          <span>Tanggal Cetak: ${new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span>Jam: ${new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB</span>
        </div>
        <div class="info-row">
          <span>Periode: Hari Ini</span>
          <span>Tanggal: ${new Date().toISOString().slice(0,10)}</span>
        </div>
      </div>
      
      <!-- Table -->
      <table>
        <thead>
          <tr>
            <th style="width: 5%;">No</th>
            <th style="width: 15%;">Waktu</th>
            <th style="width: 35%;">Nama Obat</th>
            <th style="width: 25%;">Pasien</th>
            <th style="width: 10%;">Jumlah</th>
            <th style="width: 10%;">Keterangan</th>
          </tr>
        </thead>
        <tbody>
          ${todayOutflow.length > 0 ? todayOutflow.map((o, idx) => `
            <tr>
              <td style="text-align: center;">${idx + 1}</td>
              <td style="text-align: center;">${o.time}</td>
              <td>${o.medicineName}</td>
              <td>${o.patient || 'Umum'}</td>
              <td style="text-align: center;">${o.amount}</td>
              <td style="text-align: center;">Keluar</td>
            </tr>
          `).join('') : `
            <tr>
              <td colspan="6" style="text-align: center; padding: 20px;">Tidak ada data pengeluaran hari ini</td>
            </tr>
          `}
        </tbody>
      </table>
      
      <!-- Summary Section -->
      ${todayOutflow.length > 0 ? `
        <div class="summary-section">
          <div class="summary-row">
            <span>Total Transaksi:</span>
            <span><strong>${todayOutflow.length} transaksi</strong></span>
          </div>
          <div class="summary-row total-row">
            <span>Total Obat Keluar:</span>
            <span><strong>${totalAmount} item</strong></span>
          </div>
        </div>
      ` : ''}
      
      <!-- Signature Section -->
      <div class="signature-section">
        <div class="signature-box">
          <div>Mengetahui,</div>
          <div>Kepala Klinik</div>
          <div class="signature-line">dr. Fadhila Noholo</div>
        </div>
        <div class="signature-box">
          <div>Dibuat oleh,</div>
          <div>Apoteker</div>
          <div class="signature-line">${currentUser?.name || 'Apoteker'}</div>
        </div>
      </div>
      
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

// Export Outflow History to Excel
function exportOutflowToExcel() {
  const outflowData = load('medicineOutflow', []) || [];
  const todayOutflow = outflowData.filter(o => o.date === new Date().toISOString().slice(0,10));
  const totalAmount = todayOutflow.reduce((sum, o) => sum + (o.amount || 0), 0);
  
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "KLINIK PRATAMA - LAPORAN PENGELUARAN OBAT\n";
  csvContent += `Tanggal Cetak: ${new Date().toLocaleDateString('id-ID')}\n`;
  csvContent += `Periode: Hari Ini (${new Date().toISOString().slice(0,10)})\n\n`;
  csvContent += "No,Waktu,Nama Obat,Pasien,Jumlah,Keterangan\n";
  
  todayOutflow.forEach((o, idx) => {
    csvContent += `${idx + 1},${o.time},"${o.medicineName}",${o.patient || 'Umum'},${o.amount},Keluar\n`;
  });
  
  if (todayOutflow.length > 0) {
    csvContent += `\nTotal Transaksi:,${todayOutflow.length}\n`;
    csvContent += `Total Obat Keluar:,${totalAmount}\n`;
  }
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Laporan_Pengeluaran_Obat_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('File Excel berhasil diunduh', 'success');
}

// Print Laporan Obat Masuk Hari Ini dengan Kop Surat
function printMedicineInflowToday() {
  // Calculate today's new medicines (added today)
  const today = new Date().toISOString().slice(0, 10);
  
  // For this demo, we'll show all medicines as "inflow"
  // In real scenario, you might want to track when each medicine was added
  const todayMeds = medicineStock; // Show all current stock as inflow for demo
  const totalMeds = todayMeds.length;
  const totalQty = todayMeds.reduce((sum, m) => sum + (m.qty || 0), 0);
  
  const printContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Laporan Obat Masuk - Klinik Pratama</title>
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
        .status-available {
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
      <div class="document-title">LAPORAN OBAT MASUK</div>
      
      <!-- Info Section -->
      <div class="info-section">
        <div class="info-row">
          <span>Tanggal Cetak: ${new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span>Jam: ${new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB</span>
        </div>
        <div class="info-row">
          <span>Periode: Hari Ini</span>
          <span>Tanggal: ${today}</span>
        </div>
      </div>
      
      ${(() => {
        // Filter medicines added today
        const todayMeds = medicineStock.filter(m => m.addedDate === today);
        const totalMeds = todayMeds.length;
        const totalQty = todayMeds.reduce((sum, m) => sum + (m.qty || 0), 0);
        
        if (totalMeds === 0) {
          return `
            <div class="no-data">
              <p style="font-size: 14px; margin-bottom: 10px;">📭 Tidak ada obat masuk hari ini</p>
              <p style="font-size: 12px;">Belum ada data penambahan stok obat pada tanggal ${today}</p>
            </div>
          `;
        }
        
        return `
          <!-- Table -->
          <table>
            <thead>
              <tr>
                <th style="width: 5%;">No</th>
                <th style="width: 40%;">Nama Obat</th>
                <th style="width: 20%;">Dosis</th>
                <th style="width: 20%;">Stok Masuk</th>
                <th style="width: 15%;">Waktu Tambah</th>
              </tr>
            </thead>
            <tbody>
              ${todayMeds.map((med, idx) => `
                <tr>
                  <td style="text-align: center;">${idx + 1}</td>
                  <td>${med.name}</td>
                  <td>${med.dosis || '-'}</td>
                  <td style="text-align: center; font-weight: bold;">${med.qty != null ? med.qty : 0} pcs</td>
                  <td style="text-align: center;">${med.addedTime || '-'}</td>
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
              <div>Apoteker</div>
              <div class="signature-line">Apoteker Klinik</div>
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

// ============================================================================
// INITIALIZATION
// Moved to apoteker.js to ensure all functions are available
// ============================================================================

// ============================================================================
// GLOBAL EXPORTS
// ============================================================================

window.navigateTo = navigateTo;
window.toggleMobileMenu = toggleMobileMenu;
window.openLogoutModal = openLogoutModal;
window.closeLogoutModal = closeLogoutModal;
window.confirmLogout = confirmLogout;
window.logout = logout;
window.toggleMedStatusApoteker = toggleMedStatusApoteker;
window.deleteMedicineApoteker = deleteMedicineApoteker;
window.editMedicineApoteker = editMedicineApoteker;
window.closeEditMedicineModal = closeEditMedicineModal;
window.saveEditedMedicine = saveEditedMedicine;
window.printMedicineList = printMedicineList;
window.exportMedicineToExcel = exportMedicineToExcel;
window.printOutflowHistory = printOutflowHistory;
window.exportOutflowToExcel = exportOutflowToExcel;
window.printMedicineInflowToday = printMedicineInflowToday;

// Export render functions globally
window.renderApotekerSidebar = renderApotekerSidebar;
window.renderApotekerDashboard = renderApotekerDashboard;
window.renderApotekerMedicines = renderApotekerMedicines;
window.renderApotekerOutflow = renderApotekerOutflow;
window.renderApotekerProfile = renderApotekerProfile;
window.renderLogoutModal = renderLogoutModal;
