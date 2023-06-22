package edu.miu.cs425.flightbookingsystem.controller;

import edu.miu.cs425.flightbookingsystem.dto.FlightScheduleDTO;
import edu.miu.cs425.flightbookingsystem.service.FlightScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/flight-schedules")
public class FlightScheduleController {

    private final FlightScheduleService flightScheduleService;

    @GetMapping
    public ResponseEntity<?> getAllFLightSchedules(){
        return ResponseEntity.ok(flightScheduleService.getAllFlightSchedules());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getFlightScheduleById(@PathVariable Long id){
        try{
            return ResponseEntity.ok(flightScheduleService.getFlightScheduleById(id));
        }catch (RuntimeException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity<?> addNewFlightSchedule(@RequestBody FlightScheduleDTO flightScheduleDTO){
        return ResponseEntity.ok(flightScheduleService.addFlightSchedule(flightScheduleDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateFlightSchedule(@PathVariable Long id,
                                                  @RequestBody FlightScheduleDTO flightScheduleDTO){
        try{
            return ResponseEntity.ok(flightScheduleService.updateFlightSchedule(id,flightScheduleDTO));
        }catch (RuntimeException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteFlightScheduleById(@PathVariable Long id){
       flightScheduleService.deleteFlightScheduleById(id);
        return ResponseEntity.accepted().build();
    }
}
