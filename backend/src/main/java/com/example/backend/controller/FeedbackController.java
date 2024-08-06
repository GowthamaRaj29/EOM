package com.example.backend.controller;
import com.example.backend.model.Feedback;
import com.example.backend.Services.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/feedbacks")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    // Create or Update Feedback
    @PostMapping
    public ResponseEntity<Feedback> createOrUpdateFeedback(@RequestBody Feedback feedback) {
        Feedback savedFeedback = feedbackService.saveFeedback(feedback);
        return new ResponseEntity<>(savedFeedback, HttpStatus.CREATED);
    }

    // Get All Feedbacks
    @GetMapping
    public ResponseEntity<List<Feedback>> getAllFeedbacks() {
        List<Feedback> feedbacks = feedbackService.getAllFeedbacks();
        return new ResponseEntity<>(feedbacks, HttpStatus.OK);
    }

    // Get Feedback by ID
    @GetMapping("/{id}")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable("id") Long feedbackId) {
        Optional<Feedback> feedback = feedbackService.getFeedbackById(feedbackId);
        return feedback.map(ResponseEntity::ok)
                       .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Update Feedback by ID
    @PutMapping("/{id}")
    public ResponseEntity<Feedback> updateFeedbackById(@PathVariable("id") Long feedbackId, @RequestBody Feedback feedback) {
        Feedback updatedFeedback = feedbackService.updateFeedback(feedbackId, feedback);
        return updatedFeedback != null ? ResponseEntity.ok(updatedFeedback)
                                       : ResponseEntity.notFound().build();
    }

    // Delete Feedback by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFeedbackById(@PathVariable("id") Long feedbackId) {
        feedbackService.deleteFeedback(feedbackId);
        return ResponseEntity.noContent().build();
    }
}
