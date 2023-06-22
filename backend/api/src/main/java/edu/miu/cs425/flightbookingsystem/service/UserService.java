package edu.miu.cs425.flightbookingsystem.service;

import edu.miu.cs425.flightbookingsystem.model.User;

import java.util.List;

public interface UserService {
    User addUser(User newUser);
    User getUserById(Long id);
    User updateUserById(Long userId, User user);
    User updateUser(User user);
    void deleteUserById(Long userId);

    List<User> getAllUsers();
//    List<Object[]> generateReport();
}
