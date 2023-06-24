package edu.miu.cs425.flightbookingsystem.service.impl;

import edu.miu.cs425.flightbookingsystem.dto.CustomerDTO;
import edu.miu.cs425.flightbookingsystem.model.Role;
import edu.miu.cs425.flightbookingsystem.repository.CustomerRepository;
import edu.miu.cs425.flightbookingsystem.service.CustomerService;
import edu.miu.cs425.flightbookingsystem.service.mappers.CustomerMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository customerRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public List<CustomerDTO> getAllCustomers() {

        return customerRepository.findAll()
                .stream()
                .map(CustomerMapper::toCustomerDTO).toList();
    }

    @Override
    public List<Object[]> generateReport() {
        return customerRepository.getCustomerReport();
    }

    @Override
    public CustomerDTO addCustomer(CustomerDTO newCustomerDTO) {
        var customer = CustomerMapper.toCustomer(newCustomerDTO);
        if (customer.getUser() != null)
            customer.getUser().setRole(Role.CUSTOMER);
        customer.getUser().setPassword(passwordEncoder.encode(customer.getUser().getPassword()));
        return CustomerMapper.toCustomerDTO(customerRepository.save(customer));
    }

    @Override
    public CustomerDTO getCustomerById(Long id) {
        return customerRepository.findById(id)
                .map(CustomerMapper::toCustomerDTO)
                .orElseThrow(() -> new RuntimeException("Customer not found"));
    }

    @Override
    public CustomerDTO updateCustomerById(Long customerId, CustomerDTO customerDTO) {
        customerRepository.findById(customerId).orElseThrow(() -> new RuntimeException("Customer not found"));
        var customer = CustomerMapper.toCustomer(customerDTO);
        customer.setId(customerId);
        return CustomerMapper.toCustomerDTO(customerRepository.save(customer));
    }


    @Override
    public void deleteCustomerById(Long customerId) {
        customerRepository.findById(customerId).orElseThrow(() -> new RuntimeException("Customer not found"));
        customerRepository.deleteById(customerId);

    }

}
