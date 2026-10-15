import mapImage from "./assets/europe-routes.webp";
import partnerMarks from "./assets/demo-partners.png";
import roadPhoto from "./assets/road-freight.webp";
import cargoPhoto from "./assets/cargo-detail.webp";
import {
  companyStats,
  routeGroups,
  cargoTypes,
  benefits,
  testimonials,
  guides,
  faqs,
} from "./content.js";

export function companySection(icon) {
  return `<section class="company content-container expanded-section" id="company" aria-labelledby="company-heading">
    <div><h2 class="section-heading" id="company-heading">Your Black Sea base.</h2><a class="text-link" href="#about">Meet the Burgas team ${icon("arrowRight")}</a></div>
    <div class="company-story"><p>From Burgas, we bring road and sea freight into one clear conversation. A local point of contact, with the whole collection-to-delivery journey in view.</p><div class="company-statistics">${companyStats.map((item) => `<div><strong>${item.value}</strong><span>${item.label}</span></div>`).join("")}<p class="demo-caption">Illustrative company figures for this website concept.</p></div></div>
  </section>`;
}

export function servicesSection(icon) {
  const services = [
    {
      id: "sea",
      title: "Sea freight",
      text: "Container movements, port connections and the inland journey on either side.",
    },
    {
      id: "road",
      title: "Road freight",
      text: "From a few pallets to a full vehicle. Start with the route and the load.",
    },
    {
      id: "multimodal",
      title: "Multimodal freight",
      text: "Road and sea, considered together as one collection-to-delivery plan.",
    },
    {
      id: "documents",
      title: "Customs & documents",
      text: "The shipment information and paperwork to review before departure.",
    },
  ];
  return `<section class="services-section content-container expanded-section" id="services" aria-labelledby="services-heading"><div class="section-introduction"><h2 class="section-heading" id="services-heading">By sea. By road.</h2><p>Choose the service. We’ll help bring the journey together.</p></div><div class="services-layout"><figure class="service-figure"><img src="${roadPhoto}" alt="An unbranded freight truck on a coastal road in warm evening light" width="1536" height="1024" loading="lazy" /><figcaption>Road and sea. Connected through Burgas.</figcaption></figure><div class="services-grid">${services.map((s) => `<button type="button" class="freight-card" data-dialog="${s.id}"><h3>${s.title}</h3><p>${s.text}</p><span class="card-link">Explore service</span></button>`).join("")}</div></div></section>`;
}

export function routeRows(group, icon) {
  return group.routes
    .map(
      (route) =>
        `<button type="button" class="route-row" data-route-from="${route.from}" data-route-to="${route.to}"><span><small>Collection</small><strong>${route.from}</strong></span>${icon("arrowRight")}<span><small>Delivery</small><strong>${route.to}</strong></span>${icon("arrowUpRight")}</button>`,
    )
    .join("");
}

export function routesSection(icon) {
  const first = routeGroups.europe;
  return `<section class="routes-section page-panel expanded-section" id="routes" aria-labelledby="routes-heading" style="--map-art:url('${mapImage}')"><div class="routes-header"><h2 class="section-heading" id="routes-heading">Start in Burgas.<br />Go further.</h2><a class="button button-lime" href="#quote" data-focus-quote>Plan your route ${icon("arrowRight")}</a></div><div class="routes-layout"><div class="routes-map-info"><p class="route-location">${icon("mapPin")} Burgas, Bulgaria</p><p>One starting point.<br />More ways to move.</p><div class="route-tabs" role="tablist" aria-label="Explore example route regions">${Object.entries(
    routeGroups,
  )
    .map(
      ([key, g], i) =>
        `<button type="button" role="tab" id="route-tab-${key}" aria-controls="route-panel" aria-selected="${i === 0}" tabindex="${i === 0 ? "0" : "-1"}" data-region="${key}">${g.label}</button>`,
    )
    .join(
      "",
    )}</div><p class="routes-demo-note">Sample corridors for this concept. Routes and availability are confirmed for each enquiry.</p></div><div class="route-panel" id="route-panel" role="tabpanel" aria-labelledby="route-tab-europe"><h3 id="route-title">${first.title}</h3><p class="route-mode" id="route-mode">${first.mode}</p><p id="route-description">${first.description}</p><div class="route-list" id="route-list">${routeRows(first, icon)}</div><p class="route-help">Choose a sample route to start your enquiry.</p></div></div></section>`;
}

export function cargoSection(icon) {
  return `<section class="cargo-section content-container expanded-section" id="cargo-types" aria-labelledby="cargo-heading"><div class="cargo-intro"><h2 class="section-heading" id="cargo-heading">What are<br />you moving?</h2><p>Every load has its own requirements. Choose yours to start the conversation.</p><img class="cargo-photo" src="${cargoPhoto}" alt="Export cartons secured on a wooden pallet inside a port warehouse" width="1536" height="1024" loading="lazy" /></div><div class="cargo-grid">${cargoTypes.map((c) => `<button class="cargo-card" type="button" data-cargo-type="${c.value}"><h3>${c.title}</h3><p>${c.text}</p><span class="card-link">Discuss this cargo ${icon("arrowUpRight")}</span></button>`).join("")}</div></section>`;
}

export function benefitsSection() {
  return `<section class="benefits-section content-container expanded-section" id="why-us" aria-labelledby="benefits-heading"><h2 class="section-heading" id="benefits-heading">Details make<br />the difference.</h2><div class="benefits-grid">${benefits.map((b) => `<div class="benefit-item"><h3>${b.title}</h3><p>${b.text}</p></div>`).join("")}</div></section>`;
}

export function partnersSection() {
  return `<aside class="partners-section content-container" aria-label="Illustrative partner names"><p>Illustrative partner names</p><div class="partner-scroll"><img src="${partnerMarks}" alt="Fictional partner names: Avelora, Norden Goods, Blue Quay and Meridian Trade" width="1600" height="160" loading="lazy" /></div></aside>`;
}

export function testimonialsSection(icon) {
  return `<section class="testimonials-section page-panel expanded-section" id="client-stories" aria-labelledby="testimonials-heading"><div class="testimonial-inner"><div class="section-introduction"><h2 class="section-heading" id="testimonials-heading">Client perspectives.</h2><div class="slider-controls"><button class="icon-button slider-button" type="button" id="review-previous" aria-label="Previous testimonial">${icon("arrowLeft")}</button><button class="icon-button slider-button" type="button" id="review-next" aria-label="Next testimonial">${icon("arrowRight")}</button></div></div><div class="review-slider" id="review-slider" tabindex="0" aria-label="Sample client testimonials">${testimonials.map((t) => `<article class="review-card"><blockquote>${t.quote}</blockquote><div class="review-author"><strong>${t.name}</strong><span>${t.role}</span><small>${t.company}</small></div></article>`).join("")}</div></div><p class="demo-caption">Sample testimonials written for this concept. They are not real customer reviews.</p></section>`;
}

export function guidesSection(icon) {
  return `<section class="guides-section content-container expanded-section" id="insights" aria-labelledby="guides-heading"><div class="guides-intro"><h2 class="section-heading" id="guides-heading">Before you ship.</h2><p>A little preparation makes the next conversation more useful.</p></div><div class="guides-grid">${guides.map((g) => `<button class="guide-card" type="button" data-dialog="${g.id}"><h3>${g.title}</h3><p>${g.summary}</p><span class="card-link">Read the guide</span></button>`).join("")}</div></section>`;
}

export function faqSection(icon) {
  return `<section class="faq-section content-container expanded-section" id="faq" aria-labelledby="faq-heading"><div><h2 class="section-heading" id="faq-heading">Questions,<br />answered.</h2><p class="faq-intro">A few things to know before the first mile.</p><button class="text-link" type="button" data-dialog="contact">Talk to our team ${icon("arrowRight")}</button></div><div class="faq-list">${faqs.map((f) => `<details class="faq-item"><summary><span>${f.question}</span>${icon("plus")}</summary><p>${f.answer}</p></details>`).join("")}</div></section>`;
}

export function bottomQuoteSection(icon) {
  const field = (name, label, placeholder, type = "text") =>
    `<div class="field"><label for="bottom-${name}">${label}</label><input id="bottom-${name}" name="${name}" type="${type}" placeholder="${placeholder}" ${name === "weight" ? 'min="0.1" max="10000000" step="any" inputmode="decimal"' : "required"} ${type === "email" ? 'autocomplete="email"' : 'autocomplete="off"'} aria-describedby="bottom-${name}-error" /><p class="field-error" id="bottom-${name}-error" hidden></p></div>`;
  return `<section class="bottom-quote page-panel expanded-section" id="start-enquiry" aria-labelledby="bottom-quote-heading"><div class="bottom-quote-intro"><h2 class="section-heading" id="bottom-quote-heading">Plan your<br />next move.</h2><p>Tell us the route.<br />Start with the details.</p></div><form id="bottom-quote-form" class="bottom-quote-form" data-quote-form novalidate>${field("collection", "Collection location", "City, country")}${field("delivery", "Delivery location", "City, country")}<div class="field"><label for="bottom-cargo">Cargo type</label><div class="select-wrap"><select id="bottom-cargo" name="cargo" required aria-describedby="bottom-cargo-error"><option value="" disabled selected>Select cargo</option><option>General cargo</option><option>Palletised goods</option><option>Containerised cargo</option><option>Other / not sure yet</option></select>${icon("caretDown")}</div><p class="field-error" id="bottom-cargo-error" hidden></p></div>${field("weight", "Estimated weight", "kg", "number")}${field("email", "Work email", "you@company.com", "email")}<div class="bottom-submit"><button class="button button-navy" type="submit">Request a quote ${icon("arrowRight")}</button></div><p class="bottom-privacy">Your details stay in this browser. Review and download the enquiry; no message is sent. <button type="button" class="inline-link" data-dialog="privacy">Privacy policy</button></p></form></section>`;
}
