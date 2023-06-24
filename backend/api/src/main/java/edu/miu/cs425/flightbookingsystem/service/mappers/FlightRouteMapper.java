package edu.miu.cs425.flightbookingsystem.service.mappers;

import edu.miu.cs425.flightbookingsystem.dto.FlightRouteDTO;
import edu.miu.cs425.flightbookingsystem.model.FlightRoute;

import java.util.ArrayList;
import java.util.Optional;

public class FlightRouteMapper {

    public static FlightRouteDTO toFlightRouteDTO(FlightRoute flightRoute) {
        return new FlightRouteDTO(
                flightRoute.getId(),
                flightRoute.getDepartureCity(),
                flightRoute.getArrivalCity(),
                flightRoute.getFlightNumber(),
                flightRoute.getDepartureTime(),
                flightRoute.getArrivalTime(),
                Optional.ofNullable(flightRoute.getFlightSchedules())
                        .orElse(new ArrayList<>())
                        .stream()
                        .map(FlightScheduleMapper::toFlightScheduleDTO).toList()
        );
    }

    public static FlightRoute toFlightRoute(FlightRouteDTO flightRouteDTO) {
        return new FlightRoute(
                flightRouteDTO.id(),
                flightRouteDTO.departureCity(),
                flightRouteDTO.arrivalCity(),
                flightRouteDTO.flightNumber(),
                flightRouteDTO.departureTime(),
                flightRouteDTO.arrivalTime(),
                Optional.ofNullable(flightRouteDTO.flightScheduleDTOS())
                        .orElse(new ArrayList<>())
                        .stream()
                        .map(FlightScheduleMapper::toFlightSchedule).toList());
    }
}
