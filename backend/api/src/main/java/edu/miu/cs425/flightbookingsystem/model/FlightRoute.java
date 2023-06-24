package edu.miu.cs425.flightbookingsystem.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "flight_routes")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class FlightRoute {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Departure City is required")
    private String departureCity;

    @NotBlank(message = "Arrival City is required")
    private String arrivalCity;
    @NotBlank(message = "Flight Number is required")
    private String flightNumber;

    @NotNull(message = "Departure Time is required")
    private LocalTime departureTime;

    @NotNull(message = "Arrival Time is required")
    private LocalTime arrivalTime;

    @OneToMany(mappedBy = "flightRoute", cascade = {CascadeType.PERSIST, CascadeType.REMOVE}, fetch =
            FetchType.EAGER)
    private List<FlightSchedule> flightSchedules = new ArrayList<>();

    public String flightStatus() {
        if (LocalTime.now().isBefore(departureTime))
            return "departing at " + departureTime;
        if (LocalTime.now().isAfter(departureTime) &&
                LocalTime.now().isBefore(arrivalTime))
            return "departed at " + departureTime;
        return "arrived at " + arrivalTime;

    }
}
