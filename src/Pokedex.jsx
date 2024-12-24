import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    fetch("https://pokedex.mimo.dev/api/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemons(data));
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      <h1>All Pokemon</h1>
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </>
  );
};

export default Pokedex;
