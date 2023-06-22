package edu.miu.cs425.flightbookingsystem.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "User username is required")
    private String username;
    private String email;
    @NotBlank(message = "User password is required")
    private String password;
    @Enumerated(EnumType.STRING)
    @NotNull(message = "User role is required")
    private Role role;
}

