import express from "express";
import pokemonController from "../controller/pokemon.controller";

const router = express.Router();

//route pour ajouter un pokemon
router.post("/add", pokemonController.addPokemon);

//route pour modifier un pokemon
router.put("/update/:pokemonID", pokemonController.modifyPokemon);

//route pour récupérer tous les  pokemons
router.get("/get", pokemonController.getAllPokemon);

//route pour récupérer tous les  pokemons
router.get("/get-pokemon/:pokemonID", pokemonController.getPokemonByID);

export default router;
