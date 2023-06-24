package edu.miu.cs425.flightbookingsystem.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String bookingReference;
    private LocalDateTime bookingDate;

    private BigDecimal totalPrice;
    @Enumerated(EnumType.STRING)
    private BookingStatus bookingStatus;

    @NotNull(message = "Passenger is required")
    @OneToOne(cascade = CascadeType.ALL)
    private Customer passenger;

    @NotNull(message = "Flight Schedule is required")
    @OneToOne
    private FlightSchedule flightSchedule;

}
