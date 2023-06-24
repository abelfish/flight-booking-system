package edu.miu.cs425.flightbookingsystem.controller;

import edu.miu.cs425.flightbookingsystem.dto.FlightRouteDTO;
import edu.miu.cs425.flightbookingsystem.service.FlightRouteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalTime;
import java.util.HashMap;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/flight-routes")
public class FlightRouteController {

    private final FlightRouteService flightRouteService;

    @GetMapping
    public ResponseEntity<?> getAllFlightRoutes() {
        return ResponseEntity.ok(flightRouteService.getAllFlightRoutes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getFlightRouteById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(flightRouteService.getFlightRouteById(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity<?> addFlightRoute(@RequestBody FlightRouteDTO flightRoute) {
        return ResponseEntity.ok(flightRouteService.addFlightRoute(flightRoute));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateFlightRoute(@PathVariable Long id, @RequestBody FlightRouteDTO flightRoute) {
        try {
            return ResponseEntity.ok(flightRouteService.updateFlightRoute(id, flightRoute));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteFlightRouteById(@PathVariable Long id) {
        flightRouteService.deleteFlightRouteById(id);
        return ResponseEntity.accepted().build();
    }

    @GetMapping("/search")
    public ResponseEntity<?> findAllByDepartureCityAndArrivalCityAndDepartureTime(
            @RequestParam String departureCity,
            @RequestParam String arrivalCity,
            @RequestParam LocalTime departureTime) {
        return ResponseEntity.ok(flightRouteService.findAllByDepartureCityAndArrivalCityAndDepartureTime(
                departureCity, arrivalCity, departureTime));
    }

    @GetMapping("/status")
    public ResponseEntity<?> findFlightStatusByFlightNumber(@RequestParam String flightNumber) {
        var messages = new HashMap<>();
        messages.put("status", flightRouteService.findFlightStatusByFlightNumber(flightNumber));
        return ResponseEntity.ok(messages);
    }

}
