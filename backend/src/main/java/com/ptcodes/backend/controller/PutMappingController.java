package com.ptcodes.backend.controller;

import com.ptcodes.backend.exception.MovieNotFoundException;
import com.ptcodes.backend.model.Movie;
import com.ptcodes.backend.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class PutMappingController {
    @Autowired
    private MovieRepository movieRepository;

    @PutMapping("/movie/{id}")
    Movie updatedMovie(@RequestBody Movie newMovie, @PathVariable Long id) {
        return movieRepository.findById(id)
                .map(movie -> {
                    movie.setName(newMovie.getName());
                    movie.setGenre(newMovie.getGenre());
                    return movieRepository.save(movie);
                }).orElseThrow(() -> new MovieNotFoundException(id));
    }
}
