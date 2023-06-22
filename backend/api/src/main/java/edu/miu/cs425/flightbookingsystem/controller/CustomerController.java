package edu.miu.cs425.flightbookingsystem.controller;

import edu.miu.cs425.flightbookingsystem.model.Customer;
import edu.miu.cs425.flightbookingsystem.service.CustomerService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/customers")
public class CustomerController {
    private final CustomerService customerService;
    @RequestMapping (value = {"/"})
    public ResponseEntity<?> getAllCustomers() {
        return new ResponseEntity<>(customerService.getAllCustomers(), HttpStatus.OK);
    }
    @PostMapping(value = {"/"})
    public ResponseEntity<?> addNewCustomer(@RequestBody Customer newCustomer) {
        return new ResponseEntity<>(customerService.addCustomer(newCustomer), HttpStatus.CREATED);
    }
    @GetMapping(value = {"/{customerId}"})
    public ResponseEntity<?> getCustomerById(@PathVariable Long customerId) {
        try {
            return new ResponseEntity<>(customerService.getCustomerById(customerId), HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping(value = {"/{customerId}"})
    public ResponseEntity<?> updateCustomerById(@PathVariable Long customerId, @RequestBody Customer customer) {
        try {
            return new ResponseEntity<>(customerService.updateCustomerById(customerId, customer), HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping(value = {"/"})
    public ResponseEntity<?> updateCustomer(@RequestBody Customer customer) {
        try {
            return new ResponseEntity<>(customerService.updateCustomer(customer), HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping(value = {"/{customerId}"})
    public ResponseEntity<?> deleteCustomer(@PathVariable Long customerId) {
        try {
            customerService.deleteCustomerById(customerId);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping(value = {"/generateReport"})
    public ResponseEntity<?> generateReport() {
        return new ResponseEntity<>(customerService.generateReport(), HttpStatus.OK);
    }
}
