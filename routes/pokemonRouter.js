import express from "express";
import {
  getAllPokemon,
  getPokemonById,
} from "../controllers/pokemonControllers.js";

const pokemonRouter = express.Router();

pokemonRouter.get("/", getAllPokemon).get("/:id", getPokemonById);

export default pokemonRouter;
