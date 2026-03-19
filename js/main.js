/* ============================================================
   EkushLabs — main.js
   Structure:
   1. Footer Year
   2. Navbar Scroll Effect
   3. Scroll Reveal
   4. Analytics Placeholder
============================================================ */


/* ─── 1. FOOTER YEAR ────────────────────────────────────────── */
// Automatically keeps copyright year current
const yearEl = document.getElementById('footer-year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


/* ─── 2. NAVBAR SCROLL EFFECT ───────────────────────────────── */
// Adds .scrolled class to navbar when user scrolls down
const navbar = document.getElementById('navbar');

if (navbar) {
  const handleNavbarScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
}


/* ─── 3. SCROLL REVEAL ──────────────────────────────────────── */
// Reveals elements with .reveal class as they enter the viewport
const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger sibling reveals slightly
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}


/* ─── 4. ANALYTICS PLACEHOLDER ─────────────────────────────── */
// TODO: Uncomment and configure once Google Analytics is set up
// Replace G-XXXXXXXXXX in index.html with your Measurement ID
// then remove this comment block.
//
// Custom event tracking example (use after GA is configured):
//
// function trackEvent(category, action, label) {
//   if (typeof gtag === 'function') {
//     gtag('event', action, {
//       event_category: category,
//       event_label: label,
//     });
//   }
// }
//
// Example usage:
// document.querySelector('.hero-cta')?.addEventListener('click', () => {
//   trackEvent('Navigation', 'click', 'Hero CTA - View Our Apps');
// });