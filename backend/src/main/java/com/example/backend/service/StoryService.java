package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Story;
import com.example.backend.repository.StoryRepository;

import java.util.List;
import java.util.Optional;

@Service
public class StoryService {

    @Autowired
    private StoryRepository storyRepository;

    // Method to get all stories
    public List<Story> getAllStories() {
        return storyRepository.findAll();
    }

    // Method to get a story by ID
    public Story getStoryById(Long id) {
        return storyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Story not found with id " + id));
    }

    // Method to create a new story
    public Story createStory(Story story) {
        return storyRepository.save(story);
    }

    // Method to update an existing story
    public Story updateStory(Long id, Story updatedStory) {
        Story existingStory = storyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Story not found with id " + id));
        
        existingStory.setName(updatedStory.getName());
        existingStory.setTitle(updatedStory.getTitle());
        existingStory.setCompany(updatedStory.getCompany());
        existingStory.setQuote(updatedStory.getQuote());
        existingStory.setCategory(updatedStory.getCategory());

        return storyRepository.save(existingStory);
    }

    // Method to delete a story
    @Transactional
    public void deleteStory(Long id) {
        if (storyRepository.existsById(id)) {
            storyRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("Story not found with id " + id);
        }
    }
}
