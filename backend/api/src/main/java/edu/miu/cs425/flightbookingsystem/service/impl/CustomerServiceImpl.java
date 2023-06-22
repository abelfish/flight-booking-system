package edu.miu.cs425.flightbookingsystem.service.impl;

import edu.miu.cs425.flightbookingsystem.model.Customer;
import edu.miu.cs425.flightbookingsystem.repository.CustomerRepository;
import edu.miu.cs425.flightbookingsystem.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository customerRepository;

    @Override
    public List<Customer> getAllCustomers() {

        return customerRepository.findAll();
    }

    @Override
    public List<Object[]> generateReport() {
        return customerRepository.getCustomerReport();
    }

    @Override
    public Customer addCustomer(Customer newCustomer) {
        return customerRepository.save(newCustomer);
    }

    @Override
    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id).orElseThrow(() -> new RuntimeException("Customer not found"));
    }

    @Override
    public Customer updateCustomerById(Long customerId, Customer customer) {
        customerRepository.findById(customerId).orElseThrow(() -> new RuntimeException("Customer not found"));
        customer.setCustomerId(customerId);
        return customerRepository.save(customer);
    }
    @Override
    public Customer updateCustomer(Customer customer) {
        Long customerId = customer.getCustomerId();
        customerRepository.findById(customerId).orElseThrow(() -> new RuntimeException("Customer not found"));
        return customerRepository.save(customer);
    }

    @Override
    public void deleteCustomerById(Long customerId) {
        customerRepository.findById(customerId).orElseThrow(() -> new RuntimeException("Customer not found"));
        customerRepository.deleteById(customerId);

    }

}
