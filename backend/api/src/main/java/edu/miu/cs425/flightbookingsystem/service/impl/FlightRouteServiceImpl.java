package edu.miu.cs425.flightbookingsystem.service.impl;

import edu.miu.cs425.flightbookingsystem.dto.FlightRouteDTO;
import edu.miu.cs425.flightbookingsystem.repository.FlightRouteRepository;
import edu.miu.cs425.flightbookingsystem.service.FlightRouteService;
import edu.miu.cs425.flightbookingsystem.service.mappers.FlightRouteMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FlightRouteServiceImpl implements FlightRouteService {

    private final FlightRouteRepository flightRouteRepository;


    @Override
    public List<FlightRouteDTO> getAllFlightRoutes() {
        var flightRoutes = flightRouteRepository.findAll();
        return flightRoutes.stream()
                .map(FlightRouteMapper::toFlightRouteDTO)
                .toList();
    }

    @Override
    public FlightRouteDTO getFlightRouteById(Long id) {
        return flightRouteRepository.findById(id)
                .map(FlightRouteMapper::toFlightRouteDTO)
                .orElseThrow(() -> new RuntimeException("Flight Route not found"));
    }

    @Override
    public FlightRouteDTO addFlightRoute(FlightRouteDTO flightRouteDTO) {
        var flightRoute = FlightRouteMapper.toFlightRoute(flightRouteDTO);
        for (var flightSchedule : flightRoute.getFlightSchedules()) {
            flightSchedule.setFlightRoute(flightRoute);
        }
        var savedFlightRoute = flightRouteRepository.save(flightRoute);
        return FlightRouteMapper.toFlightRouteDTO(savedFlightRoute);
    }

    @Override
    public FlightRouteDTO updateFlightRoute(Long id, FlightRouteDTO flightRouteDTO) {
        getFlightRouteById(id);
        var flightRoute = FlightRouteMapper.toFlightRoute(flightRouteDTO);
        flightRoute.setId(id);
        var savedFlightRoute = flightRouteRepository.save(flightRoute);
        return FlightRouteMapper.toFlightRouteDTO(savedFlightRoute);
    }

    @Override
    public void deleteFlightRouteById(Long id) {
        flightRouteRepository.deleteById(id);
    }

    @Override
    public List<FlightRouteDTO> findAllByDepartureCityAndArrivalCityAndDepartureTime(String departureCity, String arrivalCity, LocalTime departureTime) {
        var flightRoutes =
                flightRouteRepository.findAllByDepartureCityAndArrivalCityAndDepartureTime(departureCity, arrivalCity, departureTime);
        return flightRoutes.stream()
                .map(FlightRouteMapper::toFlightRouteDTO)
                .toList();
    }

    @Override
    public String findFlightStatusByFlightNumber(String flightNumber) {
        var flightRoute = flightRouteRepository.findFlightRouteByFlightNumber(flightNumber)
                .orElseThrow(() -> new RuntimeException("Flight Route not found"));
        return flightRoute.flightStatus();
    }
}
