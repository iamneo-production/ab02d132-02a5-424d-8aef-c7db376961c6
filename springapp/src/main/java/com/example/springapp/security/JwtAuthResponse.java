package com.example.springapp.security;

import com.example.springapp.model.User;

import lombok.Data;

@Data
public class JwtAuthResponse {
	private String token;
	private User user;
}
