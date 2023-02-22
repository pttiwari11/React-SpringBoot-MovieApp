import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from "./components/Home";
import AddMovie from './components/operations/AddMovie';
import UpdateMovie from './components/operations/UpdateMovie';
import ViewMovie from './components/operations/ViewMovie';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add-movie" element={<AddMovie />} />
          <Route exact path="/update-movie/:id" element={<UpdateMovie />} />
          <Route exact path="/view-movie/:id" element={<ViewMovie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
