/* ============================================================
   animations.js
   Animaciones de entrada con IntersectionObserver.
   Activa la clase .visible en elementos .fade-in al hacer scroll.
   ============================================================ */

(function () {
  /* ── Fade-in al hacer scroll ──────────────────────────── */
  var fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target); /* solo una vez */
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(function (el) {
    fadeObserver.observe(el);
  });
})();
