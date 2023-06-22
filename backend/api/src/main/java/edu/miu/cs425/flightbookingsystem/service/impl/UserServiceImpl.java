package edu.miu.cs425.flightbookingsystem.service.impl;

import edu.miu.cs425.flightbookingsystem.model.User;
import edu.miu.cs425.flightbookingsystem.repository.UserRepository;
import edu.miu.cs425.flightbookingsystem.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public User addUser(User newUser) {
        return userRepository.save(newUser);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long userId) {
        return userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Override
    public User updateUserById(Long userId, User user) {
        userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        user.setUserId(userId);
        return userRepository.save(user);
    }

    @Override
    public User updateUser(User user) {
        userRepository.findById(user.getUserId()).orElseThrow(() -> new RuntimeException("User not found"));
        user.setUserId(user.getUserId());
        return userRepository.save(user);
    }

    @Override
    public void deleteUserById(Long userId) {
        userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        userRepository.deleteById(userId);
    }
}
