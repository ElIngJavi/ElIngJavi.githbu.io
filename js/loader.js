(function () {
  var PARTIALS = [
    ['navbar-placeholder',      'partials/navbar.html'],
    ['hero-placeholder',        'partials/hero.html'],
    ['stats-placeholder',       'partials/stats.html'],
    ['sobre-mi-placeholder',    'partials/sobre-mi.html'],
    ['cotizar-placeholder',     'partials/cotizar.html'],
    ['proyectos-placeholder',   'partials/proyectos.html'],
    ['experiencia-placeholder', 'partials/experiencia.html'],
    ['contacto-placeholder',    'partials/contacto.html'],
    ['footer-placeholder',      'partials/footer.html'],
  ];

  var SCRIPTS = [
    'js/particles.js',
    'js/particles-config.js',
    'js/cursor.js',
    'js/animations.js',
    'js/typewriter.js',
    'js/stats.js',
    'js/main.js',
    'js/experience.js',
  ];

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.body.appendChild(s);
    });
  }

  async function init() {
    await Promise.all(PARTIALS.map(async function (entry) {
      var res  = await fetch(entry[1]);
      var html = await res.text();
      document.getElementById(entry[0]).innerHTML = html;
    }));

    for (var i = 0; i < SCRIPTS.length; i++) {
      await loadScript(SCRIPTS[i]);
    }
  }

  init();
})();
