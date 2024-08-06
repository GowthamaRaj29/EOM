package com.example.backend.Services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Feedback;
import com.example.backend.repository.FeedbackRepository;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    // Create or Update Feedback
    public Feedback saveFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    // Get All Feedbacks
    public List<Feedback> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }

    // Get Feedback by ID
    public Optional<Feedback> getFeedbackById(Long feedbackId) {
        return feedbackRepository.findById(feedbackId);
    }

    // Update Feedback by ID
    public Feedback updateFeedback(Long feedbackId, Feedback feedback) {
        if (feedbackRepository.existsById(feedbackId)) {
            feedback.setFeedbackId(feedbackId);
            return feedbackRepository.save(feedback);
        }
        return null;
    }

    // Delete Feedback by ID
    public void deleteFeedback(Long feedbackId) {
        feedbackRepository.deleteById(feedbackId);
    }
}
