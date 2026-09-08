package com.sariputra.tour.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@CrossOrigin(origins = "https://lokeshrawani.github.io")
@RestController
public class HomeController {

    @GetMapping("/")
    public Map<String, String> home() {
        return Map.of(
            "application", "Sariputra Tour & Holidays API",
            "status", "UP",
            "message", "Spring Boot backend is running"
        );
    }

    @GetMapping("/api/health")
    public Map<String, String> health() {
        return Map.of(
            "status", "UP",
            "service", "tour-api"
        );
    }
}