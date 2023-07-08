package com.example.springapp.model;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Task {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String name;

  @Override
  public String toString() {
    return "Task [id=" + id + ", name=" + name + ", email=" + email + ", tasks=" + tasks + "]";
  }

  private String email;
  private List<Task> tasks;

  public Task(int id, String name, String email, List<Task> tasks) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.tasks = tasks;
  }

  public Task() {
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public List<Task> getTasks() {
    return tasks;
  }

  public void setTasks(List<Task> tasks) {
    this.tasks = tasks;
  }
}