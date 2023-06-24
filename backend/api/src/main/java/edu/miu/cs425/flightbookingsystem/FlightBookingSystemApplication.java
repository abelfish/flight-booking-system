package edu.miu.cs425.flightbookingsystem;


import com.github.javafaker.Faker;
import edu.miu.cs425.flightbookingsystem.dto.*;
import edu.miu.cs425.flightbookingsystem.model.Role;
import edu.miu.cs425.flightbookingsystem.service.CustomerService;
import edu.miu.cs425.flightbookingsystem.service.FlightRouteService;
import edu.miu.cs425.flightbookingsystem.service.UserService;
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
    private final CustomerService customerService;
    private final UserService userService;

    public static void main(String[] args) {
        SpringApplication.run(FlightBookingSystemApplication.class, args);
    }

    void populateCustomers() {
        IntStream.range(0, 10).mapToObj(i -> new CustomerDTO(null,
                faker.name().firstName(),
                faker.name().lastName(),
                LocalDate.of(faker.number().numberBetween(1950, 2000), faker.number().numberBetween(1, 12), faker.number().numberBetween(1, 28)),
                new AddressDTO(null,
                        faker.address().streetAddress(),
                        faker.address().city(),
                        faker.address().state(),
                        faker.address().zipCode()),
                new UserDTO(null,
                        faker.name().username().toLowerCase(), faker.internet().emailAddress(),
                        faker.internet().password(), Role.CUSTOMER))).forEach(customerService::addCustomer);

    }

    void populateUsers() {
        var admin = new UserDTO(null, "admin", "admin@natna.com", "admin", Role.ADMIN);
        userService.addUser(admin);

        var agent = new UserDTO(null, "agent", "agent@natna.com", "agent", Role.AGENT);
        userService.addUser(agent);
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

        if (customerService.getAllCustomers().isEmpty())
            populateCustomers();

        var isAdminOrAgentFound =
                userService.getAllUsers().stream().anyMatch(userDTO -> userDTO.role()
                        == Role.ADMIN || userDTO.role() == Role.AGENT);

        if (!isAdminOrAgentFound)
            populateUsers();
    }



	
}
