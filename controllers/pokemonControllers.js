import pokedex from "../pokedex.js";

export const getAllPokemon = (req, res) => {
  res.json(pokedex);
};

export const getPokemonById = (req, res) => {
  const pokemonId = req.params.id;

  const foundPokemon = pokedex.filter(
    (pokemon) => pokemon.id === parseInt(pokemonId)
  );

  res.send(foundPokemon[0]);
};
