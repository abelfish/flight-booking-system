package edu.miu.cs425.flightbookingsystem.service;

import edu.miu.cs425.flightbookingsystem.dto.BookingDTO;

import java.util.List;

public interface BookingService {

    List<BookingDTO> findAll();

    BookingDTO findById(Long id);

    BookingDTO addBooking(BookingDTO bookingDTO);

    BookingDTO updateBooking(Long id, BookingDTO bookingDTO);

    void deleteBooking(Long id);

    BookingDTO searchByBookingReference(String bookingReference);
}
