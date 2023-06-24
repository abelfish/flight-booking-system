package edu.miu.cs425.flightbookingsystem.repository;

import edu.miu.cs425.flightbookingsystem.model.FlightRoute;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

public interface FlightRouteRepository extends JpaRepository<FlightRoute, Long> {

    List<FlightRoute> findAllByDepartureCityAndArrivalCityAndDepartureTime(String departureCity,
                                                                           String arrivalCity,
                                                                           LocalTime departureTime);

    Optional<FlightRoute> findFlightRouteByFlightNumber(String flightNumber);
}
