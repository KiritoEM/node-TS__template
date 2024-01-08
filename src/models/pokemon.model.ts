import mongoose, { Document, Schema, model } from "mongoose";
import { Ipokemon } from "../interfaces/interfaces";

const pokemonSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    default: 1,
  },
  attacks_type: {
    basic: { type: String },
    special: { type: String },
  },
});

const pokemon = model<Ipokemon>("Pokemon", pokemonSchema);

export default pokemon;
