package com.example.backend.service;

import com.example.backend.model.ContactMessage;
import com.example.backend.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactMessageService {

    @Autowired
    private ContactMessageRepository repository;

    public ContactMessage saveContactMessage(ContactMessage contactMessage) {
        return repository.save(contactMessage);
    }
}
