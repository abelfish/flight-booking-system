package edu.miu.cs425.flightbookingsystem.service.mappers;

import edu.miu.cs425.flightbookingsystem.dto.FlightRouteDTO;
import edu.miu.cs425.flightbookingsystem.dto.FlightScheduleDTO;
import edu.miu.cs425.flightbookingsystem.model.FlightRoute;
import edu.miu.cs425.flightbookingsystem.model.FlightSchedule;

import java.util.Optional;

public class FlightScheduleMapper {

    public static FlightScheduleDTO toFlightScheduleDTO(FlightSchedule flightSchedule) {
        return new FlightScheduleDTO(flightSchedule.getId(),
                flightSchedule.getDepartureDate(),
                flightSchedule.getAvailableSeats(),
                flightSchedule.getMaximumSeats(),
                flightSchedule.getBasePrice(),
                Optional.of(flightSchedule.getFlightRoute()).map(flightRoute -> {
                    return new FlightRouteDTO(flightSchedule.getFlightRoute().getId(),
                            flightSchedule.getFlightRoute().getDepartureCity(),
                            flightSchedule.getFlightRoute().getArrivalCity(),
                            flightSchedule.getFlightRoute().getFlightNumber(),
                            flightSchedule.getFlightRoute().getDepartureTime(),
                            flightSchedule.getFlightRoute().getArrivalTime(),
                            null
                    );
                }).orElse(null));
    }

    public static FlightSchedule toFlightSchedule(FlightScheduleDTO flightScheduleDTO) {
        return new FlightSchedule(flightScheduleDTO.id(),
                flightScheduleDTO.departureDate(),
                flightScheduleDTO.availableSeats(),
                flightScheduleDTO.maximumSeats(),
                flightScheduleDTO.basePrice(),
                Optional.of(flightScheduleDTO.flightRouteDTO()).map(flightRouteDTO -> {
                    return new FlightRoute(flightRouteDTO.id(),
                            flightRouteDTO.departureCity(),
                            flightRouteDTO.arrivalCity(),
                            flightRouteDTO.flightNumber(),
                            flightRouteDTO.departureTime(),
                            flightRouteDTO.arrivalTime(),
                            null
                    );
                }).orElse(new FlightRoute()));

    }
}
