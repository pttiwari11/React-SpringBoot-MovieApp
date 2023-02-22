import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewMovie = () => {
  const [movie, setMovie] = useState({
    name: "",
    genre: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/movie/${id}`);
    setMovie(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Movie Details</h2>

          <div className="card">
            <div className="card-header">
              Details of movie id : {movie.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {movie.name}
                </li>
                <li className="list-group-item">
                  <b>Genre:</b>
                  {movie.genre}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewMovie;
