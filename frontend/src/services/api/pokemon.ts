import api from "../../config/api";

interface pokemonProps {
  name: string;
  url: string;
  types: Array<{ slot: number; type: { name: string } }>;
  id: number;
  weight: number;
  height: number;
  moves: Array<{
    move: {
      name: string;
    };
  }>;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

export const getPokemon = (nameOrId: string | number) =>
  api.get<pokemonProps>(`pokemon/${nameOrId}`);
