package com.security.template.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.template.model.AdminLogin;
import com.security.template.repo.AdminLoginRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AdminLoginService {

    @Autowired
    private AdminLoginRepository adminLoginRepository;

    public AdminLogin addAdmin(AdminLogin adminLogin) {
        return adminLoginRepository.save(adminLogin);
    }

    public List<AdminLogin> getAllAdmins() {
        return adminLoginRepository.findAll();
    }

    public Optional<AdminLogin> getAdminById(int id) {
        return adminLoginRepository.findById(id);
    }

    public void deleteAdmin(int id) {
        adminLoginRepository.deleteById(id);
    }

    public AdminLogin getAdminByEmail(String email) {
        return adminLoginRepository.findByEmail(email);
    }
}
