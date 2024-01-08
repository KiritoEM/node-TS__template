import { Document } from "mongoose";

interface Ipokemon extends Document {
  name: string;
  type: string;
  level: number;
  attacks_type: IpokemonAttacks[];
}

type IpokemonAttacks = {
  basic: string;
  special: string;
};

export { Ipokemon };
