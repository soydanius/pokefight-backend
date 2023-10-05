import express from "express";
import {
  getAllPokemon,
  getPokemonById,
} from "../controllers/pokemonControllers.js";

const pokemonRouter = express.Router();

pokemonRouter
.get("/", getAllPokemon) //gesammte pokemonlist der API
.get("/:id", getPokemonById); //die eine ID aus der Liste, von Pokemon

// zweimal get weil wir mehrere information haben die wir benötigen
// zB. Charmander ID und dann nur die Statuswerte von diesem einem pokemon
 
export default pokemonRouter;
