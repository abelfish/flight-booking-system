package edu.miu.cs425.flightbookingsystem;

import com.github.javafaker.Faker;
import edu.miu.cs425.flightbookingsystem.dto.FlightRouteDTO;
import edu.miu.cs425.flightbookingsystem.dto.FlightScheduleDTO;
import edu.miu.cs425.flightbookingsystem.service.FlightRouteService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.IntStream;

@RequiredArgsConstructor
@SpringBootApplication
public class FlightBookingSystemApplication implements ApplicationRunner {

    private final Faker faker;
    private final FlightRouteService flightRouteService;

    public static void main(String[] args) {
        SpringApplication.run(FlightBookingSystemApplication.class, args);
    }

    void populateFlightRoutes() {
        IntStream.range(0, 10).mapToObj(i -> new FlightRouteDTO(null,
                faker.nation().capitalCity(),
                faker.nation().capitalCity(), "NT" + faker.number().digits(3), LocalTime.of(10 + i, 0)
                , LocalTime.of(12 + i, 30), generateFlightSchedules())).forEach(flightRouteService::addFlightRoute);
        IntStream.range(0, 10).mapToObj(i -> new FlightRouteDTO(null,
                faker.nation().capitalCity(),
                faker.nation().capitalCity(), "NT" + faker.number().digits(3), LocalTime.of(1 + i, 30)
                , LocalTime.of(5 + i, 30), generateFlightSchedules())).forEach(flightRouteService::addFlightRoute);
        IntStream.range(0, 10).mapToObj(i -> new FlightRouteDTO(null,
                faker.nation().capitalCity(),
                faker.nation().capitalCity(), "NT" + faker.number().digits(3), LocalTime.of(1 + i, 45)
                , LocalTime.of(10 + i, 0), generateFlightSchedules())).forEach(flightRouteService::addFlightRoute);

    }

    List<FlightScheduleDTO> generateFlightSchedules() {
        return IntStream.range(0, 30).mapToObj(i -> new FlightScheduleDTO(null,
                        LocalDate.now().plusDays(faker.number().numberBetween(1, 30)),
                        faker.number().numberBetween(10, 100),
                        faker.number().numberBetween(100, 200),
                        BigDecimal.valueOf(faker.number().randomDouble(2, 100, 1000)),
                        new FlightRouteDTO(null, null, null, null, null, null, null)))
                .toList();
    }

    @Override
    public void run(ApplicationArguments args) {
        if (flightRouteService.getAllFlightRoutes().isEmpty())
            populateFlightRoutes();
    }


}
