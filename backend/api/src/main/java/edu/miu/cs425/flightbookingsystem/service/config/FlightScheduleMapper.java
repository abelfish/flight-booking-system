package edu.miu.cs425.flightbookingsystem.service.config;

import edu.miu.cs425.flightbookingsystem.dto.FlightRouteDTO;
import edu.miu.cs425.flightbookingsystem.dto.FlightScheduleDTO;
import edu.miu.cs425.flightbookingsystem.model.FlightSchedule;

public class FlightScheduleMapper {

    public static FlightScheduleDTO toFLightScheduleDTO(FlightSchedule flightSchedule){
        return new FlightScheduleDTO(flightSchedule.getId(),
                flightSchedule.getDepartureDate(),
                flightSchedule.getAvailableSeats(),
                flightSchedule.getMaximumSeats(),
                flightSchedule.getBasePrice()
//                FlightRouteMapper.toFlightRouteDTO(flightSchedule.getFlightRoute())
                );
    }

    public static FlightSchedule toFlightSchedule(FlightScheduleDTO flightScheduleDTO){
        return new FlightSchedule(flightScheduleDTO.id(),
                flightScheduleDTO.departureDate(),
                flightScheduleDTO.availableSeats(),
                flightScheduleDTO.maximumSeats(),
                flightScheduleDTO.basePrice(),
                null
//                FlightRouteMapper.toFlightRoute(flightScheduleDTO.flightRouteDTO())
        );
    }
}
