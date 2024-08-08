package com.security.template.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.template.model.UserLogin;

@Repository
public interface UserLoginRepository extends JpaRepository<UserLogin, Integer> {
}
