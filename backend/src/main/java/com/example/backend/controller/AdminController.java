package com.example.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    private static final String ADMIN_EMAIL = "admin@devents.com";
    private static final String ADMIN_PASSWORD = "admin123#";

    @PostMapping("/login")
    public ResponseEntity<String> adminLogin(@RequestBody AdminLoginRequest request) {
        if (ADMIN_EMAIL.equals(request.getEmail()) && ADMIN_PASSWORD.equals(request.getPassword())) {
            return ResponseEntity.ok("Admin login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid admin email or password");
        }
    }
    
    // Request class to hold the admin login data
    public static class AdminLoginRequest {
        private String email;
        private String password;

        // Getters and Setters
        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}
