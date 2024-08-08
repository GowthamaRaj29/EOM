package com.security.template.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.template.model.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {
}
