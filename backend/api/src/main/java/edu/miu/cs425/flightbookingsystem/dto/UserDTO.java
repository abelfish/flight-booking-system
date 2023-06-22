package edu.miu.cs425.flightbookingsystem.dto;

import edu.miu.cs425.flightbookingsystem.model.Role;

public record UserDTO(Long id,
                      String username,
                      String email,
                      String password,
                      Role role) {
}
