package com.security.template.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.security.template.model.AdminLogin;
import com.security.template.service.AdminLoginService;

import java.util.List;

@RestController
@RequestMapping("/api/admins")
public class AdminLoginController {

    @Autowired
    private AdminLoginService adminLoginService;

    @PostMapping
    public ResponseEntity<AdminLogin> addAdmin(@RequestBody AdminLogin adminLogin) {
        AdminLogin savedAdmin = adminLoginService.addAdmin(adminLogin);
        return ResponseEntity.ok(savedAdmin);
    }

    @GetMapping
    public ResponseEntity<List<AdminLogin>> getAllAdmins() {
        List<AdminLogin> admins = adminLoginService.getAllAdmins();
        return ResponseEntity.ok(admins);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdminLogin> getAdminById(@PathVariable int id) {
        return adminLoginService.getAdminById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable int id) {
        adminLoginService.deleteAdmin(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<AdminLogin> getAdminByEmail(@PathVariable String email) {
        AdminLogin admin = adminLoginService.getAdminByEmail(email);
        return admin != null ? ResponseEntity.ok(admin) : ResponseEntity.notFound().build();
    }
}
