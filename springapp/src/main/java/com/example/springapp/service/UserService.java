package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.springapp.exception.UserNotFoundException;
import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    @Autowired
    public UserService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
		this.bCryptPasswordEncoder = new BCryptPasswordEncoder();
    }
    public User createUser(User user) {
		BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder();
		String encryptedpwd=bCryptPasswordEncoder.encode(user.getPassword());
		 user.setUsername(user.getUsername());
         user.setEmailid(user.getEmailid());
         user.setPassword(encryptedpwd);
         user.setUserrole(user.getUserrole());
         return userRepository.save(user);
		
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    public User updateUser(User newUser, Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setEmailid(newUser.getEmailid());
                    user.setPassword(newUser.getPassword());
                    user.setUserrole(newUser.getUserrole());
                    return userRepository.save(user);
                })
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
    }
    
}
