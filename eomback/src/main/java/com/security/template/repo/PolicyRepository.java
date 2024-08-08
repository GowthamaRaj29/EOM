package com.security.template.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.security.template.model.Policy;

public interface PolicyRepository extends JpaRepository<Policy, Integer> {
}
