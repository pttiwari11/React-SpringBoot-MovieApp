package com.ptcodes.backend.repository;

import com.ptcodes.backend.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Long> {

    //seacrh
    public List<Movie> findByNameContaining(String name);
}
