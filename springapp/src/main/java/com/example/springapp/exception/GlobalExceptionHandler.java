package com.example.springapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ApiException.class)
    public ResponseEntity<ApiResponse> handledApiExceptio(ApiException ex){
        String message=ex.getMessage();
        ApiResponse apiResponse = new ApiResponse(message, true);
        return  new ResponseEntity<ApiResponse>(apiResponse,HttpStatus.BAD_REQUEST);
    }
}
