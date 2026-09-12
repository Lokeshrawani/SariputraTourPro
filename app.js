// ==========================================
// Sariputra Tour & Holidays - app.js
// ==========================================

// Configuration
const WA = "+919939995360";
const UPI_ID = "rawanilokesh1@ybl";
const UPI_NAME = "Sariputra Tour & Holidays";

// State Management
let currentCat = "all";

// ==========================================
// UPI PAYMENT FLOW
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

  // Attempt to open native UPI app or prompt fallback
  try {
    window.location.href = upiUrl;
  } catch (err) {
    alert(`Please send payments to UPI ID: ${UPI_ID}`);
  }
}

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
// RENDER PACKAGES
// ==========================================
function render(list = packages) {
  const cards = document.getElementById("cards");
  if (!cards) return;

  if (list.length === 0) {
    cards.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">No packages found matching your criteria.</div>`;
    return;
  }

  cards.innerHTML = list
    .map(
      (p) => `
        <article class="card">
          <img src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=900&auto=format&fit=crop'">
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
              <button class="btn" onclick="whatsapp('Hello, I am interested in ${p.title} (${p.duration}). Please send final quotation.')">
                💬 Enquire
              </button>
              <button class="btn primary" onclick="pay(${p.price})">
                💳 Advance Pay
              </button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

// ==========================================
// CATEGORY FILTER & SEARCH
// ==========================================
function setCat(cat) {
  currentCat = cat;
  
  // Highlight active filter button
  const filterBtns = document.querySelectorAll(".filters button");
  filterBtns.forEach((btn) => {
    if (btn.getAttribute("onclick") === `setCat('${cat}')`) {
      btn.style.backgroundColor = "#8b1e0f";
      btn.style.color = "#fff";
      btn.style.borderColor = "#8b1e0f";
    } else {
      btn.style.backgroundColor = "#fff";
      btn.style.color = "#17202a";
      btn.style.borderColor = "#ddd";
    }
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
// WHATSAPP INTEGRATION
// ==========================================
function whatsapp(text) {
  const cleanNum = WA.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanNum}?text=${encodeURIComponent(text)}`;
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

  const text = `*New Booking Enquiry - Sariputra Tour & Holidays*
---------------------------------------
👤 *Name:* ${name}
📞 *Mobile:* ${phone}
📅 *Travel Date:* ${date || "Flexible"}
🚘 *Vehicle Required:* ${vehicle || "Any"}
📍 *Destination:* ${destination}
👥 *Passengers:* ${people || "Not specified"}
⏱️ *Trip Duration:* ${days ? days + " Days" : "Not specified"}
📝 *Notes:* ${message || "N/A"}`;

  whatsapp(text);
}

// ==========================================
// AI CHATBOT LOGIC
// ==========================================
function openAI() {
  const ai = document.getElementById("ai");
  if (!ai) return;

  ai.classList.add("open");

  const chat = document.getElementById("chat");
  if (chat && !chat.innerHTML.trim()) {
    bot("Hello! 👋 Welcome to Sariputra Tour & Holidays. How can I assist you with tour packages or vehicle bookings today?");
  }
  
  // Focus input automatically
  const input = document.getElementById("aiInput");
  if (input) input.focus();
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
  let answer = "I can assist with custom tour itineraries, pilgrimage packages, or vehicle rentals across Bihar and India. Please let me know your destination and total passengers!";

  const query = q.toLowerCase();

  // Smart Keyword Matching
  if (/vehicle|bus|car|cab|gadi|seat|traveller|tempo|urbania|rent/i.test(query)) {
    answer = "We offer a full fleet: 7-Seater Family SUVs, 17-Seater Force Urbania, 17-Seater Tempo Travellers, and 35/45/49-Seater Tourist Coaches for large groups.";
  } else if (/price|cost|package|rate|budget|fare|kitna|charge/i.test(query)) {
    answer = "Our tour packages start from ₹12,500/person, and vehicle rentals start @ ₹15/km. Exact prices depend on vehicle type and travel distance.";
  } else if (/buddhist|bodh|gaya|nalanda|rajgir|kushinagar|bihar|patna/i.test(query)) {
    answer = "Our famous 5D/4N Buddhist Circuit covers Bodh Gaya, Rajgir, Nalanda, Varanasi, and Kushinagar starting at ₹12,500 per person.";
  } else if (/contact|phone|number|location|address|office|email/i.test(query)) {
    answer = "📍 Office: Bodh Gaya, Bihar | 📞 Call/WhatsApp: +91 99399 95360 / +91 90656 71630 | 📧 Email: sariputratours@gmail.com";
  } else if (/golden|delhi|agra|jaipur/i.test(query)) {
    answer = "The Golden Triangle Classic (6D/5N) covers Delhi, Agra, and Jaipur. Starting price: ₹16,000 per person.";
  } else if (/sikkim|gangtok|darjeeling/i.test(query)) {
    answer = "The Gangtok & Sikkim Hill Odyssey (6D/5N) covers Gangtok, Tsomgo Lake, and Darjeeling. Starting price: ₹18,500 per person.";
  } else if (/char dham|kedarnath|badrinath|gangotri|yamunotri/i.test(query)) {
    answer = "The Sacred Char Dham Yatra (10D/9N) covers Yamunotri, Gangotri, Kedarnath, and Badrinath. Starting price: ₹28,000 per person.";
  } else if (/kerala|munnar|alleppey|houseboat/i.test(query)) {
    answer = "The Kerala Backwaters & Hills Tour (6D/5N) covers Cochin, Munnar, Thekkady, and Alleppey Houseboat. Starting price: ₹17,500 per person.";
  } else if (/rajasthan|jodhpur|udaipur/i.test(query)) {
    answer = "The Royal Rajasthan Heritage Explorer (7D/6N) covers Jaipur, Jodhpur, Udaipur, and Pushkar. Starting price: ₹19,500 per person.";
  }

  bot(answer);
}

// ==========================================
// SPEECH INTEGRATION
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
    alert("Voice recognition is not supported in this browser. Please try using Google Chrome.");
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
// INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Set copyright year
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Bind Enter Key for AI Chat
  const aiInput = document.getElementById("aiInput");
  if (aiInput) {
    aiInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        askAI();
      }
    });
  }

  // Initial Card Render
  render();
});
