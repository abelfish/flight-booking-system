package edu.miu.cs425.flightbookingsystem.dto;

import edu.miu.cs425.flightbookingsystem.model.BookingStatus;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record BookingDTO(
        Long id,
        String bookingReference,
        LocalDateTime bookingDate,
        BigDecimal totalPrice,
        BookingStatus bookingStatus,
        CustomerDTO passenger,
        FlightScheduleDTO flightScheduleDTO
) {
}
