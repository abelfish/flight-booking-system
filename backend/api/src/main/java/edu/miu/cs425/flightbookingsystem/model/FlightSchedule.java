package edu.miu.cs425.flightbookingsystem.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;


@Entity
@Table(name = "flight_schedules")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class FlightSchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Departure Date is required")
    private LocalDate departureDate;

    @NotNull(message = "Available Seats is required")
    private Integer availableSeats;

    @NotNull(message = "Maximum Seats is required")
    private Integer maximumSeats;

    @NotNull(message = "Base price is required")
    private BigDecimal basePrice;

    @NotNull(message = "Flight Route is required")
    @ManyToOne
    @JsonIgnoreProperties("flightSchedules")
    private FlightRoute flightRoute;
}
