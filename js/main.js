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
  /* ── Formulario de cotización → WhatsApp ─────────────── */
  var cotizarForm = document.getElementById('cotizar-form');
  if (cotizarForm) {
    cotizarForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var nombre      = document.getElementById('cot-nombre').value.trim();
      var negocio     = document.getElementById('cot-negocio').value.trim();
      var servicio    = document.getElementById('cot-servicio').value;
      var presupuesto = document.getElementById('cot-presupuesto').value;

      var msg = 'Hola Javier! 👋 Quiero cotizar un proyecto.\n\n';
      msg += '👤 Nombre/Empresa: ' + nombre + '\n';
      if (negocio)     msg += '🏢 Tipo de negocio: ' + negocio + '\n';
      if (servicio)    msg += '💻 Servicio: ' + servicio + '\n';
      if (presupuesto) msg += '💰 Presupuesto: ' + presupuesto + '\n';

      window.open('https://wa.me/526645041509?text=' + encodeURIComponent(msg), '_blank');
    });
  }
})();
