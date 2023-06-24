package edu.miu.cs425.flightbookingsystem.service.mappers;

import edu.miu.cs425.flightbookingsystem.dto.UserDTO;
import edu.miu.cs425.flightbookingsystem.model.User;

public class UserMapper {

    public static UserDTO toUserDTO(User user) {
        return new UserDTO(user.getId(), user.getUsername(), user.getEmail(), user.getPassword(),
                user.getRole());
    }

    public static User toUser(UserDTO userDTO) {
        return new User(userDTO.id(), userDTO.username(), userDTO.email(),
                userDTO.password(), userDTO.role());
    }
}
