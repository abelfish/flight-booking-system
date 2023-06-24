package edu.miu.cs425.flightbookingsystem.service.impl;

import edu.miu.cs425.flightbookingsystem.dto.FlightScheduleDTO;
import edu.miu.cs425.flightbookingsystem.repository.FlightScheduleRepository;
import edu.miu.cs425.flightbookingsystem.service.FlightScheduleService;
import edu.miu.cs425.flightbookingsystem.service.mappers.FlightScheduleMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FlightScheduleServiceImpl implements FlightScheduleService {

    private final FlightScheduleRepository flightScheduleRepository;

    @Override
    public List<FlightScheduleDTO> getAllFlightSchedules() {
        var flightSchedules = flightScheduleRepository.findAll();
        return flightSchedules.stream()
                .map(FlightScheduleMapper::toFlightScheduleDTO).toList();
    }

    @Override
    public FlightScheduleDTO getFlightScheduleById(Long id) {
        return flightScheduleRepository.findById(id)
                .map(FlightScheduleMapper::toFlightScheduleDTO)
                .orElseThrow(() -> new RuntimeException("Flight schedule not found"));
    }

    @Override
    public FlightScheduleDTO addFlightSchedule(FlightScheduleDTO flightScheduleDTO) {
        var flightSchedule = FlightScheduleMapper.toFlightSchedule(flightScheduleDTO);
        return FlightScheduleMapper
                .toFlightScheduleDTO(flightScheduleRepository.save(flightSchedule));
    }

    @Override
    public FlightScheduleDTO updateFlightSchedule(Long id, FlightScheduleDTO flightScheduleDTO) {
        getFlightScheduleById(id);
        var flightSchedule = FlightScheduleMapper.toFlightSchedule(flightScheduleDTO);
        flightSchedule.setId(id);
        return FlightScheduleMapper
                .toFlightScheduleDTO(flightScheduleRepository.save(flightSchedule));
    }

    @Override
    public void deleteFlightScheduleById(Long id) {
        flightScheduleRepository.deleteById(id);
    }

    @Override
    public Page<FlightScheduleDTO> getAllFlightSchedulesByDepartureCityAndArrivalCity(String departureCity, String arrivalCity, Integer pageNo, Integer pageSize, String sortBy) {

        Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
        return flightScheduleRepository
                .findAllByDepartureAndArrival(departureCity, arrivalCity, pageable)
                .map(FlightScheduleMapper::toFlightScheduleDTO);

    }

    @Override
    public Page<FlightScheduleDTO> getAllByDepartureCityAndArrivalCityAndDepartureDate(String departureCity, String arrivalCity, LocalDate departureDate, Integer pageNo, Integer pageSize, String sortBy) {

        return flightScheduleRepository.findAllByDepartureAndArrivalAndDepartureDate(departureCity,
                        arrivalCity, departureDate,
                        PageRequest.of(pageNo, pageSize, Sort.by(sortBy)))
                .map(FlightScheduleMapper::toFlightScheduleDTO);
    }
}
