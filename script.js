// CEROMIX Interactive Scripts
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navOverlay = document.querySelector('.nav-overlay');
  if (hamburger && navOverlay) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navOverlay.classList.toggle('open');
      document.body.style.overflow = navOverlay.classList.contains('open') ? 'hidden' : '';
    });
    navOverlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navOverlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
