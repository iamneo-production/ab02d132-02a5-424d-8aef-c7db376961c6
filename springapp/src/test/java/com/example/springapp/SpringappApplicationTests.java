package com.example.springapp;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SpringappApplicationTests {

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
=======
	@Test
	void contextLoads() {
	}
>>>>>>> cd76e75 ( update)
=======
>>>>>>> f9fd764 (update 2)
=======
>>>>>>> 5ca8f7b (commit by admin)

     
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
