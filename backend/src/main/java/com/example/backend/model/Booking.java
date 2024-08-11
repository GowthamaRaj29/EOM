package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String eventDate;
    private String eventFor;
    private String eventLocation;
    private String eventTime;
    private String eventType;
    private String name;
    private String phone;
    private String amount; // Amount as String to handle formatted currency

    // Default constructor
    public Booking() {
    }

    // Parameterized constructor
    public Booking(String email, String eventDate, String eventFor, String eventLocation,
                   String eventTime, String eventType, String name, String phone, String amount) {
        this.email = email;
        this.eventDate = eventDate;
        this.eventFor = eventFor;
        this.eventLocation = eventLocation;
        this.eventTime = eventTime;
        this.eventType = eventType;
        this.name = name;
        this.phone = phone;
        this.amount = amount;
    }

    // Getters and Setters
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

    public String getEventDate() {
        return eventDate;
    }

    public void setEventDate(String eventDate) {
        this.eventDate = eventDate;
    }

    public String getEventFor() {
        return eventFor;
    }

    public void setEventFor(String eventFor) {
        this.eventFor = eventFor;
    }

    public String getEventLocation() {
        return eventLocation;
    }

    public void setEventLocation(String eventLocation) {
        this.eventLocation = eventLocation;
    }

    public String getEventTime() {
        return eventTime;
    }

    public void setEventTime(String eventTime) {
        this.eventTime = eventTime;
    }

    public String getEventType() {
        return eventType;
    }

    public void setEventType(String eventType) {
        this.eventType = eventType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }
}
