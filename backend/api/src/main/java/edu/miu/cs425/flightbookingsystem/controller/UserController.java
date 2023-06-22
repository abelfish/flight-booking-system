package edu.miu.cs425.flightbookingsystem.controller;

import edu.miu.cs425.flightbookingsystem.dto.UserDTO;
import edu.miu.cs425.flightbookingsystem.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    @GetMapping
    public ResponseEntity<?> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> addNewUser(@RequestBody UserDTO newUser) {
        return new ResponseEntity<>(userService.addUser(newUser), HttpStatus.CREATED);
    }

    @GetMapping(value = {"/{userId}"})
    public ResponseEntity<?> getUserById(@PathVariable Long userId) {
        try {
            return new ResponseEntity<>(userService.getUserById(userId), HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping(value = {"/{userId}"})
    public ResponseEntity<?> updateUserById(@PathVariable Long userId, @RequestBody UserDTO user) {
        try {
            return new ResponseEntity<>(userService.updateUserById(userId, user), HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }


    @DeleteMapping(value = {"/{userId}"})
    public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
        try {
            userService.deleteUserById(userId);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }


}
