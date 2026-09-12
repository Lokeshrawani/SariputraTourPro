package com.sariputra.tour;

import org.slf.Logger;
import org.slf.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class TourApiApplication {

    private static final Logger logger = LoggerFactory.getLogger(TourApiApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(TourApiApplication.class, args);
        logger.info("==================================================");
        logger.info(" Sariputra Tour & Holidays Java API Started!");
        logger.info(" Service is active and ready to handle requests.");
        logger.info("==================================================");
    }

    /**
     * Enable Cross-Origin Resource Sharing (CORS) for frontend interaction
     */
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                        .allowedOrigins("*")
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*");
            }
        };
    }
}
