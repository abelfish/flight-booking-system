package edu.miu.cs425.flightbookingsystem.dto;


import java.math.BigDecimal;
import java.time.LocalDate;

public record FlightScheduleDTO(Long id,
                                LocalDate departureDate,
                                Integer availableSeats,
                                Integer maximumSeats,
                                BigDecimal basePrice,
                                FlightRouteDTO flightRouteDTO
) {
}
