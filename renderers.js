// ============================================================================
// PAGE RENDERERS
// Functions to render different pages/views
// Note: Requires shared.js for data (servicesData, medicineStock, registrations)
// ============================================================================

/**
 * Render Home Page
 */
function renderHome() {
  return `
    <section class="hero-gradient pt-20 pb-32 px-6 overflow-hidden">
      <div class="container mx-auto flex flex-col lg:flex-row items-center relative">
        <div class="absolute -top-24 -left-24 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-30"></div>
        <div class="lg:w-1/2 space-y-8 relative z-10">
          <div class="inline-flex items-center space-x-2 bg-sky-50 border border-sky-100 px-4 py-2 rounded-full text-sky-600 text-xs font-extrabold tracking-widest uppercase">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span>Terakreditasi Paripurna</span>
          </div>
          <h1 class="text-5xl lg:text-7xl font-extrabold text-slate-800 leading-[1.1] tracking-tight">
            solusi Sehat <br/> Untuk <span class="text-sky-500">Keluarga.</span>
          </h1>
          <p class="text-lg text-slate-500 max-w-lg leading-relaxed">
            Nikmati pengalaman medis modern dengan antrean digital, dokter ahli, dan fasilitas nyaman di pusat Kota Medika.
          </p>
          <div class="flex flex-wrap gap-4 pt-4">
            <button onclick="navigateTo('services')" class="bg-sky-500 text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-sky-200 hover:bg-sky-600 transform hover:-translate-y-1 transition-all">Cek Layanan Medis</button>
            <button onclick="navigateTo('about')" class="bg-white text-slate-700 px-10 py-5 rounded-2xl font-bold border border-slate-200 hover:bg-slate-50 transition-all">Profil Klinik</button>
          </div>
        </div>
        <div class="lg:w-1/2 mt-20 lg:mt-0 relative flex justify-center lg:justify-end">
          <div class="relative w-full max-w-md">
            <div class="absolute inset-0 bg-sky-500 rounded-[3rem] rotate-6 transform opacity-10"></div>
            <div class="relative bg-white p-6 rounded-[3rem] shadow-2xl border border-white">
              <div class="aspect-[4/5] bg-slate-100 rounded-[2.5rem] flex items-center justify-center">
                <i data-lucide="hospital" class="w-32 h-32 text-slate-300"></i>
              </div>
              <div class="absolute -bottom-6 -left-6 glass p-6 rounded-3xl shadow-xl flex items-center space-x-4 border border-white/50">
                <div class="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center">
                  <i data-lucide="users" class="w-6 h-6"></i>
                </div>
                <div>
                  <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">Pasien Puas</p>
                  <p class="text-xl font-extrabold text-slate-800">12.5k+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Render About Page
 */
function renderAbout() {
  // [Full about page content - keeping it concise for brevity]
  return `
    <section class="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      <!-- Hero Section -->
      <div class="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 py-20 sm:py-28">
        <div class="absolute inset-0">
          <div class="absolute top-0 left-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-[120px]"></div>
          <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-[120px]"></div>
        </div>
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-3xl mx-auto text-center">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-100 shadow-sm mb-6">
              <i data-lucide="sparkles" class="w-4 h-4 text-sky-500"></i>
              <span class="text-sm font-medium text-sky-600">Mengenal Lebih Dekat</span>
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
              Kesehatan Anda <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Prioritas Kami</span>
            </h1>
            <p class="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Berdiri sejak tahun 2010, Klinik Pratama telah bertransformasi menjadi pusat kesehatan primer terpercaya yang melayani ribuan keluarga dengan dedikasi dan profesionalisme.
            </p>
          </div>
        </div>
      </div>

      <!-- Stats Row -->
      <div class="container mx-auto px-6 -mt-12 relative z-20">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div class="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
            <div class="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mx-auto mb-3">
              <i data-lucide="users" class="w-6 h-6 text-sky-500"></i>
            </div>
            <p class="text-3xl font-bold text-slate-900">15+</p>
            <p class="text-xs text-slate-500 mt-1">Dokter Spesialis</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
            <div class="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mx-auto mb-3">
              <i data-lucide="clock" class="w-6 h-6 text-emerald-500"></i>
            </div>
            <p class="text-3xl font-bold text-slate-900">24/7</p>
            <p class="text-xs text-slate-500 mt-1">Layanan Darurat</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
            <div class="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mx-auto mb-3">
              <i data-lucide="heart" class="w-6 h-6 text-amber-500"></i>
            </div>
            <p class="text-3xl font-bold text-slate-900">100k+</p>
            <p class="text-xs text-slate-500 mt-1">Pasien Terlayani</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
            <div class="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mx-auto mb-3">
              <i data-lucide="award" class="w-6 h-6 text-indigo-500"></i>
            </div>
            <p class="text-3xl font-bold text-slate-900">A</p>
            <p class="text-xs text-slate-500 mt-1">Akreditasi Kemenkes</p>
          </div>
        </div>
      </div>

      <!-- Visi Misi Nilai -->
      <div class="container mx-auto px-6 py-20">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Visi, Misi & Nilai</h2>
          <p class="text-slate-500">Komitmen kami dalam memberikan pelayanan kesehatan terbaik</p>
        </div>
        <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div class="group bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-sky-100/30 transition-all hover:-translate-y-1">
            <div class="w-14 h-14 bg-gradient-to-br from-sky-400 to-blue-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-sky-200">
              <i data-lucide="target" class="w-7 h-7"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Visi</h3>
            <p class="text-slate-500 text-sm leading-relaxed">Menjadi klinik primer percontohan yang berbasis teknologi dan pelayanan humanis di Indonesia.</p>
          </div>
          <div class="group bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-emerald-100/30 transition-all hover:-translate-y-1">
            <div class="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
              <i data-lucide="heart-handshake" class="w-7 h-7"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Misi</h3>
            <p class="text-slate-500 text-sm leading-relaxed">Memberikan pelayanan medis yang cepat, akurat, dan terjangkau bagi seluruh lapisan masyarakat.</p>
          </div>
          <div class="group bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-amber-100/30 transition-all hover:-translate-y-1">
            <div class="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-200">
              <i data-lucide="shield-check" class="w-7 h-7"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Nilai</h3>
            <p class="text-slate-500 text-sm leading-relaxed">Integritas, Empati, dan Keunggulan Klinis dalam setiap interaksi pasien.</p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="container mx-auto px-6 py-16">
        <div class="max-w-4xl mx-auto text-center">
          <div class="bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div class="relative z-10">
              <h3 class="text-2xl sm:text-3xl font-bold text-white mb-4">Siap Melayani Kesehatan Anda</h3>
              <p class="text-sky-100 mb-8 max-w-xl mx-auto">Jadwalkan kunjungan Anda sekarang dan rasakan pelayanan kesehatan yang berbeda.</p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button onclick="navigateTo('services')" class="px-8 py-4 bg-white text-sky-600 rounded-xl font-bold hover:bg-sky-50 transition-all flex items-center justify-center gap-2">
                  <i data-lucide="calendar-plus" class="w-5 h-5"></i>
                  <span>Buat Janji</span>
                </button>
                <button onclick="navigateTo('contact')" class="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <i data-lucide="phone" class="w-5 h-5"></i>
                  <span>Hubungi Kami</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Render Services Page
 */
function renderServices() {
  return `
    <section class="min-h-screen bg-gradient-to-b from-white via-sky-50/20 to-white py-16 sm:py-24">
      <div class="container mx-auto px-6">
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 mb-6">
            <i data-lucide="heart-pulse" class="w-4 h-4 text-sky-500"></i>
            <span class="text-sm font-medium text-sky-600">Layanan Kami</span>
          </div>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Pelayanan <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Medis</span>
          </h1>
          <p class="text-slate-500 text-lg leading-relaxed">Pilih layanan kesehatan yang Anda butuhkan. Tim medis kami siap memberikan pelayanan terbaik.</p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          ${servicesData.map((s, idx) => `
            <div class="group bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-sky-100/30 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <!-- Icon -->
              <div class="flex justify-center mb-6">
                <div class="w-16 h-16 rounded-2xl flex items-center justify-center ${
                  idx % 4 === 0
                    ? 'bg-gradient-to-br from-sky-400 to-blue-500 shadow-lg shadow-sky-200'
                    : idx % 4 === 1
                      ? 'bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-200'
                      : idx % 4 === 2
                        ? 'bg-gradient-to-br from-indigo-400 to-violet-500 shadow-lg shadow-indigo-200'
                        : 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-200'
                }">
                  <i data-lucide="${s.icon}" class="w-8 h-8 text-white"></i>
                </div>
              </div>
              
              <!-- Content -->
              <h3 class="text-xl font-bold text-slate-900 mb-3 text-center group-hover:text-sky-600 transition-colors">${s.name}</h3>
              <p class="text-slate-500 text-sm leading-relaxed mb-6 text-center flex-grow">${s.desc}</p>
              
              <!-- Info -->
              <div class="space-y-2 mb-6">
                <div class="flex items-center gap-2 text-xs text-slate-400">
                  <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                  <span>${s.schedule || 'Senin - Sabtu'}</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-slate-400">
                  <i data-lucide="user-md" class="w-3.5 h-3.5"></i>
                  <span>${s.doctor || 'Dokter Spesialis'}</span>
                </div>
              </div>
              
              <!-- Buttons -->
              <div class="space-y-3 pt-4 border-t border-slate-50">
                <button onclick="navigateTo('register', '${s.id}')" class="w-full bg-sky-500 text-white py-3.5 rounded-xl font-semibold hover:bg-sky-600 transition-all flex items-center justify-center gap-2 group/btn shadow-lg shadow-sky-200">
                  <span>Daftar Sekarang</span>
                  <i data-lucide="arrow-right" class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"></i>
                </button>
                <button onclick="navigateTo('detail', '${s.id}')" class="w-full text-slate-500 py-3 rounded-xl font-medium text-sm hover:bg-slate-50 hover:text-slate-700 transition-all flex items-center justify-center gap-2">
                  <i data-lucide="info" class="w-4 h-4"></i>
                  <span>Lihat Detail</span>
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Bottom CTA -->
        <div class="mt-16 text-center">
          <div class="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-slate-100 shadow-lg">
            <div class="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
              <i data-lucide="help-circle" class="w-5 h-5 text-sky-500"></i>
            </div>
            <div class="text-left">
              <p class="text-sm font-semibold text-slate-800">Butuh bantuan memilih layanan?</p>
              <p class="text-xs text-slate-500">Hubungi kami di <a href="tel:+6281234567890" class="text-sky-500 hover:underline">0812-3456-7890</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Render Service Detail Page
 */
function renderDetail(serviceId) {
  const service = servicesData.find(s => s.id === serviceId);
  if(!service) return renderHome();
  
  return `
    <section class="min-h-screen bg-gradient-to-b from-white via-sky-50/20 to-white py-8 sm:py-12">
      <div class="container mx-auto px-4 sm:px-6 max-w-6xl">
        <!-- Back Button -->
        <button onclick="navigateTo('services')" class="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-sky-600 transition-all mb-8">
          <div class="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-sky-200 group-hover:bg-sky-50 transition-all">
            <i data-lucide="arrow-left" class="w-5 h-5"></i>
          </div>
          <span>Kembali ke Layanan</span>
        </button>

        <!-- Main Card -->
        <div class="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-100/50 overflow-hidden">
          <!-- Hero Section -->
          <div class="relative bg-gradient-to-br from-sky-50 via-white to-blue-50 p-8 sm:p-12 lg:p-16">
            <div class="absolute top-0 right-0 w-64 h-64 bg-sky-200/30 rounded-full blur-[100px]"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-blue-200/30 rounded-full blur-[80px]"></div>
            
            <div class="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
              <!-- Icon Card -->
              <div class="shrink-0">
                <div class="w-32 h-32 sm:w-40 sm:h-40 rounded-[2rem] bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-xl shadow-sky-200">
                  <i data-lucide="${service.icon}" class="w-16 h-16 sm:w-20 sm:h-20 text-white"></i>
                </div>
              </div>
              
              <!-- Content -->
              <div class="flex-1 text-center lg:text-left">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-100 shadow-sm mb-4">
                  <i data-lucide="heart-pulse" class="w-4 h-4 text-sky-500"></i>
                  <span class="text-sm font-medium text-sky-600">Detail Layanan</span>
                </div>
                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">${service.name}</h1>
                <p class="text-slate-500 text-lg leading-relaxed max-w-2xl">${service.detail}</p>
              </div>
            </div>
          </div>

          <!-- Info Section -->
          <div class="p-8 sm:p-12 lg:p-16">
            <div class="grid md:grid-cols-2 gap-8 mb-12">
              <!-- Jadwal -->
              <div class="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                    <i data-lucide="calendar-days" class="w-6 h-6 text-sky-500"></i>
                  </div>
                  <div>
                    <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Jadwal Layanan</p>
                    <p class="text-lg font-bold text-slate-800">${service.schedule}</p>
                  </div>
                </div>
              </div>
              
              <!-- Dokter -->
              <div class="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <i data-lucide="user-md" class="w-6 h-6 text-emerald-500"></i>
                  </div>
                  <div>
                    <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Dokter Penanggung Jawab</p>
                    <p class="text-lg font-bold text-slate-800">${service.doctor}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Features List -->
            <div class="mb-12">
              <h3 class="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <i data-lucide="sparkles" class="w-5 h-5 text-amber-500"></i>
                Keunggulan Layanan
              </h3>
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="flex items-start gap-3 p-4 rounded-xl bg-sky-50/50 border border-sky-100">
                  <div class="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center shrink-0">
                    <i data-lucide="check" class="w-4 h-4 text-sky-500"></i>
                  </div>
                  <p class="text-sm text-slate-700">Pelayanan oleh tenaga medis profesional dan berpengalaman</p>
                </div>
                <div class="flex items-start gap-3 p-4 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <div class="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <i data-lucide="check" class="w-4 h-4 text-emerald-500"></i>
                  </div>
                  <p class="text-sm text-slate-700">Fasilitas modern dan peralatan medis terkini</p>
                </div>
                <div class="flex items-start gap-3 p-4 rounded-xl bg-indigo-50/50 border border-indigo-100">
                  <div class="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
                    <i data-lucide="check" class="w-4 h-4 text-indigo-500"></i>
                  </div>
                  <p class="text-sm text-slate-700">Harga terjangkau dengan kualitas pelayanan terbaik</p>
                </div>
                <div class="flex items-start gap-3 p-4 rounded-xl bg-amber-50/50 border border-amber-100">
                  <div class="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                    <i data-lucide="check" class="w-4 h-4 text-amber-500"></i>
                  </div>
                  <p class="text-sm text-slate-700">Proses pendaftaran mudah dan cepat</p>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100">
              <button onclick="navigateTo('register', '${service.id}')" class="flex-1 bg-sky-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-sky-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-200 group">
                <i data-lucide="calendar-plus" class="w-5 h-5"></i>
                <span>Daftar Sekarang</span>
                <i data-lucide="arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
              </button>
              <a href="https://wa.me/6281234567890" target="_blank" class="flex-1 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold hover:border-sky-300 hover:bg-sky-50 transition-all flex items-center justify-center gap-2">
                <i data-lucide="message-circle" class="w-5 h-5 text-emerald-500"></i>
                <span>Tanya via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Help Text -->
        <p class="text-center text-sm text-slate-400 mt-8">
          Butuh bantuan? Hubungi kami di <a href="tel:+6281234567890" class="text-sky-500 hover:underline font-medium">0812-3456-7890</a>
        </p>
      </div>
    </section>
  `;
}

/**
 * Render Medicine Stock Page
 */
function renderMedicine() {
  const availableCount = medicineStock.filter(m => m.status === 'Tersedia').length;
  const totalCount = medicineStock.length;
  
  return `
    <section class="min-h-screen bg-gradient-to-b from-white via-sky-50/20 to-white py-16 sm:py-24">
      <div class="container mx-auto px-4 sm:px-6 max-w-5xl">
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
            <i data-lucide="pill" class="w-4 h-4 text-emerald-500"></i>
            <span class="text-sm font-medium text-emerald-600">Stok Obat</span>
          </div>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Inventory <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Apotek</span>
          </h1>
          <p class="text-slate-500 text-lg leading-relaxed">Pantau ketersediaan obat secara berkala sebelum datang ke klinik.</p>
        </div>

        <!-- Stats -->
        <div class="flex justify-center gap-4 mb-10">
          <div class="bg-white rounded-2xl px-6 py-4 border border-slate-100 shadow-lg shadow-slate-100/50 flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <i data-lucide="check-circle" class="w-5 h-5 text-emerald-500"></i>
            </div>
            <div>
              <p class="text-2xl font-bold text-slate-900">${availableCount}</p>
              <p class="text-xs text-slate-500">Tersedia</p>
            </div>
          </div>
          <div class="bg-white rounded-2xl px-6 py-4 border border-slate-100 shadow-lg shadow-slate-100/50 flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
              <i data-lucide="package" class="w-5 h-5 text-slate-500"></i>
            </div>
            <div>
              <p class="text-2xl font-bold text-slate-900">${totalCount}</p>
              <p class="text-xs text-slate-500">Total Obat</p>
            </div>
          </div>
        </div>

        <!-- Search -->
        <div class="max-w-xl mx-auto mb-8">
          <div class="relative">
            <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <i data-lucide="search" class="w-5 h-5"></i>
            </div>
            <input
              type="text"
              oninput="filterMedicineCards(this.value)"
              placeholder="Cari nama obat..."
              class="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-slate-200 text-slate-700 outline-none placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
          </div>
        </div>

        <!-- Medicine Cards Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          ${medicineStock.map((med, idx) => `
            <div class="group bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-emerald-100/20 hover:-translate-y-1 transition-all duration-300 p-6"
              data-medicine-card
              data-name="${med.name}"
              data-status="${med.status}">
              <!-- Icon & Name -->
              <div class="flex items-center gap-4 mb-4">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center ${
                  idx % 4 === 0
                    ? 'bg-gradient-to-br from-sky-400 to-blue-500 shadow-lg shadow-sky-200'
                    : idx % 4 === 1
                      ? 'bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-200'
                      : idx % 4 === 2
                        ? 'bg-gradient-to-br from-indigo-400 to-violet-500 shadow-lg shadow-indigo-200'
                        : 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-200'
                }">
                  <i data-lucide="pill" class="w-7 h-7 text-white"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-base font-bold text-slate-900 truncate">${med.name}</p>
                  <p class="text-xs text-slate-400">${med.dosis || ''}</p>
                </div>
              </div>
              
              <!-- Divider -->
              <div class="h-px bg-slate-100 mb-4"></div>
              
              <!-- Status & Stock -->
              <div class="flex items-center justify-between">
                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${
                  med.status === 'Tersedia'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                    : 'bg-rose-50 text-rose-700 border border-rose-100'
                }">
                  <span class="w-2 h-2 rounded-full ${
                    med.status === 'Tersedia' ? 'bg-emerald-500' : 'bg-rose-500'
                  }"></span>
                  ${med.status}
                </span>
                ${med.qty ? `
                  <span class="text-xs text-slate-400">
                    Stok: <span class="font-semibold text-slate-600">${med.qty}</span>
                  </span>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Info -->
        <div class="bg-amber-50 rounded-2xl p-6 border border-amber-100 max-w-2xl mx-auto">
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
              <i data-lucide="info" class="w-5 h-5 text-amber-500"></i>
            </div>
            <div>
              <p class="font-semibold text-amber-800 text-sm mb-1">Informasi Penting</p>
              <p class="text-sm text-amber-700/80 leading-relaxed">
                Informasi ketersediaan obat ini hanya bersifat panduan. Stok aktual dapat berubah sewaktu-waktu di loket apotek. Hubungi kami untuk konfirmasi ketersediaan obat tertentu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Filter medicine cards by search query
 */
function filterMedicineCards(query) {
  const cards = document.querySelectorAll('[data-medicine-card]');
  const normalized = query.trim().toLowerCase();
  cards.forEach(card => {
    const name = (card.dataset.name || '').toLowerCase();
    const status = card.dataset.status || '';
    if (!normalized) {
      card.classList.remove('hidden');
      return;
    }
    const matches = status === 'Tersedia' && name.includes(normalized);
    card.classList.toggle('hidden', !matches);
  });
}

/**
 * Render Contact Page
 */
function renderContact() {
  return `
    <section class="min-h-screen bg-gradient-to-b from-white via-sky-50/20 to-white py-16 sm:py-24">
      <div class="container mx-auto px-4 sm:px-6 max-w-6xl">
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 mb-6">
            <i data-lucide="headphones" class="w-4 h-4 text-sky-500"></i>
            <span class="text-sm font-medium text-sky-600">Hubungi Kami</span>
          </div>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Siap <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Melayani</span> Anda
          </h1>
          <p class="text-slate-500 text-lg leading-relaxed">Punya pertanyaan seputar layanan kami? Tim administrasi kami tersedia 24/7 untuk membantu kebutuhan medis Anda.</p>
        </div>

        <div class="grid lg:grid-cols-5 gap-8 items-start">
          <!-- Contact Info Cards -->
          <div class="lg:col-span-2 space-y-5">
            <!-- Alamat -->
            <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-sky-100/20 transition-all">
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-lg shadow-sky-200 shrink-0">
                  <i data-lucide="map-pin" class="w-7 h-7 text-white"></i>
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 text-lg mb-2">Alamat</h4>
                  <p class="text-slate-500 text-sm leading-relaxed">Jl. Kesehatan No. 123, Kelurahan Medika, Kota Sehat, Indonesia</p>
                  <a href="https://maps.google.com/?q=Klinik+Pratama+Jakarta" target="_blank" class="inline-flex items-center gap-1 text-sm text-sky-500 font-medium mt-3 hover:underline">
                    <span>Lihat di Google Maps</span>
                    <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                  </a>
                </div>
              </div>
            </div>

            <!-- Telepon -->
            <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-emerald-100/20 transition-all">
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-200 shrink-0">
                  <i data-lucide="phone" class="w-7 h-7 text-white"></i>
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 text-lg mb-2">Telepon</h4>
                  <p class="text-slate-500 text-sm mb-1">(021) 555-0192</p>
                  <p class="text-slate-500 text-sm">+62 812-3456-7890</p>
                  <p class="text-xs text-emerald-600 font-medium mt-2 flex items-center gap-1">
                    <i data-lucide="clock" class="w-3 h-3"></i>
                    <span>24 Jam Siaga</span>
                  </p>
                </div>
              </div>
            </div>

            <!-- WhatsApp -->
            <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-green-100/20 transition-all">
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-200 shrink-0">
                  <i data-lucide="message-circle" class="w-7 h-7 text-white"></i>
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 text-lg mb-2">WhatsApp</h4>
                  <p class="text-slate-500 text-sm mb-3">Chat langsung dengan tim admin kami</p>
                  <a href="https://wa.me/6281234567890" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-xl text-sm font-semibold hover:bg-green-600 transition-all">
                    <i data-lucide="message-circle" class="w-4 h-4"></i>
                    <span>Chat WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Email -->
            <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-indigo-100/20 transition-all">
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-200 shrink-0">
                  <i data-lucide="mail" class="w-7 h-7 text-white"></i>
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 text-lg mb-2">Email</h4>
                  <p class="text-slate-500 text-sm mb-1">info@klinikpratama.id</p>
                  <p class="text-slate-500 text-sm">support@klinikpratama.id</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Map -->
          <div class="lg:col-span-3">
            <div class="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 overflow-hidden">
              <div class="h-80 sm:h-[32rem] w-full">
                <iframe 
                  class="w-full h-full border-0"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Klinik%20Pratama%20Jakarta&t=&z=15&ie=UTF8&iwloc=near&output=embed">
                </iframe>
              </div>
              <div class="p-6 border-t border-slate-100 bg-slate-50/50">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p class="font-semibold text-slate-800">Lokasi Klinik Pratama</p>
                    <p class="text-sm text-slate-500 mt-0.5">Jl. Kesehatan No. 123, Jakarta</p>
                  </div>
                  <a href="https://maps.google.com/?q=Klinik+Pratama+Jakarta" target="_blank" class="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 text-white rounded-xl font-semibold hover:bg-sky-600 transition-all shrink-0">
                    <i data-lucide="navigation" class="w-4 h-4"></i>
                    <span>Buka di Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Info -->
        <div class="mt-12 text-center">
          <div class="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-slate-100 shadow-lg">
            <div class="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
              <i data-lucide="clock" class="w-5 h-5 text-amber-500"></i>
            </div>
            <div class="text-left">
              <p class="text-sm font-semibold text-slate-800">Jam Operasional</p>
              <p class="text-xs text-slate-500">Senin - Minggu: 08:00 - 20:00 | Gawat Darurat: 24 Jam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Render Register Page
 */
function renderRegister(serviceId = null){
  const selectedService = serviceId ? (servicesData.find(s => s.id === serviceId) || {}).name : null;
  return `
    <section class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50/30 py-8 sm:py-12">
      <div class="container mx-auto px-4 sm:px-6">
        <!-- Back Button -->
        <div class="max-w-3xl mx-auto mb-6">
          <button onclick="navigateTo('services')" class="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-sky-600 transition-all">
            <div class="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-sky-200 group-hover:bg-sky-50 transition-all">
              <i data-lucide="arrow-left" class="w-5 h-5"></i>
            </div>
            <span>Kembali ke Layanan</span>
          </button>
        </div>

        <!-- Header -->
        <div class="max-w-3xl mx-auto mb-8 text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 mb-4">
            <i data-lucide="file-text" class="w-4 h-4 text-sky-500"></i>
            <span class="text-xs font-semibold text-sky-600">Formulir Online</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Registrasi <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Pasien</span>
          </h1>
          <p class="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Isi data dengan lengkap untuk mempercepat proses verifikasi di loket ketika Anda datang ke klinik.
          </p>
        </div>

        <!-- Form Card -->
        <div class="max-w-3xl mx-auto">
          <div class="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
            <!-- Card Header -->
            <div class="relative bg-gradient-to-br from-sky-500 via-sky-600 to-blue-600 px-8 sm:px-10 py-8 text-white overflow-hidden">
              <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
              <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
              <div class="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div class="flex items-center gap-4">
                  <div class="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <i data-lucide="clipboard-list" class="w-7 h-7"></i>
                  </div>
                  <div>
                    <h2 class="text-xl sm:text-2xl font-bold tracking-tight">Data Pendaftaran</h2>
                    <p class="text-sky-100 text-xs sm:text-sm">Pastikan informasi sesuai identitas resmi</p>
                  </div>
                </div>
                ${selectedService ? `
                  <div class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-medium">
                    <i data-lucide="stethoscope" class="w-4 h-4"></i>
                    <span>${selectedService}</span>
                  </div>
                ` : ''}
              </div>
            </div>

            <!-- Form Content -->
            <form onsubmit="handleRegister(event)" class="px-6 sm:px-10 py-8">
              <div class="space-y-6">
                <!-- Personal Info Section -->
                <div class="bg-slate-50/50 rounded-2xl p-5 border border-slate-100">
                  <h3 class="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <div class="w-6 h-6 rounded-lg bg-sky-100 flex items-center justify-center">
                      <i data-lucide="user" class="w-3.5 h-3.5 text-sky-600"></i>
                    </div>
                    Informasi Pribadi
                  </h3>
                  <div class="space-y-4">
                    <div class="space-y-2">
                      <label class="text-xs font-semibold text-slate-700">Nama Lengkap <span class="text-rose-500">*</span></label>
                      <div class="relative">
                        <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <i data-lucide="user" class="w-4 h-4"></i>
                        </div>
                        <input type="text" name="name" required class="w-full pl-11 pr-4 py-3.5 bg-white rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-sm" placeholder="Masukkan nama lengkap">
                      </div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-4">
                      <div class="space-y-2">
                        <label class="text-xs font-semibold text-slate-700">NIK <span class="text-slate-400 font-normal">(opsional)</span></label>
                        <div class="relative">
                          <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            <i data-lucide="id-card" class="w-4 h-4"></i>
                          </div>
                          <input type="text" name="nik" maxlength="16" class="w-full pl-11 pr-4 py-3.5 bg-white rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-sm" placeholder="16 digit NIK">
                        </div>
                      </div>
                      <div class="space-y-2">
                        <label class="text-xs font-semibold text-slate-700">Umur <span class="text-rose-500">*</span></label>
                        <div class="relative">
                          <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            <i data-lucide="calendar" class="w-4 h-4"></i>
                          </div>
                          <input type="number" name="age" required min="0" max="150" class="w-full pl-11 pr-4 py-3.5 bg-white rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-sm" placeholder="Tahun">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Gender Section -->
                <div id="genderSection" class="bg-slate-50/50 rounded-2xl p-5 border border-slate-100">
                  <h3 class="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <div class="w-6 h-6 rounded-lg bg-indigo-100 flex items-center justify-center">
                      <i data-lucide="users" class="w-3.5 h-3.5 text-indigo-600"></i>
                    </div>
                    Jenis Kelamin <span class="text-rose-500">*</span>
                  </h3>
                  <div class="flex flex-wrap gap-3">
                    <label class="flex-1 min-w-[140px] cursor-pointer">
                      <input type="radio" name="gender" value="Laki-laki" required class="peer sr-only">
                      <div class="flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-slate-200 bg-white peer-checked:border-sky-500 peer-checked:bg-sky-50 transition-all">
                        <i data-lucide="user" class="w-5 h-5 text-slate-400 peer-checked:text-sky-500"></i>
                        <span class="text-sm font-medium text-slate-600 peer-checked:text-sky-700">Laki-laki</span>
                      </div>
                    </label>
                    <label class="flex-1 min-w-[140px] cursor-pointer">
                      <input type="radio" name="gender" value="Perempuan" required class="peer sr-only">
                      <div class="flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-slate-200 bg-white peer-checked:border-pink-500 peer-checked:bg-pink-50 transition-all">
                        <i data-lucide="user" class="w-5 h-5 text-slate-400 peer-checked:text-pink-500"></i>
                        <span class="text-sm font-medium text-slate-600 peer-checked:text-pink-700">Perempuan</span>
                      </div>
                    </label>
                  </div>
                </div>

                <!-- Contact & Address Section -->
                <div class="bg-slate-50/50 rounded-2xl p-5 border border-slate-100">
                  <h3 class="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <div class="w-6 h-6 rounded-lg bg-amber-100 flex items-center justify-center">
                      <i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-600"></i>
                    </div>
                    Kontak & Alamat <span class="text-rose-500">*</span>
                  </h3>
                  <div class="space-y-4">
                    <div class="space-y-2">
                      <label class="text-xs font-semibold text-slate-700">No HP / WhatsApp <span class="text-rose-500">*</span></label>
                      <div class="relative">
                        <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <i data-lucide="phone" class="w-4 h-4"></i>
                        </div>
                        <input type="tel" name="phone" required class="w-full pl-11 pr-4 py-3.5 bg-white rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-sm" placeholder="Contoh: 081234567890">
                      </div>
                    </div>
                    <div class="space-y-2">
                      <label class="text-xs font-semibold text-slate-700">Alamat <span class="text-rose-500">*</span></label>
                      <div class="relative">
                        <div class="absolute left-4 top-3.5 text-slate-400">
                          <i data-lucide="home" class="w-4 h-4"></i>
                        </div>
                        <textarea name="address" required rows="3" class="w-full pl-11 pr-4 py-3.5 bg-white rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-sm resize-none" placeholder="Masukkan alamat lengkap Anda..."></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Service & Date Section -->
                <div class="bg-slate-50/50 rounded-2xl p-5 border border-slate-100">
                  <h3 class="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <div class="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <i data-lucide="stethoscope" class="w-3.5 h-3.5 text-emerald-600"></i>
                    </div>
                    Detail Kunjungan <span class="text-rose-500">*</span>
                  </h3>
                  <div class="grid md:grid-cols-2 gap-5">
                    <div class="space-y-2">
                      <label class="text-xs font-semibold text-slate-700">Pilih Layanan</label>
                      <div class="relative">
                        <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <i data-lucide="heart-pulse" class="w-4 h-4"></i>
                        </div>
                        <select name="service" id="serviceSelect" required onchange="toggleComplaintField()" class="w-full pl-11 pr-10 py-3.5 bg-white rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all appearance-none text-sm">
                          ${servicesData.map(s => `<option value="${s.name}" data-id="${s.id}" ${serviceId === s.id ? 'selected' : ''}>${s.name}</option>`).join('')}
                        </select>
                        <div class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <i data-lucide="chevron-down" class="w-4 h-4"></i>
                        </div>
                      </div>
                    </div>
                    <div class="space-y-2">
                      <label class="text-xs font-semibold text-slate-700">Tanggal Kunjungan</label>
                      <div class="relative">
                        <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <i data-lucide="calendar-days" class="w-4 h-4"></i>
                        </div>
                        <input type="date" name="visitDate" required class="w-full pl-11 pr-4 py-3.5 bg-white rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-sm">
                      </div>
                    </div>
                  </div>
                  <!-- Keluhan Field (only for certain services) -->
                  <div id="complaintField" class="mt-4 space-y-2 hidden">
                    <label class="text-xs font-semibold text-slate-700">Keluhan <span class="text-rose-500">*</span></label>
                    <div class="relative">
                      <div class="absolute left-4 top-3.5 text-slate-400">
                        <i data-lucide="message-square" class="w-4 h-4"></i>
                      </div>
                      <textarea name="complaint" rows="3" class="w-full pl-11 pr-4 py-3.5 bg-white rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all text-sm resize-none" placeholder="Jelaskan keluhan atau gejala yang dirasakan..."></textarea>
                    </div>
                  </div>
                </div>

                <!-- Submit Buttons -->
                <div class="flex flex-col sm:flex-row gap-3 pt-2">
                  <button type="button" onclick="navigateTo('home')" class="sm:flex-1 px-6 py-4 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    <i data-lucide="x" class="w-4 h-4"></i>
                    <span>Batal</span>
                  </button>
                  <button type="submit" class="sm:flex-[2] bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                    <i data-lucide="send" class="w-4 h-4"></i>
                    <span>Kirim Pendaftaran</span>
                  </button>
                </div>
              </div>
            </form>

            <!-- Footer Info -->
            <div class="px-6 sm:px-10 py-6 border-t border-slate-100 bg-slate-50/50">
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100">
                  <div class="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                    <i data-lucide="shield-check" class="w-5 h-5 text-emerald-500"></i>
                  </div>
                  <div>
                    <p class="font-semibold text-slate-800 text-sm">Data Anda Aman</p>
                    <p class="text-xs text-slate-500 mt-0.5">Informasi hanya untuk keperluan administrasi klinik.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100">
                  <div class="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center shrink-0">
                    <i data-lucide="zap" class="w-5 h-5 text-sky-500"></i>
                  </div>
                  <div>
                    <p class="font-semibold text-slate-800 text-sm">Proses Lebih Cepat</p>
                    <p class="text-xs text-slate-500 mt-0.5">Registrasi online mengurangi waktu tunggu di loket.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Help Text -->
          <p class="text-center text-xs text-slate-400 mt-6">
            Butuh bantuan? Hubungi kami di <a href="tel:+6281234567890" class="text-sky-500 hover:underline">0812-3456-7890</a>
          </p>
        </div>
      </div>
    </section>
  `;
}

// Export renderers globally
window.renderHome = renderHome;
window.renderAbout = renderAbout;
window.renderServices = renderServices;
window.renderDetail = renderDetail;
window.renderMedicine = renderMedicine;
window.renderContact = renderContact;
window.renderRegister = renderRegister;
window.filterMedicineCards = filterMedicineCards;
