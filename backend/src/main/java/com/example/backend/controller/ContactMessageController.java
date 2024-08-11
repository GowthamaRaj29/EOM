package com.example.backend.controller;

import com.example.backend.model.ContactMessage;
import com.example.backend.service.ContactMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactMessageController {

    @Autowired
    private ContactMessageService service;

    @PostMapping
    public ResponseEntity<ContactMessage> createContactMessage(@RequestBody ContactMessage contactMessage) {
        ContactMessage savedMessage = service.saveContactMessage(contactMessage);
        return ResponseEntity.ok(savedMessage);
    }
}
