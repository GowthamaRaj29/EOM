package com.example.backend.controller;

import com.example.backend.model.ForgotPasswordRequest;
import com.example.backend.service.ForgotPasswordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ForgotPasswordController {

    @Autowired
    private ForgotPasswordService forgotPasswordService;

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest forgotPasswordRequest) {
        try {
            forgotPasswordService.saveForgotPasswordRequest(forgotPasswordRequest.getEmail());
            return ResponseEntity.ok("Verification email sent.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error processing request.");
        }
    }
}
