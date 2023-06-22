package edu.miu.cs425.flightbookingsystem;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FlightBookingSystemApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(FlightBookingSystemApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

	}
}
