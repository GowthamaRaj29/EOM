package com.example.backend.service;

import com.example.backend.entity.AdminCredential;
import com.example.backend.repository.AdminCredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminLoginService {

    @Autowired
    private AdminCredentialRepository adminCredentialRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public boolean login(String email, String password) {
        Optional<AdminCredential> adminCredential = adminCredentialRepository.findByEmail(email);
        
        // Check if admin credentials are found and password matches
        return adminCredential.isPresent() && passwordEncoder.matches(password, adminCredential.get().getPassword());
    }
}
