package com.security.template.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.template.model.Policy;
import com.security.template.repo.PolicyRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PolicyService {

    @Autowired
    private PolicyRepository policyRepository;

    public List<Policy> getAllPolicies() {
        return policyRepository.findAll();
    }

    public Optional<Policy> getPolicyById(int id) {
        return policyRepository.findById(id);
    }

    public Policy createPolicy(Policy policy) {
        return policyRepository.save(policy);
    }

    public Policy updatePolicy(int id, Policy policyDetails) {
        Optional<Policy> optionalPolicy = policyRepository.findById(id);
        if (optionalPolicy.isPresent()) {
            Policy policy = optionalPolicy.get();
            policy.setName(policyDetails.getName());
            policy.setDob(policyDetails.getDob());
            policy.setGender(policyDetails.getGender());
            policy.setBeneficiary(policyDetails.getBeneficiary());
            policy.setMarital_status(policyDetails.getMarital_status());
            policy.setPhone(policyDetails.getPhone());
            policy.setAddress(policyDetails.getAddress());
            return policyRepository.save(policy);
        }
        return null;
    }

    public void deletePolicy(int id) {
        policyRepository.deleteById(id);
    }
}
