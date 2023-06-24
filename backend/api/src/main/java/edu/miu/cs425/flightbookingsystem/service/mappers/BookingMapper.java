package edu.miu.cs425.flightbookingsystem.service.mappers;

import edu.miu.cs425.flightbookingsystem.dto.BookingDTO;
import edu.miu.cs425.flightbookingsystem.model.Booking;

import java.util.Objects;
import java.util.Optional;

public class BookingMapper {

    public static BookingDTO toBookingDTO(Booking booking) {
        return new BookingDTO(booking.getId(), booking.getBookingReference(), booking.getBookingDate(),
                booking.getTotalPrice(), booking.getBookingStatus(),
                Optional.of(booking.getPassenger())
                        .map(CustomerMapper::toCustomerDTO)
                        .orElse(null),
                Optional.of(booking.getFlightSchedule())
                        .map(FlightScheduleMapper::toFlightScheduleDTO).orElse(null));
    }

    public static Booking toBooking(BookingDTO bookingDTO) {
        return new Booking(bookingDTO.id(), bookingDTO.bookingReference(), bookingDTO.bookingDate(),
                bookingDTO.totalPrice(),
                bookingDTO.bookingStatus(),
                Objects.requireNonNull(Optional.ofNullable(bookingDTO.passenger())
                        .map(CustomerMapper::toCustomer)
                        .orElse(null)),
                Optional.ofNullable(bookingDTO.flightScheduleDTO())
                        .map(FlightScheduleMapper::toFlightSchedule).orElse(null));
    }
}
