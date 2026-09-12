// ==========================================
// Sariputra Tour & Holidays - Complete App Engine
// ==========================================

const WA = "+919939995360";
const UPI_ID = "rawanilokesh1@ybl";
const UPI_NAME = "Sariputra Tour & Holidays";
const FALLBACK_IMG = "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=900&auto=format&fit=crop";

let currentCat = "all";
let currentGeneratedPlan = "";
let matchedTargetId = "";

// ==========================================
// 🧳 TOUR PACKAGES DATA (5 Photos Each)
// ==========================================
const packages = [
  {
    id: "buddhist",
    cat: "pilgrimage",
    title: "Buddhist Circuit Pilgrimage",
    duration: "5 Days / 4 Nights",
    route: "Bodh Gaya → Rajgir → Nalanda → Varanasi → Kushinagar",
    price: 12500,
    img: "assets/photos/hero.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Mahabodhi_Temple_-_Bodh_Gaya.jpg",
      "https://images.unsplash.com/photo-1609946784724-42777161b9e8?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=900&auto=format&fit=crop"
    ]
  },
  {
    id: "golden",
    cat: "heritage",
    title: "Golden Triangle Classic Tour",
    duration: "6 Days / 5 Nights",
    route: "Delhi → Agra → Jaipur → Delhi",
    price: 16000,
    img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=900&auto=format&fit=crop",
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
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=900&auto=format&fit=crop",
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
    img: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609946784724-42777161b9e8?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=900&auto=format&fit=crop"
    ]
  },
  {
    id: "kerala",
    cat: "south",
    title: "Kerala Backwaters & Hills Tour",
    duration: "6 Days / 5 Nights",
    route: "Cochin → Munnar → Thekkady → Alleppey Houseboat",
    price: 17500,
    img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=900&auto=format&fit=crop",
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
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=900&auto=format&fit=crop",
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
// 🚐 FLEET VEHICLES DATA (5 Photos Each)
// ==========================================
const fleetData = {
  "vehicle-7": {
    title: "7 Seater Family Vehicle",
    desc: "Families & small groups",
    rate: "Starts @ ₹15/km",
    photos: [
      "assets/photos/vehicle-7.jpg",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=900&auto=format&fit=crop"
    ]
  },
  "urbania": {
    title: "17 Seater Force Urbania",
    desc: "Premium group travel",
    rate: "Starts @ ₹25/km",
    photos: [
      "assets/photos/urbania.jpg",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=900&auto=format&fit=crop"
    ]
  },
  "tempo": {
    title: "17 Seater Tempo Traveller",
    desc: "Spacious mid-size groups",
    rate: "Starts @ ₹22/km",
    photos: [
      "assets/photos/tempo.jpg",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=900&auto=format&fit=crop"
    ]
  },
  "bus-35": {
    title: "35 Seater Mini Bus",
    desc: "Tour & pilgrimage groups",
    rate: "Starts @ ₹35/km",
    photos: [
      "assets/photos/bus-35.jpg",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=900&auto=format&fit=crop"
    ]
  },
  "bus-45": {
    title: "45 Seater Tourist Bus",
    desc: "Long-distance coach",
    rate: "Starts @ ₹42/km",
    photos: [
      "assets/photos/bus-45.jpg",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=900&auto=format&fit=crop"
    ]
  },
  "bus-49": {
    title: "49 Seater Premium Bus",
    desc: "Large groups & events",
    rate: "Starts @ ₹48/km",
    photos: [
      "assets/photos/bus-49.jpg",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=900&auto=format&fit=crop"
    ]
  }
};

// ==========================================
// 🖼️ DYNAMIC RENDER ENGINES
// ==========================================
function renderPackages(list = packages) {
  const cards = document.getElementById("cards");
  if (!cards) return;

  cards.innerHTML = list
    .map((p) => `
      <article class="card">
        <div class="clickable-photo" onclick="openPackageGallery('${p.id}')">
          <img src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.src='${FALLBACK_IMG}'">
          <span class="photo-count-badge">📷 ${p.gallery ? p.gallery.length : 1} Photos</span>
        </div>
        <div class="card-body">
          <small>${p.cat.toUpperCase()}</small>
          <h3>${p.title}</h3>
          <p>🕒 ${p.duration}</p>
          <p>📍 ${p.route}</p>
          <div class="price">₹${p.price.toLocaleString("en-IN")}<small>/ person</small></div>
          <div class="card-actions">
            <button class="btn" onclick="openPackageGallery('${p.id}')">📷 View Photos</button>
            <button class="btn primary" onclick="pay(${p.price})">💳 Pay Advance</button>
          </div>
        </div>
      </article>`)
    .join("");
}

function renderFleet() {
  const fleetGrid = document.getElementById("vehicle-grid");
  if (!fleetGrid) return;

  fleetGrid.innerHTML = Object.keys(fleetData)
    .map((key) => {
      const v = fleetData[key];
      const count = v.photos ? v.photos.length : 1;
      return `
        <article class="vehicle-card card">
          <div class="clickable-photo" onclick="openVehicleGallery('${key}')">
            <img src="${v.photos[0]}" alt="${v.title}" loading="lazy" onerror="this.src='${FALLBACK_IMG}'">
            <span class="photo-count-badge">📷 ${count} Photos</span>
          </div>
          <div class="card-body">
            <h3>${v.title}</h3>
            <p>${v.desc}</p>
            <div class="price">${v.rate}</div>
            <div class="card-actions">
              <button class="btn" onclick="openVehicleGallery('${key}')">📷 View Gallery</button>
              <a class="btn primary" href="#contact">Book Now</a>
            </div>
          </div>
        </article>`;
    })
    .join("");
}

// ==========================================
// 📸 MULTI-PHOTO GALLERY MODAL LOGIC
// ==========================================
function openPackageGallery(packageId) {
  const pkg = packages.find((item) => item.id === packageId);
  if (pkg && pkg.gallery) showGalleryModal(pkg.title, pkg.gallery);
}

function openVehicleGallery(vehicleKey) {
  const vehicle = fleetData[vehicleKey];
  if (vehicle && vehicle.photos) showGalleryModal(vehicle.title, vehicle.photos);
}

function showGalleryModal(title, photoList) {
  const modal = document.getElementById("gallery-modal");
  const titleEl = document.getElementById("gallery-title");
  const activeImg = document.getElementById("gallery-active-img");
  const thumbsContainer = document.getElementById("gallery-thumbs");

  if (!modal || !activeImg || !thumbsContainer) return;

  titleEl.textContent = `${title} (${photoList.length} Photos)`;
  activeImg.src = photoList[0];
  activeImg.onerror = () => { activeImg.src = FALLBACK_IMG; };
  thumbsContainer.innerHTML = "";

  photoList.forEach((url, index) => {
    const imgBtn = document.createElement("img");
    imgBtn.src = url;
    imgBtn.alt = `Thumbnail ${index + 1}`;
    imgBtn.className = `thumb-img ${index === 0 ? "active" : ""}`;
    imgBtn.onerror = () => { imgBtn.src = FALLBACK_IMG; };

    imgBtn.onclick = () => {
      activeImg.src = url;
      document.querySelectorAll(".thumb-img").forEach((el) => el.classList.remove("active"));
      imgBtn.classList.add("active");
    };
    thumbsContainer.appendChild(imgBtn);
  });

  modal.classList.add("open");
}

function closeGallery() {
  const modal = document.getElementById("gallery-modal");
  if (modal) modal.classList.remove("open");
}

// ==========================================
// ✨ AI CUSTOM ITINERARY GENERATOR
// ==========================================
function generateAIItinerary() {
  const dest = document.getElementById("ai-gen-dest").value;
  const type = document.getElementById("ai-gen-type").value;
  const days = parseInt(document.getElementById("ai-gen-days").value) || 3;

  const outputBox = document.getElementById("ai-itinerary-output");
  const planTitle = document.getElementById("ai-plan-title");
  const planBody = document.getElementById("ai-plan-body");

  if (!outputBox || !planTitle || !planBody) return;

  let itineraryHTML = "";

  if (dest.includes("Bodh Gaya")) {
    itineraryHTML = `
      <b>Day 1:</b> Arrival in Gaya / Bodh Gaya → Check-in → Visit Mahabodhi Temple & Bodhi Tree.<br>
      <b>Day 2:</b> Great Buddha Statue → 80-foot Buddha → International Monasteries (Thai, Japanese, Bhutanese).<br>
      ${days >= 3 ? '<b>Day 3:</b> Excursion to Dungeshwari Cave Temples & Sujata Stupa.<br>' : ''}
      ${days >= 4 ? '<b>Day 4:</b> Day trip to Rajgir (Vishwa Shanti Stupa, Vulture Peak) & Nalanda University Ruins.<br>' : ''}
      <b>Day ${days}:</b> Morning souvenir shopping → Departure transfer to Gaya Station / Patna Airport.
    `;
  } else if (dest.includes("Rajgir")) {
    itineraryHTML = `
      <b>Day 1:</b> Drive from Bodh Gaya/Patna to Rajgir → Ropeway ride to Vishwa Shanti Stupa.<br>
      <b>Day 2:</b> Griddhakuta Peak (Vulture's Peak) → Bimbisara Jail → Venu Vana Monastery.<br>
      ${days >= 3 ? '<b>Day 3:</b> Full day exploration of Ancient Nalanda University Ruins & ASI Museum.<br>' : ''}
      <b>Day ${days}:</b> Hot Springs (Brahmakund) visit & return journey.
    `;
  } else if (dest.includes("Golden Triangle")) {
    itineraryHTML = `
      <b>Day 1:</b> Pickup in Delhi → Sightseeing (Red Fort, Qutub Minar, India Gate) → Drive to Agra.<br>
      <b>Day 2:</b> Sunrise view of Taj Mahal → Agra Fort → Drive to Jaipur via Fatehpur Sikri.<br>
      ${days >= 3 ? '<b>Day 3:</b> Jaipur Amber Fort → Hawa Mahal → City Palace.<br>' : ''}
      <b>Day ${days}:</b> Local shopping → Return drive to Delhi Drop.
    `;
  } else {
    itineraryHTML = `
      <b>Day 1:</b> Arrival NJP/Bagdogra → Scenic drive to Gangtok → Evening Mall Road walk.<br>
      <b>Day 2:</b> Excursion to Tsomgo Lake & Baba Mandir.<br>
      ${days >= 3 ? '<b>Day 3:</b> Gangtok local monastery sightseeing → Drive to Darjeeling.<br>' : ''}
      <b>Day ${days}:</b> Early morning Tiger Hill sunrise view → Departure transfer.
    `;
  }

  planTitle.textContent = `🤖 ${days}-Day AI Custom Plan: ${dest}`;
  planBody.innerHTML = itineraryHTML;
  outputBox.style.display = "block";

  currentGeneratedPlan = `${days}-Day ${type} itinerary for ${dest}:\n` + itineraryHTML.replace(/<br>/g, "\n").replace(/<b>/g, "").replace(/<\/b>/g, "");
}

function sendAIPlanToWhatsApp() {
  if (!currentGeneratedPlan) return;
  const msg = `*AI Itinerary Booking Request — Sariputra Tour & Holidays*\n----------------------------------------\n${currentGeneratedPlan}\n\nPlease check vehicle options and send a quote for this plan.`;
  whatsapp(msg);
}

// ==========================================
// 🎯 AI MATCHMAKER QUIZ LOGIC
// ==========================================
function runAIMatchmaker() {
  const pax = document.getElementById("quiz-pax").value;
  const goal = document.getElementById("quiz-goal").value;
  const resultBox = document.getElementById("ai-match-result");
  const resultText = document.getElementById("ai-match-text");

  if (!resultBox || !resultText) return;

  if (pax === "small") {
    resultText.textContent = "7 Seater Family Vehicle (Innova/Ertiga) — Ideal for budget family travel.";
    matchedTargetId = "fleet";
  } else if (pax === "medium" && goal === "temple") {
    resultText.textContent = "17 Seater Force Urbania / Tempo Traveller + Buddhist Circuit Pilgrimage Package.";
    matchedTargetId = "packages";
  } else if (pax === "medium") {
    resultText.textContent = "17 Seater Luxury Force Urbania — Premium suspension for long outstation routes.";
    matchedTargetId = "fleet";
  } else {
    resultText.textContent = "35-Seater to 49-Seater Tourist Buses — Best rates per kilometer for large pilgrimage groups.";
    matchedTargetId = "fleet";
  }

  resultBox.style.display = "block";
}

function jumpToRecommendation() {
  if (matchedTargetId) {
    const el = document.getElementById(matchedTargetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
}

// ==========================================
// 🧮 RENTAL FARE CALCULATOR LOGIC
// ==========================================
function calculateFare() {
  const vehicleEl = document.getElementById("calc-vehicle");
  const kmEl = document.getElementById("calc-km");
  const daysEl = document.getElementById("calc-days");
  const totalEl = document.getElementById("calc-total");

  if (!vehicleEl || !kmEl || !daysEl || !totalEl) return;

  const ratePerKm = parseFloat(vehicleEl.value) || 15;
  const km = parseFloat(kmEl.value) || 0;
  const days = parseFloat(daysEl.value) || 1;

  const driverAllowancePerDay = 500;
  const totalKmFare = km * ratePerKm;
  const totalDriverFare = days * driverAllowancePerDay;
  const grandTotal = totalKmFare + totalDriverFare;

  totalEl.textContent = `₹${grandTotal.toLocaleString("en-IN")}`;
}

function sendCalculatedFare() {
  const vehicleSelect = document.getElementById("calc-vehicle");
  const vehicleName = vehicleSelect.options[vehicleSelect.selectedIndex].text;
  const km = document.getElementById("calc-km").value;
  const days = document.getElementById("calc-days").value;
  const total = document.getElementById("calc-total").textContent;

  const message = `*Fare Estimate Request — Sariputra Tour & Holidays*
🚘 *Vehicle:* ${vehicleName}
📍 *Estimated Distance:* ${km} KM
⏱️ *Duration:* ${days} Days
💰 *Estimated Fare:* ${total}

Hello, I calculated this estimate on your website. Please confirm availability and send final booking quotation.`;

  whatsapp(message);
}

// ==========================================
// 🔍 SEARCH, FILTER & ENQUIRY LOGIC
// ==========================================
function pay(amount = "") {
  const params = new URLSearchParams({ pa: UPI_ID, pn: UPI_NAME, cu: "INR" });
  if (amount) params.set("am", amount);
  window.location.href = `upi://pay?${params.toString()}`;
}

function setCat(cat) {
  currentCat = cat;
  filterCards();
}

function filterCards() {
  const searchElement = document.getElementById("search");
  const q = searchElement ? searchElement.value.toLowerCase().trim() : "";

  const filtered = packages.filter((p) => {
    const categoryMatch = currentCat === "all" || p.cat === currentCat;
    const searchMatch = `${p.title} ${p.route} ${p.cat}`.toLowerCase().includes(q);
    return categoryMatch && searchMatch;
  });

  renderPackages(filtered);
}

function whatsapp(text) {
  const cleanNumber = WA.replace(/\D/g, "");
  window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, "_blank");
}

function submitEnquiry(e) {
  e.preventDefault();
  const getValue = (id) => (document.getElementById(id) ? document.getElementById(id).value.trim() : "");

  const text = `*Travel Booking Enquiry — Sariputra Tour & Holidays*
👤 *Name:* ${getValue("name")}
📞 *Mobile:* ${getValue("phone")}
📅 *Date:* ${getValue("date") || "Flexible"}
🚘 *Vehicle:* ${getValue("vehicle") || "Any"}
📍 *Destination:* ${getValue("destination")}
👥 *Passengers:* ${getValue("people")}
📝 *Details:* ${getValue("message") || "None"}`;

  whatsapp(text);
}

// ==========================================
// 🤖 INTERACTIVE AI CHATBOT & VOICE ASSISTANT
// ==========================================
function openAI() {
  const ai = document.getElementById("ai");
  if (ai) {
    ai.classList.add("open");
    const chat = document.getElementById("chat");
    if (chat && !chat.innerHTML.trim()) bot("Hello! 👋 Ask me about tour packages, vehicle rental rates, or custom itineraries.");
  }
}

function closeAI() {
  const ai = document.getElementById("ai");
  if (ai) ai.classList.remove("open");
}

function bot(t) {
  const chat = document.getElementById("chat");
  if (!chat) return;
  chat.innerHTML += `<div class="msg">🤖 ${t}</div>`;
  window.lastAnswer = t;
  chat.scrollTop = chat.scrollHeight;
}

function askAI() {
  const input = document.getElementById("aiInput");
  if (!input || !input.value.trim()) return;

  const q = input.value.trim();
  const chat = document.getElementById("chat");
  if (chat) chat.innerHTML += `<div class="msg me">${q}</div>`;
  input.value = "";

  let answer = "I can help with tour packages, vehicle rentals, and customized trip itineraries.";
  const query = q.toLowerCase();

  if (/vehicle|bus|car|tempo|urbania/i.test(query)) {
    answer = "We offer 7-seater SUVs (₹15/km), 17-seater Urbanias (₹25/km), 17-seater Tempo Travellers (₹22/km), and 35-49 seater buses (₹35-₹48/km).";
  } else if (/price|cost|rate/i.test(query)) {
    answer = "Tour packages start at ₹12,500 per person and vehicle rentals start at ₹15 per km.";
  } else if (/buddhist|bodh|gaya/i.test(query)) {
    answer = "Our 5D/4N Buddhist Circuit Pilgrimage covers Bodh Gaya, Rajgir, Nalanda, Varanasi, and Kushinagar starting at ₹12,500/person.";
  }

  bot(answer);
}

function speakLast() {
  if (window.lastAnswer && "speechSynthesis" in window) {
    const speech = new SpeechSynthesisUtterance(window.lastAnswer);
    speech.lang = "en-IN";
    window.speechSynthesis.speak(speech);
  }
}

function speakInput() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return alert("Please use Chrome browser for voice search.");
  const recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.onresult = (e) => {
    const input = document.getElementById("aiInput");
    if (input) { input.value = e.results[0][0].transcript; askAI(); }
  };
  recognition.start();
}

// ==========================================
// 🚀 EVENT LISTENERS & INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeGallery();
  });

  const modal = document.getElementById("gallery-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeGallery();
    });
  }

  // Initial Engine Boot
  renderPackages();
  renderFleet();
  if (document.getElementById("calc-vehicle")) calculateFare();
});
