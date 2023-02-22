package com.ptcodes.backend.exception;

public class MovieNotFoundException extends RuntimeException {
    public MovieNotFoundException(Long id) {
        super("Could not found the movie with id " + id);
    }
}
