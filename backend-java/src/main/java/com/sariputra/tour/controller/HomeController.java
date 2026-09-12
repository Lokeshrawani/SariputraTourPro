package com.sariputra.tour.controller;

import org.slf.Logger;
import org.slf.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.LinkedHashMap;
import java.util.Map;

@RestController
public class HomeController {

    private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

    /**
     * Root Welcome & API Status Endpoint
     */
    @GetMapping("/")
    public ResponseEntity<Map<String, Object>> home() {
        logger.info("Root endpoint accessed");
        
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("application", "Sariputra Tour & Holidays API");
        response.put("status", "UP");
        response.put("version", "1.0.0");
        response.put("message", "Spring Boot backend service is running successfully.");
        response.put("timestamp", Instant.now().toString());
        
        return ResponseEntity.ok(response);
    }

    /**
     * Health Check Endpoint for Cloud Monitors & Load Balancers
     */
    @GetMapping("/api/health")
    public ResponseEntity<Map<String, Object>> health() {
        logger.debug("Health check status requested");
        
        Map<String, Object> healthDetails = new LinkedHashMap<>();
        healthDetails.put("status", "UP");
        healthDetails.put("service", "tour-api");
        healthDetails.put("timestamp", Instant.now().toString());
        healthDetails.put("freeMemoryMB", Runtime.getRuntime().freeMemory() / (1024 * 1024));
        
        return ResponseEntity.ok(healthDetails);
    }
}
