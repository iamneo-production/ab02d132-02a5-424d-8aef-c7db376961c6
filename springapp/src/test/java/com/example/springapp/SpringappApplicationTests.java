package com.example.springapp;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SpringappApplicationTests {

<<<<<<< HEAD
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
=======
	@Test
	void contextLoads() {
	}
>>>>>>> cd76e75 ( update)

}
