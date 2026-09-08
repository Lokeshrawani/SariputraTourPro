// ==========================================
// Sariputra Tour & Holidays - app.js
// ==========================================

// WhatsApp number
const WA = "+919939995360";

// UPI Payment Details
const UPI_ID = "rawanilokesh1@ybl";
const UPI_NAME = "Sariputra Tour & Holidays";

// ==========================================
// UPI PAYMENT
// ==========================================
function pay(amount = "") {
  const params = new URLSearchParams({
    pa: UPI_ID,
    pn: UPI_NAME,
    cu: "INR",
  });

  // Add amount when provided
  if (amount) {
    params.set("am", amount);
  }

  const upiUrl = `upi://pay?${params.toString()}`;

  // Open UPI application
  window.location.href = upiUrl;
}

// ==========================================
// TOUR PACKAGES
// ==========================================
const packages = [
  {
    id: "buddhist",
    cat: "pilgrimage",
    title: "Buddhist Circuit Pilgrimage",
    duration: "5 Days / 4 Nights",
    route:
      "Bodh Gaya → Rajgir → Nalanda → Varanasi → Kushinagar",
    price: 12500,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Mahabodhi_Temple_-_Bodh_Gaya.jpg",
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
  },

  {
    id: "sikkim",
    cat: "hills",
    title: "Gangtok & Sikkim Hill Odyssey",
    duration: "6 Days / 5 Nights",
    route:
      "NJP / Bagdogra → Gangtok → Tsomgo Lake → Darjeeling",
    price: 18500,
    img:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=900&auto=format&fit=crop",
  },

  {
    id: "chardham",
    cat: "pilgrimage",
    title: "Sacred Char Dham Yatra",
    duration: "10 Days / 9 Nights",
    route:
      "Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath",
    price: 28000,
    img:
      "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=900&auto=format&fit=crop",
  },

  {
    id: "kerala",
    cat: "south",
    title: "Kerala Backwaters & Hills Tour",
    duration: "6 Days / 5 Nights",
    route:
      "Cochin → Munnar → Thekkady → Alleppey Houseboat",
    price: 17500,
    img:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=900&auto=format&fit=crop",
  },

  {
    id: "rajasthan",
    cat: "heritage",
    title: "Royal Rajasthan Heritage Explorer",
    duration: "7 Days / 6 Nights",
    route:
      "Jaipur → Jodhpur → Udaipur → Ajmer / Pushkar",
    price: 19500,
    img:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=900&auto=format&fit=crop",
  },
];

// ==========================================
// CATEGORY
// ==========================================
let currentCat = "all";

// ==========================================
// YEAR
// ==========================================
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ==========================================
// RENDER PACKAGES
// ==========================================
function render(list = packages) {
  const cards = document.getElementById("cards");

  if (!cards) return;

  cards.innerHTML = list
    .map(
      (p) => `
        <article class="card">

          <img
            src="${p.img}"
            alt="${p.title}"
            loading="lazy"
          >

          <div class="card-body">

            <small>${p.cat.toUpperCase()}</small>

            <h3>${p.title}</h3>

            <p>
              🕒 ${p.duration}
            </p>

            <p>
              📍 ${p.route}
            </p>

            <div class="price">
              ₹${p.price.toLocaleString("en-IN")}
              <small>/ person</small>
            </div>

            <div class="card-actions">

              <button
                class="btn"
                onclick="whatsapp(
                  'Hello, I am interested in ${p.title} (${p.duration}). Please send final quotation.'
                )"
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
// CATEGORY FILTER
// ==========================================
function setCat(cat) {
  currentCat = cat;
  filterCards();
}

// ==========================================
// SEARCH + FILTER
// ==========================================
function filterCards() {
  const searchElement = document.getElementById("search");

  const q = searchElement
    ? searchElement.value.toLowerCase().trim()
    : "";

  const filteredPackages = packages.filter((p) => {
    const categoryMatch =
      currentCat === "all" || p.cat === currentCat;

    const searchMatch =
      `${p.title} ${p.route} ${p.cat}`
        .toLowerCase()
        .includes(q);

    return categoryMatch && searchMatch;
  });

  render(filteredPackages);
}

// ==========================================
// WHATSAPP
// ==========================================
function whatsapp(text) {
  const whatsappUrl =
    "https://wa.me/" +
    WA.replace(/\D/g, "") +
    "?text=" +
    encodeURIComponent(text);

  window.open(
    whatsappUrl,
    "_blank",
    "noopener,noreferrer"
  );
}

// ==========================================
// ENQUIRY FORM
// ==========================================
function submitEnquiry(e) {
  e.preventDefault();

  const nameElement = document.getElementById("name");
  const phoneElement = document.getElementById("phone");
  const dateElement = document.getElementById("date");
  const vehicleElement = document.getElementById("vehicle");
  const destinationElement =
    document.getElementById("destination");
  const peopleElement = document.getElementById("people");
  const daysElement = document.getElementById("days");
  const messageElement = document.getElementById("message");

  const name = nameElement ? nameElement.value : "";
  const phone = phoneElement ? phoneElement.value : "";
  const date = dateElement ? dateElement.value : "";
  const vehicle = vehicleElement ? vehicleElement.value : "";
  const destination = destinationElement
    ? destinationElement.value
    : "";
  const people = peopleElement ? peopleElement.value : "";
  const days = daysElement ? daysElement.value : "";
  const message = messageElement
    ? messageElement.value
    : "";

  const text = `Hello Sariputra Tour & Holidays,

Travel quotation request

Name: ${name}
Mobile: ${phone}
Date: ${date || "Not decided"}
Vehicle: ${vehicle || "Not specified"}
Destination: ${destination}
Passengers: ${people || "Not specified"}
Days: ${days || "Not specified"}
Requirements: ${message || "None"}`;

  whatsapp(text);
}

// ==========================================
// AI CHAT
// ==========================================
function openAI() {
  const ai = document.getElementById("ai");

  if (!ai) return;

  ai.classList.add("open");

  const chat = document.getElementById("chat");

  if (chat && !chat.innerHTML.trim()) {
    bot(
      "Hello! 👋 I can help you choose a tour package, vehicle or prepare a booking enquiry."
    );
  }
}

// ==========================================
// CLOSE AI
// ==========================================
function closeAI() {
  const ai = document.getElementById("ai");

  if (ai) {
    ai.classList.remove("open");
  }
}

// ==========================================
// AI BOT MESSAGE
// ==========================================
function bot(t) {
  const chat = document.getElementById("chat");

  if (!chat) return;

  chat.innerHTML += `
    <div class="msg">
      🤖 ${t}
    </div>
  `;

  window.lastAnswer = t;

  chat.scrollTop = chat.scrollHeight;
}

// ==========================================
// ASK AI
// ==========================================
function askAI() {
  const input = document.getElementById("aiInput");

  if (!input) return;

  const q = input.value.trim();

  if (!q) return;

  const chat = document.getElementById("chat");

  if (chat) {
    chat.innerHTML += `
      <div class="msg me">
        ${q}
      </div>
    `;
  }

  input.value = "";

  let answer =
    "I can help with Buddhist Circuit, Golden Triangle, Sikkim, Char Dham, Kerala and Rajasthan packages. Tell me your destination, number of travellers and trip days.";

  // Vehicle question
  if (/vehicle|bus|seat|traveller|tempo|urbania/i.test(q)) {
    answer =
      "Available vehicles: 7 Seater, 17 Seater Urbania, 17 Seater Tempo Traveller, 35 Seater, 45 Seater and 49 Seater buses.";
  }

  // Price question
  else if (/price|cost|package|rate|budget/i.test(q)) {
    answer =
      "Our current packages start from ₹12,500 per person. Final pricing depends on travel dates, number of travellers, hotels and vehicle requirements.";
  }

  // WhatsApp / booking
  else if (/whatsapp|book|booking|enquiry|enquire/i.test(q)) {
    answer =
      "I can help you prepare a booking enquiry. Please use the enquiry form or WhatsApp button to contact Sariputra Tour & Holidays.";
  }

  // Buddhist
  else if (/buddhist|bodh|gaya|nalanda|rajgir|kushinagar/i.test(q)) {
    answer =
      "Our Buddhist Circuit package covers Bodh Gaya, Rajgir, Nalanda, Varanasi and Kushinagar for 5 Days / 4 Nights. Starting price: ₹12,500 per person.";
  }

  // Golden Triangle
  else if (/golden|delhi|agra|jaipur|taj/i.test(q)) {
    answer =
      "Our Golden Triangle Classic Tour covers Delhi, Agra and Jaipur for 6 Days / 5 Nights. Starting price: ₹16,000 per person.";
  }

  // Sikkim
  else if (/sikkim|gangtok|darjeeling|tsomgo|lake/i.test(q)) {
    answer =
      "Our Gangtok & Sikkim Hill Odyssey covers Gangtok, Tsomgo Lake and Darjeeling for 6 Days / 5 Nights. Starting price: ₹18,500 per person.";
  }

  // Char Dham
  else if (/char dham|kedarnath|badrinath|gangotri|yamunotri/i.test(q)) {
    answer =
      "Our Sacred Char Dham Yatra covers Yamunotri, Gangotri, Kedarnath and Badrinath for 10 Days / 9 Nights. Starting price: ₹28,000 per person.";
  }

  // Kerala
  else if (/kerala|munnar|alleppey|thekkady|houseboat/i.test(q)) {
    answer =
      "Our Kerala Backwaters & Hills Tour covers Cochin, Munnar, Thekkady and Alleppey Houseboat for 6 Days / 5 Nights. Starting price: ₹17,500 per person.";
  }

  // Rajasthan
  else if (/rajasthan|jodhpur|udaipur|pushkar|ajmer/i.test(q)) {
    answer =
      "Our Royal Rajasthan Heritage Explorer covers Jaipur, Jodhpur, Udaipur and Ajmer / Pushkar for 7 Days / 6 Nights. Starting price: ₹19,500 per person.";
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

    window.speechSynthesis.speak(speech);
  }
}

// ==========================================
// SPEECH TO TEXT
// ==========================================
function speakInput() {
  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert(
      "Speech recognition is not supported in this browser. Please use Google Chrome."
    );
    return;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = "en-IN";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    console.log("Listening...");
  };

  recognition.onresult = (e) => {
    const transcript =
      e.results[0][0].transcript;

    const input =
      document.getElementById("aiInput");

    if (input) {
      input.value = transcript;
      askAI();
    }
  };

  recognition.onerror = (e) => {
    console.error(
      "Speech recognition error:",
      e.error
    );
  };

  recognition.start();
}

// ==========================================
// SEARCH BOX EVENT
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const search =
    document.getElementById("search");

  if (search) {
    search.addEventListener(
      "input",
      filterCards
    );
  }

  render();
});

// ==========================================
// INITIAL RENDER
// ==========================================
if (
  document.readyState === "interactive" ||
  document.readyState === "complete"
) {
  render();
}