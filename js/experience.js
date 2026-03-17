/* ============================================================
   experience.js
   Maneja el cambio dinámico de información en la sección
   de experiencia al hacer clic en cada trabajo del timeline.
   ============================================================ */

(function () {

  /* ── Datos de cada experiencia (extraídos del CV) ───────── */
  var experiences = {
    trablisa: {
      title:       'Inspector de Seguridad Aeroportuaria',
      company:     'Trablisa — Tijuana, México',
      period:      'Dic 2024 – Dic 2025',
      description: 'Trabajo enfocado en la seguridad aeroportuaria, garantizando el cumplimiento de protocolos operativos mediante el uso de sistemas tecnológicos, control de accesos y atención directa a usuarios y autoridades.',
      responsibilities: [
        'Seguimiento de procedimientos operativos y cumplimiento de protocolos establecidos.',
        'Uso de sistemas y equipos tecnológicos para control y verificación de accesos.',
        'Atención y soporte a usuarios, personal interno y autoridades.',
        'Reporte de incidencias, manejo de documentación y bitácoras operativas.',
        'Trabajo bajo presión y resolución de situaciones conforme a procesos definidos.'
      ],
      tags: ['Sistemas de control', 'Bitácoras digitales', 'Equipos de verificación', 'Protocolos']
    },

    cervan: {
      title:       'Desarrollador / Diseñador Web',
      company:     'Cervan Acces — Tijuana, México',
      period:      'Ago 2023 – Oct 2023',
      description: 'Diseño y desarrollo web desde cero para empresa de instalación de cocheras, con estructura de navegación intuitiva, diseño atractivo y funcionalidades completas para la captación de clientes.',
      responsibilities: [
        'Diseño y desarrollo web desde cero con estructura de navegación intuitiva.',
        'Información completa sobre la empresa, servicios, productos y áreas de servicio.',
        'Galería de imágenes mostrando proyectos anteriores de instalación de cocheras.',
        'Formulario de contacto para consultas, cotizaciones y programación de servicios.'
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Formulario de contacto']
    },

    marihe: {
      title:       'Desarrollador de Software',
      company:     'MariHe — Tijuana, México',
      period:      'Feb 2022 – Abr 2022',
      description: 'Desarrollo de aplicación de escritorio para conteo y gestión de inventario, con interfaz gráfica intuitiva, base de datos integrada y funcionalidades de conteo individual y por lotes.',
      responsibilities: [
        'Diseño de interfaz gráfica (GUI) intuitiva para operaciones de conteo de productos.',
        'Implementación de base de datos para registro actualizado del inventario.',
        'Funcionalidad de conteo individual y por lotes para recuento físico eficiente.',
        'Documentación del sistema y entrega funcional al cliente.'
      ],
      tags: ['Python', 'MySQL', 'GUI', 'Base de datos', 'Inventario']
    }
  };

  /* ── Referencias al DOM ─────────────────────────────────── */
  var jobs   = document.querySelectorAll('.job');
  var detail = document.querySelector('.detail');

  if (!jobs.length || !detail) return;

  /* ── Función para renderizar el detalle ─────────────────── */
  function renderDetail(key) {
    var exp = experiences[key];
    if (!exp) return;

    /* Construir lista de responsabilidades */
    var checkItems = exp.responsibilities.map(function (r) {
      return '<li>' + r + '</li>';
    }).join('');

    /* Construir tags de tecnologías */
    var tagItems = exp.tags.map(function (t) {
      return '<span>' + t + '</span>';
    }).join('');

    /* Animación de salida y entrada */
    detail.style.opacity = '0';
    detail.style.transform = 'translateY(10px)';

    setTimeout(function () {
      detail.innerHTML =
        '<h2>' + exp.title + '</h2>' +
        '<h3>' + exp.company + ' &nbsp;·&nbsp; ' + exp.period + '</h3>' +
        '<p class="description">' + exp.description + '</p>' +
        '<h4>Responsabilidades</h4>' +
        '<ul class="checks">' + checkItems + '</ul>' +
        '<h4>Tecnologías</h4>' +
        '<div class="tags">' + tagItems + '</div>';

      detail.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      detail.style.opacity    = '1';
      detail.style.transform  = 'translateY(0)';
    }, 150);
  }

  /* ── Asignar eventos de clic a cada trabajo ─────────────── */
  var jobKeys = ['trablisa', 'cervan', 'marihe'];

  jobs.forEach(function (job, index) {
    job.setAttribute('data-key', jobKeys[index]);

    job.addEventListener('click', function () {
      /* Quitar .active de todos */
      jobs.forEach(function (j) { j.classList.remove('active'); });

      /* Activar el clickeado */
      job.classList.add('active');

      /* Renderizar detalle */
      renderDetail(jobKeys[index]);
    });
  });

  /* Cargar el primero por defecto */
  renderDetail('trablisa');

})();
