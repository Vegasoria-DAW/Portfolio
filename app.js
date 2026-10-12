// Portfolio JV — filtros, menú móvil, reveal, nav activa, i18n ES/EN
let currentLang = "es";
try { currentLang = localStorage.getItem("portfolio-lang") || "es"; } catch (e) { currentLang = "es"; }
if (currentLang !== "es" && currentLang !== "en") currentLang = "es";

const projects = [
  { title: "Datransur S.L. · Movimiento de Tierras", mono: "D", cat: "vanilla", url: "https://datransur.es/", img: "fotos/proyecto-datransur.png", desc_es: "Web corporativa para Datransur S.L.: 9 servicios, galería de trabajos reales, clientes, blog SEO local y captación por teléfono y formulario.", desc_en: "Corporate site for Datransur S.L.: 9 services, real-work gallery, clients, local SEO blog and phone + form lead capture.", tags: ["JavaScript", "CSS"], grad: "from-[#9440E8]/45 to-[#2C49D8]/25", cover: ["#003882", "#66D9ED"], code: "9 servicios · blog" },
  { title: "J-TECH · Agencia Digital", mono: "J", cat: "vite", url: "https://j-tech.site/", img: "fotos/proyecto-jtech.png", desc_es: "Fundación y desarrollo completo de J-TECH: webs profesionales, perfil de Google, redes y digitalización. Claro/oscuro, SEO local, FAQ y WhatsApp.", desc_en: "Founded and fully developed J-TECH: pro websites, Google profile, social and digitalization. Light/dark, local SEO, FAQ and WhatsApp.", tags: ["Vite", "React"], grad: "from-[#DF058D]/40 to-[#FF6B2B]/25", cover: ["#2F5CFF", "#9440E8"], code: "claro/oscuro · FAQ" },
  { title: "PARAÍSO · Pastelería Artesanal", mono: "P", cat: "vite", url: "https://elparaisodeandrea.es/", img: "fotos/proyecto-paraiso.png", desc_es: "Diseño y desarrollo completo de la web para PARAÍSO: repostería artesanal, imagen de marca y captación para eventos. Responsive, SEO y experiencia móvil.", desc_en: "Full design and development for PARAÍSO: artisan bakery, brand image and event lead generation. Responsive, SEO and mobile-first.", tags: ["Vite", "React"], grad: "from-[#2C49D8]/50 to-[#66D9ED]/25", cover: ["#42D9C6", "#2DD4BF"], code: "SEO 100 · live" },
];

const I18N = {
es: {
  pageTitle: "José Antonio Vega Soria — Desarrollador Web Fullstack",
  metaDesc: "Portfolio de José Antonio Vega Soria, Desarrollador de Aplicaciones Web Fullstack con 2 años de experiencia en React, Next.js y Node.js",
  skip: "Saltar al contenido",
  menuOpen: "Abrir menú",
  brandHome: "Vega — inicio",
  navAria: "Principal",
  navHome: "// inicio",
  navExpertise: "// experiencia",
  navWork: "// proyectos",
  navExperience: "// trayectoria",
  navContact: "// contacto",
  menuClose: "Cerrar menú",
  mobileCopyright: '© 2026. Hecho con pasión por <a href="#hero-section">José Antonio Vega Soria</a>.<br />Todos los derechos reservados.',
  heroSubtitle: "DESARROLLO DE SOFTWARE Y APLICACIONES WEB",
  stackLabel: "Mi stack",
  prevAria: "Anterior",
  prevText: "Anterior",
  nextAria: "Siguiente",
  nextText: "Siguiente",
  scrollCue: "Ir a expertise",
  expTitle: "Mi Experiencia",
  exp1a: "Frontend",
  exp1b: "Desarrollo",
  exp1desc: "HTML, CSS, JS y TypeScript: React y Next.js, interfaces responsive y accesibles.",
  exp2a: "Backend",
  exp2b: "Node, SQL/NoSQL",
  exp2desc: "APIs REST con Node.js y Express, C# .NET y Python: auth JWT, MySQL y MongoDB, validación y documentación.",
  exp3a: "Fullstack",
  exp3b: "Despliegue, Git",
  exp3desc: "Creo soluciones digitales funcionales, intuitivas y adaptadas a las necesidades de cada proyecto.",
  expQuote: "Primero haz que funcione, luego que sea legible, luego que sea rápido.",
  expQuoteAuthor: "— Mi regla como fullstack junior",
  expImgAlt: "Código HTML de ejemplo: hello world",
  workLabel: "// proyectos",
  workTitle: "Mis<br />Proyectos",
  workIntro: "Tres webs: pastelería artesanal, movimiento de tierras y agencia digital. Diseño y desarrollo completos, SEO y captación.",
  featuredLabel: "Proyecto destacado",
  featuredTitle: "PARAÍSO — web completa para pastelería artesanal",
  featuredDesc: "Diseño y desarrollo completo con Vite + React: imagen de marca, captación para eventos y comuniones, SEO con Schema.org y experiencia móvil. Disponible en elparaisodeandrea.es.",
  viewProject: "Ver proyecto",
  codeBtn: "Código",
  filterAria: "Filtrar proyectos",
  filterLabel: "Filtrar por",
  filterAll: "Todos",
  filterVite: "Vite + React",
  filterVanilla: "HTML + JS",
  expLabel: "// trayectoria",
  expSectionTitle: "Experiencia<br />Profesional",
  expSub: '+2 años · fullstack React + .NET/Python',
  job1Title: "Desarrollador de Aplicaciones Web",
  job1Company: "@ Paraíso · elparaisodeandrea.es",
  job1Date: "dic 2024 — Actualidad",
  job1Loc: "Villamartín · Híbrido",
  job1Desc: "Frontend React/JS/HTML-CSS y backend C# .NET + Python. PL/SQL en Oracle y ETL (-35% gestión de stock), Dynamics 365 y Low-Code para inventarios, Power BI para marketing. Git, APIs REST, Scrum.",
  job2Title: "Desarrollador Web",
  job2Company: "@ ControlNet",
  job2Loc: "Jerez de la Frontera · Híbrido",
  job2Desc: "Funcionalidades web con C#, WordPress y Shopify. Resolución de incidencias, depuración y entrega en plazo de 3 meses con equipo y clientes.",
  job3Title: "Jefe de Equipo",
  job3Company: "@ Ocaso",
  job3Loc: "Jerez de la Frontera",
  job3Desc: "Liderazgo y coordinación de equipos de 5 personas durante 2 años y 4 meses: turnos, objetivos, comunicación y toma de decisiones.",
  job4Title: "CFGS Desarrollo de Aplicaciones Web",
  job4Company: "· Santa Joaquina de Vedruna",
  job4Loc: "2022 — 2024 · + CFGS Marketing y Publicidad (2019 — 2021)",
  job4Desc: "DAW + base previa de Marketing: frontend, backend, BBDD y despliegue. Perfil que une código, datos y negocio.",
  contactLabel: "// contacto",
  contactTitle: 'Disponible para<br /><span class="chonky chonky-blue">freelance y roles</span><br />frontend',
  contactIntro: "¿Tienes un proyecto o un puesto frontend? Escríbeme, respondo en menos de 24h.",
  formNameLabel: "Nombre",
  formNamePh: "Tu nombre",
  formMsgLabel: "Mensaje",
  formMsgPh: "Cuéntame tu proyecto...",
  formSubmit: "Enviar mensaje",
  whatsappBtn: "Escríbeme",
  testiLabel: "Testimonios",
  testi1: "“La web transmite lo que somos: tartas que entran por los ojos. Nos llegan peticiones para eventos y comuniones desde el primer mes.”",
  testi1Role: "Pastelería artesanal · Villamartín",
  testi2: "“Por fin se entiende lo que hacemos: servicios claros, fotos reales de obra y nos llaman pidiendo presupuesto. Directo y sin rodeos.”",
  testi2Role: "Movimiento de tierras · Cádiz",
  testi3: "“Da gusto trabajar con él: explica todo sin tecnicismos, entrega en plazo y la web quedó rápida y fácil de gestionar.”",
  testi3Name: "José Antonio Naranjo",
  testi3Role: "J-TECH · Agencia digital",
  footerText: "© 2026 José Antonio Vega Soria. Hecho con café y JavaScript.",
  scrollTop: "↑ Volver arriba",
  cardShow: "Ver proyecto",
  cardCode: "Código",
  formThanks: "¡Gracias! Te responderé pronto."
},
en: {
  pageTitle: "José Antonio Vega Soria — Fullstack Web Developer",
  metaDesc: "Portfolio of José Antonio Vega Soria, Fullstack Web Developer with 2 years of experience in React, Next.js and Node.js",
  skip: "Skip to content",
  menuOpen: "Open menu",
  brandHome: "Vega — home",
  navAria: "Main",
  navHome: "// home",
  navExpertise: "// expertise",
  navWork: "// work",
  navExperience: "// experience",
  navContact: "// contact",
  menuClose: "Close menu",
  mobileCopyright: '© 2026. Made with passion by <a href="#hero-section">José Antonio Vega Soria</a>.<br />All rights reserved.',
  heroSubtitle: "SOFTWARE AND WEB APPLICATION DEVELOPMENT",
  stackLabel: "My stack",
  prevAria: "Previous",
  prevText: "Previous",
  nextAria: "Next",
  nextText: "Next",
  scrollCue: "Go to expertise",
  expTitle: "My Expertise",
  exp1a: "Frontend",
  exp1b: "Development",
  exp1desc: "HTML, CSS, JS and TypeScript: React and Next.js, responsive and accessible interfaces.",
  exp2a: "Backend Dev",
  exp2b: "Node, SQL/NoSQL",
  exp2desc: "REST APIs with Node.js and Express, C# .NET and Python: JWT auth, MySQL and MongoDB, validation and docs.",
  exp3a: "Fullstack",
  exp3b: "Deploy, Git",
  exp3desc: "I build functional, intuitive digital solutions tailored to each project's needs.",
  expQuote: "First make it work, then make it readable, then make it fast.",
  expQuoteAuthor: "— My rule as a junior fullstack",
  expImgAlt: "Sample HTML code: hello world",
  workLabel: "// work",
  workTitle: "My<br />Work",
  workIntro: "Three websites: artisan bakery, earthmoving company and digital agency. Full design and development, SEO and lead generation.",
  featuredLabel: "Featured Project",
  featuredTitle: "PARAÍSO — full website for an artisan bakery",
  featuredDesc: "Full design and development with Vite + React: brand image, event lead capture, SEO with Schema.org and mobile-first experience. Available at elparaisodeandrea.es.",
  viewProject: "View project",
  codeBtn: "Code",
  filterAria: "Filter projects",
  filterLabel: "Filter by",
  filterAll: "All",
  filterVite: "Vite + React",
  filterVanilla: "HTML + JS",
  expLabel: "// experience",
  expSectionTitle: "Professional<br />Experience",
  expSub: '2+ years · fullstack React + .NET/Python',
  job1Title: "Web Application Developer",
  job1Company: "@ Paraíso · elparaisodeandrea.es",
  job1Date: "Dec 2024 — Present",
  job1Loc: "Villamartín · Hybrid",
  job1Desc: "React/JS/HTML-CSS frontend and C# .NET + Python backend. Oracle PL/SQL and ETL (-35% stock management time), Dynamics 365 and Low-Code for inventory, Power BI for marketing. Git, REST APIs, Scrum.",
  job2Title: "Web Developer",
  job2Company: "@ ControlNet",
  job2Loc: "Jerez de la Frontera · Hybrid",
  job2Desc: "Web features with C#, WordPress and Shopify. Bug fixing, debugging and on-time delivery within 3 months with team and clients.",
  job3Title: "Team Lead",
  job3Company: "@ Ocaso",
  job3Loc: "Jerez de la Frontera",
  job3Desc: "Led and coordinated 5-person teams for 2 years and 4 months: shifts, goals, communication and decision-making.",
  job4Title: "Advanced Diploma in Web App Development",
  job4Company: "· Santa Joaquina de Vedruna",
  job4Loc: "2022 — 2024 · + Marketing Diploma (2019 — 2021)",
  job4Desc: "Web development degree plus a Marketing background: frontend, backend, databases and deployment. A profile bridging code, data and business.",
  contactLabel: "// contact",
  contactTitle: 'Available for<br /><span class="chonky chonky-blue">freelance & frontend</span><br />roles',
  contactIntro: "Have a project or a frontend role? Message me, I reply within 24h.",
  formNameLabel: "Name",
  formNamePh: "Your name",
  formMsgLabel: "Message",
  formMsgPh: "Tell me about your project...",
  formSubmit: "Send message",
  whatsappBtn: "Message me",
  testiLabel: "Testimonials",
  testi1: "“The website shows who we are: cakes that catch the eye. Event and communion requests started coming in from the first month.”",
  testi1Role: "Artisan bakery · Villamartín",
  testi2: "“Finally people understand what we do: clear services, real site photos, and they call us asking for quotes. Straight to the point.”",
  testi2Role: "Earthmoving · Cádiz",
  testi3: "“Great to work with: he explains everything without jargon, delivers on time, and the site came out fast and easy to manage.”",
  testi3Name: "José Antonio Naranjo",
  testi3Role: "J-TECH · Digital agency",
  footerText: "© 2026 José Antonio Vega Soria. Made with coffee and JavaScript.",
  scrollTop: "↑ Scroll to top",
  cardShow: "Show project",
  cardCode: "Code",
  formThanks: "Thanks! I'll reply soon."
}
};

const grid = document.getElementById("project-grid");
// Portada 1:1 Ohio: <img> 3:2 como los posters originales, en tonos del home
function coverURI(p) {
  const c = p.cover || ["#2C49D8", "#C9D64F"];
  const initials = p.mono || p.title.charAt(0).toUpperCase();
  const label = (p.tags || []).slice(0, 2).join(" · ");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="630" height="420" viewBox="0 0 630 420">`
    + `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1A1F16"/><stop offset=".55" stop-color="#242B1F"/><stop offset="1" stop-color="#0B0E09"/></linearGradient>`
    + `<radialGradient id="a" cx=".18" cy=".2" r=".55"><stop offset="0" stop-color="${c[1]}" stop-opacity=".5"/><stop offset="1" stop-color="${c[1]}" stop-opacity="0"/></radialGradient>`
    + `<radialGradient id="b" cx=".85" cy=".85" r=".6"><stop offset="0" stop-color="${c[0]}" stop-opacity=".55"/><stop offset="1" stop-color="${c[0]}" stop-opacity="0"/></radialGradient></defs>`
    + `<rect width="630" height="420" fill="url(#g)"/><rect width="630" height="420" fill="url(#a)"/><rect width="630" height="420" fill="url(#b)"/>`
    + `<g stroke="#ffffff" stroke-opacity=".07"><path d="M0 105h630M0 210h630M0 315h630M157 0v420M315 0v420M472 0v420"/></g>`
    + `<g fill="#ffffff" fill-opacity=".5"><circle cx="42" cy="38" r="7" fill="#f87171"/><circle cx="64" cy="38" r="7" fill="#fbbf24"/><circle cx="86" cy="38" r="7" fill="#4ade80"/></g>`
    + `<rect x="36" y="66" width="558" height="288" rx="14" fill="#0c0d10" fill-opacity=".72" stroke="#ffffff" stroke-opacity=".14"/>`
    + `<text x="315" y="196" text-anchor="middle" font-family="Poppins,Arial,sans-serif" font-size="64" font-weight="700" fill="#ffffff">${initials}</text>`
    + `<text x="315" y="244" text-anchor="middle" font-family="monospace" font-size="22" fill="#C9D64F">${label}</text>`
    + `<text x="315" y="300" text-anchor="middle" font-family="monospace" font-size="19" fill="#ffffff" fill-opacity=".55">${p.code}</text></svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg).replace(/'/g, "%27");
}
const CAT_LABEL = { vite: "Vite + React", vanilla: "HTML + JS" };
function renderProjects(filter = "all") {
  if (!grid) return;
  const dict = I18N[currentLang] || I18N.es;
  grid.innerHTML = "";
  const delays = [0, 100, 250];
  projects.filter(p => filter === "all" || p.cat === filter).forEach((p, i) => {
    const wide = (i % 6 === 2 || i % 6 === 5);
    const wrap = document.createElement("div");
    wrap.className = `portfolio-item-wrap masonry-block grid-item ohio-project-item ohio-filter-project-${p.cat} `
      + (wide ? "vc_col-lg-8 vc_col-md-12 vc_col-xs-12 double-width" : "vc_col-lg-4 vc_col-md-6 vc_col-xs-12");
    wrap.setAttribute("data-lazy-scope", "projects");
    wrap.innerHTML = `
      <div data-aos-once="true" data-aos="fade-up" data-aos-delay="${delays[i % 3]}">
        <div class="portfolio-item portfolio-item-grid portfolio-grid-type-1 boxed hover-scale-img hover-color-overlay">
          <div data-cursor-class="cursor-link" class="portfolio-item-image">
            <a href="${p.url}" target="_blank" rel="noopener" aria-label="${p.title}">
              <img decoding="async" loading="lazy" src="${p.img || coverURI(p)}" ${p.img ? `onerror="this.onerror=null;this.src='${coverURI(p)}'"` : ""} alt="${p.title}" />
            </a>
          </div>
          <div class="portfolio-item-details text-left">
            <h3 class="portfolio-item-headline title">${p.title}</h3>
            <div class="card-swap">
              <div class="category-holder"><span class="category"><a href="#" tabindex="-1">${CAT_LABEL[p.cat] || p.cat}</a></span></div>
              <div class="show-project"><div class="show-project-link"><a href="${p.url}" target="_blank" rel="noopener">${dict.cardShow}</a></div></div>
            </div>
          </div>
        </div>
      </div>`;
    grid.appendChild(wrap);
  });
  bindTilt();
}
// Tilt sutil 1:1 (data-tilt-effect="true"), desactivado con reduced motion
function bindTilt() {
  if (!grid || !grid.dataset || grid.dataset.tiltEffect !== "true") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  grid.querySelectorAll(".portfolio-item").forEach(card => {
    if (card.dataset.tiltBound) return;
    card.dataset.tiltBound = "1";
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg) translateY(-3px)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });
}

function setLang(lang) {
  if (lang !== "es" && lang !== "en") lang = "es";
  currentLang = lang;
  try { localStorage.setItem("portfolio-lang", lang); } catch (e) {}
  document.documentElement.lang = lang;
  const dict = I18N[lang];
  document.title = dict.pageTitle;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (dict[k] !== undefined) el.innerHTML = dict[k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const k = el.getAttribute("data-i18n-ph");
    if (dict[k] !== undefined) el.setAttribute("placeholder", dict[k]);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const k = el.getAttribute("data-i18n-aria");
    if (dict[k] !== undefined) el.setAttribute("aria-label", dict[k]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const k = el.getAttribute("data-i18n-alt");
    if (dict[k] !== undefined) el.setAttribute("alt", dict[k]);
  });
  document.querySelectorAll("[data-i18n-content]").forEach(el => {
    const k = el.getAttribute("data-i18n-content");
    if (dict[k] !== undefined) el.setAttribute("content", dict[k]);
  });
  document.querySelectorAll("[data-lang-btn]").forEach(b => {
    const active = b.getAttribute("data-lang-btn") === lang;
    b.classList.toggle("active", active);
    b.setAttribute("aria-pressed", active ? "true" : "false");
  });
  const switcher = document.getElementById("lang-switcher");
  if (switcher) switcher.dataset.lang = lang;
  const activeFilter = (document.querySelector(".portfolio-sorting a.active") || {}).dataset;
  renderProjects(activeFilter && activeFilter.filter ? activeFilter.filter : "all");
}
document.querySelectorAll("[data-lang-btn]").forEach(b => {
  b.addEventListener("click", () => setLang(b.getAttribute("data-lang-btn")));
});
setLang(currentLang);

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert((I18N[currentLang] || I18N.es).formThanks);
  });
}

document.querySelectorAll(".portfolio-sorting a[data-filter]").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    document.querySelectorAll(".portfolio-sorting a[data-filter]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

// Sticky 1:1 original: transparente -> rgba(26,26,26,.8) a partir de 250px
const masthead = document.getElementById("masthead");
const STICKY_OFFSET = 250;
// Deslizamiento suave del menú al centro: se calcula el desplazamiento exacto
// y se anima con transform (justify-content no es animable)
const headerInner = document.querySelector("#masthead .header-wrap-inner");
const rightPart = document.querySelector("#masthead .right-part");
function centerNav() {
  if (window.innerWidth < 769 || !masthead.classList.contains("nav-centered")) {
    rightPart.style.transform = "";
    return;
  }
  // Medir sin transform para calcular el desplazamiento exacto al centro
  const prev = rightPart.style.transform;
  rightPart.style.transform = "none";
  const innerR = headerInner.getBoundingClientRect();
  const navR = rightPart.getBoundingClientRect();
  const shift = (innerR.width - navR.width) / 2 - (navR.left - innerR.left);
  rightPart.style.transform = prev;
  requestAnimationFrame(() => { rightPart.style.transform = `translateX(${shift}px)`; });
}
function onScrollSticky() {
  const stuck = window.scrollY >= STICKY_OFFSET;
  const changed = masthead.classList.contains("nav-centered") !== stuck;
  masthead.classList.toggle("-sticky", stuck);
  masthead.classList.toggle("nav-centered", stuck);
  if (changed) requestAnimationFrame(centerNav);
}
// Fade 1:1: navbar transparente -> rgba(26,26,26,.8) progresivo 0-250px
// + fundido del hero al navegar desde home hacia otras secciones
const heroContainer = document.querySelector("#hero-section .hero-container");
const scrollCueEl = document.querySelector("#hero-section .scroll-cue");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let fadeTicking = false;
function onScrollFade() {
  const y = window.scrollY;
  const a = Math.min(y / STICKY_OFFSET, 1) * 0.88;
  masthead.style.backgroundColor = "rgba(16,19,14," + a.toFixed(3) + ")";
  if (!reduceMotion && heroContainer) {
    const p = Math.min(y / (window.innerHeight * 0.85), 1);
    heroContainer.style.opacity = (1 - p).toFixed(3);
    heroContainer.style.transform = "translateY(" + Math.round(p * -40) + "px)";
    if (scrollCueEl) scrollCueEl.style.opacity = Math.max(0, 0.8 - p * 1.2).toFixed(3);
  }
  fadeTicking = false;
}
function requestFade() {
  onScrollSticky();
  if (!fadeTicking) { fadeTicking = true; requestAnimationFrame(onScrollFade); }
}
window.addEventListener("scroll", requestFade, { passive: true });
window.addEventListener("resize", centerNav);
window.addEventListener("load", centerNav);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(centerNav);
requestFade();
centerNav();

// Acordeón experiencia 1:1 Ohio: un item abierto cada vez
document.querySelectorAll(".ohio-accordion .accordionItem_title").forEach(title => {
  const toggle = () => {
    const item = title.closest(".accordionItem");
    const acc = title.closest(".ohio-accordion");
    const willOpen = !item.classList.contains("current");
    acc.querySelectorAll(".accordionItem.current").forEach(i => {
      i.classList.remove("current");
      const t = i.querySelector(".accordionItem_title");
      if (t) t.setAttribute("aria-expanded", "false");
    });
    if (willOpen) {
      item.classList.add("current");
      title.setAttribute("aria-expanded", "true");
    }
  };
  title.addEventListener("click", toggle);
  title.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
  });
});

// Menú móvil 1:1 (hamburguesa izquierda + overlay claro con copyright)
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuClose = document.getElementById("menu-close");
function openMenu() {
  mobileMenu.classList.remove("hidden");
  mobileMenu.setAttribute("aria-hidden", "false");
  menuBtn.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}
function closeMenu() {
  mobileMenu.classList.add("hidden");
  mobileMenu.setAttribute("aria-hidden", "true");
  menuBtn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}
menuBtn.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

// Reveal con IntersectionObserver + reduced motion
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
if (!prefersReduced) document.querySelectorAll(".reveal").forEach(el => io.observe(el));
else document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));

// Nav activa por sección
const sections = ["hero-section", "expertise", "work", "experience", "contact"];
const navLinks = document.querySelectorAll(".nav-link");
const secObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.toggle("active", l.dataset.nav === e.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
sections.forEach(id => { const s = document.getElementById(id); if (s) secObserver.observe(s); });

// Stack carousel 1:1 (5/4/2 visibles, autoplay 5s, loop, pausa en hover e interacción)
(function initStackCarousel() {
  const track = document.querySelector("#stack-carousel .carousel-track");
  const viewport = document.querySelector("#stack-carousel .carousel-viewport");
  if (!track || !viewport) return;
  const originals = Array.from(track.children);
  const total = originals.length;
  let perView, idx, timer = null, resizeT;

  const count = () => window.innerWidth < 768 ? 2 : window.innerWidth < 1025 ? 4 : 5;
  const step = () => {
    const a = track.children[perView], b = track.children[perView + 1];
    return b.offsetLeft - a.offsetLeft;
  };
  const apply = (animate) => {
    track.style.transition = animate ? "" : "none";
    track.style.transform = `translateX(${-idx * step()}px)`;
  };
  const build = () => {
    track.querySelectorAll(".clone").forEach(c => c.remove());
    perView = count();
    for (let i = 0; i < perView; i++) {
      const c = originals[i].cloneNode(true);
      c.classList.add("clone"); c.setAttribute("aria-hidden", "true");
      track.appendChild(c);
    }
    for (let i = total - 1; i >= total - perView; i--) {
      const c = originals[i].cloneNode(true);
      c.classList.add("clone"); c.setAttribute("aria-hidden", "true");
      track.prepend(c);
    }
    idx = perView;
    apply(false);
  };
  const go = (dir) => {
    idx += dir;
    apply(true);
    restart();
  };
  const next = () => go(1);
  const start = () => { stop(); timer = setInterval(next, 5000); };
  const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
  const restart = () => { stop(); start(); };

  track.addEventListener("transitionend", () => {
    if (idx >= total + perView) { idx -= total; apply(false); }
    else if (idx < perView) { idx += total; apply(false); }
  });
  document.querySelector("#stack-carousel .carousel-next").addEventListener("click", () => go(1));
  document.querySelector("#stack-carousel .carousel-prev").addEventListener("click", () => go(-1));
  viewport.addEventListener("mouseenter", stop);
  viewport.addEventListener("mouseleave", start);
  document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
  window.addEventListener("resize", () => { clearTimeout(resizeT); resizeT = setTimeout(build, 200); });

  build();
  start();
})();
