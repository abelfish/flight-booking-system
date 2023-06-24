package edu.miu.cs425.flightbookingsystem.service.impl;


import edu.miu.cs425.flightbookingsystem.dto.AuthenticationResponse;
import edu.miu.cs425.flightbookingsystem.dto.UserDTO;
import edu.miu.cs425.flightbookingsystem.model.User;
import edu.miu.cs425.flightbookingsystem.repository.UserRepository;
import edu.miu.cs425.flightbookingsystem.service.UserService;
import edu.miu.cs425.flightbookingsystem.service.mappers.UserMapper;
import edu.miu.cs425.flightbookingsystem.service.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

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
        if (userRepository.existsByUsername(user.getEmail())) {
            throw new RuntimeException("Username already exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
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

    @Override
    public AuthenticationResponse login(UserDTO userDTO) {
        var user = UserMapper.toUser(userDTO);
        try {


            Authentication authentication =
                    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);
            var token = jwtService.generateToken(user);
            return new AuthenticationResponse(token);
        } catch (RuntimeException e) {
            throw new RuntimeException("User Not Logged In");
        }
    }

    @Override
    public UserDTO findByUsername(String username) {
        try {
            User user = userRepository.findByUsername(username).get();
            return UserMapper.toUserDTO(user);
        } catch (RuntimeException e) {
            throw new UsernameNotFoundException("User Not Found");
        }
    }



}
