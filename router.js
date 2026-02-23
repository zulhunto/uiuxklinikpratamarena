// Router/Navigation function for Klinik Pratama
// Handles page navigation and routing logic

function navigateTo(page, params = null) {
  const content = document.getElementById('app-content');
  if (!content) return;
  
  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = link.dataset.page;
    if (linkPage === page) {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  switch (page) {
    case 'home': content.innerHTML = renderHome(); break;
    case 'about': content.innerHTML = renderAbout(); break;
    case 'services': content.innerHTML = renderServices(); break;
    case 'medicine': content.innerHTML = renderMedicine(); break;
    case 'contact': content.innerHTML = renderContact(); break;
    case 'detail': content.innerHTML = renderDetail(params); break;
    case 'register': content.innerHTML = renderRegister(params); break;
    default: content.innerHTML = renderHome();
  }
  
  // Re-initialize icons
  if (window.lucide && lucide.createIcons) {
    lucide.createIcons();
  }
  
  // Close mobile menu
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) mobileMenu.classList.add('hidden');
}

// Export to global scope for inline HTML handlers
window.navigateTo = navigateTo;
