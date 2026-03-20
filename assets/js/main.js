function getRootPath() {
  return document.body.dataset.root || ".";
}

function resolveWithRoot(path) {
  if (!path) return path;
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;

  const root = getRootPath().replace(/\/$/, "");
  return root === "." ? path : `${root}/${path}`;
}

function getByPath(source, path) {
  return path.split(".").reduce((value, key) => {
    if (value && key in value) return value[key];
    return undefined;
  }, source);
}

async function fetchResource(path, type) {
  const response = await fetch(resolveWithRoot(path));
  if (!response.ok) {
    throw new Error(`Failed to load ${path}`);
  }

  return type === "json" ? response.json() : response.text();
}

async function injectComponents() {
  const slots = [...document.querySelectorAll("[data-component]")];
  await Promise.all(
    slots.map(async (slot) => {
      const componentName = slot.dataset.component;
      const markup = await fetchResource(`components/${componentName}.html`, "text");
      slot.innerHTML = markup;
    })
  );
}

function buildRouteMap(content) {
  return content.routes || {};
}

function resolveRoute(content, routeKey, hash = "") {
  const routes = buildRouteMap(content);
  const path = routes[routeKey] || routeKey || "";
  const routeWithHash = hash ? `${path}#${hash}` : path;
  return resolveWithRoot(routeWithHash);
}

function populateFields(content) {
  document.querySelectorAll("[data-field]").forEach((element) => {
    const value = getByPath(content, element.dataset.field);
    if (value !== undefined) element.textContent = value;
  });
}

function applyRouteLinks(content) {
  document.querySelectorAll("[data-route]").forEach((element) => {
    const routeKey = element.dataset.route;
    const hash = element.dataset.hash || "";
    element.setAttribute("href", resolveRoute(content, routeKey, hash));
  });
}

function applyContactLinks(content) {
  const config = {
    whatsapp: {
      href: content.contact.whatsappUrl,
      target: "_blank",
      rel: "noopener noreferrer"
    },
    phone: {
      href: `tel:${content.contact.phoneHref}`
    },
    email: {
      href: `mailto:${content.contact.email}`
    }
  };

  document.querySelectorAll("[data-contact-link]").forEach((element) => {
    const key = element.dataset.contactLink;
    const entry = config[key];
    if (!entry) return;

    element.setAttribute("href", entry.href);
    if (entry.target) element.setAttribute("target", entry.target);
    if (entry.rel) element.setAttribute("rel", entry.rel);
  });
}

function renderNav(items, variant = "header") {
  return items
    .map((item) => {
      const href = resolveRoute(window.siteContent, item.key, item.hash || "");
      return `<li><a href="${href}" data-nav-key="${item.key}" class="${variant === "footer" ? "footer-nav-link" : ""}">${item.label}</a></li>`;
    })
    .join("");
}

function renderTrustStats(items) {
  return items
    .map(
      (item) => `
        <article class="stat-card motion-item">
          <p class="stat-value">${item.value}</p>
          <p class="stat-label">${item.label}</p>
        </article>
      `
    )
    .join("");
}

function renderServiceCategories(items) {
  return items
    .map(
      (item, index) => `
        <article class="feature-card motion-item">
          <span class="feature-index">0${index + 1}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function renderContactChannels(items) {
  return items
    .map(
      (item) => `
        <article class="contact-card motion-item">
          <span class="contact-kicker">${item.kicker}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <span class="contact-card-value">${item.value}</span>
          <a class="contact-card-link" href="${item.type === "whatsapp"
            ? window.siteContent.contact.whatsappUrl
            : item.type === "phone"
              ? `tel:${window.siteContent.contact.phoneHref}`
              : `mailto:${window.siteContent.contact.email}`}"${item.type === "whatsapp" ? ' target="_blank" rel="noopener noreferrer"' : ""}>
            ${item.cta}
          </a>
        </article>
      `
    )
    .join("");
}

function hydrateLists(content) {
  const renderers = {
    nav: (items) => renderNav(items, "header"),
    "footer-nav": (items) => renderNav(items, "footer"),
    "trust-stats": renderTrustStats,
    "service-categories": renderServiceCategories,
    "contact-channels": renderContactChannels
  };

  document.querySelectorAll("[data-list]").forEach((element) => {
    const list = getByPath(content, element.dataset.list);
    const renderer = renderers[element.dataset.render];
    if (!Array.isArray(list) || !renderer) return;
    element.innerHTML = renderer(list);
  });
}

function applyMotionDelays(elements) {
  elements.forEach((element, index) => {
    element.style.setProperty("--delay", `${index * 80}ms`);
  });
}

function setupMotionDelays() {
  document.querySelectorAll(".reveal").forEach((group) => {
    applyMotionDelays(group.querySelectorAll(".motion-item"));
  });
}

function setupReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          instance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  revealItems.forEach((element) => observer.observe(element));
}

function setupLandingMotion() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    document.body.classList.add("is-ready");
    return;
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.add("is-ready");
    });
  });
}

function setupHeroParallax() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const heroImage = document.querySelector(".hero-image");
  const heroSection = document.querySelector(".hero, .inner-hero");
  if (reduceMotion || !heroImage || !heroSection) return;

  let ticking = false;

  const updateParallax = () => {
    const rect = heroSection.getBoundingClientRect();
    const offset = Math.max(-16, Math.min(16, rect.top * -0.035));
    heroImage.style.transform = `scale(1.04) translateY(${offset}px)`;
    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateParallax);
  };

  updateParallax();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}

function setupMobileMenu() {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (!header || !toggle || !nav) return;

  const mobileQuery = window.matchMedia("(max-width: 860px)");
  const navLinks = nav.querySelectorAll("a[href]");

  const closeMenu = () => {
    header.classList.remove("is-menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Apri menu di navigazione");
  };

  const openMenu = () => {
    header.classList.add("is-menu-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Chiudi menu di navigazione");
  };

  toggle.addEventListener("click", () => {
    if (header.classList.contains("is-menu-open")) closeMenu();
    else openMenu();
  });

  navLinks.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("is-menu-open")) {
      closeMenu();
      toggle.focus();
    }
  });

  const onBreakpointChange = (event) => {
    if (!event.matches) closeMenu();
  };

  if ("addEventListener" in mobileQuery) mobileQuery.addEventListener("change", onBreakpointChange);
  else mobileQuery.addListener(onBreakpointChange);
}

function highlightCurrentNav() {
  const page = document.body.dataset.page;
  if (!page) return;
  document.querySelectorAll(`[data-nav-key="${page}"]`).forEach((link) => {
    link.classList.add("is-active");
  });
}

function updateYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = year;
  });
}

async function initSite() {
  await injectComponents();
  const content = await fetchResource("data/content.json", "json");
  window.siteContent = content;

  populateFields(content);
  applyRouteLinks(content);
  applyContactLinks(content);
  hydrateLists(content);
  updateYear();
  highlightCurrentNav();
  setupMotionDelays();
  setupLandingMotion();
  setupReveal();
  setupHeroParallax();
  setupMobileMenu();
}

initSite().catch((error) => {
  console.error(error);
});
