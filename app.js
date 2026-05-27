// =========================================================
//  B2B SaaS IA Playground
//  Single-file vanilla JS. State -> render preview + editor.
// =========================================================

// ---------- PRESETS ----------
const PRESETS = {
  liberate: {
    brand: {
      name: "Liberate",
      colorPrimary: "#ff5a1f",
      colorHeaderBg: "#ffffff",
      colorHeaderText: "#0e1116",
      colorFooterBg: "#0e1116",
      colorFooterText: "#c9ccd2",
      colorFooterLink: "#ffffff",
    },
    layout: {
      dropdownStyle: "simple",
      navAlign: "center",
      stickyHeader: false,
      headerBorder: true,
      footerColWidth: "auto",
      footerShowLogo: false,
      footerTagline: "AI for insurance, built for action.",
    },
    nav: [
      { label: "Platform", href: "#", children: [
        { label: "Platform Overview", href: "#" },
        { label: "Claims Automation", href: "#" },
        { label: "System of Action", href: "#" },
      ]},
      { label: "Solutions", href: "#", children: [
        { label: "For Agencies & Brokers", href: "#" },
        { label: "For Carriers", href: "#" },
      ]},
      { label: "Resources", href: "#", children: [
        { label: "Blog", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Security", href: "#" },
        { label: "Resources library", href: "#" },
      ]},
      { label: "Company", href: "#", children: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "News", href: "#" },
      ]},
    ],
    ctas: [
      { label: "Login", href: "#", style: "text" },
      { label: "Request a demo", href: "#", style: "primary" },
    ],
    footerCols: [
      { heading: "How it Works", links: [
        { label: "Platform", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Security", href: "#" },
      ]},
      { heading: "Solutions", links: [
        { label: "For Agencies & Brokers", href: "#" },
        { label: "For Carriers", href: "#" },
      ]},
      { heading: "Resources", links: [
        { label: "Resource Library", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Glossary", href: "#" },
      ]},
      { heading: "Company", links: [
        { label: "About Us", href: "#" },
        { label: "News", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact Us", href: "#" },
      ]},
    ],
    social: [
      { label: "LinkedIn", href: "#" },
      { label: "Glassdoor", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookies Settings", href: "#" },
    ],
    contact: {
      phone: "1-866-GO-GET-AI (1-866-464-3824)",
      email: "",
      address: "",
    },
    newsletter: {
      on: false,
      heading: "Get the latest in your inbox",
      placeholder: "you@company.com",
    },
    copyright: "© 2026 Liberate inc. All rights reserved.",
  },

  "rt-standard": {
    brand: {
      name: "Liberate",
      colorPrimary: "#ff5a1f",
      colorHeaderBg: "#ffffff",
      colorHeaderText: "#0e1116",
      colorFooterBg: "#0e1116",
      colorFooterText: "#c9ccd2",
      colorFooterLink: "#ffffff",
    },
    layout: {
      dropdownStyle: "simple",
      navAlign: "center",
      stickyHeader: false,
      headerBorder: true,
      footerColWidth: "auto",
      footerShowLogo: false,
      footerTagline: "AI for insurance, built for action.",
    },
    nav: [
      { label: "Platform", href: "#", children: [
        { label: "Liberate Platform", href: "#" },
        { label: "Platform Capabilities", href: "#", isHeading: true },
        { label: "Multimodal AI", href: "#" },
        { label: "Agent Orchestration", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Security", href: "#" },
      ], featured: {
        enabled: true,
        eyebrow: "",
        headline: "Why choose Liberate?",
        description: "Learn why the world's leading insurance companies trust Liberate to run their businesses and delight their policyholders.",
        imageUrl: "",
        ctaLabel: "Read more",
        ctaHref: "#",
      }},
      { label: "Solutions", href: "#", children: [
        { label: "Segments", href: "#", isHeading: true },
        { label: "For Carriers", href: "#" },
        { label: "For Agencies & Brokers", href: "#" },
        { label: "For TPAs, MGAs, and BPOs", href: "#" },
        { label: "Use Cases", href: "#", isHeading: true },
        { label: "Claims Automation", href: "#" },
        { label: "Servicing & Policy Administration", href: "#" },
        { label: "Inbound & Outbound Sales", href: "#" },
        { label: "Voice AI", href: "#" },
      ]},
      { label: "Resources", href: "#", children: [
        { label: "Customer Stories", href: "#" },
        { label: "Events", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Liberate Labs", href: "#", comingSoon: true },
        { label: "Podcast", href: "#", comingSoon: true },
      ], featured: {
        enabled: true,
        eyebrow: "",
        headline: "Featured Customer Story",
        description: "Carrier X lowered LAE by X points without increasing headcount and delighting clients.",
        imageUrl: "",
        ctaLabel: "Learn how",
        ctaHref: "#",
      }},
      { label: "Company", href: "#", children: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "News", href: "#" },
      ]},
    ],
    ctas: [
      { label: "Request a demo", href: "#", style: "primary" },
    ],
    footerCols: [
      { heading: "How it Works", links: [
        { label: "Platform", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Security", href: "#" },
      ]},
      { heading: "Solutions", links: [
        { label: "For Agencies & Brokers", href: "#" },
        { label: "For Carriers", href: "#" },
      ]},
      { heading: "Resources", links: [
        { label: "Resource Library", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Glossary", href: "#" },
      ]},
      { heading: "Company", links: [
        { label: "About Us", href: "#" },
        { label: "News", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact Us", href: "#" },
      ]},
    ],
    social: [
      { label: "LinkedIn", href: "#" },
      { label: "Glassdoor", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookies Settings", href: "#" },
    ],
    contact: {
      phone: "1-866-GO-GET-AI (1-866-464-3824)",
      email: "",
      address: "",
    },
    newsletter: {
      on: false,
      heading: "Get the latest in your inbox",
      placeholder: "you@company.com",
    },
    copyright: "© 2026 Liberate inc. All rights reserved.",
  },

  "rt-mega": {
    brand: {
      name: "Liberate",
      colorPrimary: "#ff5a1f",
      colorHeaderBg: "#ffffff",
      colorHeaderText: "#0e1116",
      colorFooterBg: "#0e1116",
      colorFooterText: "#c9ccd2",
      colorFooterLink: "#ffffff",
    },
    layout: {
      dropdownStyle: "mega",
      navAlign: "center",
      stickyHeader: false,
      headerBorder: true,
      footerColWidth: "auto",
      footerShowLogo: false,
      footerTagline: "AI for insurance, built for action.",
    },
    nav: [
      { label: "Platform", href: "#", children: [
        { label: "Liberate Platform", href: "#" },
        { label: "Platform Capabilities", href: "#", isHeading: true },
        { label: "Multimodal AI", href: "#" },
        { label: "Agent Orchestration", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Security", href: "#" },
      ], featured: {
        enabled: true,
        eyebrow: "",
        headline: "Why choose Liberate?",
        description: "Learn why the world's leading insurance companies trust Liberate to run their businesses and delight their policyholders.",
        imageUrl: "",
        ctaLabel: "Read more",
        ctaHref: "#",
      }},
      { label: "Solutions", href: "#", children: [
        { label: "Segments", href: "#", isHeading: true },
        { label: "For Carriers", href: "#" },
        { label: "For Agencies & Brokers", href: "#" },
        { label: "For TPAs, MGAs, and BPOs", href: "#" },
        { label: "Use Cases", href: "#", isHeading: true },
        { label: "Claims Automation", href: "#" },
        { label: "Servicing & Policy Administration", href: "#" },
        { label: "Inbound & Outbound Sales", href: "#" },
        { label: "Voice AI", href: "#" },
      ]},
      { label: "Resources", href: "#", children: [
        { label: "Customer Stories", href: "#" },
        { label: "Events", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Liberate Labs", href: "#", comingSoon: true },
        { label: "Podcast", href: "#", comingSoon: true },
      ], featured: {
        enabled: true,
        eyebrow: "",
        headline: "Featured Customer Story",
        description: "Carrier X lowered LAE by X points without increasing headcount and delighting clients.",
        imageUrl: "",
        ctaLabel: "Learn how",
        ctaHref: "#",
      }},
      { label: "Company", href: "#", children: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "News", href: "#" },
      ]},
    ],
    ctas: [
      { label: "Request a demo", href: "#", style: "primary" },
    ],
    footerCols: [
      { heading: "How it Works", links: [
        { label: "Platform", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Security", href: "#" },
      ]},
      { heading: "Solutions", links: [
        { label: "For Agencies & Brokers", href: "#" },
        { label: "For Carriers", href: "#" },
      ]},
      { heading: "Resources", links: [
        { label: "Resource Library", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Glossary", href: "#" },
      ]},
      { heading: "Company", links: [
        { label: "About Us", href: "#" },
        { label: "News", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact Us", href: "#" },
      ]},
    ],
    social: [
      { label: "LinkedIn", href: "#" },
      { label: "Glassdoor", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookies Settings", href: "#" },
    ],
    contact: {
      phone: "1-866-GO-GET-AI (1-866-464-3824)",
      email: "",
      address: "",
    },
    newsletter: {
      on: false,
      heading: "Get the latest in your inbox",
      placeholder: "you@company.com",
    },
    copyright: "© 2026 Liberate inc. All rights reserved.",
  },

  minimal: {
    brand: { name: "Liberate", colorPrimary: "#ff5a1f", colorHeaderBg: "#ffffff", colorHeaderText: "#0e1116", colorFooterBg: "#0e1116", colorFooterText: "#c9ccd2", colorFooterLink: "#ffffff" },
    layout: { dropdownStyle: "none", navAlign: "left", stickyHeader: true, headerBorder: false, footerColWidth: "logo-wide", footerShowLogo: true, footerTagline: "AI for insurance, built for action." },
    nav: [
      { label: "Product", href: "#", children: [] },
      { label: "Customers", href: "#", children: [] },
      { label: "Pricing", href: "#", children: [] },
    ],
    ctas: [
      { label: "Sign in", href: "#", style: "text" },
      { label: "Book a demo", href: "#", style: "primary" },
    ],
    footerCols: [
      { heading: "Product", links: [{ label: "Overview", href: "#" }, { label: "Security", href: "#" }, { label: "Pricing", href: "#" }] },
      { heading: "Company", links: [{ label: "About", href: "#" }, { label: "Careers", href: "#" }, { label: "Contact", href: "#" }] },
    ],
    social: [{ label: "LinkedIn", href: "#" }],
    legal: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }],
    contact: { phone: "", email: "hello@liberate.com", address: "" },
    newsletter: { on: false, heading: "", placeholder: "" },
    copyright: "© 2026 Liberate inc.",
  },

  "product-led": {
    brand: { name: "Liberate", colorPrimary: "#6c4cf1", colorHeaderBg: "#ffffff", colorHeaderText: "#0e1116", colorFooterBg: "#0e1116", colorFooterText: "#c9ccd2", colorFooterLink: "#ffffff" },
    layout: { dropdownStyle: "mega", navAlign: "center", stickyHeader: true, headerBorder: false, footerColWidth: "logo-wide", footerShowLogo: true, footerTagline: "Automate claims. Liberate your team." },
    nav: [
      { label: "Product", href: "#", children: [
        { label: "Claims Automation", href: "#" },
        { label: "System of Action", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Security", href: "#" },
      ]},
      { label: "Solutions", href: "#", children: [
        { label: "Agencies & Brokers", href: "#" },
        { label: "Carriers", href: "#" },
        { label: "Specialty Lines", href: "#" },
      ]},
      { label: "Customers", href: "#", children: [] },
      { label: "Pricing", href: "#", children: [] },
      { label: "Resources", href: "#", children: [
        { label: "Blog", href: "#" },
        { label: "Resource Library", href: "#" },
        { label: "Glossary", href: "#" },
        { label: "ROI Calculator", href: "#" },
      ]},
    ],
    ctas: [
      { label: "Sign in", href: "#", style: "text" },
      { label: "Start free", href: "#", style: "primary" },
    ],
    footerCols: [
      { heading: "Product", links: [{ label: "Claims Automation", href: "#" }, { label: "System of Action", href: "#" }, { label: "Integrations", href: "#" }, { label: "Security", href: "#" }] },
      { heading: "Solutions", links: [{ label: "Agencies & Brokers", href: "#" }, { label: "Carriers", href: "#" }] },
      { heading: "Resources", links: [{ label: "Blog", href: "#" }, { label: "ROI Calculator", href: "#" }, { label: "Glossary", href: "#" }] },
      { heading: "Company", links: [{ label: "About", href: "#" }, { label: "Careers", href: "#" }, { label: "News", href: "#" }, { label: "Contact", href: "#" }] },
    ],
    social: [{ label: "LinkedIn", href: "#" }, { label: "X", href: "#" }, { label: "YouTube", href: "#" }],
    legal: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }, { label: "Cookies", href: "#" }, { label: "DPA", href: "#" }],
    contact: { phone: "", email: "hello@liberate.com", address: "" },
    newsletter: { on: true, heading: "Stay sharp on insurance AI", placeholder: "Work email" },
    copyright: "© 2026 Liberate inc. All rights reserved.",
  },

  enterprise: {
    brand: { name: "Liberate", colorPrimary: "#0b5fff", colorHeaderBg: "#ffffff", colorHeaderText: "#0e1116", colorFooterBg: "#0b1220", colorFooterText: "#9ca8b8", colorFooterLink: "#ffffff" },
    layout: { dropdownStyle: "mega", navAlign: "left", stickyHeader: true, headerBorder: true, footerColWidth: "logo-wide", footerShowLogo: true, footerTagline: "The system of action for insurance carriers." },
    nav: [
      { label: "Platform", href: "#", children: [
        { label: "Platform Overview", href: "#" },
        { label: "Claims Automation", href: "#" },
        { label: "System of Action", href: "#" },
        { label: "Architecture", href: "#" },
        { label: "Security & Trust", href: "#" },
      ]},
      { label: "Solutions", href: "#", children: [
        { label: "By Role: Claims Leaders", href: "#" },
        { label: "By Role: IT & Architects", href: "#" },
        { label: "By Segment: Carriers", href: "#" },
        { label: "By Segment: Agencies & Brokers", href: "#" },
        { label: "By Line: P&C", href: "#" },
      ]},
      { label: "Customers", href: "#", children: [
        { label: "Case Studies", href: "#" },
        { label: "Customer Stories", href: "#" },
      ]},
      { label: "Partners", href: "#", children: [
        { label: "Partner Program", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Become a Partner", href: "#" },
      ]},
      { label: "Resources", href: "#", children: [
        { label: "Resource Library", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Events & Webinars", href: "#" },
        { label: "Glossary", href: "#" },
        { label: "Trust Center", href: "#" },
      ]},
      { label: "Company", href: "#", children: [
        { label: "About Us", href: "#" },
        { label: "Leadership", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Newsroom", href: "#" },
        { label: "Contact", href: "#" },
      ]},
    ],
    ctas: [
      { label: "Sign in", href: "#", style: "text" },
      { label: "Contact sales", href: "#", style: "ghost" },
      { label: "Request a demo", href: "#", style: "primary" },
    ],
    footerCols: [
      { heading: "Platform", links: [{ label: "Overview", href: "#" }, { label: "Claims Automation", href: "#" }, { label: "System of Action", href: "#" }, { label: "Architecture", href: "#" }] },
      { heading: "Solutions", links: [{ label: "Claims Leaders", href: "#" }, { label: "IT & Architects", href: "#" }, { label: "Carriers", href: "#" }, { label: "Agencies & Brokers", href: "#" }] },
      { heading: "Resources", links: [{ label: "Resource Library", href: "#" }, { label: "Blog", href: "#" }, { label: "Events", href: "#" }, { label: "Trust Center", href: "#" }] },
      { heading: "Company", links: [{ label: "About", href: "#" }, { label: "Leadership", href: "#" }, { label: "Careers", href: "#" }, { label: "Newsroom", href: "#" }, { label: "Contact", href: "#" }] },
    ],
    social: [{ label: "LinkedIn", href: "#" }, { label: "X", href: "#" }, { label: "YouTube", href: "#" }, { label: "Glassdoor", href: "#" }],
    legal: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }, { label: "Cookies Settings", href: "#" }, { label: "DPA", href: "#" }, { label: "Accessibility", href: "#" }],
    contact: { phone: "1-866-464-3824", email: "sales@liberate.com", address: "San Francisco, CA" },
    newsletter: { on: true, heading: "Liberate Insights — monthly", placeholder: "Work email" },
    copyright: "© 2026 Liberate inc. All rights reserved.",
  },

  developer: {
    brand: { name: "Liberate", colorPrimary: "#22c55e", colorHeaderBg: "#0e1116", colorHeaderText: "#f5f5f5", colorFooterBg: "#0e1116", colorFooterText: "#9aa0a8", colorFooterLink: "#ffffff" },
    layout: { dropdownStyle: "simple", navAlign: "left", stickyHeader: true, headerBorder: false, footerColWidth: "logo-wide", footerShowLogo: true, footerTagline: "APIs and SDKs for insurance automation." },
    nav: [
      { label: "Docs", href: "#", children: [] },
      { label: "API Reference", href: "#", children: [] },
      { label: "SDKs", href: "#", children: [
        { label: "Node.js", href: "#" },
        { label: "Python", href: "#" },
        { label: "Go", href: "#" },
      ]},
      { label: "Changelog", href: "#", children: [] },
      { label: "Pricing", href: "#", children: [] },
    ],
    ctas: [
      { label: "Sign in", href: "#", style: "text" },
      { label: "Get API key", href: "#", style: "primary" },
    ],
    footerCols: [
      { heading: "Developers", links: [{ label: "Docs", href: "#" }, { label: "API Reference", href: "#" }, { label: "SDKs", href: "#" }, { label: "Changelog", href: "#" }, { label: "Status", href: "#" }] },
      { heading: "Product", links: [{ label: "Platform", href: "#" }, { label: "Integrations", href: "#" }, { label: "Pricing", href: "#" }] },
      { heading: "Company", links: [{ label: "About", href: "#" }, { label: "Careers", href: "#" }, { label: "Blog", href: "#" }, { label: "Contact", href: "#" }] },
    ],
    social: [{ label: "GitHub", href: "#" }, { label: "Discord", href: "#" }, { label: "X", href: "#" }],
    legal: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }, { label: "Security", href: "#" }],
    contact: { phone: "", email: "", address: "" },
    newsletter: { on: false, heading: "", placeholder: "" },
    copyright: "© 2026 Liberate inc.",
  },
};

// ---------- STATE ----------
let state = clone(PRESETS.liberate);
state.viewMode = "soon"; // "vision" | "soon" | "launch"

function clone(o) { return JSON.parse(JSON.stringify(o)); }

// ---------- CUSTOM PRESETS (localStorage) ----------
const LS_KEY = "iaPlayground.customPresets.v1";
const LS_LAST = "iaPlayground.lastPreset.v1";
let customPresets = loadCustomPresets();

function loadCustomPresets() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}
function saveCustomPresets() {
  try { localStorage.setItem(LS_KEY, JSON.stringify(customPresets)); } catch {}
}
function getPreset(key) {
  if (PRESETS[key]) return PRESETS[key];
  if (customPresets[key]) return customPresets[key];
  return null;
}
function isCustomPreset(key) { return !!customPresets[key]; }

function populatePresetSelect(selected) {
  const sel = document.getElementById("presetSelect");
  sel.innerHTML = "";
  const built = document.createElement("optgroup");
  built.label = "Built-in";
  Object.keys(PRESETS).forEach((k) => {
    const o = document.createElement("option");
    o.value = k;
    o.textContent = PRESET_LABELS[k] || k;
    built.appendChild(o);
  });
  sel.appendChild(built);
  if (Object.keys(customPresets).length) {
    const custom = document.createElement("optgroup");
    custom.label = "My presets";
    Object.keys(customPresets).forEach((k) => {
      const o = document.createElement("option");
      o.value = k;
      o.textContent = customPresets[k]._label || k;
      custom.appendChild(o);
    });
    sel.appendChild(custom);
  }
  if (selected) sel.value = selected;
  updatePresetButtons();
}

function updatePresetButtons() {
  const sel = document.getElementById("presetSelect");
  const isCustom = isCustomPreset(sel.value);
  document.getElementById("deletePresetBtn").disabled = !isCustom;
  document.getElementById("renamePresetBtn").disabled = !isCustom;
  document.getElementById("deletePresetBtn").style.opacity = isCustom ? "1" : "0.4";
  document.getElementById("renamePresetBtn").style.opacity = isCustom ? "1" : "0.4";
}

const PRESET_LABELS = {
  liberate: "Liberate (current)",
  "rt-standard": "RT Preset — Standard",
  "rt-mega": "RT Preset — Mega Menu",
  minimal: "Minimal (3 items)",
  "product-led": "Product-led",
  enterprise: "Enterprise",
  developer: "Developer-first",
};

// ---------- RENDER ROOT ----------
function renderAll() {
  applyTheme();
  renderHeader();
  renderFooter();
  renderEditor();
}

function applyTheme() {
  const r = document.documentElement.style;
  r.setProperty("--c-primary", state.brand.colorPrimary);
  r.setProperty("--c-header-bg", state.brand.colorHeaderBg);
  r.setProperty("--c-header-text", state.brand.colorHeaderText);
  r.setProperty("--c-footer-bg", state.brand.colorFooterBg);
  r.setProperty("--c-footer-text", state.brand.colorFooterText);
  r.setProperty("--c-footer-link", state.brand.colorFooterLink);
}

// ---------- VIEW MODE HELPERS ----------
// Returns "show" | "soon" | "hide" based on current viewMode + item.comingSoon
function visibility(item) {
  const isSoon = !!(item && item.comingSoon);
  if (!isSoon) return "show";
  if (state.viewMode === "vision") return "show";
  if (state.viewMode === "launch") return "hide";
  return "soon"; // 'soon' mode: gray it
}

// ---------- HEADER RENDER ----------
function renderHeader() {
  document.getElementById("brandLogo").textContent = state.brand.name;
  const header = document.getElementById("siteHeader");
  header.classList.toggle("align-center", state.layout.navAlign === "center");
  header.classList.toggle("align-left", state.layout.navAlign === "left");
  header.classList.toggle("has-border", !!state.layout.headerBorder);
  header.style.position = state.layout.stickyHeader ? "sticky" : "relative";
  header.style.top = state.layout.stickyHeader ? "0" : "";
  header.style.zIndex = state.layout.stickyHeader ? "30" : "";

  const nav = document.getElementById("siteNav");
  nav.innerHTML = "";
  const mega = document.getElementById("megaPanel");
  mega.hidden = state.layout.dropdownStyle !== "mega";
  mega.classList.remove("is-open");

  state.nav.forEach((item, idx) => {
    const vis = visibility(item);
    if (vis === "hide") return;

    const wrap = document.createElement("div");
    wrap.className = "nav-item" + (vis === "soon" ? " is-soon" : "");

    const label = document.createElement("span");
    label.className = "nav-item__label";
    label.textContent = item.label;

    // Visible children only (for caret / dropdown content)
    const visibleChildren = (item.children || []).filter((c) => visibility(c) !== "hide");
    const hasChildren = visibleChildren.length > 0;

    if (hasChildren && state.layout.dropdownStyle !== "none") {
      const caret = document.createElement("i");
      caret.className = "nav-item__caret";
      label.appendChild(caret);
    }
    wrap.appendChild(label);

    if (hasChildren && state.layout.dropdownStyle === "simple") {
      const dd = document.createElement("div");
      dd.className = "nav-dropdown";
      visibleChildren.forEach((c) => {
        if (c.isHeading) {
          const h = document.createElement("div");
          h.className = "heading-item";
          if (visibility(c) === "soon") h.classList.add("is-soon");
          h.textContent = c.label;
          dd.appendChild(h);
        } else {
          const a = document.createElement("a");
          a.href = c.href || "#";
          a.textContent = c.label;
          if (visibility(c) === "soon") a.classList.add("is-soon");
          dd.appendChild(a);
        }
      });
      wrap.appendChild(dd);
    }

    if (hasChildren && state.layout.dropdownStyle === "mega") {
      wrap.addEventListener("mouseenter", () => openMega(idx));
    }

    nav.appendChild(wrap);
  });

  if (state.layout.dropdownStyle === "mega") {
    header.addEventListener("mouseleave", closeMega, { once: false });
  }

  // CTAs
  const cta = document.getElementById("siteCta");
  cta.innerHTML = "";
  state.ctas.forEach((c) => {
    const vis = visibility(c);
    if (vis === "hide") return;
    const b = document.createElement("a");
    b.href = c.href || "#";
    b.textContent = c.label;
    b.className = "btn " + (c.style === "primary" ? "btn--primary" : c.style === "ghost" ? "btn--ghost" : "btn--text");
    if (vis === "soon") b.classList.add("is-soon");
    cta.appendChild(b);
  });
}

function openMega(idx) {
  const mega = document.getElementById("megaPanel");
  const item = state.nav[idx];
  if (!item) { closeMega(); return; }
  const visibleKids = (item.children || []).filter((c) => visibility(c) !== "hide");
  const hasFeatured = !!(item.featured && item.featured.enabled);
  if (!visibleKids.length && !hasFeatured) { closeMega(); return; }

  const grid = document.createElement("div");
  grid.className = "mega-grid";
  const numLinkCols = hasFeatured ? 3 : 4;
  const chunkSize = visibleKids.length ? Math.max(1, Math.ceil(visibleKids.length / numLinkCols)) : 1;
  const cols = [];
  for (let i = 0; i < visibleKids.length; i += chunkSize) {
    cols.push(visibleKids.slice(i, i + chunkSize));
  }
  cols.forEach((col, i) => {
    const c = document.createElement("div");
    c.className = "mega-col";
    const h = document.createElement("h4");
    h.textContent = i === 0 ? item.label : "";
    c.appendChild(h);
    col.forEach((link) => {
      if (link.isHeading) {
        const hd = document.createElement("div");
        hd.className = "heading-item";
        if (visibility(link) === "soon") hd.classList.add("is-soon");
        hd.textContent = link.label;
        c.appendChild(hd);
      } else {
        const a = document.createElement("a");
        a.href = link.href || "#";
        a.textContent = link.label;
        if (visibility(link) === "soon") a.classList.add("is-soon");
        c.appendChild(a);
      }
    });
    grid.appendChild(c);
  });

  if (hasFeatured) {
    const fc = document.createElement("div");
    fc.className = "mega-col mega-featured-col";
    fc.appendChild(renderFeaturedCard(item.featured));
    grid.appendChild(fc);
  }

  mega.innerHTML = "";
  mega.appendChild(grid);
  mega.classList.add("is-open");
}

function renderFeaturedCard(f) {
  const a = document.createElement("a");
  a.className = "mega-featured";
  a.href = f.ctaHref || "#";
  if (f.imageUrl) {
    const img = document.createElement("div");
    img.className = "mega-featured__img";
    img.style.backgroundImage = `url('${(f.imageUrl || "").replace(/'/g, "\\'")}')`;
    a.appendChild(img);
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "mega-featured__img";
    a.appendChild(placeholder);
  }
  if (f.eyebrow) {
    const e = document.createElement("div");
    e.className = "mega-featured__eyebrow";
    e.textContent = f.eyebrow;
    a.appendChild(e);
  }
  if (f.headline) {
    const h = document.createElement("div");
    h.className = "mega-featured__headline";
    h.textContent = f.headline;
    a.appendChild(h);
  }
  if (f.description) {
    const d = document.createElement("div");
    d.className = "mega-featured__desc";
    d.textContent = f.description;
    a.appendChild(d);
  }
  if (f.ctaLabel) {
    const cta = document.createElement("div");
    cta.className = "mega-featured__cta";
    cta.textContent = f.ctaLabel + " →";
    a.appendChild(cta);
  }
  return a;
}

function closeMega() {
  const mega = document.getElementById("megaPanel");
  if (mega) mega.classList.remove("is-open");
}

// ---------- FOOTER RENDER ----------
function renderFooter() {
  const f = document.getElementById("siteFooter");
  f.innerHTML = "";

  const inner = document.createElement("div");
  inner.className = "site-footer__inner";

  const visibleFooterCols = state.footerCols.filter((c) => visibility(c) !== "hide");
  const cols = document.createElement("div");
  cols.className = "footer-cols " + (state.layout.footerColWidth === "logo-wide" ? "col-logo-wide" : "col-auto");
  cols.style.setProperty("--col-count", visibleFooterCols.length);

  if (state.layout.footerShowLogo) {
    const brandCol = document.createElement("div");
    brandCol.className = "footer-col footer-brand-col";
    brandCol.innerHTML = `
      <span class="brand-name">${escape(state.brand.name)}</span>
      <p class="tagline">${escape(state.layout.footerTagline || "")}</p>
    `;
    if (state.newsletter.on) {
      const nl = document.createElement("div");
      nl.className = "newsletter";
      nl.innerHTML = `
        <h5>${escape(state.newsletter.heading || "")}</h5>
        <form class="newsletter-form" onsubmit="return false">
          <input type="email" placeholder="${escape(state.newsletter.placeholder || "")}" />
          <button>Subscribe</button>
        </form>
      `;
      brandCol.appendChild(nl);
    }
    cols.appendChild(brandCol);
  }

  visibleFooterCols.forEach((col) => {
    const colVis = visibility(col);
    const el = document.createElement("div");
    el.className = "footer-col" + (colVis === "soon" ? " is-soon" : "");
    const h = document.createElement("h4");
    h.textContent = col.heading;
    el.appendChild(h);
    col.links.forEach((l) => {
      const lVis = visibility(l);
      if (lVis === "hide") return;
      if (l.isHeading) {
        const h = document.createElement("div");
        h.className = "heading-item";
        if (lVis === "soon") h.classList.add("is-soon");
        h.textContent = l.label;
        el.appendChild(h);
      } else {
        const a = document.createElement("a");
        a.href = l.href || "#";
        a.textContent = l.label;
        if (lVis === "soon") a.classList.add("is-soon");
        el.appendChild(a);
      }
    });
    cols.appendChild(el);
  });

  inner.appendChild(cols);

  // newsletter outside (when no brand col)
  if (state.newsletter.on && !state.layout.footerShowLogo) {
    const nl = document.createElement("div");
    nl.className = "newsletter";
    nl.style.marginBottom = "32px";
    nl.innerHTML = `
      <h5>${escape(state.newsletter.heading || "")}</h5>
      <form class="newsletter-form" onsubmit="return false">
        <input type="email" placeholder="${escape(state.newsletter.placeholder || "")}" />
        <button>Subscribe</button>
      </form>
    `;
    inner.appendChild(nl);
  }

  // Bottom bar
  const bottom = document.createElement("div");
  bottom.className = "footer-bottom";

  const cr = document.createElement("div");
  cr.className = "copyright";
  cr.textContent = state.copyright || "";
  bottom.appendChild(cr);

  const contactBits = [];
  if (state.contact.phone) contactBits.push(state.contact.phone);
  if (state.contact.email) contactBits.push(state.contact.email);
  if (state.contact.address) contactBits.push(state.contact.address);
  if (contactBits.length) {
    const c = document.createElement("div");
    c.className = "footer-contact";
    c.textContent = contactBits.join(" · ");
    bottom.appendChild(c);
  }

  const visLegal = state.legal.filter((l) => visibility(l) !== "hide");
  if (visLegal.length) {
    const legal = document.createElement("div");
    legal.className = "legal";
    visLegal.forEach((l) => {
      const a = document.createElement("a");
      a.href = l.href || "#";
      a.textContent = l.label;
      if (visibility(l) === "soon") a.classList.add("is-soon");
      legal.appendChild(a);
    });
    bottom.appendChild(legal);
  }

  const visSocial = state.social.filter((s) => visibility(s) !== "hide");
  if (visSocial.length) {
    const social = document.createElement("div");
    social.className = "social";
    visSocial.forEach((s) => {
      const a = document.createElement("a");
      a.href = s.href || "#";
      a.textContent = s.label;
      if (visibility(s) === "soon") a.classList.add("is-soon");
      social.appendChild(a);
    });
    bottom.appendChild(social);
  }

  inner.appendChild(bottom);
  f.appendChild(inner);
}

function escape(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
}

// ---------- EDITOR RENDER ----------
function renderEditor() {
  renderNavEditor();
  renderCtaEditor();
  renderFooterColsEditor();
  renderSocialLegalEditor();
  renderContactFields();
  renderLayoutFields();
  renderBrandFields();
  setVal("viewMode", state.viewMode);
}

function renderNavEditor() {
  const root = document.getElementById("navEditor");
  root.innerHTML = "";
  state.nav.forEach((item, idx) => {
    const row = document.createElement("div");
    row.className = "nav-row";
    if (item._expanded) row.classList.add("is-expanded");
    if (item.comingSoon) row.classList.add("row-soon");
    row.dataset.idx = idx;

    const head = document.createElement("div");
    head.className = "nav-row__head";
    head.innerHTML = `
      <span class="drag-handle" title="Drag to reorder">⋮⋮</span>
      <input type="text" class="label" value="${escape(item.label)}" placeholder="Label" />
      <input type="text" class="href" value="${escape(item.href || "")}" placeholder="href (#)" />
      <button class="btn btn--soon ${item.comingSoon ? "is-on" : ""}" type="button" title="Mark as coming soon (gray in preview)">SOON</button>
      <button class="toggle-children" type="button">
        ${item._expanded ? "Hide" : "Edit"} children
        <span class="children-count">${(item.children || []).length}</span>
      </button>
      <button class="btn btn--xs btn--ghost move-up" type="button" title="Move up">↑</button>
      <button class="btn btn--xs btn--ghost move-down" type="button" title="Move down">↓</button>
      <button class="btn btn--xs btn--danger remove" type="button" title="Remove">✕</button>
    `;
    row.appendChild(head);

    // children
    const kids = document.createElement("div");
    kids.className = "nav-row__children";
    (item.children || []).forEach((child, cIdx) => {
      const c = document.createElement("div");
      let cls = "child-row";
      if (child.comingSoon) cls += " row-soon";
      if (child.isHeading) cls += " row-heading";
      c.className = cls;
      c.dataset.idx = cIdx;
      c.innerHTML = `
        <span class="drag-handle">⋮⋮</span>
        <input type="text" class="label" value="${escape(child.label)}" placeholder="${child.isHeading ? "Section heading" : "Label"}" />
        <input type="text" class="href" value="${escape(child.href || "")}" placeholder="href" ${child.isHeading ? "disabled" : ""} />
        <button class="btn btn--heading child-heading ${child.isHeading ? "is-on" : ""}" type="button" title="Toggle: link vs section heading">H</button>
        <button class="btn btn--soon child-soon ${child.comingSoon ? "is-on" : ""}" type="button" title="Coming soon">SOON</button>
        <button class="btn btn--xs btn--ghost child-up" type="button">↑</button>
        <button class="btn btn--xs btn--ghost child-down" type="button">↓</button>
        <button class="btn btn--xs btn--danger child-remove" type="button">✕</button>
      `;
      kids.appendChild(c);
    });
    const addChild = document.createElement("button");
    addChild.className = "btn btn--ghost btn--xs add-child";
    addChild.textContent = "+ Add child";
    addChild.style.marginTop = "6px";
    kids.appendChild(addChild);

    // ----- Featured block editor (mega menu only) -----
    item.featured = item.featured || { enabled: false, eyebrow: "", headline: "", description: "", imageUrl: "", ctaLabel: "", ctaHref: "#" };
    const fed = document.createElement("div");
    fed.className = "featured-editor";
    fed.innerHTML = `
      <div class="featured-editor__head">
        <label>
          <input type="checkbox" class="feat-enable" ${item.featured.enabled ? "checked" : ""} />
          Featured block
        </label>
        <span class="featured-editor__hint">Shows in mega menu as rightmost column</span>
      </div>
      <div class="featured-editor__fields" ${item.featured.enabled ? "" : "style=\"display:none\""}>
        <label>Eyebrow<input class="feat-eyebrow" type="text" value="${escape(item.featured.eyebrow || "")}" placeholder="WHAT'S NEW" /></label>
        <label>CTA label<input class="feat-ctalabel" type="text" value="${escape(item.featured.ctaLabel || "")}" placeholder="Read more" /></label>
        <label class="full">Headline<input class="feat-headline" type="text" value="${escape(item.featured.headline || "")}" placeholder="The 2026 Insurance AI Report" /></label>
        <label class="full">Description<input class="feat-desc" type="text" value="${escape(item.featured.description || "")}" placeholder="Short one-line description" /></label>
        <label class="full">Image URL (optional)<input class="feat-image" type="text" value="${escape(item.featured.imageUrl || "")}" placeholder="https://… (leave blank for gradient placeholder)" /></label>
        <label class="full">CTA href<input class="feat-ctahref" type="text" value="${escape(item.featured.ctaHref || "")}" placeholder="#" /></label>
      </div>
    `;
    fed.querySelector(".feat-enable").addEventListener("change", (e) => {
      item.featured.enabled = e.target.checked;
      renderAll();
    });
    fed.querySelector(".feat-eyebrow").addEventListener("input", (e) => { item.featured.eyebrow = e.target.value; renderHeader(); });
    fed.querySelector(".feat-headline").addEventListener("input", (e) => { item.featured.headline = e.target.value; renderHeader(); });
    fed.querySelector(".feat-desc").addEventListener("input", (e) => { item.featured.description = e.target.value; renderHeader(); });
    fed.querySelector(".feat-image").addEventListener("input", (e) => { item.featured.imageUrl = e.target.value; renderHeader(); });
    fed.querySelector(".feat-ctalabel").addEventListener("input", (e) => { item.featured.ctaLabel = e.target.value; renderHeader(); });
    fed.querySelector(".feat-ctahref").addEventListener("input", (e) => { item.featured.ctaHref = e.target.value; renderHeader(); });
    kids.appendChild(fed);

    row.appendChild(kids);

    // events
    head.querySelector(".label").addEventListener("input", (e) => { item.label = e.target.value; renderHeader(); });
    head.querySelector(".href").addEventListener("input", (e) => { item.href = e.target.value; });
    head.querySelector(".toggle-children").addEventListener("click", () => {
      item._expanded = !item._expanded;
      renderNavEditor();
    });
    head.querySelector(".btn--soon").addEventListener("click", () => { item.comingSoon = !item.comingSoon; renderAll(); });
    head.querySelector(".move-up").addEventListener("click", () => { moveItem(state.nav, idx, -1); renderAll(); });
    head.querySelector(".move-down").addEventListener("click", () => { moveItem(state.nav, idx, +1); renderAll(); });
    head.querySelector(".remove").addEventListener("click", () => { state.nav.splice(idx, 1); renderAll(); });

    addChild.addEventListener("click", () => {
      item.children = item.children || [];
      item.children.push({ label: "New item", href: "#" });
      renderAll();
    });

    kids.querySelectorAll(".child-row").forEach((c) => {
      const cIdx = +c.dataset.idx;
      c.querySelector(".label").addEventListener("input", (e) => { item.children[cIdx].label = e.target.value; renderHeader(); });
      c.querySelector(".href").addEventListener("input", (e) => { item.children[cIdx].href = e.target.value; });
      c.querySelector(".child-soon").addEventListener("click", () => { item.children[cIdx].comingSoon = !item.children[cIdx].comingSoon; renderAll(); });
      c.querySelector(".child-heading").addEventListener("click", () => { item.children[cIdx].isHeading = !item.children[cIdx].isHeading; renderAll(); });
      c.querySelector(".child-up").addEventListener("click", () => { moveItem(item.children, cIdx, -1); renderAll(); });
      c.querySelector(".child-down").addEventListener("click", () => { moveItem(item.children, cIdx, +1); renderAll(); });
      c.querySelector(".child-remove").addEventListener("click", () => { item.children.splice(cIdx, 1); renderAll(); });
    });

    root.appendChild(row);
  });
}

function renderCtaEditor() {
  const root = document.getElementById("ctaEditor");
  root.innerHTML = "";
  state.ctas.forEach((c, idx) => {
    const row = document.createElement("div");
    row.className = "cta-row" + (c.comingSoon ? " row-soon" : "");
    row.innerHTML = `
      <input type="text" class="label" value="${escape(c.label)}" placeholder="Label" />
      <input type="text" class="href" value="${escape(c.href || "")}" placeholder="href" />
      <select class="style">
        <option value="text" ${c.style==="text"?"selected":""}>Text</option>
        <option value="ghost" ${c.style==="ghost"?"selected":""}>Ghost</option>
        <option value="primary" ${c.style==="primary"?"selected":""}>Primary</option>
      </select>
      <button class="btn btn--soon soon ${c.comingSoon ? "is-on" : ""}" type="button">SOON</button>
      <button class="btn btn--xs btn--ghost up" type="button">↑</button>
      <button class="btn btn--xs btn--ghost down" type="button">↓</button>
      <button class="btn btn--xs btn--danger remove" type="button">✕</button>
    `;
    row.querySelector(".label").addEventListener("input", (e) => { c.label = e.target.value; renderHeader(); });
    row.querySelector(".href").addEventListener("input", (e) => { c.href = e.target.value; });
    row.querySelector(".style").addEventListener("change", (e) => { c.style = e.target.value; renderHeader(); });
    row.querySelector(".soon").addEventListener("click", () => { c.comingSoon = !c.comingSoon; renderAll(); });
    row.querySelector(".up").addEventListener("click", () => { moveItem(state.ctas, idx, -1); renderAll(); });
    row.querySelector(".down").addEventListener("click", () => { moveItem(state.ctas, idx, +1); renderAll(); });
    row.querySelector(".remove").addEventListener("click", () => { state.ctas.splice(idx,1); renderAll(); });
    root.appendChild(row);
  });
}

function renderFooterColsEditor() {
  const root = document.getElementById("footerColsEditor");
  root.innerHTML = "";
  state.footerCols.forEach((col, idx) => {
    const row = document.createElement("div");
    row.className = "fcol-row" + (col.comingSoon ? " row-soon" : "");
    row.innerHTML = `
      <div class="fcol-row__head">
        <span class="drag-handle">⋮⋮</span>
        <input type="text" class="heading" value="${escape(col.heading)}" placeholder="Column heading" />
        <button class="btn btn--soon col-soon ${col.comingSoon ? "is-on" : ""}" type="button" title="Hide column at launch">SOON</button>
        <button class="btn btn--xs btn--ghost up" type="button">↑</button>
        <button class="btn btn--xs btn--ghost down" type="button">↓</button>
        <button class="btn btn--xs btn--danger remove" type="button">✕ Column</button>
      </div>
      <div class="fcol-row__links"></div>
      <button class="btn btn--ghost btn--xs add-link" type="button" style="margin-top:6px; margin-left:26px">+ Add link</button>
    `;

    row.querySelector(".heading").addEventListener("input", (e) => { col.heading = e.target.value; renderFooter(); });
    row.querySelector(".col-soon").addEventListener("click", () => { col.comingSoon = !col.comingSoon; renderAll(); });
    row.querySelector(".up").addEventListener("click", () => { moveItem(state.footerCols, idx, -1); renderAll(); });
    row.querySelector(".down").addEventListener("click", () => { moveItem(state.footerCols, idx, +1); renderAll(); });
    row.querySelector(".remove").addEventListener("click", () => { state.footerCols.splice(idx,1); renderAll(); });

    const linksWrap = row.querySelector(".fcol-row__links");
    col.links.forEach((link, lIdx) => {
      const c = document.createElement("div");
      let cls = "child-row";
      if (link.comingSoon) cls += " row-soon";
      if (link.isHeading) cls += " row-heading";
      c.className = cls;
      c.innerHTML = `
        <span class="drag-handle">⋮⋮</span>
        <input type="text" class="label" value="${escape(link.label)}" placeholder="${link.isHeading ? "Section heading" : "Label"}" />
        <input type="text" class="href" value="${escape(link.href || "")}" placeholder="href" ${link.isHeading ? "disabled" : ""} />
        <button class="btn btn--heading heading ${link.isHeading ? "is-on" : ""}" type="button" title="Toggle: link vs section heading">H</button>
        <button class="btn btn--soon soon ${link.comingSoon ? "is-on" : ""}" type="button">SOON</button>
        <button class="btn btn--xs btn--ghost up" type="button">↑</button>
        <button class="btn btn--xs btn--ghost down" type="button">↓</button>
        <button class="btn btn--xs btn--danger remove" type="button">✕</button>
      `;
      c.querySelector(".label").addEventListener("input", (e) => { link.label = e.target.value; renderFooter(); });
      c.querySelector(".href").addEventListener("input", (e) => { link.href = e.target.value; });
      c.querySelector(".heading").addEventListener("click", () => { link.isHeading = !link.isHeading; renderAll(); });
      c.querySelector(".soon").addEventListener("click", () => { link.comingSoon = !link.comingSoon; renderAll(); });
      c.querySelector(".up").addEventListener("click", () => { moveItem(col.links, lIdx, -1); renderAll(); });
      c.querySelector(".down").addEventListener("click", () => { moveItem(col.links, lIdx, +1); renderAll(); });
      c.querySelector(".remove").addEventListener("click", () => { col.links.splice(lIdx,1); renderAll(); });
      linksWrap.appendChild(c);
    });

    row.querySelector(".add-link").addEventListener("click", () => {
      col.links.push({ label: "New link", href: "#" });
      renderAll();
    });

    root.appendChild(row);
  });
}

function renderSocialLegalEditor() {
  renderLinkList("socialEditor", state.social);
  renderLinkList("legalEditor", state.legal);
}

function renderLinkList(elId, list) {
  const root = document.getElementById(elId);
  root.innerHTML = "";
  list.forEach((l, idx) => {
    const row = document.createElement("div");
    row.className = "child-row" + (l.comingSoon ? " row-soon" : "");
    row.innerHTML = `
      <input type="text" class="label" value="${escape(l.label)}" placeholder="Label" />
      <input type="text" class="href" value="${escape(l.href || "")}" placeholder="href" />
      <button class="btn btn--soon soon ${l.comingSoon ? "is-on" : ""}" type="button">SOON</button>
      <button class="btn btn--xs btn--ghost up" type="button">↑</button>
      <button class="btn btn--xs btn--ghost down" type="button">↓</button>
      <button class="btn btn--xs btn--danger remove" type="button">✕</button>
    `;
    row.querySelector(".label").addEventListener("input", (e) => { l.label = e.target.value; renderFooter(); });
    row.querySelector(".href").addEventListener("input", (e) => { l.href = e.target.value; });
    row.querySelector(".soon").addEventListener("click", () => { l.comingSoon = !l.comingSoon; renderAll(); });
    row.querySelector(".up").addEventListener("click", () => { moveItem(list, idx, -1); renderAll(); });
    row.querySelector(".down").addEventListener("click", () => { moveItem(list, idx, +1); renderAll(); });
    row.querySelector(".remove").addEventListener("click", () => { list.splice(idx,1); renderAll(); });
    root.appendChild(row);
  });
}

function renderContactFields() {
  setVal("contactPhone", state.contact.phone);
  setVal("contactEmail", state.contact.email);
  setVal("contactAddress", state.contact.address);
  setVal("newsletterHeading", state.newsletter.heading);
  setVal("newsletterPlaceholder", state.newsletter.placeholder);
  setVal("copyrightText", state.copyright);
  document.getElementById("newsletterOn").checked = !!state.newsletter.on;
}

function renderLayoutFields() {
  setVal("dropdownStyle", state.layout.dropdownStyle);
  setVal("navAlign", state.layout.navAlign);
  document.getElementById("stickyHeader").checked = !!state.layout.stickyHeader;
  document.getElementById("headerBorder").checked = !!state.layout.headerBorder;
  setVal("footerColWidth", state.layout.footerColWidth);
  document.getElementById("footerShowLogo").checked = !!state.layout.footerShowLogo;
  setVal("footerTagline", state.layout.footerTagline);
}

function renderBrandFields() {
  setVal("brandName", state.brand.name);
  setVal("colorPrimary", state.brand.colorPrimary);
  setVal("colorHeaderBg", state.brand.colorHeaderBg);
  setVal("colorHeaderText", state.brand.colorHeaderText);
  setVal("colorFooterBg", state.brand.colorFooterBg);
  setVal("colorFooterText", state.brand.colorFooterText);
  setVal("colorFooterLink", state.brand.colorFooterLink);
}

function setVal(id, v) {
  const el = document.getElementById(id);
  if (el) el.value = v == null ? "" : v;
}

function moveItem(arr, idx, dir) {
  const j = idx + dir;
  if (j < 0 || j >= arr.length) return;
  const tmp = arr[idx];
  arr[idx] = arr[j];
  arr[j] = tmp;
}

// ---------- EVENT BINDINGS (static) ----------
function bindStaticEvents() {
  // Tabs
  document.getElementById("tabs").addEventListener("click", (e) => {
    if (e.target.classList.contains("tab")) {
      const t = e.target.dataset.tab;
      document.querySelectorAll(".tab").forEach((b) => b.classList.toggle("is-active", b.dataset.tab === t));
      document.querySelectorAll(".tab-panel").forEach((p) => p.classList.toggle("is-active", p.dataset.panel === t));
    }
  });

  document.getElementById("presetSelect").addEventListener("change", (e) => {
    const key = e.target.value;
    const p = getPreset(key);
    if (p) {
      const prevView = state.viewMode;
      state = clone(p);
      state.viewMode = prevView; // preserve view mode across preset switches
      try { localStorage.setItem(LS_LAST, key); } catch {}
      updatePresetButtons();
      renderAll();
    }
  });

  document.getElementById("viewMode").addEventListener("change", (e) => {
    state.viewMode = e.target.value;
    renderHeader(); renderFooter();
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    const key = document.getElementById("presetSelect").value;
    const p = getPreset(key);
    if (!p) return;
    const label = PRESET_LABELS[key] || (customPresets[key] && customPresets[key]._label) || key;
    if (!confirm(`Discard unsaved edits and reset to "${label}"?`)) return;
    const prevView = state.viewMode;
    state = clone(p);
    state.viewMode = prevView;
    renderAll();
  });

  document.getElementById("savePresetBtn").addEventListener("click", () => {
    const name = prompt("Name this preset:", "My preset");
    if (!name) return;
    const key = "custom-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") + "-" + Date.now().toString(36);
    const snapshot = clone(state);
    delete snapshot.viewMode;
    snapshot._label = name;
    customPresets[key] = snapshot;
    saveCustomPresets();
    populatePresetSelect(key);
  });

  document.getElementById("renamePresetBtn").addEventListener("click", () => {
    const sel = document.getElementById("presetSelect");
    const key = sel.value;
    if (!isCustomPreset(key)) return;
    const current = customPresets[key]._label || key;
    const next = prompt("Rename preset:", current);
    if (!next) return;
    customPresets[key]._label = next;
    saveCustomPresets();
    populatePresetSelect(key);
  });

  document.getElementById("deletePresetBtn").addEventListener("click", () => {
    const sel = document.getElementById("presetSelect");
    const key = sel.value;
    if (!isCustomPreset(key)) return;
    if (!confirm(`Delete preset "${customPresets[key]._label || key}"?`)) return;
    delete customPresets[key];
    saveCustomPresets();
    populatePresetSelect("liberate");
  });

  document.getElementById("addNavItem").addEventListener("click", () => {
    state.nav.push({ label: "New item", href: "#", children: [] });
    renderAll();
  });
  document.getElementById("addCta").addEventListener("click", () => {
    state.ctas.push({ label: "New CTA", href: "#", style: "ghost" });
    renderAll();
  });
  document.getElementById("addFooterCol").addEventListener("click", () => {
    state.footerCols.push({ heading: "New Column", links: [{ label: "New link", href: "#" }] });
    renderAll();
  });
  document.getElementById("addSocial").addEventListener("click", () => {
    state.social.push({ label: "Social", href: "#" });
    renderAll();
  });
  document.getElementById("addLegal").addEventListener("click", () => {
    state.legal.push({ label: "Legal", href: "#" });
    renderAll();
  });

  // Contact / newsletter / copyright
  bindInput("contactPhone", (v) => state.contact.phone = v, renderFooter);
  bindInput("contactEmail", (v) => state.contact.email = v, renderFooter);
  bindInput("contactAddress", (v) => state.contact.address = v, renderFooter);
  bindInput("newsletterHeading", (v) => state.newsletter.heading = v, renderFooter);
  bindInput("newsletterPlaceholder", (v) => state.newsletter.placeholder = v, renderFooter);
  bindInput("copyrightText", (v) => state.copyright = v, renderFooter);
  document.getElementById("newsletterOn").addEventListener("change", (e) => {
    state.newsletter.on = e.target.checked;
    renderFooter();
  });

  // Layout
  document.getElementById("dropdownStyle").addEventListener("change", (e) => { state.layout.dropdownStyle = e.target.value; renderHeader(); });
  document.getElementById("navAlign").addEventListener("change", (e) => { state.layout.navAlign = e.target.value; renderHeader(); });
  document.getElementById("stickyHeader").addEventListener("change", (e) => { state.layout.stickyHeader = e.target.checked; renderHeader(); });
  document.getElementById("headerBorder").addEventListener("change", (e) => { state.layout.headerBorder = e.target.checked; renderHeader(); });
  document.getElementById("footerColWidth").addEventListener("change", (e) => { state.layout.footerColWidth = e.target.value; renderFooter(); });
  document.getElementById("footerShowLogo").addEventListener("change", (e) => { state.layout.footerShowLogo = e.target.checked; renderFooter(); });
  bindInput("footerTagline", (v) => state.layout.footerTagline = v, renderFooter);

  // Brand
  bindInput("brandName", (v) => state.brand.name = v, () => { renderHeader(); renderFooter(); });
  ["colorPrimary","colorHeaderBg","colorHeaderText","colorFooterBg","colorFooterText","colorFooterLink"].forEach((k) => {
    document.getElementById(k).addEventListener("input", (e) => {
      state.brand[k] = e.target.value;
      applyTheme();
    });
  });

  // Export / import
  document.getElementById("exportBtn").addEventListener("click", () => {
    const data = JSON.stringify(state, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ia-${state.brand.name.toLowerCase()}-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });
  document.getElementById("importBtn").addEventListener("click", () => {
    document.getElementById("importFile").click();
  });
  document.getElementById("importFile").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        state = JSON.parse(reader.result);
        renderAll();
      } catch (err) {
        alert("Invalid JSON: " + err.message);
      }
    };
    reader.readAsText(file);
  });
}

function bindInput(id, setter, after) {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("input", (e) => {
    setter(e.target.value);
    if (after) after();
  });
}

// ---------- WELCOME BANNER ----------
const WELCOME_KEY = "iaPlayground.welcomeDismissed.v1";
function initWelcomeBanner() {
  const banner = document.getElementById("welcomeBanner");
  const closeBtn = document.getElementById("welcomeClose");
  const helpBtn = document.getElementById("helpBtn");
  if (!banner || !closeBtn || !helpBtn) return;

  try {
    if (localStorage.getItem(WELCOME_KEY) === "1") banner.hidden = true;
  } catch {}

  closeBtn.addEventListener("click", () => {
    banner.hidden = true;
    try { localStorage.setItem(WELCOME_KEY, "1"); } catch {}
  });

  helpBtn.addEventListener("click", () => {
    banner.hidden = false;
    try { localStorage.removeItem(WELCOME_KEY); } catch {}
    banner.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

// ---------- INIT ----------
bindStaticEvents();
initWelcomeBanner();
const lastPreset = (() => { try { return localStorage.getItem(LS_LAST); } catch { return null; }})();
populatePresetSelect(lastPreset && getPreset(lastPreset) ? lastPreset : "liberate");
if (lastPreset && getPreset(lastPreset)) {
  const p = getPreset(lastPreset);
  state = clone(p);
  state.viewMode = state.viewMode || "soon";
}
renderAll();
