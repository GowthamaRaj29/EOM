package com.security.template.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.template.model.ContactUs;

@Repository
public interface ContactUsRepository extends JpaRepository<ContactUs, Integer> {
}
