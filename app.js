```javascript
// ==========================================
// Sariputra Tour & Holidays - Complete Engine
// ==========================================

"use strict";

// ==========================================
// BUSINESS CONFIGURATION
// ==========================================

const WA = "+919939995360";
const UPI_ID = "rawanilokesh1@ybl";
const UPI_NAME = "Sariputra Tour & Holidays";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=900&auto=format&fit=crop";

// ==========================================
// GLOBAL STATE
// ==========================================

let currentCat = "all";
let currentGeneratedPlan = "";
let matchedTargetId = "";

let currentGalleryPhotos = [];
let currentGalleryIndex = 0;

let galleryTouchStartX = 0;
let galleryTouchEndX = 0;

window.lastAnswer = "";

// ==========================================
// TOUR PACKAGES DATA
// ==========================================

const packages = [
  {
    id: "buddhist",
    cat: "pilgrimage",
    title: "Buddhist Circuit Pilgrimage",
    duration: "5 Days / 4 Nights",
    route: "Bodh Gaya → Rajgir → Nalanda → Varanasi → Kushinagar",
    price: 12500,
    img: "assets/photos/buddhist-circuit-1.jpg",
    gallery: [
      "assets/photos/buddhist-circuit-1.jpg",
      "assets/photos/buddhist-circuit-2.jpg",
      "assets/photos/buddhist-circuit-3.jpg",
      "assets/photos/buddhist-circuit-4.jpg",
      "assets/photos/buddhist-circuit-5.jpg"
    ]
  },

  {
    id: "golden",
    cat: "heritage",
    title: "Golden Triangle Classic Tour",
    duration: "6 Days / 5 Nights",
    route: "Delhi → Agra → Jaipur → Delhi",
    price: 16000,
    img:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=900&auto=format&fit=crop"
    ]
  },

  {
    id: "sikkim",
    cat: "hills",
    title: "Gangtok & Sikkim Hill Odyssey",
    duration: "6 Days / 5 Nights",
    route: "NJP / Bagdogra → Gangtok → Tsomgo Lake → Darjeeling",
    price: 18500,
    img:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=900&auto=format&fit=crop"
    ]
  },

  {
    id: "chardham",
    cat: "pilgrimage",
    title: "Sacred Char Dham Yatra",
    duration: "10 Days / 9 Nights",
    route: "Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath",
    price: 28000,
    img: "assets/photos/char-dham-1.jpg",
    gallery: [
      "assets/photos/char-dham-1.jpg",
      "assets/photos/char-dham-2.jpg",
      "assets/photos/char-dham-3.jpg",
      "assets/photos/char-dham-4.jpg",
      "assets/photos/char-dham-5.jpg"
    ]
  },

  {
    id: "kerala",
    cat: "south",
    title: "Kerala Backwaters & Hills Tour",
    duration: "6 Days / 5 Nights",
    route: "Cochin → Munnar → Thekkady → Alleppey Houseboat",
    price: 17500,
    img:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609946784724-42777161b9e8?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=900&auto=format&fit=crop"
    ]
  },

  {
    id: "rajasthan",
    cat: "heritage",
    title: "Royal Rajasthan Heritage Explorer",
    duration: "7 Days / 6 Nights",
    route: "Jaipur → Jodhpur → Udaipur → Ajmer / Pushkar",
    price: 19500,
    img:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568849676085-51415703900f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=900&auto=format&fit=crop"
    ]
  }
];

// ==========================================
// FLEET VEHICLES DATA
// ==========================================

const fleetData = {
  "vehicle-7": {
    title: "7 Seater Family Vehicle",
    desc: "Families & small groups",
    rate: "Starts @ ₹15/km",
    photos: [
      "assets/photos/vehicle-7-2.jpg",
      "assets/photos/vehicle-7-3.jpg",
      "assets/photos/vehicle-7-4.jpg",
      "assets/photos/vehicle-7-5.jpg",
      "assets/photos/vehicle-7-6.jpg"
    ]
  },

  urbania: {
    title: "17 Seater Force Urbania",
    desc: "Premium group travel",
    rate: "Starts @ ₹25/km",
    photos: [
      "assets/photos/urbania-1.jpg",
      "assets/photos/urbania-2.jpg",
      "assets/photos/urbania-3.jpg",
      "assets/photos/urbania-4.jpg",
      "assets/photos/urbania-5.jpg"
    ]
  },

  tempo: {
    title: "17 Seater Tempo Traveller",
    desc: "Comfortable group travel",
    rate: "Starts @ ₹20/km",
    photos: [
      "assets/photos/tempo-1.jpg",
      "assets/photos/tempo-2.jpg",
      "assets/photos/tempo-3.jpg",
      "assets/photos/tempo-4.jpg",
      "assets/photos/tempo-5.jpg"
    ]
  },

  "bus-35": {
    title: "35 Seater Mini Bus",
    desc: "Tour & pilgrimage groups",
    rate: "Starts @ ₹35/km",
    photos: [
      "assets/photos/bus-35-1.jpg",
      "assets/photos/bus-35-2.jpg",
      "assets/photos/bus-35-3.jpg",
      "assets/photos/bus-35-4.jpg",
      "assets/photos/bus-35-5.jpg"
    ]
  },

  "bus-45": {
    title: "45 Seater Tourist Bus",
    desc: "Long-distance coach",
    rate: "Starts @ ₹42/km",
    photos: [
      "assets/photos/bus-45-1.jpg",
      "assets/photos/bus-45-2.jpg",
      "assets/photos/bus-45-3.jpg",
      "assets/photos/bus-45-4.jpg",
      "assets/photos/bus-45-5.jpg"
    ]
  },

  "bus-49": {
    title: "49 Seater Premium Bus",
    desc: "Large groups & events",
    rate: "Starts @ ₹48/km",
    photos: [
      "assets/photos/bus-49-1.jpg",
      "assets/photos/bus-49-2.jpg",
      "assets/photos/bus-49-3.jpg",
      "assets/photos/bus-49-4.jpg",
      "assets/photos/bus-49-5.jpg"
    ]
  }
};

// ==========================================
// PACKAGE RENDER
// ==========================================

function renderPackages(list = packages) {
  const cards = document.getElementById("cards");

  if (!cards) return;

  if (!Array.isArray(list) || list.length === 0) {
    cards.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:40px;color:#666;">
        No packages found matching your criteria.
      </div>
    `;
    return;
  }

  cards.innerHTML = list
    .map((p) => {
      const photoCount =
        Array.isArray(p.gallery) && p.gallery.length
          ? p.gallery.length
          : 1;

      return `
        <article class="card">

          <div
            class="clickable-photo"
            onclick="openPackageGallery('${p.id}')"
            role="button"
            tabindex="0"
            aria-label="View photos of ${escapeHTML(p.title)}"
          >

            <img
              src="${escapeHTML(p.img)}"
              alt="${escapeHTML(p.title)}"
              loading="lazy"
              onerror="this.onerror=null;this.src='${FALLBACK_IMG}'"
            >

            <span class="photo-count-badge">
              📷 ${photoCount} Photos
            </span>

          </div>

          <div class="card-body">

            <small>${escapeHTML(p.cat.toUpperCase())}</small>

            <h3>${escapeHTML(p.title)}</h3>

            <p>🕒 ${escapeHTML(p.duration)}</p>

            <p>📍 ${escapeHTML(p.route)}</p>

            <div class="price">
              ₹${Number(p.price).toLocaleString("en-IN")}
              <small>/ person</small>
            </div>

            <div class="card-actions">

              <button
                class="btn"
                type="button"
                onclick="openPackageGallery('${p.id}')"
              >
                📷 View Photos
              </button>

              <button
                class="btn primary"
                type="button"
                onclick="pay(${Number(p.price)})"
              >
                💳 Advance Pay
              </button>

            </div>

          </div>

        </article>
      `;
    })
    .join("");

  // Keyboard accessibility for clickable photo areas
  cards.querySelectorAll(".clickable-photo").forEach((element) => {
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        element.click();
      }
    });
  });
}

// ==========================================
// FLEET RENDER
// ==========================================

function renderFleet() {
  const fleetGrid = document.getElementById("vehicle-grid");

  if (!fleetGrid) return;

  fleetGrid.innerHTML = Object.keys(fleetData)
    .map((key) => {
      const v = fleetData[key];

      const count =
        Array.isArray(v.photos) && v.photos.length
          ? v.photos.length
          : 1;

      const firstPhoto =
        v.photos && v.photos[0]
          ? v.photos[0]
          : FALLBACK_IMG;

      return `
        <article class="vehicle-card card">

          <div
            class="clickable-photo"
            onclick="openVehicleGallery('${key}')"
            role="button"
            tabindex="0"
            aria-label="View photos of ${escapeHTML(v.title)}"
          >

            <img
              src="${escapeHTML(firstPhoto)}"
              alt="${escapeHTML(v.title)}"
              loading="lazy"
              onerror="this.onerror=null;this.src='${FALLBACK_IMG}'"
            >

            <span class="photo-count-badge">
              📷 ${count} Photos
            </span>

          </div>

          <div class="card-body">

            <h3>${escapeHTML(v.title)}</h3>

            <p>${escapeHTML(v.desc)}</p>

            <div class="price">
              ${escapeHTML(v.rate)}
            </div>

            <div class="card-actions">

              <button
                class="btn"
                type="button"
                onclick="openVehicleGallery('${key}')"
              >
                📷 View Gallery
              </button>

              <a
                class="btn primary"
                href="#contact"
              >
                Book Now
              </a>

            </div>

          </div>

        </article>
      `;
    })
    .join("");

  fleetGrid.querySelectorAll(".clickable-photo").forEach((element) => {
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        element.click();
      }
    });
  });
}

// ==========================================
// GALLERY - OPEN PACKAGE
// ==========================================

function openPackageGallery(packageId) {
  const pkg = packages.find(
    (item) => item.id === packageId
  );

  if (!pkg) {
    console.warn("Package not found:", packageId);
    return;
  }

  const photos =
    Array.isArray(pkg.gallery) && pkg.gallery.length
      ? pkg.gallery
      : [pkg.img || FALLBACK_IMG];

  showGalleryModal(pkg.title, photos);
}

// ==========================================
// GALLERY - OPEN VEHICLE
// ==========================================

function openVehicleGallery(vehicleKey) {
  const vehicle = fleetData[vehicleKey];

  if (!vehicle) {
    console.warn("Vehicle not found:", vehicleKey);
    return;
  }

  const photos =
    Array.isArray(vehicle.photos) &&
    vehicle.photos.length
      ? vehicle.photos
      : [FALLBACK_IMG];

  showGalleryModal(vehicle.title, photos);
}

// ==========================================
// GALLERY - SHOW MODAL
// ==========================================

function showGalleryModal(title, photoList) {
  const modal =
    document.getElementById("gallery-modal");

  const titleEl =
    document.getElementById("gallery-title");

  const activeImg =
    document.getElementById("gallery-active-img");

  const counter =
    document.getElementById("gallery-counter");

  const prevBtn =
    document.getElementById("gallery-prev");

  const nextBtn =
    document.getElementById("gallery-next");

  if (!modal || !activeImg) {
    console.warn("Gallery modal elements not found.");
    return;
  }

  currentGalleryPhotos =
    Array.isArray(photoList)
      ? photoList.filter(Boolean)
      : [];

  if (currentGalleryPhotos.length === 0) {
    currentGalleryPhotos = [FALLBACK_IMG];
  }

  currentGalleryIndex = 0;

  if (titleEl) {
    titleEl.textContent =
      `${title} (${currentGalleryPhotos.length} Photos)`;
  }

  updateGalleryImage();

  if (prevBtn) {
    prevBtn.onclick = previousGalleryPhoto;
  }

  if (nextBtn) {
    nextBtn.onclick = nextGalleryPhoto;
  }

  const showNavigation =
    currentGalleryPhotos.length > 1;

  if (prevBtn) {
    prevBtn.style.display =
      showNavigation ? "flex" : "none";
  }

  if (nextBtn) {
    nextBtn.style.display =
      showNavigation ? "flex" : "none";
  }

  if (counter) {
    counter.textContent =
      `1 / ${currentGalleryPhotos.length}`;
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("gallery-open");

  // Prevent background page scrolling
  document.body.style.overflow = "hidden";
}

// ==========================================
// GALLERY - UPDATE IMAGE
// ==========================================

function updateGalleryImage(direction = "") {
  const activeImg =
    document.getElementById("gallery-active-img");

  const counter =
    document.getElementById("gallery-counter");

  if (
    !activeImg ||
    currentGalleryPhotos.length === 0
  ) {
    return;
  }

  const photo =
    currentGalleryPhotos[currentGalleryIndex] ||
    FALLBACK_IMG;

  // Remove previous animation
  activeImg.classList.remove(
    "gallery-slide-left",
    "gallery-slide-right"
  );

  // Restart animation
  void activeImg.offsetWidth;

  if (direction === "next") {
    activeImg.classList.add(
      "gallery-slide-left"
    );
  }

  if (direction === "prev") {
    activeImg.classList.add(
      "gallery-slide-right"
    );
  }

  activeImg.alt =
    `Gallery photo ${currentGalleryIndex + 1}`;

  activeImg.src = photo;

  activeImg.onerror = function () {
    this.onerror = null;
    this.src = FALLBACK_IMG;
  };

  if (counter) {
    counter.textContent =
      `${currentGalleryIndex + 1} / ${currentGalleryPhotos.length}`;
  }
}

// ==========================================
// GALLERY - PREVIOUS
// ==========================================

function previousGalleryPhoto() {
  if (currentGalleryPhotos.length <= 1) {
    return;
  }

  currentGalleryIndex--;

  if (currentGalleryIndex < 0) {
    currentGalleryIndex =
      currentGalleryPhotos.length - 1;
  }

  updateGalleryImage("prev");
}

// ==========================================
// GALLERY - NEXT
// ==========================================

function nextGalleryPhoto() {
  if (currentGalleryPhotos.length <= 1) {
    return;
  }

  currentGalleryIndex++;

  if (
    currentGalleryIndex >=
    currentGalleryPhotos.length
  ) {
    currentGalleryIndex = 0;
  }

  updateGalleryImage("next");
}

// ==========================================
// GALLERY - CLOSE
// ==========================================

function closeGallery() {
  const modal =
    document.getElementById("gallery-modal");

  if (modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }

  document.body.classList.remove("gallery-open");

  // Restore page scrolling
  document.body.style.overflow = "";

  currentGalleryPhotos = [];
  currentGalleryIndex = 0;
}

// ==========================================
// GALLERY - MOBILE SWIPE
// ==========================================

function handleGallerySwipe() {
  const swipeDistance =
    galleryTouchEndX - galleryTouchStartX;

  // Ignore small movements
  if (Math.abs(swipeDistance) < 50) {
    return;
  }

  if (swipeDistance > 0) {
    previousGalleryPhoto();
  } else {
    nextGalleryPhoto();
  }
}

// ==========================================
// AI CUSTOM ITINERARY
// ==========================================

function generateAIItinerary() {
  const destEl =
    document.getElementById("ai-gen-dest");

  const typeEl =
    document.getElementById("ai-gen-type");

  const daysEl =
    document.getElementById("ai-gen-days");

  if (!destEl || !typeEl || !daysEl) {
    return;
  }

  const dest = destEl.value;
  const type = typeEl.value;

  let days =
    parseInt(daysEl.value, 10) || 3;

  days = Math.max(1, Math.min(days, 30));

  const outputBox =
    document.getElementById(
      "ai-itinerary-output"
    );

  const planTitle =
    document.getElementById(
      "ai-plan-title"
    );

  const planBody =
    document.getElementById(
      "ai-plan-body"
    );

  if (!outputBox || !planTitle || !planBody) {
    return;
  }

  let itineraryHTML = "";

  if (dest.includes("Bodh Gaya")) {
    itineraryHTML = `
      <b>Day 1:</b>
      Arrival in Gaya / Bodh Gaya → Check-in →
      Mahabodhi Temple & Bodhi Tree.<br>

      ${
        days >= 2
          ? `<b>Day 2:</b>
             Great Buddha Statue → 80-foot Buddha →
             International Monasteries.<br>`
          : ""
      }

      ${
        days >= 3
          ? `<b>Day 3:</b>
             Dungeshwari Cave Temples →
             Sujata Stupa.<br>`
          : ""
      }

      ${
        days >= 4
          ? `<b>Day 4:</b>
             Rajgir Vishwa Shanti Stupa →
             Vulture Peak → Nalanda University Ruins.<br>`
          : ""
      }

      ${
        days >= 5
          ? `<b>Day 5:</b>
             Varanasi / Kushinagar sightseeing
             according to your selected route.<br>`
          : ""
      }

      ${
        days > 5
          ? `<b>Day 6-${days}:</b>
             Additional sightseeing, rest days,
             shopping and departure planning.`
          : ""
      }
    `;
  } else if (dest.includes("Rajgir")) {
    itineraryHTML = `
      <b>Day 1:</b>
      Drive from Bodh Gaya / Patna to Rajgir →
      Vishwa Shanti Stupa → Ropeway.<br>

      ${
        days >= 2
          ? `<b>Day 2:</b>
             Griddhakuta Peak → Bimbisara Jail →
             Venu Vana Monastery.<br>`
          : ""
      }

      ${
        days >= 3
          ? `<b>Day 3:</b>
             Nalanda University Ruins →
             ASI Museum → Local sightseeing.<br>`
          : ""
      }

      ${
        days >= 4
          ? `<b>Day 4:</b>
             Brahmakund Hot Springs →
             Local sightseeing → Return journey.<br>`
          : ""
      }

      ${
        days > 4
          ? `<b>Day 5-${days}:</b>
             Additional sightseeing and relaxed travel plan.`
          : ""
      }
    `;
  } else if (dest.includes("Golden Triangle")) {
    itineraryHTML = `
      <b>Day 1:</b>
      Delhi pickup → Red Fort → Qutub Minar →
      India Gate → Agra transfer.<br>

      ${
        days >= 2
          ? `<b>Day 2:</b>
             Taj Mahal sunrise → Agra Fort →
             Fatehpur Sikri → Jaipur transfer.<br>`
          : ""
      }

      ${
        days >= 3
          ? `<b>Day 3:</b>
             Jaipur Amber Fort → Hawa Mahal →
             City Palace.<br>`
          : ""
      }

      ${
        days >= 4
          ? `<b>Day 4:</b>
             Jaipur local sightseeing →
             Shopping → Delhi transfer.<br>`
          : ""
      }

      ${
        days > 4
          ? `<b>Day 5-${days}:</b>
             Additional sightseeing and flexible leisure days.`
          : ""
      }
    `;
  } else {
    itineraryHTML = `
      <b>Day 1:</b>
      Arrival NJP / Bagdogra → Scenic drive to Gangtok →
      Evening Mall Road walk.<br>

      ${
        days >= 2
          ? `<b>Day 2:</b>
             Tsomgo Lake → Baba Mandir.<br>`
          : ""
      }

      ${
        days >= 3
          ? `<b>Day 3:</b>
             Gangtok monastery sightseeing →
             Darjeeling transfer.<br>`
          : ""
      }

      ${
        days >= 4
          ? `<b>Day 4:</b>
             Tiger Hill sunrise → Darjeeling sightseeing →
             Local market.<br>`
          : ""
      }

      ${
        days > 4
          ? `<b>Day 5-${days}:</b>
             Additional hill sightseeing and leisure days.`
          : ""
      }
    `;
  }

  planTitle.textContent =
    `🤖 ${days}-Day AI Custom Plan: ${dest}`;

  planBody.innerHTML = itineraryHTML;

  outputBox.style.display = "block";

  const plainPlan =
    itineraryHTML
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/?b>/gi, "")
      .replace(/\s+/g, " ")
      .replace(/\n /g, "\n")
      .trim();

  currentGeneratedPlan =
    `${days}-Day ${type} itinerary for ${dest}:\n${plainPlan}`;
}

// ==========================================
// SEND AI PLAN TO WHATSAPP
// ==========================================

function sendAIPlanToWhatsApp() {
  if (!currentGeneratedPlan) {
    alert(
      "Please generate an AI itinerary first."
    );
    return;
  }

  const msg =
    `*AI Itinerary Booking Request — Sariputra Tour & Holidays*\n` +
    `----------------------------------------\n` +
    `${currentGeneratedPlan}\n\n` +
    `Please check vehicle options and send a quote for this plan.`;

  whatsapp(msg);
}

// ==========================================
// AI MATCHMAKER
// ==========================================

function runAIMatchmaker() {
  const paxEl =
    document.getElementById("quiz-pax");

  const goalEl =
    document.getElementById("quiz-goal");

  const resultBox =
    document.getElementById(
      "ai-match-result"
    );

  const resultText =
    document.getElementById(
      "ai-match-text"
    );

  if (
    !paxEl ||
    !goalEl ||
    !resultBox ||
    !resultText
  ) {
    return;
  }

  const pax = paxEl.value;
  const goal = goalEl.value;

  if (pax === "small") {
    resultText.textContent =
      "7 Seater Family Vehicle (Innova/Ertiga) — Ideal for budget family travel.";

    matchedTargetId = "vehicle-grid";
  } else if (
    pax === "medium" &&
    goal === "temple"
  ) {
    resultText.textContent =
      "17 Seater Force Urbania / Tempo Traveller + Buddhist Circuit Pilgrimage Package.";

    matchedTargetId = "packages";
  } else if (pax === "medium") {
    resultText.textContent =
      "17 Seater Luxury Force Urbania — Premium comfort for long outstation routes.";

    matchedTargetId = "vehicle-grid";
  } else {
    resultText.textContent =
      "35-Seater to 49-Seater Tourist Buses — Best suited for large pilgrimage and group tours.";

    matchedTargetId = "vehicle-grid";
  }

  resultBox.style.display = "block";
}

// ==========================================
// JUMP TO AI RECOMMENDATION
// ==========================================

function jumpToRecommendation() {
  if (!matchedTargetId) {
    return;
  }

  const element =
    document.getElementById(
      matchedTargetId
    );

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

// ==========================================
// FARE CALCULATOR
// ==========================================

function calculateFare() {
  const vehicleEl =
    document.getElementById(
      "calc-vehicle"
    );

  const kmEl =
    document.getElementById("calc-km");

  const daysEl =
    document.getElementById("calc-days");

  const totalEl =
    document.getElementById(
      "calc-total"
    );

  if (
    !vehicleEl ||
    !kmEl ||
    !daysEl ||
    !totalEl
  ) {
    return;
  }

  const ratePerKm =
    parseFloat(vehicleEl.value) || 15;

  const km =
    Math.max(
      0,
      parseFloat(kmEl.value) || 0
    );

  const days =
    Math.max(
      1,
      parseFloat(daysEl.value) || 1
    );

  const driverAllowancePerDay = 500;

  const totalKmFare =
    km * ratePerKm;

  const totalDriverFare =
    days * driverAllowancePerDay;

  const grandTotal =
    totalKmFare + totalDriverFare;

  totalEl.textContent =
    `₹${grandTotal.toLocaleString("en-IN")}`;
}

// ==========================================
// SEND CALCULATED FARE
// ==========================================

function sendCalculatedFare() {
  const vehicleSelect =
    document.getElementById(
      "calc-vehicle"
    );

  if (!vehicleSelect) {
    return;
  }

  const selectedOption =
    vehicleSelect.options[
      vehicleSelect.selectedIndex
    ];

  const vehicleName =
    selectedOption
      ? selectedOption.text
      : "Vehicle not selected";

  const kmEl =
    document.getElementById("calc-km");

  const daysEl =
    document.getElementById("calc-days");

  const totalEl =
    document.getElementById("calc-total");

  const km =
    kmEl && kmEl.value
      ? kmEl.value
      : "0";

  const days =
    daysEl && daysEl.value
      ? daysEl.value
      : "1";

  const total =
    totalEl && totalEl.textContent
      ? totalEl.textContent
      : "₹0";

  const message =
    `*Fare Estimate Request — Sariputra Tour & Holidays*\n\n` +
    `🚘 *Vehicle:* ${vehicleName}\n` +
    `📍 *Estimated Distance:* ${km} KM\n` +
    `⏱️ *Duration:* ${days} Days\n` +
    `💰 *Estimated Fare:* ${total}\n\n` +
    `Hello, I calculated this estimate on your website. Please confirm availability and send final booking quotation.`;

  whatsapp(message);
}

// ==========================================
// SEARCH & FILTER
// ==========================================

function setCat(cat) {
  currentCat = cat;

  const filterBtns =
    document.querySelectorAll(
      ".filters button"
    );

  filterBtns.forEach((btn) => {
    const buttonAction =
      btn.getAttribute("onclick");

    if (
      buttonAction ===
      `setCat('${cat}')`
    ) {
      btn.style.backgroundColor =
        "#8b1e0f";

      btn.style.color = "#fff";

      btn.style.borderColor =
        "#8b1e0f";
    } else {
      btn.style.backgroundColor =
        "#fff";

      btn.style.color =
        "#17202a";

      btn.style.borderColor =
        "#ddd";
    }
  });

  filterCards();
}

function filterCards() {
  const searchElement =
    document.getElementById("search");

  const q =
    searchElement &&
    typeof searchElement.value === "string"
      ? searchElement.value
          .toLowerCase()
          .trim()
      : "";

  const filteredPackages =
    packages.filter((p) => {
      const categoryMatch =
        currentCat === "all" ||
        p.cat === currentCat;

      const searchableText =
        `${p.title} ${p.route} ${p.cat}`;

      const searchMatch =
        searchableText
          .toLowerCase()
          .includes(q);

      return (
        categoryMatch &&
        searchMatch
      );
    });

  renderPackages(
    filteredPackages
  );
}

// ==========================================
// WHATSAPP
// ==========================================

function whatsapp(text) {
  if (!text) {
    return;
  }

  const cleanNumber =
    WA.replace(/\D/g, "");

  if (!cleanNumber) {
    alert(
      "WhatsApp number is not configured."
    );
    return;
  }

  const url =
    `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}

// ==========================================
// BOOKING ENQUIRY
// ==========================================

function submitEnquiry(e) {
  if (e) {
    e.preventDefault();
  }

  const getValue = (id) => {
    const element =
      document.getElementById(id);

    return element &&
      typeof element.value === "string"
      ? element.value.trim()
      : "";
  };

  const text =
    `*New Booking Enquiry - Sariputra Tour & Holidays*\n\n` +
    `---------------------------------------\n` +
    `👤 *Name:* ${getValue("name") || "Not specified"}\n` +
    `📞 *Mobile:* ${getValue("phone") || "Not specified"}\n` +
    `📅 *Travel Date:* ${getValue("date") || "Flexible"}\n` +
    `🚘 *Vehicle Required:* ${getValue("vehicle") || "Any"}\n` +
    `📍 *Destination:* ${getValue("destination") || "Not specified"}\n` +
    `👥 *Passengers:* ${getValue("people") || "Not specified"}\n` +
    `⏱️ *Trip Duration:* ${
      getValue("days")
        ? getValue("days") + " Days"
        : "Not specified"
    }\n` +
    `📝 *Notes:* ${
      getValue("message") || "N/A"
    }`;

  whatsapp(text);
}

// ==========================================
// AI CHATBOT
// ==========================================

function openAI() {
  const ai =
    document.getElementById("ai");

  if (!ai) {
    return;
  }

  ai.classList.add("open");

  const chat =
    document.getElementById("chat");

  if (
    chat &&
    !chat.innerHTML.trim()
  ) {
    bot(
      "Hello! 👋 Welcome to Sariputra Tour & Holidays. Ask me about packages, vehicle rentals, or custom itineraries."
    );
  }

  const input =
    document.getElementById(
      "aiInput"
    );

  if (input) {
    input.focus();
  }
}

function closeAI() {
  const ai =
    document.getElementById("ai");

  if (ai) {
    ai.classList.remove("open");
  }
}

function bot(text) {
  const chat =
    document.getElementById("chat");

  if (!chat) {
    return;
  }

  const message =
    String(text || "");

  chat.innerHTML +=
    `<div class="msg">🤖 ${escapeHTML(message)}</div>`;

  window.lastAnswer = message;

  chat.scrollTop =
    chat.scrollHeight;
}

function askAI() {
  const input =
    document.getElementById(
      "aiInput"
    );

  if (!input) {
    return;
  }

  const q =
    input.value.trim();

  if (!q) {
    return;
  }

  const chat =
    document.getElementById("chat");

  if (chat) {
    chat.innerHTML +=
      `<div class="msg me">${escapeHTML(q)}</div>`;
  }

  input.value = "";

  let answer =
    "I can help with tour packages, vehicle rentals, and customized trip itineraries. Please specify your route and group size!";

  const query =
    q.toLowerCase();

  if (
    /vehicle|bus|car|cab|tempo|urbania|seater/i.test(
      query
    )
  ) {
    answer =
      "We offer 7-seater SUVs (₹15/km), 17-seater Force Urbanias (₹25/km), 17-seater Tempo Travellers (₹20/km), and 35-49 seater buses (₹35-₹48/km).";
  } else if (
    /price|cost|rate|fare|charge/i.test(
      query
    )
  ) {
    answer =
      "Tour packages start at ₹12,500/person and vehicle rentals start at ₹15/km.";
  } else if (
    /buddhist|bodh|gaya|nalanda|rajgir|temple/i.test(
      query
    )
  ) {
    answer =
      "Our 5D/4N Buddhist Circuit Pilgrimage covers Bodh Gaya, Rajgir, Nalanda, Varanasi, and Kushinagar starting at ₹12,500 per person.";
  } else if (
    /contact|phone|number|location|email|whatsapp/i.test(
      query
    )
  ) {
    answer =
      "📍 Office: Bodh Gaya, Bihar | 📞 Call/WhatsApp: +91 99399 95360 / +91 90656 71630 | 📧 Email: sariputratours@gmail.com";
  } else if (
    /hello|hi|hey|namaste/i.test(
      query
    )
  ) {
    answer =
      "Hello! 👋 How can I help you today? You can ask about vehicles, tour packages, prices, Bodh Gaya, Rajgir, Sikkim, Rajasthan or booking.";
  }

  bot(answer);
}

// ==========================================
// TEXT TO SPEECH
// ==========================================

function speakLast() {
  if (
    window.lastAnswer &&
    "speechSynthesis" in window
  ) {
    window.speechSynthesis.cancel();

    const speech =
      new SpeechSynthesisUtterance(
        window.lastAnswer
      );

    speech.lang = "en-IN";
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(
      speech
    );
  }
}

// ==========================================
// VOICE INPUT
// ==========================================

function speakInput() {
  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert(
      "Please use Google Chrome for voice search."
    );
    return;
  }

  const recognition =
    new SpeechRecognition();

  recognition.lang = "en-IN";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    const input =
      document.getElementById(
        "aiInput"
      );

    if (input) {
      input.value =
        event.results[0][0].transcript;

      askAI();
    }
  };

  recognition.onerror = () => {
    console.warn(
      "Voice recognition could not start."
    );
  };

  try {
    recognition.start();
  } catch (error) {
    console.warn(
      "Voice recognition error:",
      error
    );
  }
}

// ==========================================
// KEYBOARD CONTROLS
// ==========================================

document.addEventListener(
  "keydown",
  (e) => {
    const modal =
      document.getElementById(
        "gallery-modal"
      );

    const isGalleryOpen =
      modal &&
      modal.classList.contains("open");

    if (!isGalleryOpen) {
      return;
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      previousGalleryPhoto();
      return;
    }

    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextGalleryPhoto();
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      closeGallery();
    }
  }
);

// ==========================================
// SMALL HTML SAFETY HELPER
// ==========================================

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    // --------------------------------------
    // Footer year
    // --------------------------------------

    const yearElement =
      document.getElementById("year");

    if (yearElement) {
      yearElement.textContent =
        new Date().getFullYear();
    }

    // --------------------------------------
    // AI input - Enter key
    // --------------------------------------

    const aiInput =
      document.getElementById(
        "aiInput"
      );

    if (aiInput) {
      aiInput.addEventListener(
        "keydown",
        (event) => {
          if (
            event.key === "Enter" &&
            !event.shiftKey
          ) {
            event.preventDefault();
            askAI();
          }
        }
      );
    }

    // --------------------------------------
    // Gallery modal background close
    // --------------------------------------

    const modal =
      document.getElementById(
        "gallery-modal"
      );

    if (modal) {
      modal.addEventListener(
        "click",
        (event) => {
          if (event.target === modal) {
            closeGallery();
          }
        }
      );
    }

    // --------------------------------------
    // Gallery close button
    // --------------------------------------

    const closeButton =
      document.querySelector(
        ".gallery-close"
      );

    if (closeButton) {
      closeButton.addEventListener(
        "click",
        closeGallery
      );
    }

    // --------------------------------------
    // Mobile swipe
    // IMPORTANT:
    // Swipe is attached to MAIN VIEW,
    // not only the image.
    // --------------------------------------

    const galleryMainView =
      document.querySelector(
        ".gallery-main-view"
      );

    if (galleryMainView) {

      galleryMainView.addEventListener(
        "touchstart",
        (event) => {
          if (
            event.changedTouches &&
            event.changedTouches.length
          ) {
            galleryTouchStartX =
              event.changedTouches[0].screenX;
          }
        },
        {
          passive: true
        }
      );

      galleryMainView.addEventListener(
        "touchend",
        (event) => {
          if (
            event.changedTouches &&
            event.changedTouches.length
          ) {
            galleryTouchEndX =
              event.changedTouches[0].screenX;

            handleGallerySwipe();
          }
        },
        {
          passive: true
        }
      );
    }

    // --------------------------------------
    // Search input
    // --------------------------------------

    const searchInput =
      document.getElementById(
        "search"
      );

    if (searchInput) {
      searchInput.addEventListener(
        "input",
        filterCards
      );
    }

    // --------------------------------------
    // Fare calculator live update
    // --------------------------------------

    const calcVehicle =
      document.getElementById(
        "calc-vehicle"
      );

    const calcKm =
      document.getElementById(
        "calc-km"
      );

    const calcDays =
      document.getElementById(
        "calc-days"
      );

    if (calcVehicle) {
      calcVehicle.addEventListener(
        "change",
        calculateFare
      );
    }

    if (calcKm) {
      calcKm.addEventListener(
        "input",
        calculateFare
      );
      calcKm.addEventListener(
        "change",
        calculateFare
      );
    }

    if (calcDays) {
      calcDays.addEventListener(
        "input",
        calculateFare
      );
      calcDays.addEventListener(
        "change",
        calculateFare
      );
    }

    // --------------------------------------
    // Engine boot
    // --------------------------------------

    renderPackages();
    renderFleet();

    if (
      document.getElementById(
        "calc-vehicle"
      )
    ) {
      calculateFare();
    }

    console.log(
      "Sariputra Tour & Holidays website engine loaded successfully."
    );
  }
);

// ==========================================
// END OF APP.JS
// ==========================================
```
