import './style.css';
import portPhoto from './assets/port-sunset.webp';
import panorama from './assets/burgas-panorama.webp';
import routeBackground from './assets/route-background.webp';
import brandLogo from './assets/burgas-logistics-logo.png';
import arrowRight from '@phosphor-icons/core/assets/regular/arrow-right.svg?raw';
import arrowUpRight from '@phosphor-icons/core/assets/regular/arrow-up-right.svg?raw';
import mapPin from '@phosphor-icons/core/assets/regular/map-pin.svg?raw';
import caretDown from '@phosphor-icons/core/assets/regular/caret-down.svg?raw';
import envelope from '@phosphor-icons/core/assets/regular/envelope-simple.svg?raw';
import truck from '@phosphor-icons/core/assets/regular/truck.svg?raw';
import boat from '@phosphor-icons/core/assets/regular/boat.svg?raw';
import menu from '@phosphor-icons/core/assets/regular/list.svg?raw';
import close from '@phosphor-icons/core/assets/regular/x.svg?raw';
import download from '@phosphor-icons/core/assets/regular/download-simple.svg?raw';
import check from '@phosphor-icons/core/assets/regular/check-circle.svg?raw';

const icons = { arrowRight, arrowUpRight, mapPin, caretDown, envelope, truck, boat, menu, close, download, check };
const icon = (name, extraClass = '') => `<span class="icon ${extraClass}" aria-hidden="true">${icons[name].replace('<svg ', '<svg focusable="false" ')}</span>`;

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header class="site-header" id="top">
    <a class="brand" href="#top" aria-label="Burgas Logistics home"><img src="${brandLogo}" alt="Burgas Logistics" width="232" height="57" /></a>
    <button class="menu-toggle icon-button" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-navigation">${icon('menu')}</button>
    <nav class="primary-navigation" id="primary-navigation" aria-label="Main navigation">
      <div class="nav-dropdown">
        <button class="nav-link dropdown-trigger" type="button" aria-expanded="false" aria-controls="services-menu">Services ${icon('caretDown')}</button>
        <div class="dropdown-panel" id="services-menu" hidden>
          <span class="dropdown-eyebrow">Moving your business</span>
          <button class="dropdown-item" type="button" data-dialog="road">${icon('truck')}<span><strong>Road freight</strong><small>Explore transport by road</small></span>${icon('arrowUpRight')}</button>
          <button class="dropdown-item" type="button" data-dialog="sea">${icon('boat')}<span><strong>Sea freight</strong><small>Explore transport by sea</small></span>${icon('arrowUpRight')}</button>
          <a class="dropdown-footer" href="#services">See our approach ${icon('arrowRight')}</a>
        </div>
      </div>
      <div class="nav-dropdown">
        <button class="nav-link dropdown-trigger" type="button" aria-expanded="false" aria-controls="routes-menu">Routes ${icon('caretDown')}</button>
        <div class="dropdown-panel route-menu" id="routes-menu" hidden>
          <span class="dropdown-eyebrow">Start with your destination</span>
          <strong class="dropdown-title">Where do you need to go?</strong>
          <p>Share your collection and delivery locations. We’ll help you explore the options.</p>
          <a class="text-link" href="#quote" data-focus-quote>Plan your route ${icon('arrowRight')}</a>
        </div>
      </div>
      <a class="nav-link" href="#about">About</a>
      <button class="nav-link" type="button" data-dialog="contact">Contact</button>
    </nav>
    <div class="header-actions">
      <span class="office-location">${icon('mapPin')} Burgas, Bulgaria</span>
      <span class="header-separator" aria-hidden="true"></span>
      <button class="button button-outline header-contact" type="button" data-dialog="contact">Contact our team ${icon('arrowRight')}</button>
    </div>
  </header>

  <main id="main-content">
    <section class="hero page-panel" aria-labelledby="hero-heading" style="--hero-art: url('${routeBackground}')">
      <div class="hero-grid">
        <div class="hero-intro">
          <p class="eyebrow eyebrow-light"><span></span> Logistics from Burgas</p>
          <h1 id="hero-heading">Let’s get your<br /><span>cargo moving.</span></h1>
          <p class="hero-description">Start with your route. Our team in Burgas<br class="desktop-break" /> will take it from there.</p>
        </div>
        <img class="hero-photo" src="${portPhoto}" alt="Container cranes and a cargo ship beside the sea at sunset" width="1536" height="1024" fetchpriority="high" />
        <div class="quote-card" id="quote">
          <div class="quote-heading">
            <h2>Where is your cargo going?</h2>
            <p>Tell us a little about your shipment.</p>
          </div>
          <form id="quote-form" novalidate>
            <div class="field">
              <label for="collection">Collection location</label>
              <div class="input-wrap">${icon('mapPin')}<input id="collection" name="collection" type="text" placeholder="City, country" required maxlength="120" autocomplete="off" aria-describedby="collection-error" /></div>
              <p class="field-error" id="collection-error" hidden></p>
            </div>
            <div class="field">
              <label for="delivery">Delivery location</label>
              <div class="input-wrap">${icon('mapPin')}<input id="delivery" name="delivery" type="text" placeholder="City, country" required maxlength="120" autocomplete="off" aria-describedby="delivery-error" /></div>
              <p class="field-error" id="delivery-error" hidden></p>
            </div>
            <div class="field-row">
              <div class="field">
                <label for="cargo">Cargo type</label>
                <div class="select-wrap"><select id="cargo" name="cargo" required aria-describedby="cargo-error"><option value="" disabled selected>Select cargo</option><option>General cargo</option><option>Palletised goods</option><option>Containerised cargo</option><option>Other / not sure yet</option></select>${icon('caretDown')}</div>
                <p class="field-error" id="cargo-error" hidden></p>
              </div>
              <div class="field">
                <label for="weight">Estimated weight</label>
                <input id="weight" name="weight" type="number" min="0.1" max="10000000" step="any" placeholder="kg" inputmode="decimal" aria-describedby="weight-error" />
                <p class="field-error" id="weight-error" hidden></p>
              </div>
            </div>
            <div class="field">
              <label for="email">Work email</label>
              <div class="input-wrap">${icon('envelope')}<input id="email" name="email" type="email" placeholder="you@company.com" required maxlength="254" autocomplete="email" aria-describedby="email-error" /></div>
              <p class="field-error" id="email-error" hidden></p>
            </div>
            <div class="form-actions">
              <button class="button button-lime quote-submit" type="submit">Request a quote ${icon('arrowRight')}</button>
              <p class="privacy-note">Your details stay in this browser. <button class="inline-link" type="button" data-dialog="privacy">Privacy policy</button></p>
            </div>
          </form>
        </div>
      </div>
    </section>

    <section class="process content-container" id="process" aria-labelledby="process-heading">
      <p class="eyebrow"><span></span> Our process</p>
      <h2 class="section-heading" id="process-heading">From your first question<br /><span>to the final delivery.</span></h2>
      <ol class="process-steps">
        <li><div class="step-marker"><span class="step-number">1</span><span class="step-line"></span></div><h3>Tell us your route</h3><p>Share your collection and delivery locations and a few details about your cargo.</p></li>
        <li><div class="step-marker"><span class="step-number">2</span><span class="step-line"></span></div><h3>We plan the options</h3><p>Our team in Burgas prepares the right transport options for your needs.</p></li>
        <li><div class="step-marker"><span class="step-number">3</span><span class="step-line"></span></div><h3>You approve the next step</h3><p>We confirm the plan with you and take care of the logistics from there.</p></li>
      </ol>
    </section>

    <section class="about page-panel" id="about" aria-labelledby="about-heading" style="--panorama: url('${panorama}')">
      <div class="about-intro">
        <p class="eyebrow"><span></span> Your partner on the Black Sea</p>
        <h2 class="section-heading" id="about-heading">Coordinated from<br /><span>Burgas, Bulgaria.</span></h2>
        <p class="about-description">Road and sea freight, with a focus on clear communication and careful coordination from our office in Burgas.</p>
        <button class="text-link" type="button" data-dialog="about">Meet your logistics team ${icon('arrowRight')}</button>
      </div>
      <div class="service-list" id="services" aria-label="Our services">
        <button class="service-item" type="button" data-dialog="road"><span class="service-icon">${icon('truck')}</span><span><strong>Road freight</strong><span class="service-description">Transport options tailored to your cargo and your route.</span></span></button>
        <button class="service-item" type="button" data-dialog="sea"><span class="service-icon">${icon('boat')}</span><span><strong>Sea freight</strong><span class="service-description">Sea freight planning with a local point of contact.</span></span></button>
      </div>
    </section>
  </main>

  <footer class="site-footer page-panel">
    <div class="footer-top">
      <a class="brand footer-brand" href="#top" aria-label="Burgas Logistics home"><img src="${brandLogo}" alt="Burgas Logistics" width="200" height="49" /></a>
      <nav class="footer-navigation" aria-label="Footer navigation"><a href="#services">Services</a><a href="#quote" data-focus-quote>Routes</a><a href="#about">About</a><button type="button" data-dialog="contact">Contact</button></nav>
      <div class="footer-contact"><span class="office-location">${icon('mapPin')} Burgas, Bulgaria</span><button type="button" data-dialog="contact">Contact our team</button></div>
    </div>
    <div class="footer-bottom"><span>© 2026 Burgas Logistics. All rights reserved.</span><div><button type="button" data-dialog="privacy">Privacy Policy</button><button type="button" data-dialog="terms">Terms of Service</button></div></div>
  </footer>

  <dialog class="information-dialog" id="information-dialog" aria-labelledby="dialog-heading">
    <button class="dialog-close icon-button" type="button" aria-label="Close dialog">${icon('close')}</button>
    <div id="dialog-content"></div>
  </dialog>
  <div class="screen-reader-only" id="download-status" role="status" aria-live="polite"></div>
`;

const form = document.querySelector('#quote-form');
const dialog = document.querySelector('#information-dialog');
const dialogContent = document.querySelector('#dialog-content');
const nav = document.querySelector('#primary-navigation');
const menuToggle = document.querySelector('.menu-toggle');
let currentEnquiry = null;
let submitted = false;

const dialogs = {
  road: { eyebrow: 'Our services', title: 'A clear route by road.', text: 'Start with where your cargo is and where it needs to go. Share the cargo type, estimated weight and your preferred timing so our team can discuss suitable road freight options with you.', label: 'Plan a road shipment' },
  sea: { eyebrow: 'Our services', title: 'Your cargo, connected by sea.', text: 'From our base in Burgas, we help you explore sea freight options for your shipment. Tell us about your collection point, destination and cargo so we can plan the next steps together.', label: 'Plan a sea shipment' },
  contact: { eyebrow: 'Let’s talk logistics', title: 'Your point of contact in Burgas.', text: 'Our office is based in Burgas, Bulgaria. Start with a few details about your route and cargo to prepare your enquiry.', label: 'Start your enquiry' },
  about: { eyebrow: 'Burgas, Bulgaria', title: 'A local team. A clear point of contact.', text: 'Good logistics starts with clear communication. Our Burgas office is your starting point for discussing your shipment, reviewing transport options and planning the next step.', label: 'Tell us about your shipment' },
};

function closeMenus() {
  document.querySelectorAll('.dropdown-trigger').forEach(button => {
    button.setAttribute('aria-expanded', 'false');
    document.getElementById(button.getAttribute('aria-controls')).hidden = true;
  });
}

function closeMobileNavigation() {
  nav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  menuToggle.innerHTML = icon('menu');
}

function focusQuote() {
  closeMenus();
  closeMobileNavigation();
  dialog.close();
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelector('#quote').scrollIntoView({ behavior: reduced ? 'instant' : 'smooth', block: 'start' });
  document.querySelector('#collection').focus({ preventScroll: true });
}

function openDialog(name) {
  closeMenus();
  closeMobileNavigation();
  if (dialogs[name]) {
    const item = dialogs[name];
    dialogContent.innerHTML = `<p class="eyebrow">${item.eyebrow}</p><h2 id="dialog-heading">${item.title}</h2><p class="dialog-description">${item.text}</p><div class="dialog-location">${icon('mapPin')} Burgas, Bulgaria</div><button class="button button-lime" type="button" data-start-enquiry>${item.label} ${icon('arrowRight')}</button>`;
  } else if (name === 'privacy') {
    dialogContent.innerHTML = `<p class="eyebrow">Your information</p><h2 id="dialog-heading">Your privacy matters.</h2><div class="dialog-description"><p>This website preview does not send enquiries to a company inbox. The form values are held in this page only and are cleared when it is reloaded.</p><p>If you choose “Download enquiry”, a text file is created on your device. No form data is sent to a server. This website does not use analytics or advertising cookies.</p></div><button class="button button-navy" type="button" data-close-dialog>Got it ${icon('check')}</button>`;
  } else if (name === 'terms') {
    dialogContent.innerHTML = `<p class="eyebrow">About this website</p><h2 id="dialog-heading">A website concept, ready to explore.</h2><div class="dialog-description"><p>Burgas Logistics is the working name for this website concept. Service descriptions are illustrative and do not constitute a transport offer or a booking.</p><p>The enquiry form lets you review and download your details. It does not send a message or confirm a shipment. Company information and commercial terms must be confirmed before live use.</p></div><button class="button button-navy" type="button" data-close-dialog>Got it ${icon('check')}</button>`;
  }
  dialog.showModal();
}

document.querySelectorAll('.dropdown-trigger').forEach(button => {
  button.addEventListener('click', () => {
    const wasOpen = button.getAttribute('aria-expanded') === 'true';
    closeMenus();
    if (!wasOpen) {
      button.setAttribute('aria-expanded', 'true');
      document.getElementById(button.getAttribute('aria-controls')).hidden = false;
    }
  });
});

menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  closeMenus();
  nav.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuToggle.innerHTML = icon(open ? 'close' : 'menu');
});

document.addEventListener('click', event => {
  const dialogButton = event.target.closest('[data-dialog]');
  if (dialogButton) openDialog(dialogButton.dataset.dialog);
  if (event.target.closest('[data-start-enquiry], [data-focus-quote]')) {
    event.preventDefault();
    focusQuote();
  }
  if (event.target.closest('[data-close-dialog], .dialog-close')) dialog.close();
  if (!event.target.closest('.nav-dropdown')) closeMenus();
  if (event.target.closest('.primary-navigation a')) closeMobileNavigation();
  if (event.target.closest('#download-enquiry')) downloadEnquiry();
});

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  const expanded = document.querySelector('.dropdown-trigger[aria-expanded="true"]');
  closeMenus();
  if (expanded) expanded.focus();
  if (nav.classList.contains('is-open')) {
    closeMobileNavigation();
    menuToggle.focus();
  }
});

document.addEventListener('pointerdown', event => {
  if (nav.classList.contains('is-open') && !event.target.closest('.site-header')) closeMobileNavigation();
});

dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});

function validateField(field) {
  let message = '';
  const value = field.value.trim();
  if (field.required && !value) {
    message = { collection: 'Enter a collection city and country.', delivery: 'Enter a delivery city and country.', cargo: 'Choose a cargo type.', email: 'Enter your work email.' }[field.name];
  } else if (['collection', 'delivery'].includes(field.name) && value.length < 2) {
    message = 'Enter at least two characters.';
  } else if (field.name === 'email' && field.validity.typeMismatch) {
    message = 'Enter a valid email address.';
  } else if (field.name === 'weight' && value && (!Number.isFinite(Number(value)) || Number(value) < 0.1 || Number(value) > 10000000)) {
    message = 'Enter a weight between 0.1 and 10,000,000 kg.';
  } else if (field.name === 'weight' && field.validity.badInput) {
    message = 'Enter a weight in kilograms.';
  }
  const error = document.getElementById(`${field.name}-error`);
  error.textContent = message || '';
  error.hidden = !message;
  field.setAttribute('aria-invalid', String(Boolean(message)));
  return !message;
}

const fields = [...form.querySelectorAll('input, select')];
fields.forEach(field => {
  field.addEventListener('input', () => { if (submitted || field.getAttribute('aria-invalid') === 'true') validateField(field); });
  field.addEventListener('change', () => { if (submitted) validateField(field); });
});

form.addEventListener('submit', event => {
  event.preventDefault();
  submitted = true;
  const invalid = fields.filter(field => !validateField(field));
  if (invalid.length) {
    invalid[0].focus();
    return;
  }
  currentEnquiry = Object.fromEntries(new FormData(form));
  for (const name of Object.keys(currentEnquiry)) currentEnquiry[name] = currentEnquiry[name].trim();
  dialogContent.innerHTML = `<p class="eyebrow">Your next step</p><h2 id="dialog-heading">Your enquiry, ready to review.</h2><p class="dialog-description">No message has been sent. Download your enquiry to keep a copy, or go back to edit the details.</p><dl class="enquiry-summary"><div><dt>Collection</dt><dd data-summary="collection"></dd></div><div><dt>Delivery</dt><dd data-summary="delivery"></dd></div><div><dt>Cargo</dt><dd data-summary="cargo"></dd></div><div><dt>Estimated weight</dt><dd data-summary="weight"></dd></div><div><dt>Work email</dt><dd data-summary="email"></dd></div></dl><div class="dialog-actions"><button class="button button-lime" type="button" id="download-enquiry">Download enquiry ${icon('download')}</button><button class="text-link" type="button" data-close-dialog>Edit details</button></div><p class="download-message" id="download-message" role="status"></p>`;
  for (const element of dialogContent.querySelectorAll('[data-summary]')) {
    const key = element.dataset.summary;
    element.textContent = key === 'weight' ? (currentEnquiry[key] ? `${currentEnquiry[key]} kg` : 'Not specified') : currentEnquiry[key];
  }
  dialog.showModal();
});

function downloadEnquiry() {
  if (!currentEnquiry) return;
  const { collection, delivery, cargo, weight, email } = currentEnquiry;
  const contents = `BURGAS LOGISTICS — SHIPMENT ENQUIRY\n\nCollection: ${collection}\nDelivery: ${delivery}\nCargo type: ${cargo}\nEstimated weight: ${weight ? `${weight} kg` : 'Not specified'}\nWork email: ${email}\n\nThis enquiry was created in a website preview. No message has been sent and no booking has been made.\n`;
  const url = URL.createObjectURL(new Blob([contents], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'burgas-logistics-enquiry.txt';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
  document.querySelector('#download-message').textContent = 'Download started. Your enquiry has not been sent.';
}
