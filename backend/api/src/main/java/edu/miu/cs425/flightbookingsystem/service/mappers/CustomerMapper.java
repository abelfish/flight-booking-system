package edu.miu.cs425.flightbookingsystem.service.mappers;

import edu.miu.cs425.flightbookingsystem.dto.CustomerDTO;
import edu.miu.cs425.flightbookingsystem.model.Customer;

import java.util.Optional;

public class CustomerMapper {

    public static CustomerDTO toCustomerDTO(Customer customer) {
        return new CustomerDTO(customer.getId(), customer.getFirstName(), customer.getLastName(),
                customer.getDateOfBirth(),
                Optional.ofNullable(customer.getAddress())
                        .map(AddressMapper::toAddressDTO)
                        .orElse(null),
                Optional.ofNullable(customer.getUser())
                        .map(UserMapper::toUserDTO).orElse(null));
    }

    public static Customer toCustomer(CustomerDTO customerDTO) {
        return new Customer(customerDTO.id(), customerDTO.firstName(), customerDTO.lastName(),
                customerDTO.dateOfBirth(),
                Optional.ofNullable(customerDTO.addressDTO())
                        .map(AddressMapper::toAddress)
                        .orElse(null),
                Optional.ofNullable(customerDTO.userDTO())
                        .map(UserMapper::toUser).orElse(null));
    }
}
