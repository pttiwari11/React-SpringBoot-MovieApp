import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setValue] = useState("")

  const { id } = useParams();

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const result = await axios.get("http://localhost:8080/movies");
    setMovies(result.data);
  };

  const deleteMovie = async (id) => {
    await axios.delete(`http://localhost:8080/movie/${id}`);
    loadMovies();
  };

  const search = () => {
    let query=searchValue;
    if(query===""){
        loadMovies();
    } else {
        let url = `http://localhost:8080/search/${query}`;
        axios.get(url).then((resp) => {
            return resp;
        }).then((data) => {
            setMovies(data.data);
        })
    }
  }

  return (
    <div className="container">
      <div className="py-4">
        
        <div className="search-container my-3">
            <input onKeyUp={search} onChange={(e) => setValue(e.target.value)} id="search-input" type="text" className="form-control text-success" placeholder="Search ypur movies" />
        </div>
        
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Genre</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{movie.name}</td>
                <td>{movie.genre}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/view-movie/${movie.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/update-movie/${movie.id}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteMovie(movie.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Home;
