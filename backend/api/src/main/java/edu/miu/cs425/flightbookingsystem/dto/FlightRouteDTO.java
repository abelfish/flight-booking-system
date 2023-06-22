package edu.miu.cs425.flightbookingsystem.dto;

import java.time.LocalTime;

public record FlightRouteDTO(
        Long id,
        String departureCity,
        String arrivalCity,
        String flightNumber,
        LocalTime departureTime,
        LocalTime arrivalTime) {
}
