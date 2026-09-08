from flask import Flask, request, jsonify
from flask_cors import CORS
import os
app=Flask(__name__); CORS(app)
PAYMENT_LINK=os.getenv("PAYMENT_LINK","")
@app.get("/api/health")
def health(): return {"status":"ok","service":"Sariputra Tour API"}
@app.post("/api/enquiry")
def enquiry():
    data=request.get_json(force=True)
    # In production: validate, store in DB, notify WhatsApp/CRM/email.
    return jsonify({"ok":True,"message":"Enquiry received","data":data})
@app.get("/api/payment-link")
def payment_link():
    return jsonify({"payment_link":PAYMENT_LINK})
if __name__=="__main__":
    app.run(host="0.0.0.0",port=int(os.getenv("PORT","5000")),debug=True)
