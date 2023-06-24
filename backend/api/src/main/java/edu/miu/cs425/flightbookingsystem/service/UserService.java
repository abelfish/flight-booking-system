package edu.miu.cs425.flightbookingsystem.service;


import edu.miu.cs425.flightbookingsystem.dto.AuthenticationResponse;
import edu.miu.cs425.flightbookingsystem.dto.UserDTO;

import edu.miu.cs425.flightbookingsystem.model.User;


import java.util.List;

public interface UserService {

    UserDTO addUser(UserDTO newUserDTO);

    UserDTO getUserById(Long id);

    UserDTO updateUserById(Long userId, UserDTO UserDTO);


    void deleteUserById(Long userId);

    List<UserDTO> getAllUsers();

    AuthenticationResponse login(UserDTO userDTO);

    UserDTO findByUsername(String username);


}
