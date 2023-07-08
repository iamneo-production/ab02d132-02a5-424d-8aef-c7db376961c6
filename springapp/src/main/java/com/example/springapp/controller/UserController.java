package com.example.springapp.controller;

import java.util.List;

import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;
import com.example.springapp.exception.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController{
    @Autowired
    private UserRepository userRepository;
   
    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable(value = "id") int id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
        return ResponseEntity.ok(user);
   }
}