import os
import logging
from flask import Flask, request, jsonify
from flask_cors import CORS

# Configure Logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s"
)

app = Flask(__name__)

# Configure CORS (Restricted origins can be configured via ENV)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Environment Variables
PAYMENT_LINK = os.getenv("PAYMENT_LINK", "https://rawanilokesh1@ybl")
PORT = int(os.getenv("PORT", 5000))
DEBUG_MODE = os.getenv("FLASK_ENV", "development") == "development"

# Sample Package Catalog Data
PACKAGES = [
    {
        "id": "buddhist",
        "category": "pilgrimage",
        "title": "Buddhist Circuit Pilgrimage",
        "duration": "5 Days / 4 Nights",
        "route": "Bodh Gaya → Rajgir → Nalanda → Varanasi → Kushinagar",
        "price": 12500
    },
    {
        "id": "golden",
        "category": "heritage",
        "title": "Golden Triangle Classic Tour",
        "duration": "6 Days / 5 Nights",
        "route": "Delhi → Agra → Jaipur → Delhi",
        "price": 16000
    }
]

# Sample Vehicle Fleet Data
FLEET = [
    {"id": "7-seater", "name": "7 Seater Family Vehicle", "rate": "₹15/km"},
    {"id": "urbania", "name": "17 Seater Force Urbania", "rate": "₹25/km"},
    {"id": "tempo", "name": "17 Seater Tempo Traveller", "rate": "₹22/km"},
    {"id": "bus-35", "name": "35 Seater Mini Bus", "rate": "₹35/km"}
]

# ==========================================
# API ROUTES
# ==========================================

@app.get("/api/health")
def health():
    """Health check endpoint for deployment monitoring."""
    return jsonify({
        "status": "healthy",
        "service": "Sariputra Tour & Holidays API",
        "version": "1.0.0"
    }), 200


@app.get("/api/payment-link")
def payment_link():
    """Returns configured payment URL or UPI string."""
    return jsonify({"payment_link": PAYMENT_LINK}), 200


@app.get("/api/packages")
def get_packages():
    """Fetch tour package catalog."""
    return jsonify({"success": True, "packages": PACKAGES}), 200


@app.get("/api/fleet")
def get_fleet():
    """Fetch available vehicle fleet details."""
    return jsonify({"success": True, "fleet": FLEET}), 200


@app.post("/api/enquiry")
def handle_enquiry():
    """Receive and process travel booking enquiries."""
    try:
        data = request.get_json(force=True)
    except Exception:
        return jsonify({"ok": False, "error": "Invalid JSON format"}), 400

    # Validation
    required_fields = ["name", "phone", "destination"]
    missing_fields = [field for field in required_fields if not data.get(field)]

    if missing_fields:
        return jsonify({
            "ok": False, 
            "error": f"Missing required fields: {', '.join(missing_fields)}"
        }), 400

    logging.info(f"New Booking Enquiry from {data.get('name')} for destination {data.get('destination')}")
    
    # Production note: Integrate Database, Twilio/WhatsApp API or Email alert here.
    return jsonify({
        "ok": True,
        "message": "Enquiry received successfully! Our travel team will contact you shortly.",
        "data": data
    }), 201


@app.post("/api/chat")
def ai_chat_proxy():
    """Secure proxy for AI Travel Assistant (keeps API keys hidden on server)."""
    try:
        payload = request.get_json(force=True)
        user_message = payload.get("message", "").strip().lower()

        if not user_message:
            return jsonify({"ok": False, "response": "Please enter a valid question."}), 400

        # Intelligent Rule Engine / Proxy (Connect to OpenAI / Gemini API here using server key)
        if "buddhist" in user_message or "bodh gaya" in user_message:
            bot_reply = "Our Buddhist Circuit package covers Bodh Gaya, Rajgir, Nalanda, Varanasi, and Kushinagar starting at ₹12,500/person."
        elif "vehicle" in user_message or "bus" in user_message or "tempo" in user_message:
            bot_reply = "We offer 7-seater family SUVs, 17-seater Tempo Travellers/Urbanias, and 35 to 49-seater tourist buses."
        else:
            bot_reply = "Welcome to Sariputra Tour & Holidays! How can I assist you with your tour package or vehicle booking?"

        return jsonify({"ok": True, "response": bot_reply}), 200

    except Exception as e:
        logging.error(f"Error processing AI chat: {str(e)}")
        return jsonify({"ok": False, "error": "Internal Server Error"}), 500

# ==========================================
# GLOBAL ERROR HANDLERS
# ==========================================

@app.errorhandler(404)
def not_found(e):
    return jsonify({"error": "Resource or endpoint not found"}), 404

@app.errorhandler(500)
def server_error(e):
    return jsonify({"error": "Internal Server Error"}), 500

# ==========================================
# SERVER RUNNER
# ==========================================

if __name__ == "__main__":
    logging.info(f"Starting Sariputra Backend API on port {PORT}...")
    app.run(host="0.0.0.0", port=PORT, debug=DEBUG_MODE)
