package com.ptcodes.backend.controller;

import com.ptcodes.backend.exception.MovieNotFoundException;
import com.ptcodes.backend.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class DeleteMappingController {
    @Autowired
    private MovieRepository movieRepository;

    @DeleteMapping("/movie/{id}")
    String deleteMovie(@PathVariable Long id) {
        if(!movieRepository.existsById(id)) {
            throw new MovieNotFoundException(id);
        }
        movieRepository.deleteById(id);
        return "Movie with id " + id + " has been deleted successfully";
    }
}
