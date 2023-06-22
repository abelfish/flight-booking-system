package edu.miu.cs425.flightbookingsystem.service;


import edu.miu.cs425.flightbookingsystem.dto.FlightScheduleDTO;
import org.springframework.data.domain.Page;

import java.time.LocalDate;
import java.util.List;

public interface FlightScheduleService {

    List<FlightScheduleDTO> getAllFlightSchedules();

    FlightScheduleDTO getFlightScheduleById(Long id);

    FlightScheduleDTO addFlightSchedule(FlightScheduleDTO flightScheduleDTO);

    FlightScheduleDTO updateFlightSchedule(Long id, FlightScheduleDTO flightScheduleDTO);

    void deleteFlightScheduleById(Long id);

    Page<FlightScheduleDTO> getAllFlightSchedulesByFlightRouteId(Long flightRouteId, Integer pageNo,
                                                                 Integer pageSize, String sortBy);

    Page<FlightScheduleDTO> getAllByFlightRouteIdAndDepartureDate(Long flightRouteId,
                                                                  LocalDate departureDate,
                                                                  Integer pageNo, Integer pageSize, String sortBy);
}
