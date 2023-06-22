package edu.miu.cs425.flightbookingsystem.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @NotBlank(message = "User userName is required")
    private String userName;

    @NotBlank(message = "User email is required")
    private String email;

    @NotBlank(message = "User password is required")
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
}
