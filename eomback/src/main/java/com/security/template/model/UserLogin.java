package com.security.template.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Data
@Entity
@Table(name = "user_login")
public class UserLogin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String password;
    private String confirmpassword;

    @OneToMany(mappedBy = "userLogin", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Policy> policies;
}
