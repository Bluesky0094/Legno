const siteConfig = {
  brand: {
    name: "LegnoForte",
    heroLead:
      "Questa demo mostra come un rivenditore per falegnami, edilizia, elettricisti e lavorazioni metalliche puo ottenere piu contatti con un sito piu chiaro, veloce e orientato alle richieste.",
    highlights: [
      "Catalogo piu leggibile per categorie professionali",
      "Richieste da mobile in pochi tocchi",
      "Messaggio commerciale chiaro e credibile"
    ]
  },
  services: [
    {
      title: "Navigazione catalogo efficace",
      description:
        "Riorganizzo menu e categorie per far trovare subito materiali, utensili e accessori senza rimbalzi inutili."
    },
    {
      title: "Esperienza mobile rapida",
      description:
        "Ottimizzo la fruizione su smartphone, dove molti artigiani cercano prodotti direttamente in cantiere o laboratorio."
    },
    {
      title: "Fiducia locale e autorevolezza",
      description:
        "Rendo visibili marchi trattati, prove sociali e punti di forza del punto vendita per aumentare la credibilita."
    },
    {
      title: "Lead capture orientata alla vendita",
      description:
        "Posiziono CTA e contatti nei punti strategici per trasformare visite in richieste commerciali concrete."
    }
  ],
  beforeAfter: {
    kpis: [
      { value: "+42%", label: "Richieste preventivo" },
      { value: "-38%", label: "Tempo ricerca prodotto" },
      { value: "+55%", label: "Click su WhatsApp" }
    ],
    trustNote:
      "Esempio demo realistico basato su pattern comuni in rivendite tecniche di materiali e utensili professionali.",
    audiences: [
      {
        id: "falegname",
        label: "Falegname",
        before: {
          title: "Prima: sito confuso",
          mockupLabel: "Categorie disordinate",
          points: [
            "Ferramenta e legname mescolati nello stesso menu",
            "Pagine lente con filtri poco chiari",
            "Nessuna CTA rapida per richiesta disponibilita"
          ]
        },
        after: {
          title: "Dopo: percorso guidato",
          mockupLabel: "Percorso per lavorazione",
          points: [
            "Area dedicata a pannelli, ferramenta e finiture",
            "Filtri rapidi per misura, essenza e uso",
            "CTA WhatsApp visibile su ogni scheda prodotto"
          ]
        },
        changes: ["Menu riorganizzato", "Filtri mobile-first", "CTA WhatsApp sticky"]
      },
      {
        id: "edile",
        label: "Impresa edile",
        before: {
          title: "Prima: frizione alta",
          mockupLabel: "Accesso ai materiali lento",
          points: [
            "Prodotti da cantiere difficili da trovare da smartphone",
            "Informazioni tecniche sparse e non uniformi",
            "Contatto commerciale nascosto nel footer"
          ]
        },
        after: {
          title: "Dopo: acquisto piu rapido",
          mockupLabel: "Categorie cantiere rapide",
          points: [
            "Entrata immediata su malte, isolanti e attrezzature",
            "Schede sintetiche con dati tecnici in evidenza",
            "Pulsanti rapidi per disponibilita e preventivo"
          ]
        },
        changes: ["Gerarchia categorie", "Schede compatte", "Contatti in evidenza"]
      },
      {
        id: "elettricista",
        label: "Elettricista",
        before: {
          title: "Prima: poca chiarezza",
          mockupLabel: "Ricerca componenti dispersiva",
          points: [
            "Quadri, cavi e accessori distribuiti in sezioni incoerenti",
            "Mancano scorciatoie per i prodotti piu richiesti",
            "Nessun invito a inviare lista materiale"
          ]
        },
        after: {
          title: "Dopo: conversione diretta",
          mockupLabel: "Shortcut impianti elettrici",
          points: [
            "Sezioni per impianti civili e industriali ben separate",
            "Blocchi rapidi per i codici piu acquistati",
            "CTA per invio lista via WhatsApp in un tap"
          ]
        },
        changes: ["Shortcut per codici", "Flusso per categoria", "Lead capture contestuale"]
      },
      {
        id: "metalmeccanico",
        label: "Metalmeccanico",
        before: {
          title: "Prima: fiducia debole",
          mockupLabel: "Offerta poco valorizzata",
          points: [
            "Utensili da taglio e saldatura non distinti chiaramente",
            "Mancano prove di brand trattati e competenza",
            "Richiesta informazioni troppo lunga"
          ]
        },
        after: {
          title: "Dopo: autorevolezza chiara",
          mockupLabel: "Catalogo tecnico leggibile",
          points: [
            "Percorsi separati per saldatura, taglio e abrasivi",
            "Brand e certificazioni visibili in apertura",
            "Form contatto breve con alternativa WhatsApp"
          ]
        },
        changes: ["Brand proof in hero", "Catalogo segmentato", "Modulo ridotto"]
      }
    ]
  },
  contacts: {
    whatsappUrl: "https://wa.me/393331234567?text=Ciao%2C%20ho%20visto%20la%20demo%20e%20vorrei%20migliorare%20il%20mio%20sito.",
    email: "consulenza@legnoforte-demo.it"
  }
};

function populateSite(config) {
  const brandNameEls = [document.getElementById("brandName"), document.getElementById("footerBrand")];
  brandNameEls.forEach((el) => {
    if (el) el.textContent = config.brand.name;
  });

  const heroLead = document.getElementById("heroLead");
  if (heroLead) heroLead.textContent = config.brand.heroLead;

  const heroHighlights = document.getElementById("heroHighlights");
  if (heroHighlights) {
    heroHighlights.innerHTML = config.brand.highlights
      .map((item) => `<li>${item}</li>`)
      .join("");
  }

  const serviceGrid = document.getElementById("serviceGrid");
  if (serviceGrid) {
    serviceGrid.innerHTML = config.services
      .map(
        (service) => `
          <article class="card motion-item">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
          </article>
        `
      )
      .join("");
  }

  const trustNote = document.getElementById("trustNote");
  if (trustNote) trustNote.textContent = config.beforeAfter.trustNote;

  const tabsRoot = document.getElementById("audienceTabs");
  const comparisonGrid = document.getElementById("comparisonGrid");
  if (tabsRoot && comparisonGrid) {
    const audiences = config.beforeAfter.audiences;
    let activeAudience = audiences[0];

    const renderComparison = (audience) => {
      comparisonGrid.innerHTML = `
        <div class="comparison-summary motion-item">
          <p class="comparison-summary-label">Interventi chiave</p>
          <p class="comparison-summary-text">${audience.changes.join(" - ")}</p>
        </div>
        <div class="compare-track">
          <article class="compare-card motion-item" aria-label="${audience.before.title}">
            <div class="compare-head bad">${audience.before.title}</div>
            <div class="compare-body">
              <ul>
                ${audience.before.points.map((p) => `<li>${p}</li>`).join("")}
              </ul>
            </div>
          </article>
          <article class="compare-card motion-item" aria-label="${audience.after.title}">
            <div class="compare-head good">${audience.after.title}</div>
            <div class="compare-body">
              <ul>
                ${audience.after.points.map((p) => `<li>${p}</li>`).join("")}
              </ul>
            </div>
          </article>
        </div>
      `;

      applyMotionDelays(comparisonGrid.querySelectorAll(".motion-item"));
      triggerMotionItems(comparisonGrid);
    };

    const renderTabs = () => {
      tabsRoot.innerHTML = audiences
        .map(
          (audience, index) => `
            <button
              type="button"
              class="audience-tab motion-item${audience.id === activeAudience.id ? " is-active" : ""}"
              role="tab"
              aria-selected="${audience.id === activeAudience.id}"
              tabindex="${audience.id === activeAudience.id ? "0" : "-1"}"
              data-audience-id="${audience.id}"
              id="tab-${audience.id}"
            >
              ${audience.label}
            </button>
          `
        )
        .join("");

      applyMotionDelays(tabsRoot.querySelectorAll(".motion-item"));
      triggerMotionItems(tabsRoot);

      const buttons = tabsRoot.querySelectorAll(".audience-tab");
      buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
          const selectedId = button.getAttribute("data-audience-id");
          const selected = audiences.find((a) => a.id === selectedId);
          if (!selected) return;
          activeAudience = selected;
          renderTabs();
          renderComparison(activeAudience);
        });

        button.addEventListener("keydown", (event) => {
          if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
          event.preventDefault();
          const direction = event.key === "ArrowRight" ? 1 : -1;
          const nextIndex = (index + direction + buttons.length) % buttons.length;
          buttons[nextIndex].focus();
          buttons[nextIndex].click();
        });
      });
    };

    renderTabs();
    renderComparison(activeAudience);
  }

  const whatsappButtons = [document.getElementById("heroWhatsapp"), document.getElementById("contactWhatsapp")];
  whatsappButtons.forEach((btn) => {
    if (btn) btn.href = config.contacts.whatsappUrl;
  });

  const emailLink = document.getElementById("contactEmail");
  if (emailLink) {
    emailLink.href = `mailto:${config.contacts.email}`;
    emailLink.textContent = `Oppure scrivimi via email: ${config.contacts.email}`;
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  applyMotionDelays(document.querySelectorAll(".hero-copy > *, .hero-panel > *, .service-grid .card, .contact-copy > *"));
}

function applyMotionDelays(elements) {
  elements.forEach((element, index) => {
    element.style.setProperty("--delay", `${index * 70}ms`);
  });
}

function triggerMotionItems(container) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = container.querySelectorAll(".motion-item");
  if (reduceMotion || items.length === 0) return;

  items.forEach((item) => item.classList.remove("motion-enter-active"));
  requestAnimationFrame(() => {
    items.forEach((item) => item.classList.add("motion-enter-active"));
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
      threshold: 0.12,
      rootMargin: "0px 0px -32px 0px"
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
  const heroSection = document.querySelector(".hero");
  if (reduceMotion || !heroImage || !heroSection) return;

  let ticking = false;

  const updateParallax = () => {
    const rect = heroSection.getBoundingClientRect();
    const offset = Math.max(-18, Math.min(18, rect.top * -0.045));
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
  const topbar = document.querySelector(".topbar");
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (!topbar || !toggle || !nav) return;

  const navLinks = nav.querySelectorAll('a[href^="#"]');
  const mobileQuery = window.matchMedia("(max-width: 820px)");

  const closeMenu = () => {
    topbar.classList.remove("is-menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Apri menu di navigazione");
  };

  const openMenu = () => {
    topbar.classList.add("is-menu-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Chiudi menu di navigazione");
  };

  toggle.addEventListener("click", () => {
    if (topbar.classList.contains("is-menu-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && topbar.classList.contains("is-menu-open")) {
      closeMenu();
      toggle.focus();
    }
  });

  const onBreakpointChange = (event) => {
    if (!event.matches) closeMenu();
  };

  if ("addEventListener" in mobileQuery) {
    mobileQuery.addEventListener("change", onBreakpointChange);
  } else {
    mobileQuery.addListener(onBreakpointChange);
  }
}

populateSite(siteConfig);
setupLandingMotion();
setupReveal();
setupHeroParallax();
setupMobileMenu();
