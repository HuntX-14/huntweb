'use strict';

const FALLBACK_IMAGE = 'img/IMG-99999.svg';

const state = {
  query: ''
};

document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  setupSearch();
  setupPlaceholderLinks();
  setupBackToTop();
  applyFilters();
});

function normalizeText(value = '') {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function hasRealUrl(url) {
  return typeof url === 'string' && url.trim() !== '' && url.trim() !== '#';
}

function getYouTubeVideoId(url = '') {
  const cleanUrl = String(url).trim();
  if (!cleanUrl) return '';

  try {
    const parsedUrl = new URL(cleanUrl);
    const hostname = parsedUrl.hostname.replace(/^www\./, '').toLowerCase();
    const isYouTubeHost = hostname === 'youtube.com'
      || hostname.endsWith('.youtube.com')
      || hostname === 'youtube-nocookie.com'
      || hostname.endsWith('.youtube-nocookie.com');
    let videoId = '';

    if (hostname === 'youtu.be') {
      videoId = parsedUrl.pathname.split('/').filter(Boolean)[0] || '';
    } else if (isYouTubeHost) {
      videoId = parsedUrl.searchParams.get('v') || '';

      if (!videoId) {
        const pathMatch = parsedUrl.pathname.match(/^\/(?:embed|shorts|live)\/([^/?#]+)/);
        videoId = pathMatch?.[1] || '';
      }
    }

    return /^[a-zA-Z0-9_-]{11}$/.test(videoId) ? videoId : '';
  } catch {
    return '';
  }
}

function getYouTubeThumbnailCandidates(videoUrl = '') {
  const videoId = getYouTubeVideoId(videoUrl);
  if (!videoId) return [];

  const thumbnailBase = `https://i.ytimg.com/vi/${videoId}`;
  return [
    `${thumbnailBase}/maxresdefault.jpg`,
    `${thumbnailBase}/sddefault.jpg`,
    `${thumbnailBase}/hqdefault.jpg`
  ];
}

function getImageCandidates(path = '', videoUrl = '') {
  const cleanPath = String(path).trim();
  const youtubeCandidates = getYouTubeThumbnailCandidates(videoUrl);
  if (!cleanPath) return [...youtubeCandidates, FALLBACK_IMAGE];

  const match = cleanPath.match(/^(.*?)(\.[a-zA-Z0-9]+)?$/);
  const basePath = match?.[1] || cleanPath;
  const currentExtension = match?.[2] || '';
  const manualExtensions = ['.webp', '.png', '.jpg', '.jpeg', '.WEBP', '.PNG', '.JPG', '.JPEG'];
  const placeholderExtensions = ['.svg', '.SVG'];
  const manualCandidates = currentExtension
    ? [cleanPath, ...manualExtensions.map(extension => `${basePath}${extension}`)]
    : manualExtensions.map(extension => `${basePath}${extension}`);
  const placeholderCandidates = placeholderExtensions.map(extension => `${basePath}${extension}`);

  return [...new Set([
    ...manualCandidates,
    ...youtubeCandidates,
    ...placeholderCandidates,
    FALLBACK_IMAGE
  ])];
}

function loadCardImage(image, path, videoUrl) {
  const candidates = getImageCandidates(path, videoUrl);
  let index = 0;

  const tryNext = () => {
    image.src = candidates[index] || FALLBACK_IMAGE;
    index += 1;
  };

  image.addEventListener('error', () => {
    if (index < candidates.length) {
      tryNext();
      return;
    }

    image.src = FALLBACK_IMAGE;
    image.classList.add('is-fallback');
  });

  tryNext();
}

function setActionLink(link, url, unavailableLabel) {
  if (hasRealUrl(url)) {
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    return;
  }

  link.removeAttribute('href');
  link.classList.add('is-disabled');
  link.setAttribute('aria-disabled', 'true');
  link.title = unavailableLabel;
}

function buildCard(mod, index) {
  const template = document.getElementById('cardTemplate');
  const fragment = template.content.cloneNode(true);
  const card = fragment.querySelector('.mod-card');
  const image = fragment.querySelector('.mod-card__image');

  card.dataset.id = mod.id;
  card.dataset.search = normalizeText(mod.title);
  card.style.setProperty('--reveal-delay', `${Math.min(index * 55, 330)}ms`);

  image.alt = `Vista previa de ${mod.title}`;
  loadCardImage(image, mod.image, mod.videoUrl);

  const title = fragment.querySelector('.mod-card__title');
  title.textContent = mod.title;
  title.title = mod.title;

  setActionLink(
    fragment.querySelector('.mod-card__download'),
    mod.downloadUrl,
    'Descarga aún no disponible'
  );

  setActionLink(
    fragment.querySelector('.mod-card__video'),
    mod.videoUrl,
    'Video aún no disponible'
  );

  return fragment;
}

function renderCards() {
  const grid = document.getElementById('modsGrid');
  if (!grid || typeof MODS_DATA === 'undefined' || !Array.isArray(MODS_DATA)) return;

  const fragment = document.createDocumentFragment();
  MODS_DATA.forEach((mod, index) => fragment.appendChild(buildCard(mod, index)));
  grid.replaceChildren(fragment);
  setupReveal();
}

function setupReveal() {
  const cards = [...document.querySelectorAll('.reveal')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    cards.forEach(card => card.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '40px 0px' });

  cards.forEach(card => observer.observe(card));

  // Evita que una tarjeta quede invisible si el navegador no activa el observer.
  window.setTimeout(() => {
    cards.forEach(card => card.classList.add('is-visible'));
    observer.disconnect();
  }, 900);
}

function setupSearch() {
  const input = document.getElementById('searchInput');
  const clearButton = document.getElementById('clearSearch');

  input.addEventListener('input', () => {
    state.query = normalizeText(input.value);
    clearButton.hidden = input.value.length === 0;
    applyFilters();
  });

  input.addEventListener('keydown', event => {
    if (event.key === 'Escape' && input.value) clearSearch();
  });

  clearButton.addEventListener('click', clearSearch);
  document.getElementById('resetSearch').addEventListener('click', clearSearch);
}

function clearSearch() {
  const input = document.getElementById('searchInput');
  input.value = '';
  state.query = '';
  document.getElementById('clearSearch').hidden = true;
  applyFilters();
  input.focus();
}

function applyFilters() {
  const cards = [...document.querySelectorAll('.mod-card')];
  let visible = 0;

  cards.forEach(card => {
    const show = state.query === '' || card.dataset.search.includes(state.query);
    card.hidden = !show;
    if (show) visible += 1;
  });

  document.getElementById('modsGrid').hidden = visible === 0;
  document.getElementById('emptyState').hidden = visible !== 0;
}

function setupPlaceholderLinks() {
  document.querySelectorAll('[data-placeholder-link]').forEach(link => {
    if (link.getAttribute('href') !== '#') return;
    link.addEventListener('click', event => event.preventDefault());
    link.title = `${link.getAttribute('aria-label')}: agrega tu enlace en index.html`;
  });
}

function setupBackToTop() {
  const button = document.getElementById('backToTop');
  if (!button) return;

  const updateVisibility = () => {
    const isVisible = window.scrollY > 420;
    button.classList.toggle('is-visible', isVisible);
    button.setAttribute('aria-hidden', String(!isVisible));
  };

  window.addEventListener('scroll', updateVisibility, { passive: true });
  button.addEventListener('click', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  updateVisibility();
}
