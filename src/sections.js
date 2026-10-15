import mapImage from './assets/europe-routes.webp';
import partnerMarks from './assets/demo-partners.png';
import { companyStats, routeGroups, cargoTypes, benefits, testimonials, guides, faqs } from './content.js';

export function companySection(icon) {
  return `<section class="company content-container expanded-section" id="company" aria-labelledby="company-heading">
    <div><p class="eyebrow"><span></span> A local base. An international outlook.</p><h2 class="section-heading expanded-heading" id="company-heading">Moving business.<br /><span>Building connections.</span></h2></div>
    <div class="company-story"><p>From our office in Burgas, we bring road and sea freight into one clear conversation. We help businesses plan the journey, prepare the details and keep the next step in view.</p><a class="text-link" href="#about">Get to know us ${icon('arrowRight')}</a></div>
    <div class="company-statistics">${companyStats.map(item => `<div><strong>${item.value}</strong><span>${item.label}</span></div>`).join('')}<p class="demo-caption">Illustrative company figures for this website concept.</p></div>
  </section>`;
}

export function servicesSection(icon) {
  const services = [
    { id: 'sea', icon: 'boat', title: 'Sea freight', text: 'Container movements and port-to-port planning, with inland connections considered from the start.' },
    { id: 'road', icon: 'truck', title: 'Road freight', text: 'Flexible planning for palletised goods, general cargo and full-vehicle requirements.' },
    { id: 'multimodal', icon: 'arrows', title: 'Multimodal transport', text: 'Bring road and sea into a coordinated collection-to-delivery journey.' },
    { id: 'documents', icon: 'clipboard', title: 'Customs & documents', text: 'Start with a clear checklist of the shipment information and paperwork to review.' },
  ];
  return `<section class="services-section content-container expanded-section" id="services" aria-labelledby="services-heading"><div class="services-intro"><p class="eyebrow eyebrow-light"><span></span> Our services</p><h2 id="services-heading">The whole journey.<br /><span>One conversation.</span></h2><p>From your first question to the details that matter on the day. Explore the services that bring your shipment together.</p><a class="button button-lime" href="#quote" data-focus-quote>Discuss your shipment ${icon('arrowRight')}</a></div><div class="services-grid">${services.map(s => `<button type="button" class="freight-card" data-dialog="${s.id}">${icon(s.icon)}<h3>${s.title}</h3><p>${s.text}</p><span class="card-link">Explore service ${icon('arrowUpRight')}</span></button>`).join('')}</div></section>`;
}

export function routeRows(group, icon) {
  return group.routes.map(route => `<button type="button" class="route-row" data-route-from="${route.from}" data-route-to="${route.to}"><span><small>Collection</small><strong>${route.from}</strong></span>${icon('arrowRight')}<span><small>Delivery</small><strong>${route.to}</strong></span>${icon('arrowUpRight')}</button>`).join('');
}

export function routesSection(icon) {
  const first = routeGroups.europe;
  return `<section class="routes-section page-panel expanded-section" id="routes" aria-labelledby="routes-heading" style="--map-art:url('${mapImage}')"><div class="routes-header"><div><p class="eyebrow eyebrow-light"><span></span> Routes & coverage</p><h2 class="section-heading expanded-heading" id="routes-heading">Your next destination.<br /><span>Our starting point.</span></h2></div><a class="button button-lime" href="#quote" data-focus-quote>Plan your route ${icon('arrowRight')}</a></div><div class="routes-layout"><div class="routes-map-info"><span class="location-tag">${icon('mapPin')} Burgas, Bulgaria</span><p>On the Black Sea.<br />Connected to what’s next.</p><div class="route-tabs" role="tablist" aria-label="Explore example route regions">${Object.entries(routeGroups).map(([key,g],i)=>`<button type="button" role="tab" id="route-tab-${key}" aria-controls="route-panel" aria-selected="${i===0}" tabindex="${i===0?'0':'-1'}" data-region="${key}">${g.label}</button>`).join('')}</div><p class="routes-demo-note">Sample corridors for this concept. Routes and availability are confirmed for each enquiry.</p></div><div class="route-panel" id="route-panel" role="tabpanel" aria-labelledby="route-tab-europe"><p class="panel-eyebrow" id="route-mode">${first.mode}</p><h3 id="route-title">${first.title}</h3><p id="route-description">${first.description}</p><div class="route-list" id="route-list">${routeRows(first,icon)}</div><p class="route-help">Choose a sample route to start your enquiry.</p></div></div></section>`;
}

export function cargoSection(icon) {
  return `<section class="cargo-section content-container expanded-section" id="cargo-types" aria-labelledby="cargo-heading"><div class="section-introduction"><div><p class="eyebrow"><span></span> Cargo types</p><h2 class="section-heading expanded-heading" id="cargo-heading">Different cargo.<br /><span>The same attention.</span></h2></div><p>Start with what you need to move. We’ll look at the route, packaging and handling requirements together.</p></div><div class="cargo-grid">${cargoTypes.map(c => `<button class="cargo-card" type="button" data-cargo-type="${c.value}">${icon(c.icon)}<h3>${c.title}</h3><p>${c.text}</p><span class="card-link">Discuss this cargo ${icon('arrowRight')}</span></button>`).join('')}</div></section>`;
}

export function benefitsSection(icon) {
  return `<section class="benefits-section content-container expanded-section" id="why-us" aria-labelledby="benefits-heading"><p class="eyebrow"><span></span> Why work with us</p><h2 class="section-heading expanded-heading" id="benefits-heading">Good logistics starts<br /><span>with the details.</span></h2><div class="benefits-grid">${benefits.map(b=>`<div class="benefit-item"><span class="benefit-icon">${icon(b.icon)}</span><div><h3>${b.title}</h3><p>${b.text}</p></div></div>`).join('')}</div></section>`;
}

export function partnersSection() {
  return `<aside class="partners-section page-panel" aria-label="Illustrative partner names"><p>Illustrative partner names</p><div class="partner-scroll" tabindex="0" aria-label="Example partner wordmarks"><img src="${partnerMarks}" alt="Fictional partner names: Avelora, Norden Goods, Blue Quay and Meridian Trade" width="1600" height="160" loading="lazy" /></div></aside>`;
}

export function testimonialsSection(icon) {
  return `<section class="testimonials-section content-container expanded-section" id="client-stories" aria-labelledby="testimonials-heading"><div class="section-introduction"><div><p class="eyebrow"><span></span> Client stories</p><h2 class="section-heading expanded-heading" id="testimonials-heading">A clear journey.<br /><span>A better experience.</span></h2></div><div class="slider-controls"><button class="icon-button slider-button" type="button" id="review-previous" aria-label="Previous testimonial">${icon('arrowLeft')}</button><button class="icon-button slider-button" type="button" id="review-next" aria-label="Next testimonial">${icon('arrowRight')}</button></div></div><div class="review-slider" id="review-slider" tabindex="0" aria-label="Sample client testimonials">${testimonials.map(t=>`<article class="review-card">${icon('quotes')}<blockquote>${t.quote}</blockquote><div class="review-author"><strong>${t.name}</strong><span>${t.role}</span><small>${t.company}</small></div></article>`).join('')}</div><p class="demo-caption">Sample testimonials written for this concept. They are not real customer reviews.</p></section>`;
}

export function guidesSection(icon) {
  return `<section class="guides-section content-container expanded-section" id="insights" aria-labelledby="guides-heading"><div class="section-introduction"><div><p class="eyebrow"><span></span> Logistics notes</p><h2 class="section-heading expanded-heading" id="guides-heading">A little clarity.<br /><span>Before you ship.</span></h2></div><p>Useful starting points for your next logistics conversation.</p></div><div class="guides-grid">${guides.map(g=>`<button class="guide-card" type="button" data-dialog="${g.id}"><span class="guide-category">${icon(g.icon)} ${g.category}</span><h3>${g.title}</h3><p>${g.summary}</p><span class="card-link">Read the guide ${icon('arrowUpRight')}</span></button>`).join('')}</div></section>`;
}

export function faqSection(icon) {
  return `<section class="faq-section content-container expanded-section" id="faq" aria-labelledby="faq-heading"><div><p class="eyebrow"><span></span> Frequently asked questions</p><h2 class="section-heading expanded-heading" id="faq-heading">Before the<br /><span>first mile.</span></h2><p class="faq-intro">A few answers to help you prepare. Still have a question?</p><button class="text-link" type="button" data-dialog="contact">Talk to our team ${icon('arrowRight')}</button></div><div class="faq-list">${faqs.map(f=>`<details class="faq-item"><summary><span>${f.question}</span>${icon('plus')}</summary><p>${f.answer}</p></details>`).join('')}</div></section>`;
}

export function bottomQuoteSection(icon) {
  const field = (name,label,placeholder,type='text') => `<div class="field"><label for="bottom-${name}">${label}</label><input id="bottom-${name}" name="${name}" type="${type}" placeholder="${placeholder}" ${name==='weight'?'min="0.1" max="10000000" step="any" inputmode="decimal"':'required'} ${type==='email'?'autocomplete="email"':'autocomplete="off"'} aria-describedby="bottom-${name}-error" /><p class="field-error" id="bottom-${name}-error" hidden></p></div>`;
  return `<section class="bottom-quote page-panel expanded-section" id="start-enquiry" aria-labelledby="bottom-quote-heading"><div class="bottom-quote-intro"><p class="eyebrow eyebrow-light"><span></span> Let’s move forward</p><h2 class="section-heading expanded-heading" id="bottom-quote-heading">Your next shipment.<br /><span>Let’s plan it together.</span></h2><p>Tell us the route. We’ll start with the details.</p></div><form id="bottom-quote-form" class="bottom-quote-form" data-quote-form novalidate>${field('collection','Collection location','City, country')}${field('delivery','Delivery location','City, country')}<div class="field"><label for="bottom-cargo">Cargo type</label><div class="select-wrap"><select id="bottom-cargo" name="cargo" required aria-describedby="bottom-cargo-error"><option value="" disabled selected>Select cargo</option><option>General cargo</option><option>Palletised goods</option><option>Containerised cargo</option><option>Other / not sure yet</option></select>${icon('caretDown')}</div><p class="field-error" id="bottom-cargo-error" hidden></p></div>${field('weight','Estimated weight','kg','number')}${field('email','Work email','you@company.com','email')}<div class="bottom-submit"><button class="button button-lime" type="submit">Request a quote ${icon('arrowRight')}</button></div><p class="bottom-privacy">Your details stay in this browser. You can review and download the enquiry; no message is sent. <button type="button" class="inline-link" data-dialog="privacy">Privacy policy</button></p></form></section>`;
}
