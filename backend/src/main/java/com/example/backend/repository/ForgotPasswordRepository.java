package com.example.backend.repository;


import com.example.backend.model.ForgotPassword;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ForgotPasswordRepository extends JpaRepository<ForgotPassword, Long> {
    // Additional query methods if needed
}
