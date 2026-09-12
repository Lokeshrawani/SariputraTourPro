package com.sariputra.tour;

import org.slf.Logger;
import org.slf.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class EnquiryController {

    private static final Logger logger = LoggerFactory.getLogger(EnquiryController.class);

    @Value("${PAYMENT_LINK:https://rawanilokesh1@ybl}")
    private String paymentLink;

    /**
     * System Health Check Endpoint
     */
    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> health() {
        return ResponseEntity.ok(Map.of(
            "status", "healthy",
            "service", "Sariputra Java Tour API",
            "version", "1.0.0"
        ));
    }

    /**
     * Payment Link Configuration Endpoint
     */
    @GetMapping("/payment-link")
    public ResponseEntity<Map<String, String>> getPaymentLink() {
        return ResponseEntity.ok(Map.of("payment_link", paymentLink));
    }

    /**
     * Submit Booking Enquiry with Input Validation
     */
    @PostMapping("/enquiry")
    public ResponseEntity<Map<String, Object>> processEnquiry(@RequestBody(required = false) Map<String, Object> data) {
        if (data == null || data.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of(
                "ok", false,
                "error", "Request payload cannot be empty."
            ));
        }

        // Validate Required Fields
        String name = (String) data.get("name");
        String phone = (String) data.get("phone");
        String destination = (String) data.get("destination");

        if (isBlank(name) || isBlank(phone) || isBlank(destination)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of(
                "ok", false,
                "error", "Missing required fields: name, phone, or destination."
            ));
        }

        logger.info("New enquiry received from: {} | Mobile: {} | Destination: {}", name, phone, destination);

        Map<String, Object> response = new HashMap<>();
        response.put("ok", true);
        response.put("message", "Enquiry received successfully! Our travel team will contact you shortly.");
        response.put("data", data);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    private boolean isBlank(String str) {
        return str == null || str.trim().isEmpty();
    }
}
