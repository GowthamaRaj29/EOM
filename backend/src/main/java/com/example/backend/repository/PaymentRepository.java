package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
}
