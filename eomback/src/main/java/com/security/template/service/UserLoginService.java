package com.security.template.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.template.model.UserLogin;
import com.security.template.repo.UserLoginRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserLoginService {

    @Autowired
    private UserLoginRepository userLoginRepository;

    public List<UserLogin> getAllUsers() {
        return userLoginRepository.findAll();
    }

    public Optional<UserLogin> getUserById(int id) {
        return userLoginRepository.findById(id);
    }

    public UserLogin createUser(UserLogin userLogin) {
        return userLoginRepository.save(userLogin);
    }

    public UserLogin updateUser(int id, UserLogin userDetails) {
        UserLogin userLogin = userLoginRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        userLogin.setName(userDetails.getName());
        userLogin.setEmail(userDetails.getEmail());
        userLogin.setPassword(userDetails.getPassword());
        userLogin.setConfirmpassword(userDetails.getConfirmpassword());
        return userLoginRepository.save(userLogin);
    }

    public void deleteUser(int id) {
        userLoginRepository.deleteById(id);
    }
}
