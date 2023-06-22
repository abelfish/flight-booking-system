package edu.miu.cs425.flightbookingsystem.service.impl;

import edu.miu.cs425.flightbookingsystem.dto.UserDTO;
import edu.miu.cs425.flightbookingsystem.repository.UserRepository;
import edu.miu.cs425.flightbookingsystem.service.UserService;
import edu.miu.cs425.flightbookingsystem.service.mappers.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public List<UserDTO> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(UserMapper::toUserDTO).toList();
    }

//    @Override
//    public List<Object[]> generateReport() {
//        return userRepository.getUserReport();
//    }

    @Override
    public UserDTO addUser(UserDTO newUserDTO) {
        var user = UserMapper.toUser(newUserDTO);
        return UserMapper.toUserDTO(userRepository.save(user));
    }

    @Override
    public UserDTO getUserById(Long id) {
        return userRepository.findById(id)
                .map(UserMapper::toUserDTO)
                .orElseThrow(() -> new RuntimeException("User not " + "found"));
    }

    @Override
    public UserDTO updateUserById(Long userId, UserDTO userDTO) {
        userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        var user = UserMapper.toUser(userDTO);
        user.setId(userId);
        return UserMapper.toUserDTO(userRepository.save(user));
    }


    @Override
    public void deleteUserById(Long userId) {
        userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        userRepository.deleteById(userId);
    }
}
