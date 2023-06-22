package edu.miu.cs425.flightbookingsystem.service.impl;

import edu.miu.cs425.flightbookingsystem.dto.FlightScheduleDTO;
import edu.miu.cs425.flightbookingsystem.model.FlightSchedule;
import edu.miu.cs425.flightbookingsystem.repository.FlightScheduleRepository;
import edu.miu.cs425.flightbookingsystem.service.FlightScheduleService;
import edu.miu.cs425.flightbookingsystem.service.config.FlightScheduleMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FlightScheduleServiceImpl implements FlightScheduleService {

    private final FlightScheduleRepository flightScheduleRepository;
    @Override
    public List<FlightScheduleDTO> getAllFlightSchedules() {
        var flightSchedules = flightScheduleRepository.findAll();
        return flightSchedules.stream()
                .map(FlightScheduleMapper::toFLightScheduleDTO).toList();
    }

    @Override
    public FlightScheduleDTO getFlightScheduleById(Long id) {
        return flightScheduleRepository.findById(id)
                .map(FlightScheduleMapper::toFLightScheduleDTO)
                .orElseThrow(() -> new RuntimeException("Flight schedule not found"));
    }

    @Override
    public FlightScheduleDTO addFlightSchedule(FlightScheduleDTO flightScheduleDTO) {
        var flightSchedule = FlightScheduleMapper.toFlightSchedule(flightScheduleDTO);
        return FlightScheduleMapper
                .toFLightScheduleDTO(flightScheduleRepository.save(flightSchedule));
    }

    @Override
    public FlightScheduleDTO updateFlightSchedule(Long id, FlightScheduleDTO flightScheduleDTO) {
        getFlightScheduleById(id);
        var flightSchedule = FlightScheduleMapper.toFlightSchedule(flightScheduleDTO);
        flightSchedule.setId(id);
        return FlightScheduleMapper
                .toFLightScheduleDTO(flightScheduleRepository.save(flightSchedule));
    }

    @Override
    public void deleteFlightScheduleById(Long id) {
        flightScheduleRepository.deleteById(id);
    }
}
