/* ═══════════════════════════════════════════════════
   YANNIS ZONGO PORTFOLIO — script.js
═══════════════════════════════════════════════════ */

/* ── Hamburger menu ──────────────────────────────── */
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn  = document.querySelector('#hamburger-nav .hamburger-icon');
  const isOpen = btn.getAttribute('aria-expanded') === 'true';

  btn.setAttribute('aria-expanded', String(!isOpen));
  menu.classList.toggle('open');
  btn.classList.toggle('open');
}

/* Close menu if user clicks outside */
document.addEventListener('click', function (e) {
  const nav  = document.getElementById('hamburger-nav');
  const menu = document.getElementById('mobile-menu');
  if (nav && !nav.contains(e.target) && menu.classList.contains('open')) {
    toggleMenu();
  }
});

/* ── Project filter ──────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.project-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      /* Update active button */
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.removeAttribute('hidden');
        } else {
          card.setAttribute('hidden', '');
        }
      });
    });
  });
});