package com.example.springapp;

import static org.junit.Assert.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import java.io.File;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


@RunWith(SpringJUnit4ClassRunner.class) 
@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc
class SpringappApplicationTests {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f9fd764 (update 2)
=======
>>>>>>> 5ca8f7b (commit by admin)
=======
>>>>>>> 3c778f1 (Succes Test Cases Passed for few commits)
=======
>>>>>>> f9fd764 (update 2)
	 @Autowired
	    private MockMvc mockMvc;
     
     @Test
     public void testGetUserAll() throws Exception {
     	
         mockMvc.perform(get("/users"))
         .andExpect(MockMvcResultMatchers.status().isOk())
         .andDo(print())
         .andExpect(content().contentType("application/json"))
 			.andExpect(jsonPath("$").isArray())
 			.andReturn();
     }
     
     
     @Test
     public void testGetUserById() throws Exception {
     	
         mockMvc.perform(get("/users").param("id", "1"))
         .andExpect(MockMvcResultMatchers.status().isOk())
         .andDo(print())
         .andExpect(content().contentType("application/json"))
 			.andExpect(jsonPath("$").isArray())
 			.andReturn();
     }
     
     
     @Test
     public void testGetTaskAll() throws Exception {
     	
         mockMvc.perform(get("/tasks"))
         .andExpect(MockMvcResultMatchers.status().isOk())
         .andDo(print())
         .andExpect(content().contentType("application/json"))
 			.andExpect(jsonPath("$").isArray())
 			.andReturn();
     }
     
     
     @Test
     public void testGetTaskById() throws Exception {
     	
         mockMvc.perform(get("/tasks").param("id", "1"))
         .andExpect(MockMvcResultMatchers.status().isOk())
         .andDo(print())
         .andExpect(content().contentType("application/json"))
 			.andExpect(jsonPath("$").isArray())
 			.andReturn();
     }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
	@Test
	void contextLoads() {
	}
>>>>>>> cd76e75 ( update)
=======
>>>>>>> f9fd764 (update 2)
=======
>>>>>>> 5ca8f7b (commit by admin)
=======
>>>>>>> f9fd764 (update 2)

     
     @Test
     public void test_case1() {
     String directoryPath = "src/main/java/com/example/springapp/controller";
      File directory = new File(directoryPath);
      assertTrue(directory.exists() && directory.isDirectory());;
      }
     
     @Test
     public void test_case2() {
     String filePath = "src/main/java/com/example/springapp/controller/TaskController.java";
      File file = new File(filePath);
      assertTrue(file.exists() && file.isFile());;
      }
     
     @Test
     public void test_case3() {
     String directoryPath = "src/main/java/com/example/springapp/model";
      File directory = new File(directoryPath);
      assertTrue(directory.exists() && directory.isDirectory());;
      }
     
     @Test
     public void test_case4() {
     String filePath = "src/main/java/com/example/springapp/model/Task.java";
      File file = new File(filePath);
      assertTrue(file.exists() && file.isFile());;
      }
}
<<<<<<< HEAD
package com.example.springapp;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SpringappApplicationTests {
=======
>>>>>>> cd76e75 ( update)
	@Test
	void contextLoads() {
	}
=======
>>>>>>> 3c778f1 (Succes Test Cases Passed for few commits)

}
=======
>>>>>>> 5ca8f7b (commit by admin)
