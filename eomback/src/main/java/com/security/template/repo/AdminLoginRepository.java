package com.security.template.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.template.model.AdminLogin;

@Repository
public interface AdminLoginRepository extends JpaRepository<AdminLogin, Integer> {
    AdminLogin findByEmail(String email);
}
