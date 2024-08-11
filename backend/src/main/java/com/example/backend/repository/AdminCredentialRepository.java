package com.example.backend.repository;

import com.example.backend.entity.AdminCredential;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface AdminCredentialRepository extends JpaRepository<AdminCredential, Long> {
    Optional<AdminCredential> findByEmail(String email);
}
