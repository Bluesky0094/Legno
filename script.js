const siteConfig = {
  brand: {
    name: "F.lli Rinaldi Legnami",
    heroLead:
      "Stock disponibile, consulenza rapida e supporto concreto per chi lavora con tempi stretti e materiali tecnici.",
    heroHighlights: [
      "Stock rapido per legname strutturale, pannelli e tavolame",
      "Magazzino coperto e preparazione ordini per clienti professionali",
      "Consegne e supporto operativo per cantieri, laboratori e aziende"
    ],
    storyTitle:
      "Una realta familiare cresciuta attorno al magazzino, alla continuita di fornitura e al rapporto diretto con il cliente.",
    storyLead:
      "Persone riconoscibili, stock reale, processi chiari e una proposta costruita per chi acquista materiale con esigenze tecniche e tempi precisi.",
    storyPoints: [
      {
        title: "Relazione diretta",
        description: "Contatto rapido con il magazzino e un interlocutore che conosce materiali, impieghi e tempi di approvvigionamento."
      },
      {
        title: "Fornitura continua",
        description: "Organizzazione dello stock e gestione ordini pensate per clienti che non possono fermare lavorazioni o cantiere."
      },
      {
        title: "Territorio e fiducia",
        description: "Un'azienda regionale credibile, con presenza fisica, team visibile e servizio costruito nel tempo."
      }
    ]
  },
  trustStats: [
    { value: "3.500 m2", label: "magazzino coperto e area di stoccaggio" },
    { value: "30+ anni", label: "di attivita familiare nel territorio" },
    { value: "48h", label: "per preparazioni ordini e richieste urgenti" },
    { value: "B2B", label: "servizio pensato per imprese e professionisti" }
  ],
  materials: [
    {
      title: "Legname strutturale",
      meta: "Abete, lamellare, travi e morali",
      description:
        "Materiali per coperture, strutture, carpenteria e cantieri con disponibilita pensata per uso professionale.",
      image: "images/photo-showcases-well-organized-secure-timber-storage-facility-lumber-holding-yard-situated-wood-warehouse-330971759-1487841874.jpg",
      alt: "Deposito di legname strutturale all'aperto"
    },
    {
      title: "Pannelli e semilavorati",
      meta: "OSB, multistrato, compensati, pannelli tecnici",
      description:
        "Soluzioni per falegnamerie, allestimenti, prefabbricazione e lavorazioni dove contano misure, stabilita e continuita di fornitura.",
      image: "images/staff-working-in-wood-furniture-industry-factory-checking-selecting-plywood-wooden-board-type-material-in-stock-warehouse-2REP24R-3241755390.jpg",
      alt: "Controllo pannelli in area di stoccaggio"
    },
    {
      title: "Tavolame e lavorazioni",
      meta: "Selezione, taglio e preparazione",
      description:
        "Tavole, pannelli e materiale preparato per officine, laboratori e clienti che vogliono ridurre tempi di lavorazione interna.",
      image: "images/carpenter-wood-warehouse-selects-plank-furniture-making-carpentry-workshop-281204947-4075932683.jpg",
      alt: "Selezione di tavolame in magazzino"
    }
  ],
  servicePreview: [
    {
      title: "Taglio e preparazione materiale",
      description: "Preparazione ordini piu rapida per clienti che vogliono ricevere materiale pronto alla fase successiva di lavoro."
    },
    {
      title: "Logistica e consegna",
      description: "Organizzazione consegne locali e supporto nella pianificazione per cantieri, aziende e forniture ricorrenti."
    },
    {
      title: "Supporto tecnico commerciale",
      description: "Affiancamento nella scelta di essenze, pannelli e soluzioni in base a impiego, stock e tempi di realizzazione."
    }
  ],
  logistics: {
    heroLead:
      "Per un cliente professionale, il servizio non finisce con la disponibilita del materiale: conta come viene preparato, gestito e consegnato.",
    trustStats: [
      { value: "Preparazione", label: "ordini rapida per richieste programmate e urgenti" },
      { value: "Taglio", label: "supporto su materiali e semilavorati selezionati" },
      { value: "Consegna", label: "coordinata con lavorazioni, laboratori e cantiere" },
      { value: "Supporto", label: "commerciale diretto con interlocutore dedicato" }
    ],
    services: [
      {
        title: "Consegne programmate",
        description: "Pianificazione delle consegne in funzione delle tempistiche del cliente, con gestione chiara di priorita, disponibilita e accesso in cantiere."
      },
      {
        title: "Taglio e preparazione ordini",
        description: "Supporto nella preparazione del materiale per ridurre i passaggi interni e accelerare l'avvio delle lavorazioni."
      },
      {
        title: "Gestione stock dedicata",
        description: "Per clienti ricorrenti, impostazione di forniture e disponibilita monitorate in modo piu prevedibile."
      },
      {
        title: "Supporto per richieste tecniche",
        description: "Confronto rapido su pannelli, tavolame e soluzioni strutturali in base a impiego, resistenza e tempi di approvvigionamento."
      }
    ],
    processSteps: [
      {
        title: "1. Richiesta",
        description: "Il cliente invia elenco materiali, misure o esigenza di fornitura con tempistiche e destinazione."
      },
      {
        title: "2. Verifica stock",
        description: "Il magazzino controlla disponibilita, alternative e modalita di preparazione piu efficienti."
      },
      {
        title: "3. Preparazione",
        description: "Ordine, taglio o predisposizione del materiale con una gestione pensata per ridurre attese e passaggi inutili."
      },
      {
        title: "4. Consegna o ritiro",
        description: "Il cliente riceve materiale e informazioni operative in modo chiaro, con una relazione diretta e concreta."
      }
    ]
  },
  contact: {
    whatsappUrl: "https://wa.me/393331234567?text=Buongiorno%2C%20vorrei%20richiedere%20un%20preventivo%20per%20una%20fornitura%20di%20legname.",
    email: "preventivi@rinaldilegnami.it",
    lead:
      "Invia una richiesta con materiali, misure e tempi previsti: ti rispondiamo con una proposta chiara su disponibilita, preparazione e consegna.",
    details: [
      { label: "Sede", value: "Via delle Segherie 18, provincia di Bergamo" },
      { label: "Telefono", value: "+39 035 555 0142" },
      { label: "Email", value: "preventivi@rinaldilegnami.it" },
      { label: "Orari", value: "Lun-Ven 7:30-12:00 / 13:30-18:00" }
    ]
  }
};

function renderList(id, items, renderItem) {
  const root = document.getElementById(id);
  if (!root) return;
  root.innerHTML = items.map(renderItem).join("");
  applyMotionDelays(root.querySelectorAll(".motion-item"));
  triggerMotionItems(root);
}

function populateSharedContent(config) {
  [document.getElementById("brandName"), document.getElementById("footerBrand")].forEach((el) => {
    if (el) el.textContent = config.brand.name;
  });

  const heroLead = document.getElementById("heroLead");
  if (heroLead) heroLead.textContent = config.brand.heroLead;

  const servicesHeroLead = document.getElementById("servicesHeroLead");
  if (servicesHeroLead) servicesHeroLead.textContent = config.logistics.heroLead;

  renderList("heroHighlights", config.brand.heroHighlights, (item) => `<li class="motion-item">${item}</li>`);
  renderList(
    "trustStats",
    config.trustStats,
    (item) => `
      <article class="stat-card motion-item">
        <p class="stat-value">${item.value}</p>
        <p class="stat-label">${item.label}</p>
      </article>
    `
  );
  renderList(
    "servicesTrustStats",
    config.logistics.trustStats,
    (item) => `
      <article class="stat-card motion-item">
        <p class="stat-value">${item.value}</p>
        <p class="stat-label">${item.label}</p>
      </article>
    `
  );
  renderList(
    "materialsGrid",
    config.materials,
    (item) => `
      <article class="material-card motion-item">
        <img src="${item.image}" alt="${item.alt}">
        <div>
          <p class="material-meta">${item.meta}</p>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </article>
    `
  );
  renderList(
    "servicePreviewGrid",
    config.servicePreview,
    (item) => `
      <article class="preview-card motion-item">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `
  );
  renderList(
    "logisticsGrid",
    config.logistics.services,
    (item) => `
      <article class="logistics-card motion-item">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `
  );
  renderList(
    "storyPoints",
    config.brand.storyPoints,
    (item) => `
      <article class="story-point motion-item">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `
  );
  renderList(
    "processSteps",
    config.logistics.processSteps,
    (item) => `
      <article class="process-step motion-item">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `
  );
  renderList(
    "contactList",
    config.contact.details,
    (item) => `
      <div class="contact-list-item motion-item">
        <strong>${item.label}</strong>
        <span>${item.value}</span>
      </div>
    `
  );

  const storyTitle = document.getElementById("storyTitle");
  if (storyTitle) storyTitle.textContent = config.brand.storyTitle;

  const storyLead = document.getElementById("storyLead");
  if (storyLead) storyLead.textContent = config.brand.storyLead;

  const contactLead = document.getElementById("contactLead");
  if (contactLead) contactLead.textContent = config.contact.lead;

  [document.getElementById("heroWhatsapp"), document.getElementById("contactWhatsapp")].forEach((btn) => {
    if (btn) btn.href = config.contact.whatsappUrl;
  });

  const contactEmail = document.getElementById("contactEmail");
  if (contactEmail) {
    contactEmail.href = `mailto:${config.contact.email}`;
    contactEmail.textContent = config.contact.email;
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
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

populateSharedContent(siteConfig);
highlightCurrentNav();
setupLandingMotion();
setupReveal();
setupHeroParallax();
setupMobileMenu();
