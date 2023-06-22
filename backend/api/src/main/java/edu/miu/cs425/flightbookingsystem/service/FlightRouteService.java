package edu.miu.cs425.flightbookingsystem.service;

import edu.miu.cs425.flightbookingsystem.dto.FlightRouteDTO;

import java.time.LocalTime;
import java.util.List;

public interface FlightRouteService {

    List<FlightRouteDTO> getAllFlightRoutes();

    FlightRouteDTO getFlightRouteById(Long id);

    FlightRouteDTO addFlightRoute(FlightRouteDTO flightRouteDTO);

    FlightRouteDTO updateFlightRoute(Long id, FlightRouteDTO flightRouteDTO);

    void deleteFlightRouteById(Long id);

    List<FlightRouteDTO> findAllByDepartureCityAndArrivalCityAndDepartureTime(String departureCity,
                                                                              String arrivalCity,
                                                                              LocalTime departureTime);

    String findFlightStatusByFlightNumber(String flightNumber);
}
