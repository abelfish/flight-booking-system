package edu.miu.cs425.flightbookingsystem.dto;

import java.time.LocalDate;

public record CustomerDTO(Long id,
                          String firstName,
                          String lastName,
                          LocalDate dateOfBirth,
                          AddressDTO addressDTO,
                          UserDTO userDTO) {
}
