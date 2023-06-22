package edu.miu.cs425.flightbookingsystem.repository;

import edu.miu.cs425.flightbookingsystem.model.FlightSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightScheduleRepository extends JpaRepository<FlightSchedule, Long> {
}
