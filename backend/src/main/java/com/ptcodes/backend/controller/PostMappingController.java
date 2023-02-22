package com.ptcodes.backend.controller;

import com.ptcodes.backend.model.Movie;
import com.ptcodes.backend.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class PostMappingController {

    @Autowired
    private MovieRepository movieRepository;

    @PostMapping("/movie")
    Movie newMovie(@RequestBody Movie newMovie) {
        return movieRepository.save(newMovie);
    }
}
