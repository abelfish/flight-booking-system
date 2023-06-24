package edu.miu.cs425.flightbookingsystem.repository;

import edu.miu.cs425.flightbookingsystem.model.FlightSchedule;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;

public interface FlightScheduleRepository extends JpaRepository<FlightSchedule, Long> {

    @Query("SELECT fs FROM FlightSchedule fs WHERE fs.flightRoute.departureCity = :departureCity AND fs.flightRoute.arrivalCity = :arrivalCity")
    Page<FlightSchedule> findAllByDepartureAndArrival(@Param("departureCity") String departureCity, @Param("arrivalCity") String arrivalCity, Pageable pageable);

    @Query("SELECT fs FROM FlightSchedule fs WHERE fs.flightRoute.departureCity = :departureCity " +
            "AND fs.flightRoute.arrivalCity = :arrivalCity" +
            " AND fs.departureDate = :departureDate")
    Page<FlightSchedule> findAllByDepartureAndArrivalAndDepartureDate(@Param("departureCity") String departureCity, @Param("arrivalCity") String arrivalCity, @Param("departureDate") LocalDate departureDate,
                                                                      Pageable pageable);
}
