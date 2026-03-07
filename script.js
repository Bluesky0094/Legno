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
          <article class="card">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
          </article>
        `
      )
      .join("");
  }

  const kpiRow = document.getElementById("kpiRow");
  if (kpiRow) {
    kpiRow.innerHTML = config.beforeAfter.kpis
      .map(
        (kpi) => `
          <article class="kpi-card" aria-label="${kpi.label}">
            <p class="kpi-value">${kpi.value}</p>
            <p class="kpi-label">${kpi.label}</p>
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
        <div class="compare-track">
          <article class="compare-card" aria-label="${audience.before.title}">
            <div class="compare-head bad">${audience.before.title}</div>
            <div class="compare-body">
              <div class="mockup bad" aria-hidden="true">
                <span class="mockup-label">${audience.before.mockupLabel}</span>
                <span class="mock-line short"></span>
                <span class="mock-line full"></span>
                <span class="mock-line mid"></span>
                <span class="mock-chip"></span>
              </div>
              <ul>
                ${audience.before.points.map((p) => `<li>${p}</li>`).join("")}
              </ul>
            </div>
          </article>
          <article class="compare-card" aria-label="${audience.after.title}">
            <div class="compare-head good">${audience.after.title}</div>
            <div class="compare-body">
              <div class="mockup good" aria-hidden="true">
                <span class="mockup-label">${audience.after.mockupLabel}</span>
                <span class="mock-line full"></span>
                <span class="mock-line full"></span>
                <span class="mock-line mid"></span>
                <span class="mock-cta"></span>
              </div>
              <ul>
                ${audience.after.points.map((p) => `<li>${p}</li>`).join("")}
              </ul>
            </div>
          </article>
        </div>
        <aside class="changes-strip" aria-label="Interventi effettuati">
          <h3>Cosa e cambiato</h3>
          <div class="changes-list">
            ${audience.changes.map((item) => `<span class="change-pill">${item}</span>`).join("")}
          </div>
        </aside>
      `;
    };

    const renderTabs = () => {
      tabsRoot.innerHTML = audiences
        .map(
          (audience, index) => `
            <button
              type="button"
              class="audience-tab${audience.id === activeAudience.id ? " is-active" : ""}"
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
}

function setupReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
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

function setupMobileMenu() {
  const topbar = document.querySelector(".topbar");
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (!topbar || !toggle || !nav) return;

  const navLinks = nav.querySelectorAll('a[href^="#"]');
  const mobileQuery = window.matchMedia("(max-width: 620px)");

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
setupReveal();
setupMobileMenu();
