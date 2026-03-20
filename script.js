function applyMotionDelays(elements) {
  elements.forEach((element, index) => {
    element.style.setProperty("--delay", `${index * 70}ms`);
  });
}

function setupMotionDelays() {
  const groups = document.querySelectorAll(".reveal");
  groups.forEach((group) => {
    applyMotionDelays(group.querySelectorAll(".motion-item"));
  });
}

function setupReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealItems.forEach((el) => observer.observe(el));
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
    const offset = Math.max(-16, Math.min(16, rect.top * -0.04));
    heroImage.style.transform = `scale(1.03) translateY(${offset}px)`;
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

  const navLinks = nav.querySelectorAll('a[href]');
  const mobileQuery = window.matchMedia("(max-width: 860px)");

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
  const activeLink = document.querySelector(`[data-nav="${page}"]`);
  if (activeLink) activeLink.classList.add("is-active");
}

function updateYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

setupMotionDelays();
updateYear();
highlightCurrentNav();
setupLandingMotion();
setupReveal();
setupHeroParallax();
setupMobileMenu();
