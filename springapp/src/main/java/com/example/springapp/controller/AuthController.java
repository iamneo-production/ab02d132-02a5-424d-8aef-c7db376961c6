package com.example.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.User;
import com.example.springapp.exception.ApiException;
import com.example.springapp.repository.UserRepository;
import com.example.springapp.security.CustomUserDetailsService;
import com.example.springapp.security.JwtAuthRequest;
import com.example.springapp.security.JwtAuthResponse;
import com.example.springapp.security.JwtTokenHelper;

@RestController
@RequestMapping("/api")
@CrossOrigin("https://8081-bdbdbfdecebafacecbefdccdeaeaadbdbabf.project.examly.io")
public class AuthController {
    
    @Autowired
    private JwtTokenHelper jwtTokenHelper;
    @Autowired
    private CustomUserDetailsService customUserDetailsService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<JwtAuthResponse> createToken(@RequestBody JwtAuthRequest request) throws Exception{
        System.out.println(request.getUsername()+"  "+request.getPassword());
        this.authenticate(request.getUsername(),request.getPassword());
        UserDetails userDetails = this.customUserDetailsService.loadUserByUsername(request.getUsername());
        String token = this.jwtTokenHelper.generateToken(userDetails);
        JwtAuthResponse response = new JwtAuthResponse();
        User user = this.userRepository.findByEmailid(request.getUsername());
        response.setToken(token);
        response.setUser(user);
        return new ResponseEntity<JwtAuthResponse>(response, HttpStatus.OK);
    }
   
    private   void authenticate(String username, String password) throws Exception {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
        try {
            this.authenticationManager.authenticate(authenticationToken);
        } catch (BadCredentialsException e) {
            System.out.println("Invalid Details !!");
            throw new ApiException("Invalid username or password !!");
        }
    }
    
}
