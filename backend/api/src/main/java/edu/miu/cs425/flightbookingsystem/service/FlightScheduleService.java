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

    Page<FlightScheduleDTO> getAllFlightSchedulesByDepartureCityAndArrivalCity(String departureCity, String arrivalCity, Integer pageNo, Integer pageSize, String sortBy);

    Page<FlightScheduleDTO> getAllByDepartureCityAndArrivalCityAndDepartureDate(String departureCity, String arrivalCity, LocalDate departureDate, Integer pageNo, Integer pageSize, String sortBy);
}
