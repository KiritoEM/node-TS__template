import express from "express";
import pokemonController from "./../controller/pokemon.controller";

const router = express.Router();

//route pour ajouter un pokemon
router.post("/add", pokemonController.addPokemon);

export default router;
