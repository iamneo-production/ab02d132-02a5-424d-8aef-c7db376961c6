package com.example.springapp.repository;

import com.example.springapp.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    // all crud database methods
    List<Task> findByAssignedTo(String assignedBy);
}