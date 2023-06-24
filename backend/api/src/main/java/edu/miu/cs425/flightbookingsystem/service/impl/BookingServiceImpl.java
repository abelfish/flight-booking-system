package edu.miu.cs425.flightbookingsystem.service.impl;

import edu.miu.cs425.flightbookingsystem.dto.BookingDTO;
import edu.miu.cs425.flightbookingsystem.repository.BookingRepository;
import edu.miu.cs425.flightbookingsystem.service.BookingService;
import edu.miu.cs425.flightbookingsystem.service.mappers.BookingMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;

    @Override
    public List<BookingDTO> findAll() {
        return bookingRepository.findAll()
                .stream()
                .map(BookingMapper::toBookingDTO)
                .toList();
    }

    @Override
    public BookingDTO findById(Long id) {

        return bookingRepository.findById(id)
                .map(BookingMapper::toBookingDTO)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
    }

    @Override
    public BookingDTO addBooking(BookingDTO bookingDTO) {
        var booking = BookingMapper.toBooking(bookingDTO);
        return BookingMapper.toBookingDTO(bookingRepository.save(booking));

    }

    @Override
    public BookingDTO updateBooking(Long id, BookingDTO bookingDTO) {
        findById(id);
        var booking = BookingMapper.toBooking(bookingDTO);
        return BookingMapper.toBookingDTO(bookingRepository.save(booking));
    }

    @Override
    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }

    @Override
    public BookingDTO searchByBookingReference(String bookingReference) {

        return bookingRepository.findByBookingReference(bookingReference)

                .map(BookingMapper::toBookingDTO)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
    }
}
