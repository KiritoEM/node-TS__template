import { Request, Response } from "express";
import pokemonService from "../services/pokemon.service";

class pokemonController {
  static async addPokemon(req: Request, res: Response) {
    try {
      let newPokemon = await pokemonService.createPokemon(req.body);

      newPokemon
        ? res
            .status(200)
            .json({ message: "pokemon ajouté avec succés", newPokemon })
        : res.status(500).json({ message: "Echec de l' ajout du pokemon" });
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

export default pokemonController;
