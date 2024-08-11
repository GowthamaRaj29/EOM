package com.example.backend.service;

import com.example.backend.model.ForgotPassword;
import com.example.backend.repository.ForgotPasswordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ForgotPasswordService {

    @Autowired
    private ForgotPasswordRepository forgotPasswordRepository;

    public void saveForgotPasswordRequest(String email) {
        ForgotPassword forgotPassword = new ForgotPassword(email);
        forgotPasswordRepository.save(forgotPassword);
    }
}
