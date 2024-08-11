package com.example.backend.util;

import com.example.backend.entity.AdminCredential;
import com.example.backend.repository.AdminCredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;

@Component
public class AdminSetup {

    @Autowired
    private AdminCredentialRepository adminCredentialRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @PostConstruct
    public void init() {
        if (adminCredentialRepository.findByEmail("admin@devents.com").isEmpty()) {
            AdminCredential admin = new AdminCredential();
            admin.setEmail("admin@devents.com");
            admin.setPassword(passwordEncoder.encode("admin123#"));
            adminCredentialRepository.save(admin);
        }
    }
}
