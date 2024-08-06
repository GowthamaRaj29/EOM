package com.example.backend.Services;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Payment;
import com.example.backend.repository.PaymentRepository;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    // Create or Update Payment
    public Payment savePayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    // Get All Payments
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    // Get Payment by ID
    public Optional<Payment> getPaymentById(Long paymentId) {
        return paymentRepository.findById(paymentId);
    }

    // Update Payment by ID
    public Payment updatePayment(Long paymentId, Payment payment) {
        if (paymentRepository.existsById(paymentId)) {
            payment.setPaymentId(paymentId);
            return paymentRepository.save(payment);
        }
        return null;
    }

    // Delete Payment by ID
    public void deletePayment(Long paymentId) {
        paymentRepository.deleteById(paymentId);
    }
}
