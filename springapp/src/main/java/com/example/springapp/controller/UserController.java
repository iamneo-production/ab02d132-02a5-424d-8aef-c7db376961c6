package com.example.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.User;
import com.example.springapp.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("https://8081-dafcbabecacecbefdccdeaeaadbdbabf.project.examly.io")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public ResponseEntity<User> createUser(@RequestBody User newUser) {
        User createUser = userService.createUser(newUser);
        return ResponseEntity.ok(createUser);
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> userList = userService.getAllUsers();
        return ResponseEntity.ok(userList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User newUser, @PathVariable Long id) {
        User updatedUser = userService.updateUser(newUser, id);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok("User with ID " + id + " has been deleted successfully.");
    }
    @GetMapping("/byRole/{userrole}")
    public List<User> getUsersByRole(@PathVariable String userrole) {
        return userService.getUsersByRole(userrole);
    }
    

}