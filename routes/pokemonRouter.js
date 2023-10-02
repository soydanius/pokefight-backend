import express from "express";
import { getAllPokemon } from "../controllers/pokemonControllers.js";

const pokemonRouter = express.Router();

pokemonRouter.get("/", getAllPokemon);

export default pokemonRouter;
