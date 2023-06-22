package edu.miu.cs425.flightbookingsystem;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FlightBookingSystemApplication implements ApplicationRunner {

    public static void main(String[] args) {
        SpringApplication.run(FlightBookingSystemApplication.class, args);
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

    }
}
