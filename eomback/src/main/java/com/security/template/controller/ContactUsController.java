package com.security.template.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.security.template.model.ContactUs;
import com.security.template.service.ContactUsService;

import java.util.List;

@RestController
@RequestMapping("/api/contactus")
public class ContactUsController {

    @Autowired
    private ContactUsService contactUsService;

    @PostMapping
    public ResponseEntity<ContactUs> addContactUs(@RequestBody ContactUs contactUs) {
        ContactUs savedContactUs = contactUsService.addContactUs(contactUs);
        return ResponseEntity.ok(savedContactUs);
    }

    @GetMapping
    public ResponseEntity<List<ContactUs>> getAllContactUs() {
        List<ContactUs> contactUsList = contactUsService.getAllContactUs();
        return ResponseEntity.ok(contactUsList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ContactUs> getContactUsById(@PathVariable int id) {
        return contactUsService.getContactUsById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteContactUs(@PathVariable int id) {
        contactUsService.deleteContactUs(id);
        return ResponseEntity.noContent().build();
    }
}
