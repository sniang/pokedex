import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Pokedex from "./Pokedex";
import Search from "./Search";
import Pokemon from "./Pokemon";

const NavigationBar = () => {
  return (
    <nav>
      <Link to="/pokedex/">Home</Link>
      <Link to="/pokedex/pokedex">Pokédex</Link>
      <Link to="/pokedex/search">Search</Link>
    </nav>
  );
};

const App = () => (
  <BrowserRouter>
    <NavigationBar />
    <div className="content">
      <Routes>
        <Route path="/pokedex/" element={<Home />} />
        <Route path="/pokedex/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/search" element={<Search />} />
        <Route path="/pokedex/pokemon" element={<Pokemon />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
