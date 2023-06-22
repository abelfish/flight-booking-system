package edu.miu.cs425.flightbookingsystem.service.config;

import edu.miu.cs425.flightbookingsystem.dto.FlightRouteDTO;
import edu.miu.cs425.flightbookingsystem.model.FlightRoute;

public class FlightRouteMapper {

    public static FlightRouteDTO toFlightRouteDTO(FlightRoute flightRoute) {
        return new FlightRouteDTO(
                flightRoute.getId(),
                flightRoute.getDepartureCity(),
                flightRoute.getArrivalCity(),
                flightRoute.getFlightNumber(),
                flightRoute.getDepartureTime(),
                flightRoute.getArrivalTime()
        );
    }

    public static FlightRoute toFlightRoute(FlightRouteDTO flightRouteDTO) {
        return new FlightRoute(
                flightRouteDTO.id(),
                flightRouteDTO.departureCity(),
                flightRouteDTO.arrivalCity(),
                flightRouteDTO.flightNumber(),
                flightRouteDTO.departureTime(),
                flightRouteDTO.arrivalTime()
        );
    }
}
