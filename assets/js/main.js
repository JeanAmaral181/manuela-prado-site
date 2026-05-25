/* =============================================
   MANUELA PRADO — main.js
   Nav scroll / Mobile menu / Portfolio dinâmico / Reveal
   ============================================= */

(function () {
  'use strict';

  // ====================================================
  // PORTFÓLIO — ADICIONE FOTOS AQUI
  // Formato: { file: 'nome-do-arquivo.jpg', category: 'categoria', label: 'Texto no hover' }
  // Categorias disponíveis: lash | sobrancelha | epilacao
  // Para adicionar foto nova: copie uma linha, cole abaixo, troque o nome e categoria.
  // ====================================================
  var FOTOS = [
    { file: 'lash-1.jpg',         category: 'lash',        label: 'Lash Lifting' },
    { file: 'lash-2.jpg',         category: 'lash',        label: 'Lash Lifting' },
    { file: 'lash-3.jpg',         category: 'lash',        label: 'Lash Lifting' },
    { file: 'lash-4.jpg',         category: 'lash',        label: 'Lash Lifting' },
    { file: 'lash-5.jpg',         category: 'lash',        label: 'Lash Lifting' },
    { file: 'lash-6.jpg',         category: 'lash',        label: 'Lash Lifting' },
    { file: 'lash-7.jpg',         category: 'lash',        label: 'Lash Lifting' },
    { file: 'lash-8.jpg',         category: 'lash',        label: 'Lash Lifting' },
    { file: 'design-henna-1.jpg', category: 'sobrancelha', label: 'Design com Henna' },
    { file: 'design-henna-2.jpg', category: 'sobrancelha', label: 'Design com Henna' },
    { file: 'design-henna-3.jpg', category: 'sobrancelha', label: 'Design com Henna' },
    { file: 'design-henna-4.jpg', category: 'sobrancelha', label: 'Design com Henna' },
    { file: 'design-henna-5.jpg', category: 'sobrancelha', label: 'Design com Henna' },
    { file: 'design-1.jpg',       category: 'sobrancelha', label: 'Design Personalizado', imgClass: 'img-contain' },
    { file: 'design-2.jpg',       category: 'sobrancelha', label: 'Design Personalizado' },
    { file: 'design-3.jpg',       category: 'sobrancelha', label: 'Design Personalizado' },
    { file: 'design-4.jpg',       category: 'sobrancelha', label: 'Design Personalizado' },
    { file: 'design-5.jpg',       category: 'sobrancelha', label: 'Design Personalizado' },
    { file: 'design-6.jpg',       category: 'sobrancelha', label: 'Design Personalizado' },
    { file: 'epilacao-1.jpg',     category: 'epilacao',    label: 'Epilação Egípcia' },
    { file: 'epilacao-2.jpg',     category: 'epilacao',    label: 'Epilação Egípcia' },
    { file: 'epilacao-3.jpg',     category: 'epilacao',    label: 'Epilação Egípcia' },
    { file: 'epilacao-4.jpg',     category: 'epilacao',    label: 'Epilação Egípcia' },
    { file: 'epilacao-5.jpg',     category: 'epilacao',    label: 'Epilação Egípcia' },
    { file: 'epilacao-6.jpg',     category: 'epilacao',    label: 'Epilação Egípcia' },
  ];
  // ====================================================

  // Renderiza só as fotos que carregam (ignora as que não existem)
  var grid = document.getElementById('portfolioGrid');
  FOTOS.forEach(function(foto) {
    var item = document.createElement('div');
    item.className = 'portfolio-item';
    item.dataset.category = foto.category;
    item.innerHTML =
      '<div class="portfolio-card">' +
        '<div class="portfolio-img-wrap">' +
          '<img src="assets/img/' + foto.file + '" alt="' + foto.label + '" loading="lazy"' + (foto.imgClass ? ' class="' + foto.imgClass + '"' : '') + ' />' +
          '<div class="portfolio-overlay"><span>' + foto.label + '</span></div>' +
        '</div>' +
      '</div>';

    var img = item.querySelector('img');
    // Se a foto não existir, esconde o card inteiro — sem box vazio
    img.onerror = function() {
      item.style.display = 'none';
    };
    grid.appendChild(item);
  });

  // ---- NAV: adiciona classe ao scrollar ----
  var header = document.querySelector('.site-header');
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- MOBILE MENU ----
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', function() {
    var isOpen = toggle.classList.toggle('active');
    navLinks.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      toggle.classList.remove('active');
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // ---- PORTFOLIO FILTER ----
  var filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.dataset.filter;
      document.querySelectorAll('.portfolio-item').forEach(function(item) {
        if (filter === 'all' || item.dataset.category === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // ---- SCROLL REVEAL ----
  var revealEls = document.querySelectorAll(
    '.servico-card, .portfolio-card, .sobre-text, .contato-inner, .section-title, .section-label'
  );
  revealEls.forEach(function(el) { el.classList.add('reveal'); });

  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(function(el) { io.observe(el); });

})();
