package com.sariputra.tour;

import org.slf.Logger;
import org.slf.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class TourApiApplication {

    private static final Logger logger = LoggerFactory.getLogger(TourApiApplication.class);

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(TourApiApplication.class, args);
        Environment env = context.getEnvironment();
        String port = env.getProperty("server.port", "8080");

        logger.info("""
            
            ==========================================================
              Sariputra Tour & Holidays Java API Active!
              Local Service:  http://localhost:{}
              Health Check:   http://localhost:{}/api/health
            ==========================================================
            """, port, port);
    }

    /**
     * Enhanced CORS Configuration for GitHub Pages & Frontend Clients
     */
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                        .allowedOriginPatterns("*")
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(false)
                        .maxAge(3600);
            }
        };
    }
}
