package com.example.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "forgot_password_requests")
public class ForgotPassword {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    // Constructors, getters, and setters
    public ForgotPassword() {}

    public ForgotPassword(String email) {
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
