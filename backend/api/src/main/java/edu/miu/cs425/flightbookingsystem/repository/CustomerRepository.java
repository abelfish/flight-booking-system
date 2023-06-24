package edu.miu.cs425.flightbookingsystem.repository;

import edu.miu.cs425.flightbookingsystem.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    @Query("SELECT c.firstName, c.lastName, a.street, a.city, a.state, a.zipCode " +
            "FROM Customer c JOIN c.address a order by c.firstName desc ")
    List<Object[]> getCustomerReport();
}



