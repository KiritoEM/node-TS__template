import pokemon from "../models/pokemon.model";
import { Ipokemon } from "../interfaces/interfaces";

class pokemonService {
  static createPokemon(pokemonData: Ipokemon): Promise<Ipokemon> {
    const newPokemon = new pokemon({ ...pokemonData });
    return newPokemon.save();
  }
}

export default pokemonService;
