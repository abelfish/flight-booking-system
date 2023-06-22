package edu.miu.cs425.flightbookingsystem.service;

import edu.miu.cs425.flightbookingsystem.model.Customer;

import java.util.List;

public interface CustomerService {
    Customer addCustomer(Customer newCustomer);
    Customer getCustomerById(Long id);
    Customer updateCustomerById(Long customerId, Customer customer);
    Customer updateCustomer(Customer customer);
    void deleteCustomerById(Long customerId);

    List<Customer> getAllCustomers();
    List<Object[]> generateReport();

}
