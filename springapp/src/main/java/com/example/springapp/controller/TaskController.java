package com.example.springapp.controller;

import com.example.springapp.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.springapp.model.Task;
import com.example.springapp.repository.TaskRepository;

import java.util.List;
import java.util.Optional;
@CrossOrigin("https://8081-fdbdefcaaebefacecbefdccdeaeaadbdbabf.project.examly.io")
@RestController
@RequestMapping("/api/leader/tasks")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;



    // API to get all tasks
    @GetMapping
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    // build create employee REST API
    @PostMapping("/add")
    public Task createTask(@RequestBody Task obj) {
        return taskRepository.save(obj);
    }

    // API to get a task by ID
    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        Optional<Task> task = taskRepository.findById(id);
        if (task.isPresent()) {
            return ResponseEntity.ok(task.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }





    // API to update a task by ID
    @PutMapping("/EditTask/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task updatedTask) {
        Optional<Task> optionalTask = taskRepository.findById(id);
        if (optionalTask.isPresent()) {
            Task task = optionalTask.get();
            task.setTaskName(updatedTask.getTaskName());
            task.setTaskDescription(updatedTask.getTaskDescription());
            task.setDueDate(updatedTask.getDueDate());
            task.setStatus(updatedTask.getStatus());

            Task savedTask = taskRepository.save(task);
            return ResponseEntity.ok(savedTask);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/AssignTask/{id}")
    public ResponseEntity<Task> AssignTask(@PathVariable Long id, @RequestBody Task updatedTask) {
        Optional<Task> optionalTask = taskRepository.findById(id);
        if (optionalTask.isPresent()) {
            Task task = optionalTask.get();
            task.setAssignedTo(updatedTask.getAssignedTo
                    ());

            Task savedTask = taskRepository.save(task);
            return ResponseEntity.ok(savedTask);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        Task obj = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

        taskRepository.delete(obj);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

}

