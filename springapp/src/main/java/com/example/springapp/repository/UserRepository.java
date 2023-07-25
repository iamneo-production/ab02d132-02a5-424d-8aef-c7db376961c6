package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.User;
import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByEmailid(String email);
    List<User> findByUserrole(String userrole);
}
