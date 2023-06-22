package edu.miu.cs425.flightbookingsystem.service;


import edu.miu.cs425.flightbookingsystem.dto.FlightScheduleDTO;

import java.util.List;

public interface FlightScheduleService {

    List<FlightScheduleDTO> getAllFlightSchedules();

    FlightScheduleDTO getFlightScheduleById(Long id);

    FlightScheduleDTO addFlightSchedule(FlightScheduleDTO flightScheduleDTO);

    FlightScheduleDTO updateFlightSchedule(Long id, FlightScheduleDTO flightScheduleDTO);

    void deleteFlightScheduleById(Long id);
}
