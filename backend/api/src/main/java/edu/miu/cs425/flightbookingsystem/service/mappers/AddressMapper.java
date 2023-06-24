package edu.miu.cs425.flightbookingsystem.service.mappers;

import edu.miu.cs425.flightbookingsystem.dto.AddressDTO;
import edu.miu.cs425.flightbookingsystem.model.Address;

public class AddressMapper {

    public static AddressDTO toAddressDTO(Address address) {
        return new AddressDTO(address.getId(), address.getStreet(), address.getCity(), address.getState(), address.getZipCode());
    }

    public static Address toAddress(AddressDTO addressDTO) {
        return new Address(addressDTO.id(), addressDTO.street(), addressDTO.city(), addressDTO.state(), addressDTO.zipCode());
    }
}
