package com.example.backend.repository;

import com.example.backend.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, String> {
    Admin findByEmailAndPassword(String email, String password);
}
