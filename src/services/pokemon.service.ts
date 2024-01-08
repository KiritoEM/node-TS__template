import pokemon from "../models/pokemon.model";
import { Ipokemon } from "../interfaces/interfaces";

class pokemonService {
  static createPokemon(pokemonData: Ipokemon): Promise<Ipokemon> {
    const newPokemon = new pokemon({ ...pokemonData });
    return newPokemon.save();
  }

  static updatePokemon(
    id: string,
    updateData: Ipokemon
  ): Promise<Ipokemon | null> {
    return pokemon.findByIdAndUpdate(id, updateData, { new: true });
  }

  static readPokemon(): Promise<Ipokemon[]> {
    return pokemon.find();
  }

  static async readPokemonByID(id: string): Promise<Ipokemon[]> {
    return await pokemon.findById(id);
  }

  static async deletePokemon(id: string): Promise<boolean> {
    let response = await pokemon.findByIdAndDelete(id);
    if (response) {
      return true;
    } else {
      return false;
    }
  }
}

export default pokemonService;
