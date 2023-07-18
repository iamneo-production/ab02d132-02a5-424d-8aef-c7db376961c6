// package com.example.springapp.controller;

// import java.util.List;

// import com.example.springapp.model.Task;
// import com.example.springapp.repository.TaskRepository;
// import com.example.springapp.exception.ResourceNotFoundException;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// @RestController
// @CrossOrigin
// @RequestMapping("/tasks")
// public class TaskController{
//     @Autowired
//     private TaskRepository taskRepository;
   
//     @GetMapping
//     public List<Task> getAllTasks() {
//         return taskRepository.findAll();
//     }
//     @GetMapping("/{id}")
//     public ResponseEntity<Task> getTaskById(@PathVariable(value = "id") int id) {
//         Task task = taskRepository.findById(id)
//                 .orElseThrow(() -> new ResourceNotFoundException("task not found with id: " + id));
//         return ResponseEntity.ok(task);
//    }
// }