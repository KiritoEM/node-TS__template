import { Request, Response } from "express";
import pokemonService from "../services/pokemon.service";

class PokemonController {
  async addPokemon(req: Request, res: Response) {
    try {
      let newPokemon = await pokemonService.createPokemon(req.body);

      if (newPokemon) {
        res
          .status(200)
          .json({ message: "Pokemon ajouté avec succès", newPokemon });
      } else {
        res.status(500).json({ message: "Échec de l'ajout du Pokémon" });
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

export default new PokemonController;