// ==========================================
// Sariputra Tour & Holidays - Modern app.js
// ==========================================

// Configuration Constants
const WA = "+919939995360";
const UPI_ID = "rawanilokesh1@ybl";
const UPI_NAME = "Sariputra Tour & Holidays";

// State Management
let currentCat = "all";

// ==========================================
// 💳 UPI PAYMENT INTEGRATION
// ==========================================
function pay(amount = "") {
  const params = new URLSearchParams({
    pa: UPI_ID,
    pn: UPI_NAME,
    cu: "INR",
  });

  if (amount) {
    params.set("am", amount);
  }

  const upiUrl = `upi://pay?${params.toString()}`;

  try {
    window.location.href = upiUrl;
  } catch (err) {
    alert(`Payment Link: Please send payment directly to UPI ID: ${UPI_ID}`);
  }
}

// ==========================================
// 🧳 TOUR PACKAGES CATALOG
// ==========================================
const packages = [
  {
    id: "buddhist",
    cat: "pilgrimage",
    title: "Buddhist Circuit Pilgrimage",
    duration: "5 Days / 4 Nights",
    route: "Bodh Gaya → Rajgir → Nalanda → Varanasi → Kushinagar",
    price: 12500,
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Mahabodhi_Temple_-_Bodh_Gaya.jpg",
  },
  {
    id: "golden",
    cat: "heritage",
    title: "Golden Triangle Classic Tour",
    duration: "6 Days / 5 Nights",
    route: "Delhi → Agra → Jaipur → Delhi",
    price: 16000,
    img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "sikkim",
    cat: "hills",
    title: "Gangtok & Sikkim Hill Odyssey",
    duration: "6 Days / 5 Nights",
    route: "NJP / Bagdogra → Gangtok → Tsomgo Lake → Darjeeling",
    price: 18500,
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "chardham",
    cat: "pilgrimage",
    title: "Sacred Char Dham Yatra",
    duration: "10 Days / 9 Nights",
    route: "Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath",
    price: 28000,
    img: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "kerala",
    cat: "south",
    title: "Kerala Backwaters & Hills Tour",
    duration: "6 Days / 5 Nights",
    route: "Cochin → Munnar → Thekkady → Alleppey Houseboat",
    price: 17500,
    img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "rajasthan",
    cat: "heritage",
    title: "Royal Rajasthan Heritage Explorer",
    duration: "7 Days / 6 Nights",
    route: "Jaipur → Jodhpur → Udaipur → Ajmer / Pushkar",
    price: 19500,
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=900&auto=format&fit=crop",
  },
];

// ==========================================
// 🖼️ DYNAMIC CARD RENDERING
// ==========================================
function render(list = packages) {
  const cards = document.getElementById("cards");
  if (!cards) return;

  if (list.length === 0) {
    cards.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #667085;">
        <h3>No tour packages found</h3>
        <p>Try adjusting your search query or category filter.</p>
      </div>`;
    return;
  }

  cards.innerHTML = list
    .map(
      (p) => `
        <article class="card">
          <img 
            src="${p.img}" 
            alt="${p.title}" 
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=900&auto=format&fit=crop'"
          >
          <div class="card-body">
            <small>${p.cat.toUpperCase()}</small>
            <h3>${p.title}</h3>
            <p>🕒 ${p.duration}</p>
            <p>📍 ${p.route}</p>
            <div class="price">
              ₹${p.price.toLocaleString("en-IN")}
              <small>/ person</small>
            </div>
            <div class="card-actions">
              <button 
                class="btn"
                onclick="whatsapp('Hello Sariputra Tour & Holidays, I am interested in ${p.title} (${p.duration}). Please send me the detailed itinerary and final quotation.')"
              >
                💬 Enquire
              </button>
              <button 
                class="btn primary" 
                onclick="pay(${p.price})"
              >
                💳 Pay ₹${p.price.toLocaleString("en-IN")}
              </button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

// ==========================================
// 🔍 SEARCH & CATEGORY FILTERING
// ==========================================
function setCat(cat) {
  currentCat = cat;

  // Update active UI state on filter buttons
  const filterBtns = document.querySelectorAll(".filters button");
  filterBtns.forEach((btn) => {
    const isSelected = btn.getAttribute("onclick") === `setCat('${cat}')`;
    btn.style.backgroundColor = isSelected ? "#8b1e0f" : "#ffffff";
    btn.style.color = isSelected ? "#ffffff" : "#17202a";
    btn.style.borderColor = isSelected ? "#8b1e0f" : "#e2e8f0";
  });

  filterCards();
}

function filterCards() {
  const searchElement = document.getElementById("search");
  const q = searchElement ? searchElement.value.toLowerCase().trim() : "";

  const filteredPackages = packages.filter((p) => {
    const categoryMatch = currentCat === "all" || p.cat === currentCat;
    const searchMatch = `${p.title} ${p.route} ${p.cat}`.toLowerCase().includes(q);
    return categoryMatch && searchMatch;
  });

  render(filteredPackages);
}

// ==========================================
// 📱 WHATSAPP INTEGRATION
// ==========================================
function whatsapp(text) {
  const cleanNumber = WA.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

function submitEnquiry(e) {
  e.preventDefault();

  const getValue = (id) => {
    const el = document.getElementById(id);
    return el ? el.value.trim() : "";
  };

  const name = getValue("name");
  const phone = getValue("phone");
  const date = getValue("date");
  const vehicle = getValue("vehicle");
  const destination = getValue("destination");
  const people = getValue("people");
  const days = getValue("days");
  const message = getValue("message");

  const formattedText = `*Travel Booking Enquiry — Sariputra Tour & Holidays*
----------------------------------------
👤 *Name:* ${name}
📞 *Mobile:* ${phone}
📅 *Travel Date:* ${date || "Flexible / Not decided"}
🚘 *Preferred Vehicle:* ${vehicle || "Any vehicle"}
📍 *Destination / Route:* ${destination}
👥 *Passengers:* ${people || "Not specified"}
⏱️ *Trip Duration:* ${days ? days + " Days" : "Not specified"}
📝 *Special Requirements:* ${message || "None"}`;

  whatsapp(formattedText);
}

// ==========================================
// 🤖 AI TRAVEL ASSISTANT MODAL
// ==========================================
function openAI() {
  const ai = document.getElementById("ai");
  if (!ai) return;

  ai.classList.add("open");

  const chat = document.getElementById("chat");
  if (chat && !chat.innerHTML.trim()) {
    bot("Hello! 👋 Welcome to Sariputra Tour & Holidays. Ask me about tour packages, vehicle rates, or Buddhist pilgrimage itineraries.");
  }

  const aiInput = document.getElementById("aiInput");
  if (aiInput) aiInput.focus();
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
  if (!input) return;

  const q = input.value.trim();
  if (!q) return;

  const chat = document.getElementById("chat");
  if (chat) {
    chat.innerHTML += `<div class="msg me">${q}</div>`;
  }

  input.value = "";
  let answer = "I can help with Buddhist Circuit, Golden Triangle, Sikkim, Char Dham, Kerala, and Rajasthan packages, as well as vehicle rentals in Bihar and across India.";

  const query = q.toLowerCase();

  // Keyword Intent Matching
  if (/vehicle|bus|car|cab|gadi|seat|traveller|tempo|urbania|rent|hire/i.test(query)) {
    answer = "We offer 7-Seater Family Vehicles, 17-Seater Force Urbanias, 17-Seater Tempo Travellers, and 35 to 49-Seater Tourist Coaches. Rentals start at ₹15/km.";
  } else if (/price|cost|package|rate|budget|fare|charge|kitna/i.test(query)) {
    answer = "Tour packages start from ₹12,500 per person, and vehicle rentals start at ₹15/km. Contact us on WhatsApp for custom group discounts.";
  } else if (/buddhist|bodh|gaya|nalanda|rajgir|kushinagar|varanasi|bihar|patna/i.test(query)) {
    answer = "Our 5D/4N Buddhist Circuit Pilgrimage covers Bodh Gaya, Rajgir, Nalanda, Varanasi, and Kushinagar starting at ₹12,500 per person.";
  } else if (/contact|phone|number|location|address|office|email/i.test(query)) {
    answer = "📍 Location: Bodh Gaya, Bihar | 📞 Phone: +91 99399 95360 / +91 90656 71630 | 📧 Email: sariputratours@gmail.com";
  } else if (/golden|delhi|agra|jaipur|taj/i.test(query)) {
    answer = "Golden Triangle Classic Tour (6D/5N) covers Delhi, Agra, and Jaipur starting at ₹16,000 per person.";
  } else if (/sikkim|gangtok|darjeeling|tsomgo/i.test(query)) {
    answer = "Gangtok & Sikkim Hill Odyssey (6D/5N) covers Gangtok, Tsomgo Lake, and Darjeeling starting at ₹18,500 per person.";
  } else if (/char dham|kedarnath|badrinath|gangotri|yamunotri/i.test(query)) {
    answer = "Sacred Char Dham Yatra (10D/9N) covers Yamunotri, Gangotri, Kedarnath, and Badrinath starting at ₹28,000 per person.";
  } else if (/kerala|munnar|alleppey|houseboat/i.test(query)) {
    answer = "Kerala Backwaters & Hills Tour (6D/5N) covers Cochin, Munnar, Thekkady, and Alleppey Houseboat starting at ₹17,500 per person.";
  } else if (/rajasthan|jodhpur|udaipur|pushkar/i.test(query)) {
    answer = "Royal Rajasthan Heritage Explorer (7D/6N) covers Jaipur, Jodhpur, Udaipur, and Pushkar starting at ₹19,500 per person.";
  }

  bot(answer);
}

// ==========================================
// 🎙️ VOICE ASSISTANT (STT & TTS)
// ==========================================
function speakLast() {
  if (window.lastAnswer && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(window.lastAnswer);
    speech.lang = "en-IN";
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
  }
}

function speakInput() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech recognition is not supported in this browser. Please use Google Chrome.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.continuous = false;
  recognition.interimResults = false;

  const input = document.getElementById("aiInput");
  if (input) input.placeholder = "Listening...";

  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    if (input) {
      input.value = transcript;
      input.placeholder = "Ask about packages...";
      askAI();
    }
  };

  recognition.onerror = () => {
    if (input) input.placeholder = "Ask about packages...";
  };

  recognition.start();
}

// ==========================================
// ⚙️ INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Dynamic Year Footer Update
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Keyboard Event Listener for AI Input
  const aiInput = document.getElementById("aiInput");
  if (aiInput) {
    aiInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        askAI();
      }
    });
  }

  // Live Filter Input Listener
  const search = document.getElementById("search");
  if (search) {
    search.addEventListener("input", filterCards);
  }

  // Initial Card Render
  render();
});
