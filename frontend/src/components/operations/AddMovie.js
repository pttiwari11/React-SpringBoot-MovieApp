import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddMovie = () => {
  let navigate = useNavigate();

  const [movie, setMovie] = useState({
    name: "",
    genre: "",
  });

   const { name, genre} = movie;

  const onInputChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (movie.name && movie.genre !== "Open this Genre Menu") {
      await axios.post("http://localhost:8080/movie", movie);
      navigate("/");
    } else {
      alert("Empty field detected!");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Movie</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter movie name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Genre
              </label>
              <select className="form-select" aria-label="Genre" name="genre" onChange={(e) => onInputChange(e)}>
                <option selected>Open this Genre Menu</option>
                <option value="Comedy">Comedy</option>
                <option value="Romance">Romance</option>
                <option value="Horror">Horror</option>
                <option value="Action">Action</option>
              </select>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
