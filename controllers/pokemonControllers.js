import pokedex from "../pokedex.json" assert { type: "json" };

export const getAllPokemon = (req, res) => {
  res.json(pokedex);
};

/* export const getPokemonById = (req, res) => {
  res.send("getPokemonById");
};
 */
