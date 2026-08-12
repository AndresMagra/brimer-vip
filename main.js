// ---- Config: update these with real business details ----
const CONFIG = {
  whatsappNumber: "18095550123", // TODO: replace with real WhatsApp number, digits only, country code first
  whatsappMessage: {
    es: "Hola, me gustaría más información sobre sus servicios.",
    en: "Hi, I'd like more information about your services.",
  },
};

// ---- Fleet photo galleries ----
const galleries = {
  suburban: [
    "assets/images/suburban-side-2.jpeg",
    "assets/images/suburban-front.jpeg",
    "assets/images/suburban-side-1.jpeg",
    "assets/images/suburban-side-3.jpeg",
    "assets/images/suburban-interior.jpeg",
  ],
  suburbanLtz: [
    "assets/images/suburban-ltz-3.jpeg",
    "assets/images/suburban-ltz-1.jpeg",
    "assets/images/suburban-ltz-2.jpeg",
    "assets/images/suburban-ltz-4.jpeg",
    "assets/images/suburban-ltz-5.jpeg",
  ],
  sprinter: [
    "assets/images/sprinter-exterior-1.jpeg",
    "assets/images/sprinter-exterior-2.jpeg",
    "assets/images/sprinter-interior-1.jpeg",
    "assets/images/sprinter-interior-2.jpeg",
    "assets/images/sprinter-interior-3.jpeg",
  ],
  sprinterBlack: [
    "assets/images/sprinter-black-side.jpeg",
    "assets/images/sprinter-black-front.jpeg",
  ],
  elantra: [
    "assets/images/elantra-front.jpeg",
    "assets/images/elantra-front-night.jpeg",
    "assets/images/elantra-rear.jpeg",
  ],
  optima: [
    "assets/images/optima-front.jpeg",
    "assets/images/optima-rear.jpeg",
  ],
  picanto: [
    "assets/images/picanto-front.jpeg",
    "assets/images/picanto-rear.jpeg",
    "assets/images/picanto-rear-side.jpeg",
  ],
  traverse: [
    "assets/images/traverse-side.jpeg",
    "assets/images/traverse-rear.jpeg",
    "assets/images/traverse-rear-side.jpeg",
  ],
  sonet: [
    "assets/images/sonet-front-side-1.jpeg",
    "assets/images/sonet-front-side-2.jpeg",
    "assets/images/sonet-rear-side.jpeg",
  ],
  traverseWhite: [
    "assets/images/traverse-white-front.jpeg",
    "assets/images/traverse-white-side-1.jpeg",
    "assets/images/traverse-white-side-2.jpeg",
    "assets/images/traverse-white-side-3.jpeg",
  ],
  xl7: [
    "assets/images/xl7-side.jpeg",
    "assets/images/xl7-front-1.jpeg",
    "assets/images/xl7-front-2.jpeg",
  ],
  h1: [
    "assets/images/h1-front.jpeg",
    "assets/images/h1-side.jpeg",
  ],
  hiace: [
    "assets/images/hiace-side-1.jpeg",
    "assets/images/hiace-front.jpeg",
    "assets/images/hiace-side-2.jpeg",
  ],
  golfcart: [
    "assets/images/golfcart-side.jpeg",
    "assets/images/golfcart-front.jpeg",
    "assets/images/golfcart-rear.jpeg",
  ],
  golfcartWhite: [
    "assets/images/golfcart-white-front.jpeg",
    "assets/images/golfcart-white-rear.jpeg",
    "assets/images/golfcart-white-rear-2.jpeg",
  ],
  trax: [
    "assets/images/trax-rear-side.jpeg",
    "assets/images/trax-side-1.jpeg",
    "assets/images/trax-side-2.jpeg",
  ],
};

// ---- i18n dictionary ----
const translations = {
  es: {
    "nav.services": "Servicios",
    "nav.fleet": "Flota",
    "nav.areas": "Zonas",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.whatsapp": "WhatsApp",
    "hero.title": "Movilidad VIP en República Dominicana",
    "hero.subtitle": "Alquiler de vehículos y servicio de chofer privado en La Romana, Punta Cana, Santo Domingo y Casa de Campo.",
    "hero.cta": "Reservar por WhatsApp",
    "hero.cta2": "Ver servicios",
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Soluciones de transporte privado adaptadas a cada ocasión.",
    "services.rental.title": "Alquiler de Vehículos",
    "services.rental.desc": "Amplia flota de vehículos para tus necesidades de transporte, desde sedanes hasta SUVs de lujo.",
    "services.chauffeur.title": "Chofer Privado",
    "services.chauffeur.desc": "Servicio de chofer profesional y discreto para tus traslados diarios o eventos especiales.",
    "services.airport.title": "Traslado Aeropuerto Punta Cana",
    "services.airport.desc": "Recogida y traslado desde y hacia el Aeropuerto Internacional de Punta Cana, puntual y cómodo.",
    "services.bus.title": "Bus para Eventos - Santo Domingo",
    "services.bus.desc": "Transporte grupal en autobús para eventos, bodas y actividades corporativas en Santo Domingo.",
    "services.excursions.title": "Excursiones Privadas",
    "services.excursions.desc": "Tours y excursiones privadas a tu ritmo, con chofer y vehículo dedicado.",
    "services.casadecampo.title": "Casa de Campo & Punta Cana",
    "services.casadecampo.desc": "Servicio de chofer privado dentro y entre Casa de Campo y Punta Cana.",
    "fleet.title": "Nuestra Flota",
    "fleet.subtitle": "Vehículos modernos, cómodos y bien mantenidos.",
    "fleet.placeholder": "Foto próximamente",
    "fleet.viewPhotos": "Ver fotos",
    "fleet.suburban": "Chevrolet Suburban High Country",
    "fleet.suburbanDesc": "SUV insignia de lujo, máximo confort y tecnología para tus traslados VIP.",
    "fleet.suburbanLtz": "Chevrolet Suburban LTZ",
    "fleet.suburbanLtzDesc": "SUV grande y elegante, amplia capacidad de pasajeros y equipaje.",
    "fleet.sprinter": "Mercedes-Benz Sprinter",
    "fleet.sprinterDesc": "Minibús de lujo, 16 pasajeros, ideal para grupos y traslados a eventos.",
    "fleet.sprinterBlack": "Mercedes-Benz Sprinter",
    "fleet.sprinterBlackDesc": "Minibús de lujo en negro, elegante y espacioso para grupos y eventos.",
    "fleet.elantra": "Hyundai Elantra",
    "fleet.elantraDesc": "Sedán cómodo y económico, ideal para viajes de negocio o placer.",
    "fleet.optima": "Kia Optima",
    "fleet.optimaDesc": "Sedán elegante y espacioso, perfecto para traslados ejecutivos.",
    "fleet.picanto": "Kia Picanto",
    "fleet.picantoDesc": "Vehículo compacto, económico y ágil, ideal para moverse por la ciudad.",
    "fleet.traverse": "Chevrolet Traverse",
    "fleet.traverseDesc": "SUV espaciosa de 7 pasajeros, cómoda y con amplio espacio de carga.",
    "fleet.sonet": "Kia Sonet",
    "fleet.sonetDesc": "SUV compacta, versátil y con excelente relación espacio-comodidad.",
    "fleet.traverseWhite": "Chevrolet Traverse",
    "fleet.traverseWhiteDesc": "SUV espaciosa de 7 pasajeros, ideal para familias y grupos.",
    "fleet.xl7": "Suzuki XL7",
    "fleet.xl7Desc": "Crossover de 7 pasajeros, elegante y con excelente confort de viaje.",
    "fleet.h1": "Hyundai H1",
    "fleet.h1Desc": "Van de pasajeros, cómoda y espaciosa, ideal para grupos pequeños y familias.",
    "fleet.hiace": "Toyota HiAce",
    "fleet.hiaceDesc": "Van de pasajeros de alta capacidad, ideal para grupos y traslados grupales.",
    "fleet.golfcart": "Buggy Tucan",
    "fleet.golfcartDesc": "Carrito todoterreno de lujo, ideal para excursiones y paseos en Casa de Campo.",
    "fleet.golfcartWhite": "Buggy 6 Pasajeros",
    "fleet.golfcartWhiteDesc": "Carrito todoterreno de 6 pasajeros, perfecto para grupos en Casa de Campo.",
    "fleet.trax": "Chevrolet Trax",
    "fleet.traxDesc": "SUV compacta, ágil y eficiente, ideal para la ciudad y viajes cortos.",
    "fleet.suv": "SUV de Lujo",
    "fleet.sedan": "Sedán Ejecutivo",
    "fleet.van": "Van / Minibús",
    "fleet.bus": "Autobús",
    "areas.title": "Zonas de Servicio",
    "areas.laromana": "La Romana",
    "areas.puntacana": "Punta Cana",
    "areas.santodomingo": "Santo Domingo",
    "areas.casadecampo": "Casa de Campo",
    "about.title": "Sobre Brimer VIP",
    "about.text": "Brimer VIP es una empresa de alquiler de vehículos y servicios de chofer privado con base en La Romana, República Dominicana. Ofrecemos traslados al aeropuerto, transporte para eventos, excursiones privadas y servicio de chofer en las principales zonas turísticas del país, con un enfoque en la puntualidad, comodidad y un servicio de calidad VIP.",
    "contact.title": "Contáctanos",
    "contact.subtitle": "Escríbenos para reservar tu vehículo o servicio de chofer.",
    "contact.whatsapp": "Escríbenos por WhatsApp",
    "contact.phoneLabel": "Teléfono:",
    "contact.emailLabel": "Email:",
    "contact.locationLabel": "Ubicación:",
    "contact.location": "La Romana, República Dominicana",
    "footer.rights": "© 2026 Brimer VIP. Todos los derechos reservados.",
  },
  en: {
    "nav.services": "Services",
    "nav.fleet": "Fleet",
    "nav.areas": "Areas",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.whatsapp": "WhatsApp",
    "hero.title": "VIP Mobility in the Dominican Republic",
    "hero.subtitle": "Vehicle rental and private chauffeur service in La Romana, Punta Cana, Santo Domingo, and Casa de Campo.",
    "hero.cta": "Book via WhatsApp",
    "hero.cta2": "View services",
    "services.title": "Our Services",
    "services.subtitle": "Private transportation solutions for every occasion.",
    "services.rental.title": "Vehicle Rental",
    "services.rental.desc": "A wide fleet of vehicles for your transportation needs, from sedans to luxury SUVs.",
    "services.chauffeur.title": "Private Chauffeur",
    "services.chauffeur.desc": "Professional and discreet chauffeur service for your daily transfers or special events.",
    "services.airport.title": "Punta Cana Airport Transfer",
    "services.airport.desc": "Pickup and transfer to and from Punta Cana International Airport, punctual and comfortable.",
    "services.bus.title": "Event Bus - Santo Domingo",
    "services.bus.desc": "Group bus transportation for events, weddings, and corporate activities in Santo Domingo.",
    "services.excursions.title": "Private Excursions",
    "services.excursions.desc": "Private tours and excursions at your own pace, with a dedicated driver and vehicle.",
    "services.casadecampo.title": "Casa de Campo & Punta Cana",
    "services.casadecampo.desc": "Private chauffeur service within and between Casa de Campo and Punta Cana.",
    "fleet.title": "Our Fleet",
    "fleet.subtitle": "Modern, comfortable, and well-maintained vehicles.",
    "fleet.placeholder": "Photo coming soon",
    "fleet.viewPhotos": "View photos",
    "fleet.suburban": "Chevrolet Suburban High Country",
    "fleet.suburbanDesc": "Flagship luxury SUV — top comfort and technology for your VIP transfers.",
    "fleet.suburbanLtz": "Chevrolet Suburban LTZ",
    "fleet.suburbanLtzDesc": "Large, elegant SUV with generous passenger and luggage capacity.",
    "fleet.sprinter": "Mercedes-Benz Sprinter",
    "fleet.sprinterDesc": "Luxury minibus, 16 passengers, ideal for groups and event transfers.",
    "fleet.sprinterBlack": "Mercedes-Benz Sprinter",
    "fleet.sprinterBlackDesc": "Luxury minibus in black, elegant and spacious for groups and events.",
    "fleet.elantra": "Hyundai Elantra",
    "fleet.elantraDesc": "Comfortable and economical sedan, great for business or leisure trips.",
    "fleet.optima": "Kia Optima",
    "fleet.optimaDesc": "Elegant and spacious sedan, perfect for executive transfers.",
    "fleet.picanto": "Kia Picanto",
    "fleet.picantoDesc": "Compact, economical, and nimble — ideal for getting around town.",
    "fleet.traverse": "Chevrolet Traverse",
    "fleet.traverseDesc": "Spacious 7-passenger SUV with comfortable seating and ample cargo room.",
    "fleet.sonet": "Kia Sonet",
    "fleet.sonetDesc": "Compact SUV, versatile with a great balance of space and comfort.",
    "fleet.traverseWhite": "Chevrolet Traverse",
    "fleet.traverseWhiteDesc": "Spacious 7-passenger SUV, great for families and groups.",
    "fleet.xl7": "Suzuki XL7",
    "fleet.xl7Desc": "7-passenger crossover, stylish with excellent ride comfort.",
    "fleet.h1": "Hyundai H1",
    "fleet.h1Desc": "Passenger van, comfortable and spacious, ideal for small groups and families.",
    "fleet.hiace": "Toyota HiAce",
    "fleet.hiaceDesc": "High-capacity passenger van, ideal for groups and group transfers.",
    "fleet.golfcart": "Tucan Buggy",
    "fleet.golfcartDesc": "Luxury off-road cart, perfect for excursions and rides around Casa de Campo.",
    "fleet.golfcartWhite": "6-Passenger Buggy",
    "fleet.golfcartWhiteDesc": "6-passenger off-road cart, perfect for groups around Casa de Campo.",
    "fleet.trax": "Chevrolet Trax",
    "fleet.traxDesc": "Compact, agile, and efficient SUV, great for the city and short trips.",
    "fleet.suv": "Luxury SUV",
    "fleet.sedan": "Executive Sedan",
    "fleet.van": "Van / Minibus",
    "fleet.bus": "Bus",
    "areas.title": "Service Areas",
    "areas.laromana": "La Romana",
    "areas.puntacana": "Punta Cana",
    "areas.santodomingo": "Santo Domingo",
    "areas.casadecampo": "Casa de Campo",
    "about.title": "About Brimer VIP",
    "about.text": "Brimer VIP is a vehicle rental and private chauffeur service company based in La Romana, Dominican Republic. We offer airport transfers, event transportation, private excursions, and chauffeur service in the country's main tourist areas, with a focus on punctuality, comfort, and VIP-quality service.",
    "contact.title": "Get in Touch",
    "contact.subtitle": "Message us to book your vehicle or chauffeur service.",
    "contact.whatsapp": "Message us on WhatsApp",
    "contact.phoneLabel": "Phone:",
    "contact.emailLabel": "Email:",
    "contact.locationLabel": "Location:",
    "contact.location": "La Romana, Dominican Republic",
    "footer.rights": "© 2026 Brimer VIP. All rights reserved.",
  },
};

let currentLang = localStorage.getItem("brimer-lang") || "es";

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const dict = translations[lang];
    if (dict && dict[key]) el.textContent = dict[key];
  });
  const toggle = document.getElementById("langToggle");
  if (toggle) toggle.textContent = lang === "es" ? "EN" : "ES";
  localStorage.setItem("brimer-lang", lang);
  updateWhatsappLinks();
}

function updateWhatsappLinks() {
  const msg = CONFIG.whatsappMessage[currentLang] || CONFIG.whatsappMessage.es;
  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  ["waHeaderBtn", "waHeroBtn", "waContactBtn", "waFloatBtn"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = url;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);

  const langToggle = document.getElementById("langToggle");
  langToggle.addEventListener("click", () => {
    applyLanguage(currentLang === "es" ? "en" : "es");
  });

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => mainNav.classList.remove("open"));
  });

  initLightbox();
});

// ---- Lightbox gallery ----
function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  let currentGallery = [];
  let currentIndex = 0;

  function show(index) {
    currentIndex = (index + currentGallery.length) % currentGallery.length;
    lightboxImg.src = currentGallery[currentIndex];
  }

  function open(galleryKey, startIndex) {
    currentGallery = galleries[galleryKey];
    if (!currentGallery) return;
    show(startIndex || 0);
    lightbox.classList.add("open");
  }

  function close() {
    lightbox.classList.remove("open");
  }

  document.querySelectorAll("[data-gallery]").forEach((card) => {
    card.addEventListener("click", () => open(card.getAttribute("data-gallery"), 0));
  });

  closeBtn.addEventListener("click", close);
  prevBtn.addEventListener("click", () => show(currentIndex - 1));
  nextBtn.addEventListener("click", () => show(currentIndex + 1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(currentIndex - 1);
    if (e.key === "ArrowRight") show(currentIndex + 1);
  });
}
