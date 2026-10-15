import "./style.css";
import portPhoto from "./assets/port-sunset.webp";
import panorama from "./assets/burgas-panorama.webp";
import brandLogo from "./assets/burgas-logistics-logo.png";
import arrowRight from "@phosphor-icons/core/assets/regular/arrow-right.svg?raw";
import arrowUpRight from "@phosphor-icons/core/assets/regular/arrow-up-right.svg?raw";
import mapPin from "@phosphor-icons/core/assets/regular/map-pin.svg?raw";
import caretDown from "@phosphor-icons/core/assets/regular/caret-down.svg?raw";
import envelope from "@phosphor-icons/core/assets/regular/envelope-simple.svg?raw";
import truck from "@phosphor-icons/core/assets/regular/truck.svg?raw";
import boat from "@phosphor-icons/core/assets/regular/boat.svg?raw";
import menu from "@phosphor-icons/core/assets/regular/list.svg?raw";
import close from "@phosphor-icons/core/assets/regular/x.svg?raw";
import download from "@phosphor-icons/core/assets/regular/download-simple.svg?raw";
import check from "@phosphor-icons/core/assets/regular/check-circle.svg?raw";
import arrowLeft from "@phosphor-icons/core/assets/regular/arrow-left.svg?raw";
import packageIcon from "@phosphor-icons/core/assets/regular/package.svg?raw";
import cube from "@phosphor-icons/core/assets/regular/cube.svg?raw";
import stack from "@phosphor-icons/core/assets/regular/stack.svg?raw";
import gear from "@phosphor-icons/core/assets/regular/gear-six.svg?raw";
import storefront from "@phosphor-icons/core/assets/regular/storefront.svg?raw";
import ruler from "@phosphor-icons/core/assets/regular/ruler.svg?raw";
import arrows from "@phosphor-icons/core/assets/regular/arrows-left-right.svg?raw";
import clipboard from "@phosphor-icons/core/assets/regular/clipboard-text.svg?raw";
import globe from "@phosphor-icons/core/assets/regular/globe-hemisphere-east.svg?raw";
import shield from "@phosphor-icons/core/assets/regular/shield-check.svg?raw";
import chats from "@phosphor-icons/core/assets/regular/chats-circle.svg?raw";
import path from "@phosphor-icons/core/assets/regular/path.svg?raw";
import file from "@phosphor-icons/core/assets/regular/file-text.svg?raw";
import clock from "@phosphor-icons/core/assets/regular/clock.svg?raw";
import quotes from "@phosphor-icons/core/assets/regular/quotes.svg?raw";
import plus from "@phosphor-icons/core/assets/regular/plus.svg?raw";
import { routeGroups, guides } from "./content.js";
import {
  companySection,
  servicesSection,
  routesSection,
  routeRows,
  cargoSection,
  benefitsSection,
  partnersSection,
  testimonialsSection,
  guidesSection,
  faqSection,
  bottomQuoteSection,
} from "./sections.js";

const icons = {
  arrowRight,
  arrowLeft,
  arrowUpRight,
  mapPin,
  caretDown,
  envelope,
  truck,
  boat,
  menu,
  close,
  download,
  check,
  package: packageIcon,
  cube,
  stack,
  gear,
  storefront,
  ruler,
  arrows,
  clipboard,
  globe,
  shield,
  chats,
  path,
  file,
  clock,
  quotes,
  plus,
};
const icon = (name, extraClass = "") =>
  `<span class="icon ${extraClass}" aria-hidden="true">${icons[name].replace("<svg ", '<svg focusable="false" ')}</span>`;

document.querySelector("#app").innerHTML = `
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header class="site-header" id="top">
    <a class="brand" href="#top" aria-label="Burgas Logistics home"><img src="${brandLogo}" alt="Burgas Logistics" width="232" height="57" /></a>
    <button class="menu-toggle icon-button" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-navigation">${icon("menu")}</button>
    <nav class="primary-navigation" id="primary-navigation" aria-label="Main navigation">
      <div class="nav-dropdown">
        <button class="nav-link dropdown-trigger" type="button" aria-expanded="false" aria-controls="services-menu">Services ${icon("caretDown")}</button>
        <div class="dropdown-panel" id="services-menu" hidden>
          <span class="menu-note">Moving your business</span>
          <button class="dropdown-item" type="button" data-dialog="road">${icon("truck")}<span><strong>Road freight</strong><small>Explore transport by road</small></span>${icon("arrowUpRight")}</button>
          <button class="dropdown-item" type="button" data-dialog="sea">${icon("boat")}<span><strong>Sea freight</strong><small>Explore transport by sea</small></span>${icon("arrowUpRight")}</button>
          <a class="dropdown-footer" href="#services">See our approach ${icon("arrowRight")}</a>
        </div>
      </div>
      <div class="nav-dropdown">
        <button class="nav-link dropdown-trigger" type="button" aria-expanded="false" aria-controls="routes-menu">Routes ${icon("caretDown")}</button>
        <div class="dropdown-panel route-menu" id="routes-menu" hidden>
          <span class="menu-note">Start with your destination</span>
          <strong class="dropdown-title">Where do you need to go?</strong>
          <p>Share your collection and delivery locations. We’ll help you explore the options.</p>
          <a class="text-link" href="#quote" data-focus-quote>Plan your route ${icon("arrowRight")}</a>
          <a class="dropdown-footer" href="#routes">Explore sample routes ${icon("arrowUpRight")}</a>
        </div>
      </div>
      <a class="nav-link" href="#cargo-types">Cargo</a>
      <a class="nav-link" href="#company">About</a>
      <button class="nav-link" type="button" data-dialog="contact">Contact</button>
    </nav>
    <div class="header-actions">
      <span class="office-location">${icon("mapPin")} Burgas, Bulgaria</span>
      <span class="header-separator" aria-hidden="true"></span>
      <button class="button button-outline header-contact" type="button" data-dialog="contact">Contact our team ${icon("arrowRight")}</button>
    </div>
  </header>

  <main id="main-content">
    <section class="hero page-panel" aria-labelledby="hero-heading" >
      <div class="hero-grid">
        <div class="hero-intro">

          <h1 id="hero-heading">Let’s get your<br /><span>cargo moving.</span></h1>
          <p class="hero-description">Road and sea freight.<br />Coordinated from Burgas, Bulgaria.</p><a class="button button-lime hero-mobile-action" href="#quote" data-focus-quote>Prepare your enquiry ${icon("arrowRight")}</a>
        </div>
        <img class="hero-photo" src="${portPhoto}" alt="Container cranes and a cargo ship beside the sea at sunset" width="1536" height="1024" fetchpriority="high" />
        <div class="quote-card" id="quote">
          <div class="quote-heading">
            <h2>Your shipment starts here.</h2>
            <p>Tell us a little about your shipment.</p>
          </div>
          <form id="quote-form" data-quote-form novalidate>
            <div class="field">
              <label for="collection">Collection location</label>
              <div class="input-wrap">${icon("mapPin")}<input id="collection" name="collection" type="text" placeholder="City, country" required maxlength="120" autocomplete="off" aria-describedby="collection-error" /></div>
              <p class="field-error" id="collection-error" hidden></p>
            </div>
            <div class="field">
              <label for="delivery">Delivery location</label>
              <div class="input-wrap">${icon("mapPin")}<input id="delivery" name="delivery" type="text" placeholder="City, country" required maxlength="120" autocomplete="off" aria-describedby="delivery-error" /></div>
              <p class="field-error" id="delivery-error" hidden></p>
            </div>
            <div class="field-row">
              <div class="field">
                <label for="cargo">Cargo type</label>
                <div class="select-wrap"><select id="cargo" name="cargo" required aria-describedby="cargo-error"><option value="" disabled selected>Select cargo</option><option>General cargo</option><option>Palletised goods</option><option>Containerised cargo</option><option>Other / not sure yet</option></select>${icon("caretDown")}</div>
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
              <div class="input-wrap">${icon("envelope")}<input id="email" name="email" type="email" placeholder="you@company.com" required maxlength="254" autocomplete="email" aria-describedby="email-error" /></div>
              <p class="field-error" id="email-error" hidden></p>
            </div>
            <div class="form-actions">
              <button class="button button-lime quote-submit" type="submit">Request a quote ${icon("arrowRight")}</button>
              <p class="privacy-note">Your details stay in this browser. <button class="inline-link" type="button" data-dialog="privacy">Privacy policy</button></p>
            </div>
          </form>
        </div>
      </div>
    </section>

    ${companySection(icon)}
    ${servicesSection(icon)}
    ${routesSection(icon)}
    ${cargoSection(icon)}

    <section class="process content-container expanded-section" id="process" aria-labelledby="process-heading">
      <div><h2 class="section-heading" id="process-heading">From route<br />to arrival.</h2><p class="process-intro">A clear next step,<br />at every stage.</p></div>
      <ol class="process-steps">
        <li><h3>Tell us your route</h3><p>Share collection and delivery locations and a few details about the cargo.</p></li>
        <li><h3>We plan the options</h3><p>Our team in Burgas brings the road, sea and shipment requirements together.</p></li>
        <li><h3>You choose the next step</h3><p>Review the approach, confirm the details and agree the plan before booking.</p></li>
      </ol>
    </section>

    ${benefitsSection(icon)}
    ${partnersSection()}
    ${testimonialsSection(icon)}
    ${guidesSection(icon)}
    ${faqSection(icon)}

    <section class="about content-container expanded-section" id="about" aria-labelledby="about-heading">
      <div class="about-intro"><h2 class="section-heading" id="about-heading">At home<br />in Burgas.</h2><p class="about-description">On the Black Sea coast of Bulgaria. A local base for international road and sea freight conversations.</p><button class="text-link" type="button" data-dialog="about">Meet your logistics team ${icon("arrowRight")}</button></div>
      <div class="service-list" id="office-services" aria-label="Road and sea freight overview"><button class="service-item" type="button" data-dialog="road"><strong>Road freight</strong><span class="service-description">Collection-to-delivery planning, with your cargo in view.</span>${icon("arrowUpRight")}</button><button class="service-item" type="button" data-dialog="sea"><strong>Sea freight</strong><span class="service-description">Port connections, with a local point of contact.</span>${icon("arrowUpRight")}</button></div>
      <img class="office-photo" src="${panorama}" alt="A panoramic view of cranes and calm water at a Black Sea port" width="2048" height="768" loading="lazy" />
    </section>
    ${bottomQuoteSection(icon)}
  </main>

  <footer class="site-footer page-panel"><p class="footer-wordmark" aria-hidden="true">BURGAS</p>
    <div class="footer-top">
      <a class="brand footer-brand" href="#top" aria-label="Burgas Logistics home"><img src="${brandLogo}" alt="Burgas Logistics" width="200" height="49" /></a>
      <nav class="footer-navigation" aria-label="Footer navigation"><a href="#services">Services</a><a href="#routes">Routes</a><a href="#cargo-types">Cargo</a><a href="#company">About</a><button type="button" data-dialog="contact">Contact</button></nav>
      <div class="footer-contact"><span class="office-location">${icon("mapPin")} Burgas, Bulgaria</span><button type="button" data-dialog="contact">Contact our team</button></div>
    </div>
    <p class="footer-demo-note">Website concept: company figures, routes, partner names and client stories are illustrative.</p>
    <div class="footer-bottom"><span>© 2026 Burgas Logistics. All rights reserved.</span><div><button type="button" data-dialog="privacy">Privacy Policy</button><button type="button" data-dialog="terms">Terms of Service</button></div></div>
  </footer>

  <dialog class="information-dialog" id="information-dialog" aria-labelledby="dialog-heading">
    <button class="dialog-close icon-button" type="button" aria-label="Close dialog">${icon("close")}</button>
    <div id="dialog-content"></div>
  </dialog>
  <div class="screen-reader-only" id="download-status" role="status" aria-live="polite"></div>
`;

const form = document.querySelector("#quote-form");
const dialog = document.querySelector("#information-dialog");
const dialogContent = document.querySelector("#dialog-content");
const nav = document.querySelector("#primary-navigation");
const menuToggle = document.querySelector(".menu-toggle");
let currentEnquiry = null;
const submittedForms = new WeakSet();

const dialogs = {
  road: {
    eyebrow: "Our services",
    title: "A clear route by road.",
    text: "Start with where your cargo is and where it needs to go. Share the cargo type, estimated weight and your preferred timing so our team can discuss suitable road freight options with you.",
    label: "Plan a road shipment",
  },
  sea: {
    eyebrow: "Our services",
    title: "Your cargo, connected by sea.",
    text: "From our base in Burgas, we help you explore sea freight options for your shipment. Tell us about your collection point, destination and cargo so we can plan the next steps together.",
    label: "Plan a sea shipment",
  },
  multimodal: {
    eyebrow: "Our services",
    title: "One journey. More than one way to move.",
    text: "Some shipments need both an international sea leg and inland road transport. Share the full route so collection, ports and final delivery can be considered as one plan.",
    label: "Plan a combined shipment",
  },
  documents: {
    eyebrow: "Our services",
    title: "Start with the right information.",
    text: "Bring your cargo description, packing information and commercial documents into the planning conversation. Exact customs and transport requirements depend on the shipment and should be confirmed with the relevant specialist.",
    label: "Discuss the paperwork",
  },
  contact: {
    eyebrow: "Let’s talk logistics",
    title: "Your point of contact in Burgas.",
    text: "Our office is based in Burgas, Bulgaria. Start with a few details about your route and cargo to prepare your enquiry.",
    label: "Start your enquiry",
  },
  about: {
    eyebrow: "Burgas, Bulgaria",
    title: "A local team. A clear point of contact.",
    text: "Good logistics starts with clear communication. Our Burgas office is your starting point for discussing your shipment, reviewing transport options and planning the next step.",
    label: "Tell us about your shipment",
  },
};

function closeMenus() {
  document.querySelectorAll(".dropdown-trigger").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
    document.getElementById(button.getAttribute("aria-controls")).hidden = true;
  });
}

function closeMobileNavigation() {
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  menuToggle.innerHTML = icon("menu");
}

function focusQuote() {
  closeMenus();
  closeMobileNavigation();
  dialog.close();
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  document
    .querySelector("#quote")
    .scrollIntoView({
      behavior: reduced ? "instant" : "smooth",
      block: "start",
    });
  document.querySelector("#collection").focus({ preventScroll: true });
}

function openDialog(name) {
  closeMenus();
  closeMobileNavigation();
  if (dialogs[name]) {
    const item = dialogs[name];
    dialogContent.innerHTML = `<p class="dialog-note">${item.eyebrow}</p><h2 id="dialog-heading">${item.title}</h2><p class="dialog-description">${item.text}</p><div class="dialog-location">${icon("mapPin")} Burgas, Bulgaria</div><button class="button button-lime" type="button" data-start-enquiry>${item.label} ${icon("arrowRight")}</button>`;
  } else if (guides.some((guide) => guide.id === name)) {
    const guide = guides.find((item) => item.id === name);
    dialogContent.innerHTML = `<p class="dialog-note">${guide.category}</p><h2 id="dialog-heading">${guide.title}</h2><div class="dialog-description">${guide.paragraphs.map((text) => `<p>${text}</p>`).join("")}</div><button class="button button-lime" type="button" data-start-enquiry>Start your enquiry ${icon("arrowRight")}</button>`;
  } else if (name === "privacy") {
    dialogContent.innerHTML = `<p class="dialog-note">Your information</p><h2 id="dialog-heading">Your privacy matters.</h2><div class="dialog-description"><p>This website preview does not send enquiries to a company inbox. The form values are held in this page only and are cleared when it is reloaded.</p><p>If you choose “Download enquiry”, a text file is created on your device. No form data is sent to a server. This website does not use analytics or advertising cookies.</p></div><button class="button button-navy" type="button" data-close-dialog>Got it ${icon("check")}</button>`;
  } else if (name === "terms") {
    dialogContent.innerHTML = `<p class="dialog-note">About this website</p><h2 id="dialog-heading">A website concept, ready to explore.</h2><div class="dialog-description"><p>Burgas Logistics is the working name for this website concept. Service descriptions are illustrative and do not constitute a transport offer or a booking.</p><p>The enquiry form lets you review and download your details. It does not send a message or confirm a shipment. Company information and commercial terms must be confirmed before live use.</p></div><button class="button button-navy" type="button" data-close-dialog>Got it ${icon("check")}</button>`;
  }
  dialog.showModal();
}

document.querySelectorAll(".dropdown-trigger").forEach((button) => {
  button.addEventListener("click", () => {
    const wasOpen = button.getAttribute("aria-expanded") === "true";
    closeMenus();
    if (!wasOpen) {
      button.setAttribute("aria-expanded", "true");
      document.getElementById(button.getAttribute("aria-controls")).hidden =
        false;
    }
  });
});

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  closeMenus();
  nav.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
  menuToggle.innerHTML = icon(open ? "close" : "menu");
});

document.addEventListener("click", (event) => {
  const dialogButton = event.target.closest("[data-dialog]");
  if (dialogButton) openDialog(dialogButton.dataset.dialog);
  if (event.target.closest("[data-start-enquiry], [data-focus-quote]")) {
    event.preventDefault();
    focusQuote();
  }
  if (event.target.closest("[data-close-dialog], .dialog-close"))
    dialog.close();
  if (!event.target.closest(".nav-dropdown")) closeMenus();
  if (event.target.closest(".primary-navigation a")) closeMobileNavigation();
  if (event.target.closest("#download-enquiry")) downloadEnquiry();
  const route = event.target.closest("[data-route-from]");
  if (route) {
    form.elements.collection.value = route.dataset.routeFrom;
    form.elements.delivery.value = route.dataset.routeTo;
    for (const field of [form.elements.collection, form.elements.delivery])
      field.dispatchEvent(new Event("input", { bubbles: true }));
    focusQuote();
  }
  const cargoChoice = event.target.closest("[data-cargo-type]");
  if (cargoChoice) {
    form.elements.cargo.value = cargoChoice.dataset.cargoType;
    form.elements.cargo.dispatchEvent(new Event("change", { bubbles: true }));
    focusQuote();
  }
});

function selectRegion(key, moveFocus = false) {
  const group = routeGroups[key];
  if (!group) return;
  document.querySelectorAll("[data-region]").forEach((tab) => {
    const selected = tab.dataset.region === key;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && moveFocus) tab.focus();
  });
  document
    .querySelector("#route-panel")
    .setAttribute("aria-labelledby", `route-tab-${key}`);
  document.querySelector("#route-mode").textContent = group.mode;
  document.querySelector("#route-title").textContent = group.title;
  document.querySelector("#route-description").textContent = group.description;
  document.querySelector("#route-list").innerHTML = routeRows(group, icon);
}

const regionTabs = [...document.querySelectorAll("[data-region]")];
regionTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectRegion(tab.dataset.region));
  tab.addEventListener("keydown", (event) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % regionTabs.length;
    else if (event.key === "ArrowLeft")
      next = (index + regionTabs.length - 1) % regionTabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = regionTabs.length - 1;
    else return;
    event.preventDefault();
    selectRegion(regionTabs[next].dataset.region, true);
  });
});

const reviewSlider = document.querySelector("#review-slider");
const previousReview = document.querySelector("#review-previous");
const nextReview = document.querySelector("#review-next");
function updateReviewControls() {
  previousReview.disabled = reviewSlider.scrollLeft <= 3;
  nextReview.disabled =
    reviewSlider.scrollLeft + reviewSlider.clientWidth >=
    reviewSlider.scrollWidth - 3;
}
function moveReviews(direction) {
  const first = reviewSlider.firstElementChild;
  const distance =
    first.getBoundingClientRect().width +
    parseFloat(getComputedStyle(reviewSlider).gap);
  reviewSlider.scrollBy({
    left: direction * distance,
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
}
previousReview.addEventListener("click", () => moveReviews(-1));
nextReview.addEventListener("click", () => moveReviews(1));
reviewSlider.addEventListener("scroll", updateReviewControls, {
  passive: true,
});
window.addEventListener("resize", updateReviewControls);
updateReviewControls();

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const expanded = document.querySelector(
    '.dropdown-trigger[aria-expanded="true"]',
  );
  closeMenus();
  if (expanded) expanded.focus();
  if (nav.classList.contains("is-open")) {
    closeMobileNavigation();
    menuToggle.focus();
  }
});

document.addEventListener("pointerdown", (event) => {
  if (
    nav.classList.contains("is-open") &&
    !event.target.closest(".site-header")
  )
    closeMobileNavigation();
});

dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  )
    dialog.close();
});

function validateField(field) {
  let message = "";
  const value = field.value.trim();
  if (field.required && !value) {
    message = {
      collection: "Enter a collection city and country.",
      delivery: "Enter a delivery city and country.",
      cargo: "Choose a cargo type.",
      email: "Enter your work email.",
    }[field.name];
  } else if (
    ["collection", "delivery"].includes(field.name) &&
    value.length < 2
  ) {
    message = "Enter at least two characters.";
  } else if (field.name === "email" && field.validity.typeMismatch) {
    message = "Enter a valid email address.";
  } else if (
    field.name === "weight" &&
    value &&
    (!Number.isFinite(Number(value)) ||
      Number(value) < 0.1 ||
      Number(value) > 10000000)
  ) {
    message = "Enter a weight between 0.1 and 10,000,000 kg.";
  } else if (field.name === "weight" && field.validity.badInput) {
    message = "Enter a weight in kilograms.";
  }
  const error = document.getElementById(`${field.id}-error`);
  error.textContent = message || "";
  error.hidden = !message;
  field.setAttribute("aria-invalid", String(Boolean(message)));
  return !message;
}

document.querySelectorAll("[data-quote-form]").forEach((currentForm) => {
  const fields = [...currentForm.querySelectorAll("input, select")];
  fields.forEach((field) => {
    field.addEventListener("input", () => {
      if (
        submittedForms.has(currentForm) ||
        field.getAttribute("aria-invalid") === "true"
      )
        validateField(field);
    });
    field.addEventListener("change", () => {
      if (submittedForms.has(currentForm)) validateField(field);
    });
  });
  currentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submittedForms.add(currentForm);
    const invalid = fields.filter((field) => !validateField(field));
    if (invalid.length) {
      invalid[0].focus();
      return;
    }
    currentEnquiry = Object.fromEntries(new FormData(currentForm));
    for (const name of Object.keys(currentEnquiry))
      currentEnquiry[name] = currentEnquiry[name].trim();
    dialogContent.innerHTML = `<p class="dialog-note">Your next step</p><h2 id="dialog-heading">Your enquiry, ready to review.</h2><p class="dialog-description">No message has been sent. Download your enquiry to keep a copy, or go back to edit the details.</p><dl class="enquiry-summary"><div><dt>Collection</dt><dd data-summary="collection"></dd></div><div><dt>Delivery</dt><dd data-summary="delivery"></dd></div><div><dt>Cargo</dt><dd data-summary="cargo"></dd></div><div><dt>Estimated weight</dt><dd data-summary="weight"></dd></div><div><dt>Work email</dt><dd data-summary="email"></dd></div></dl><div class="dialog-actions"><button class="button button-lime" type="button" id="download-enquiry">Download enquiry ${icon("download")}</button><button class="text-link" type="button" data-close-dialog>Edit details</button></div><p class="download-message" id="download-message" role="status"></p>`;
    for (const element of dialogContent.querySelectorAll("[data-summary]")) {
      const key = element.dataset.summary;
      element.textContent =
        key === "weight"
          ? currentEnquiry[key]
            ? `${currentEnquiry[key]} kg`
            : "Not specified"
          : currentEnquiry[key];
    }
    dialog.showModal();
  });
});

function downloadEnquiry() {
  if (!currentEnquiry) return;
  const { collection, delivery, cargo, weight, email } = currentEnquiry;
  const contents = `BURGAS LOGISTICS — SHIPMENT ENQUIRY\n\nCollection: ${collection}\nDelivery: ${delivery}\nCargo type: ${cargo}\nEstimated weight: ${weight ? `${weight} kg` : "Not specified"}\nWork email: ${email}\n\nThis enquiry was created in a website preview. No message has been sent and no booking has been made.\n`;
  const url = URL.createObjectURL(
    new Blob([contents], { type: "text/plain;charset=utf-8" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = "burgas-logistics-enquiry.txt";
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
  document.querySelector("#download-message").textContent =
    "Download started. Your enquiry has not been sent.";
}

// Visible by default; entrances progressively enhance reading without hiding content.
if (
  !matchMedia("(prefers-reduced-motion: reduce)").matches &&
  "IntersectionObserver" in window
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal-arriving");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );
  document.querySelectorAll("main > section").forEach((section) => {
    const parts = section.querySelectorAll(
      "h2, .section-introduction > p, .company-story, .service-figure, .cargo-photo, .office-photo, .benefit-item, .process-steps > li, .guide-card, .faq-item",
    );
    parts.forEach((part, index) => {
      part.style.setProperty(
        "--reveal-delay",
        `${Math.min(index % 4, 3) * 70}ms`,
      );
      if (part.matches(".service-figure, .cargo-photo, .office-photo"))
        part.classList.add("reveal-side");
      observer.observe(part);
    });
  });
}
