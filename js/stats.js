/* ============================================================
   stats.js
   Contador animado de las estadísticas (4+, 3+, 2+, 100%).
   Se activa una sola vez cuando la sección entra al viewport.
   ============================================================ */

(function () {
  var statObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;

      entry.target.querySelectorAll('.stat-number').forEach(function (el) {
        var target   = parseInt(el.dataset.target, 10);
        var duration = 1600; /* ms */
        var start    = performance.now();

        function update(now) {
          var elapsed  = now - start;
          var progress = Math.min(elapsed / duration, 1);

          /* Easing: easeOutQuart para desaceleración suave */
          var ease = 1 - Math.pow(1 - progress, 4);

          el.textContent = Math.floor(ease * target);

          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            el.textContent = target; /* valor exacto al terminar */
          }
        }

        requestAnimationFrame(update);
      });

      statObserver.unobserve(entry.target); /* animar solo una vez */
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stats-section').forEach(function (el) {
    statObserver.observe(el);
  });
})();
