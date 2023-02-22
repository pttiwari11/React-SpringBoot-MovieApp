package com.ptcodes.backend.controller;

import com.ptcodes.backend.model.Movie;
import com.ptcodes.backend.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class SearchController {

    @Autowired
    private MovieRepository movieRepository;

    //search handler
    @GetMapping("/search/{query}")
    public ResponseEntity<?> search(@PathVariable("query") String query) {

        //System.out.println(query);
        List<Movie> movies = this.movieRepository.findByNameContaining(query);
        return ResponseEntity.ok(movies);
    }
}
