// Shared site behavior: mobile nav toggle, footer year, simple form validation
document.addEventListener('DOMContentLoaded', function () {
  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.style.display = expanded ? '' : 'block';
    });

    // Close nav when clicking outside (mobile)
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !navToggle.contains(e.target) && window.innerWidth < 640) {
        nav.style.display = '';
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Keep nav visible on resize if desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 640) nav.style.display = '';
    });
  }

  // Newsletter basic validation
  const newsletter = document.querySelector('.newsletter');
  if (newsletter) {
    newsletter.addEventListener('submit', (e) => {
      const email = newsletter.querySelector('input[type="email"]');
      if (!email || !email.value || !email.checkValidity()) {
        e.preventDefault();
        email.focus();
        alert('Please enter a valid email address.');
      } else {
        // allow submit to Formspree or your backend
      }
    });
  }

  // Contact form validation
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const email = contactForm.querySelector('input[type="email"]');
      if (!email || !email.value || !email.checkValidity()) {
        e.preventDefault();
        email.focus();
        alert('Please enter a valid email address.');
      }
    });
  }
});