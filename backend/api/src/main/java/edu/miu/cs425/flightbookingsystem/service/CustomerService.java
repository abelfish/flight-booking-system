package edu.miu.cs425.flightbookingsystem.service;

import edu.miu.cs425.flightbookingsystem.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {
    CustomerDTO addCustomer(CustomerDTO newCustomerDTO);

    CustomerDTO getCustomerById(Long id);

    CustomerDTO updateCustomerById(Long customerId, CustomerDTO CustomerDTO);

    void deleteCustomerById(Long customerId);

    List<CustomerDTO> getAllCustomers();

    List<Object[]> generateReport();

}
