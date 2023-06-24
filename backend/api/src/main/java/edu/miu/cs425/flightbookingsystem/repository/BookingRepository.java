package edu.miu.cs425.flightbookingsystem.repository;

import edu.miu.cs425.flightbookingsystem.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    Optional<Booking> findByBookingReference(String bookingReference);
}
