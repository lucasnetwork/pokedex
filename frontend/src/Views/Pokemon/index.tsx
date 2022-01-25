import { useEffect, useState } from "react";
import Button from "../../components/Button";
import PokeCard from "../../components/PokeCard";
import api from "../../config/api";
import Container from "./styles";
import { BsArrowRight } from "react-icons/bs";
import { useContextProvider } from "../../services/context";
import { useParams } from "react-router-dom";
import { getPokemon } from "../../services/api/pokemon";
import { AxiosResponse } from "axios";
const Pokemon = () => {
  const [pokemon, setPokemon] = useState<{
    name: string;
    types: Array<{ slot: number; type: { name: string } }>;
    urlImage: string;
    id: number;
    weight: number;
    height: number;
    moves: Array<{
      move: {
        name: string;
      };
    }>;
    evolutions: Array<{
      id: number;
      urlImage: string;
    }>;
  }>();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const getNameOfEvolutions = (
        array: any,
        finalArray: Array<
          Promise<
            AxiosResponse<{
              id: number;
              sprites: {
                other: {
                  dream_world: {
                    front_default: string;
                  };
                };
              };
            }>
          >
        >
      ): Array<
        Promise<
          AxiosResponse<{
            id: number;
            sprites: {
              other: {
                dream_world: {
                  front_default: string;
                };
              };
            };
          }>
        >
      > => {
        console.log(array);
        if (!array) {
          return [...finalArray];
        }
        return getNameOfEvolutions(array.evolves_to[0], [
          ...finalArray,
          getPokemon(array.species.name),
        ]);
      };
      try {
        const response = await getPokemon(id || 0);
        console.log(response);
        const evolutionsResponse = await api.get<any>(`evolution-chain/${id}`);
        console.log(evolutionsResponse);
        const evolutions = getNameOfEvolutions(
          evolutionsResponse.data.chain,
          []
        );
        console.log(evolutions);
        const evolutionsWithImagesResponse = await Promise.all(evolutions);
        console.log(evolutionsWithImagesResponse);
        const evolutionsPokemon = evolutionsWithImagesResponse.map(
          (evolution) => ({
            id: evolution.data.id,
            urlImage: evolution.data.sprites.other.dream_world.front_default,
          })
        );
        setPokemon({
          name: response.data.name,
          types: response.data.types,
          urlImage: response.data.sprites.other.dream_world.front_default,
          id: response.data.id,
          weight: response.data.weight,
          height: response.data.height,
          moves: response.data.moves,
          evolutions: evolutionsPokemon,
          // evolutions: Array<{
          //   name: string;
          //   urlImage: string;
          // }>;
        });
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <div>
        <img src={pokemon?.urlImage} />
        <div>
          <div className="row">
            <div>
              <h2>Nome</h2>
              <p>{pokemon?.name}</p>
            </div>
            <div>
              <h2>Id</h2>
              <p>{pokemon?.id}</p>
            </div>
          </div>
          <div className="row">
            <div>
              <h2>Altura</h2>
              <p>{pokemon?.height}</p>
            </div>
            <div>
              <h2>Peso</h2>
              <p>{pokemon?.weight}</p>
            </div>
          </div>
          <div className="row types">
            {pokemon?.types.map((type) => (
              <span className="type" key={type.type.name}>
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2>Evolução</h2>
        <div className="container_evolution">
          {pokemon?.evolutions.map((evolution, index) => (
            <div key={evolution.id}>
              <div className="pokemon_container">
                <img src={evolution.urlImage} />
              </div>
              {pokemon.evolutions.length == index + 1 ? (
                <></>
              ) : (
                <span>
                  <BsArrowRight size={36} />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="search_header">
          <h2>Movimentos</h2>
          <input placeholder="Pesquisar" />
        </div>
      </div>
      <div>
        {pokemon?.moves.map((move, index) => (
          <div className="move" key={move.move.name}>
            <h3>Move {index + 1}</h3>
            <p>{move.move.name}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Pokemon;
