# Sariputra Tour & Holidays — Pro Travel Marketplace

This starter combines the two supplied HTML files into one marketplace-style frontend and adds:
- Flipkart-inspired search/filter/card UX (without copying Flipkart branding)
- Supplied tour-package data and vehicle categories
- WhatsApp enquiry flow
- Payment-link configuration point
- Browser AI travel assistant
- Browser speech-to-text and text-to-speech
- Python Flask API
- Java Spring Boot API starter
- Local owner-photo slots under `assets/photos/`
- `llms.txt`

## Important
1. Replace `assets/photos/*.jpg` with your original photos. Keep the filenames.
2. Put your real payment/checkout URL in `frontend/app.js`:
   `const PAYMENT_LINK="https://...";`
3. Never put Razorpay/Stripe secret keys in HTML/JS. A production payment integration should create orders on the backend and verify payment signatures/webhooks.
4. The browser AI is a demo/routing assistant. For a real LLM chatbot, call your own secure `/api/chat` endpoint and keep the provider API key on the server.
5. GitHub Pages can host the frontend, but it cannot run Flask/Spring Boot. Deploy backend on a server/cloud service.

## Run frontend
Open `frontend/index.html` in a browser, or use:
`python -m http.server 8080 --directory .`
then visit `http://localhost:8080/frontend/`

## Run Python API
`cd backend-python`
`pip install -r requirements.txt`
`python app.py`

## Run Java API
Install Java 21 + Maven:
`cd backend-java`
`mvn spring-boot:run`

## GitHub Pages
Push the project and set GitHub Pages source to the repository root (or `/docs` if you move frontend there). For the simplest static deployment, copy `frontend/index.html`, `style.css`, `app.js`, `llms.txt`, and `assets/` to the published root.
