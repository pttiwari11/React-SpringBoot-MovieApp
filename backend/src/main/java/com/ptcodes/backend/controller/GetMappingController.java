package com.ptcodes.backend.controller;

import com.ptcodes.backend.exception.MovieNotFoundException;
import com.ptcodes.backend.model.Movie;
import com.ptcodes.backend.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class GetMappingController {

    @Autowired
    private MovieRepository movieRepository;

    @GetMapping("/movies")
    List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @GetMapping("/movie/{id}")
    Movie getMovieById(@PathVariable Long id) {
        return movieRepository.findById(id)
                .orElseThrow(()-> new MovieNotFoundException(id));
    }
}
