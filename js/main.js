/* ============================================================
   main.js
   Utilidades globales del sitio:
   - Año dinámico en el footer
   - Barra de progreso de scroll
   ============================================================ */

(function () {
  /* ── Año dinámico en el footer ────────────────────────── */
  var yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ── Barra de progreso de scroll ─────────────────────── */
  var progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', function () {
      var total    = document.documentElement.scrollHeight - window.innerHeight;
      var progress = (window.scrollY / total) * 100;
      progressBar.style.width = progress + '%';
    }, { passive: true });
  }
})();
