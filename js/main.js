// ── HELPERS ──────────────────────────────────────────────────────────────────
function qs(sel, ctx = document) { return ctx.querySelector(sel); }
function el(tag, attrs = {}, ...children) {
  const e = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') e.className = v;
    else if (k === 'html') e.innerHTML = v;
    else e.setAttribute(k, v);
  });
  children.flat().forEach(c => typeof c === 'string' ? e.append(c) : e.appendChild(c));
  return e;
}

// ── DETECT BASE PATH (root vs services subfolder) ─────────────────────────────
const isService = location.pathname.includes('/services/');
const base = isService ? '../' : '';

// ── NAV HTML ─────────────────────────────────────────────────────────────────
function buildNav() {
  const services = [
    ['Food Delivery (KFC)', 'kfc.html'],
    ['Pizza Hut', 'pizzahut.html'],
    ['McDonald\'s', 'mcdonalds.html'],
    ['Pharmacy 24/7', 'pharmacy.html'],
    ['Grocery Runs', 'grocery.html'],
    ['Luxury Flowers', 'flowers.html'],
    ['Laundry & Pressing', 'laundry.html'],
    ['Golf Concierge', 'golf.html'],
  ];

  const dropdownLinks = services.map(([name, file]) =>
    `<a href="${base}services/${file}">${name}</a>`
  ).join('');

  const mobileServiceLinks = services.map(([name, file]) =>
    `<a href="${base}services/${file}" style="font-size:16px;padding:10px 0 10px 16px;opacity:0.7;">${name}</a>`
  ).join('');

  document.body.insertAdjacentHTML('afterbegin', `
<div class="grain"></div>

<nav id="main-nav">
  <div class="container nav-inner">
    <a href="${base}index.html" class="nav-logo">nexto<span>.</span></a>
    <ul class="nav-links">
      <li><a href="${base}index.html">Home</a></li>
      <li class="nav-dropdown">
        <a href="#">Services</a>
        <div class="dropdown-menu">${dropdownLinks}</div>
      </li>
      <li><a href="${base}destination.html">Marrakech</a></li>
      <li><a href="${base}about.html">About</a></li>
      <li><a href="${base}contact.html">Contact</a></li>
    </ul>
    <a href="https://wa.me/212638913733" class="nav-cta btn" target="_blank" rel="noopener">Order Now</a>
    <button class="nav-hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="mobile-menu" id="mobile-menu">
  <a href="${base}index.html">Home</a>
  <a href="#" id="mobile-services-toggle" style="display:flex;justify-content:space-between;align-items:center;">Services <span>▾</span></a>
  <div id="mobile-services-sub" style="display:none;flex-direction:column;">
    ${mobileServiceLinks}
  </div>
  <a href="${base}destination.html">Marrakech</a>
  <a href="${base}about.html">About</a>
  <a href="${base}contact.html">Contact</a>
  <a href="https://wa.me/212638913733" class="mobile-menu-cta" target="_blank" rel="noopener">Order via WhatsApp</a>
</div>
  `);

  // Hamburger toggle
  const hamburger = qs('#hamburger');
  const mobileMenu = qs('#mobile-menu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Mobile services sub-toggle
  qs('#mobile-services-toggle').addEventListener('click', (e) => {
    e.preventDefault();
    const sub = qs('#mobile-services-sub');
    sub.style.display = sub.style.display === 'none' ? 'flex' : 'none';
    if (sub.style.display === 'flex') sub.style.flexDirection = 'column';
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a:not(#mobile-services-toggle)').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Active link
  const currentPath = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href.includes(currentPath) && currentPath !== '#') {
      a.classList.add('active');
    }
  });
}

// ── FOOTER HTML ───────────────────────────────────────────────────────────────
function buildFooter() {
  document.body.insertAdjacentHTML('beforeend', `
<footer>
  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="logo">nexto<span>.</span></div>
        <p>Marrakech's premium 24/7 delivery and concierge service. English-speaking. Always available.</p>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <a href="${base}services/kfc.html">KFC Delivery</a>
        <a href="${base}services/pizzahut.html">Pizza Hut</a>
        <a href="${base}services/mcdonalds.html">McDonald's</a>
        <a href="${base}services/pharmacy.html">Pharmacy 24/7</a>
        <a href="${base}services/grocery.html">Grocery Runs</a>
        <a href="${base}services/flowers.html">Luxury Flowers</a>
        <a href="${base}services/laundry.html">Laundry</a>
        <a href="${base}services/golf.html">Golf Concierge</a>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <a href="${base}about.html">About Us</a>
        <a href="${base}destination.html">Marrakech Guide</a>
        <a href="${base}contact.html">Contact</a>
        <a href="${base}privacy.html">Privacy Policy</a>
        <a href="${base}terms.html">Terms of Service</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Nexto. All rights reserved.</span>
      <span>Marrakech, Morocco</span>
    </div>
  </div>
</footer>
  `);
}

// ── NAVBAR SCROLL ─────────────────────────────────────────────────────────────
function initNavScroll() {
  const nav = qs('#main-nav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

// ── HERO PARALLAX ─────────────────────────────────────────────────────────────
function initParallax() {
  const heroBg = qs('.hero-bg img');
  if (!heroBg) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY * 0.4;
    heroBg.style.transform = `translateY(${y}px)`;
  }, { passive: true });
}

// ── FADE UP ON SCROLL ─────────────────────────────────────────────────────────
function initFadeUp() {
  const items = document.querySelectorAll('.fade-up');
  if (!items.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  items.forEach(i => obs.observe(i));
}

// ── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildFooter();
  initNavScroll();
  initParallax();
  initFadeUp();
});
