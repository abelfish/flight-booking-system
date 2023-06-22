package edu.miu.cs425.flightbookingsystem.dto;

public record AddressDTO(Long id,
                         String street,
                         String city,
                         String state,
                         String zipCode) {
}
