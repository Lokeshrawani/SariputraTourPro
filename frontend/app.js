// ==========================================
// Sariputra Tour & Holidays - Complete app.js
// ==========================================

const WA = "+919939995360";
const UPI_ID = "rawanilokesh1@ybl";
const UPI_NAME = "Sariputra Tour & Holidays";
let currentCat = "all";

// ==========================================
// 💳 UPI PAYMENT
// ==========================================
function pay(amount = "") {
  const params = new URLSearchParams({ pa: UPI_ID, pn: UPI_NAME, cu: "INR" });
  if (amount) params.set("am", amount);
  window.location.href = `upi://pay?${params.toString()}`;
}

// ==========================================
// 🧳 PACKAGES WITH MULTI-PHOTOS
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
      "assets/photos/hero.jpg",
      "assets/photos/buddha-statue.jpg",
      "assets/photos/nalanda.jpg"
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
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=900&auto=format&fit=crop"
    ]
  }
];

// ==========================================
// 🚐 FLEET VEHICLES WITH MULTI-PHOTOS
// ==========================================
// ==========================================
// 🧳 TOUR PACKAGES (5 Photos Each)
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
      "assets/photos/hero.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Mahabodhi_Temple_-_Bodh_Gaya.jpg",
      "https://images.unsplash.com/photo-1609946784724-42777161b9e8?q=80&w=900&auto=format&fit=crop", // Great Buddha Statue
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=900&auto=format&fit=crop", // Nalanda Ruins
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=900&auto=format&fit=crop"  // Varanasi Ghat
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
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=900&auto=format&fit=crop", // Taj Mahal
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=900&auto=format&fit=crop", // Hawa Mahal Jaipur
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=900&auto=format&fit=crop", // India Gate Delhi
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=900&auto=format&fit=crop", // Amber Fort
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=900&auto=format&fit=crop"  // Agra Fort
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
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=900&auto=format&fit=crop", // Sikkim Hills
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=900&auto=format&fit=crop", // Monastery
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=900&auto=format&fit=crop", // Tsomgo Lake
      "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=900&auto=format&fit=crop", // Darjeeling Tea Garden
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=900&auto=format&fit=crop"  // Mountain Valley
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
      "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=900&auto=format&fit=crop", // Kedarnath Temple
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=900&auto=format&fit=crop", // Haridwar Ganga Aarti
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=900&auto=format&fit=crop", // Badrinath Views
      "https://images.unsplash.com/photo-1609946784724-42777161b9e8?q=80&w=900&auto=format&fit=crop", // Yamunotri Trek
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=900&auto=format&fit=crop"  // Himalayan Peaks
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
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=900&auto=format&fit=crop", // Alleppey Houseboat
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=900&auto=format&fit=crop", // Munnar Tea Gardens
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=900&auto=format&fit=crop", // Kerala Palm Trees
      "https://images.unsplash.com/photo-1609946784724-42777161b9e8?q=80&w=900&auto=format&fit=crop", // Thekkady Lake
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=900&auto=format&fit=crop"  // Cochin Fishing Nets
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
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=900&auto=format&fit=crop", // Jaipur Palace
      "https://images.unsplash.com/photo-1568849676085-51415703900f?q=80&w=900&auto=format&fit=crop", // Udaipur Lake Palace
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=900&auto=format&fit=crop", // Jodhpur Fort
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=900&auto=format&fit=crop", // Pushkar Ghats
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=900&auto=format&fit=crop"  // Desert Safari
    ]
  }
];

// ==========================================
// 🚐 FLEET VEHICLES (5 Photos Each)
// ==========================================
const fleetData = {
  "vehicle-7": {
    title: "7 Seater Family Vehicle",
    photos: [
      "assets/photos/vehicle-7.jpg",
      "assets/photos/vehicle-7-1.jpg",
      "assets/photos/vehicle-7-2.jpg",
      "assets/photos/vehicle-7-3.jpg",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=900&auto=format&fit=crop"
    ]
  },
  "urbania": {
    title: "17 Seater Force Urbania",
    photos: [
      "assets/photos/urbania.jpg",
      "assets/photos/urbania-1.jpg",
      "assets/photos/urbania-2.jpg",
      "assets/photos/urbania-3.jpg",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=900&auto=format&fit=crop"
    ]
  },
  "tempo": {
    title: "17 Seater Tempo Traveller",
    photos: [
      "assets/photos/tempo.jpg",
      "assets/photos/tempo-1.jpg",
      "assets/photos/tempo-2.jpg",
      "assets/photos/tempo-3.jpg",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=900&auto=format&fit=crop"
    ]
  },
  "bus-35": {
    title: "35 Seater Mini Bus",
    photos: [
      "assets/photos/bus-35.jpg",
      "assets/photos/bus-35-1.jpg",
      "assets/photos/bus-35-2.jpg",
      "assets/photos/bus-35-3.jpg",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=900&auto=format&fit=crop"
    ]
  },
  "bus-45": {
    title: "45 Seater Tourist Bus",
    photos: [
      "assets/photos/bus-45.jpg",
      "assets/photos/bus-45-1.jpg",
      "assets/photos/bus-45-2.jpg",
      "assets/photos/bus-45-3.jpg",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=900&auto=format&fit=crop"
    ]
  },
  "bus-49": {
    title: "49 Seater Premium Bus",
    photos: [
      "assets/photos/bus-49.jpg",
      "assets/photos/bus-49-1.jpg",
      "assets/photos/bus-49-2.jpg",
      "assets/photos/bus-49-3.jpg",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=900&auto=format&fit=crop"
    ]
  }
};

// ==========================================
// 🖼️ RENDER PACKAGES
// ==========================================
function render(list = packages) {
  const cards = document.getElementById("cards");
  if (!cards) return;

  cards.innerHTML = list
    .map((p) => {
      const photoCount = p.gallery ? p.gallery.length : 1;
      return `
        <article class="card">
          <div class="clickable-photo" onclick="openPackageGallery('${p.id}')">
            <img src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=900&auto=format&fit=crop'">
            <span class="photo-count-badge">📷 ${photoCount} Photos</span>
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
        </article>`;
    })
    .join("");
}

// ==========================================
// 📸 GALLERY MODAL LOGIC
// ==========================================
function openPackageGallery(packageId) {
  const pkg = packages.find(item => item.id === packageId);
  if (pkg && pkg.gallery) showGalleryModal(pkg.title, pkg.gallery);
}

function openVehicleGallery(vehicleKey) {
  const vehicle = fleetData[vehicleKey];
  if (vehicle) showGalleryModal(vehicle.title, vehicle.photos);
}

function showGalleryModal(title, photoList) {
  const modal = document.getElementById("gallery-modal");
  const titleEl = document.getElementById("gallery-title");
  const activeImg = document.getElementById("gallery-active-img");
  const thumbsContainer = document.getElementById("gallery-thumbs");

  titleEl.textContent = title;
  activeImg.src = photoList[0];
  thumbsContainer.innerHTML = "";

  photoList.forEach((url, index) => {
    const imgBtn = document.createElement("img");
    imgBtn.src = url;
    imgBtn.className = `thumb-img ${index === 0 ? 'active' : ''}`;
    imgBtn.onerror = () => { imgBtn.src = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=900&auto=format&fit=crop'; };
    imgBtn.onclick = () => {
      activeImg.src = url;
      document.querySelectorAll(".thumb-img").forEach(el => el.classList.remove("active"));
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
// 🔍 SEARCH & FILTER
// ==========================================
function setCat(cat) { currentCat = cat; filterCards(); }

function filterCards() {
  const searchElement = document.getElementById("search");
  const q = searchElement ? searchElement.value.toLowerCase().trim() : "";

  const filtered = packages.filter((p) => {
    const categoryMatch = currentCat === "all" || p.cat === currentCat;
    const searchMatch = `${p.title} ${p.route} ${p.cat}`.toLowerCase().includes(q);
    return categoryMatch && searchMatch;
  });

  render(filtered);
}

// ==========================================
// 📱 WHATSAPP & ENQUIRY
// ==========================================
function whatsapp(text) {
  const cleanNumber = WA.replace(/\D/g, "");
  window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, "_blank");
}

function submitEnquiry(e) {
  e.preventDefault();
  const getValue = (id) => document.getElementById(id) ? document.getElementById(id).value.trim() : "";

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
// 🤖 AI CHAT ASSISTANT
// ==========================================
function openAI() {
  const ai = document.getElementById("ai");
  if (ai) {
    ai.classList.add("open");
    const chat = document.getElementById("chat");
    if (chat && !chat.innerHTML.trim()) {
      bot("Hello! 👋 Welcome to Sariputra Tour & Holidays. Ask me about tour packages, vehicle rates, or photo galleries.");
    }
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

  let answer = "I can help with Buddhist Circuit tours, vehicle rentals (7-seater to 49-seater buses), pricing, and photo galleries.";
  const query = q.toLowerCase();

  if (/vehicle|bus|car|tempo|urbania/i.test(query)) {
    answer = "We offer 7-Seater Family Vehicles, 17-Seater Urbanias, 17-Seater Tempo Travellers, and 35 to 49-Seater Tourist Coaches starting @ ₹15/km.";
  } else if (/price|cost|rate/i.test(query)) {
    answer = "Tour packages start from ₹12,500 per person and vehicle rentals start at ₹15/km.";
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
  if (!SpeechRecognition) return alert("Speech recognition is supported in Google Chrome.");
  const recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.onresult = (e) => {
    const input = document.getElementById("aiInput");
    if (input) { input.value = e.results[0][0].transcript; askAI(); }
  };
  recognition.start();
}

document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  if (yearElement) yearElement.textContent = new Date().getFullYear();
  render();
});
