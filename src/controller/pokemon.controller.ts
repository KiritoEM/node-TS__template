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

  async modifyPokemon(req: Request, res: Response) {
    try {
      const { pokemonID } = req.params;
      let updatedPokemon = await pokemonService.updatePokemon(
        pokemonID,
        req.body
      );

      if (updatedPokemon) {
        res
          .status(200)
          .json({ message: "Pokemon modifié avec succès", updatedPokemon });
      } else {
        res
          .status(500)
          .json({ message: "Échec de la modification du Pokémon" });
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getAllPokemon(req: Request, res: Response) {
    try {
      let AllPokemon = await pokemonService.readPokemon();

      if (AllPokemon) {
        res.status(200).json({
          message: "Tous les pokemon récupéré avec succés",
          AllPokemon,
        });
      } else {
        res
          .status(500)
          .json({ message: "Échec de la récupération de tous les pokemons" });
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getPokemonByID(req: Request, res: Response) {
    try {
      const { pokemonID } = req.params;
      console.log(pokemonID);

      let pokemon = await pokemonService.readPokemonByID(pokemonID);

      if (pokemon) {
        res.status(200).json({
          message: "pokemon récupéré avec succés",
          pokemon,
        });
      } else {
        res
          .status(500)
          .json({ message: "Échec de la récupération d'un pokemon" });
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async removePokemon(req: Request, res: Response) {
    try {
      const { pokemonID } = req.params;

      let deletedPokemon = await pokemonService.deletePokemon(pokemonID);

      if (deletedPokemon === true) {
        res.status(200).json({
          message: "pokemon supprimé avec succés",
        });
      } else {
        res
          .status(500)
          .json({ message: "Échec de la suppression d'un pokemon" });
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

export default new PokemonController();
