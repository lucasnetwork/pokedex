import api from "../../config/api";

interface pokemonProps {
  name: string;
  image_url: string;
  height: string;
  weight: string;
  types: Array<{
    name: string;
    color: string;
  }>;
  _id: number;
  moves: Array<{
    _id: string;
    name: string;
    description: string;
  }>;
}

export const getPokemon = (nameOrId: string | number) =>
  api.get<pokemonProps>(`pokemon/${nameOrId}`);
