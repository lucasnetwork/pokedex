import { useEffect, useState } from "react";
import Container, { Type } from "./styles";
import { useParams } from "react-router-dom";
import { getPokemon } from "../../services/api/pokemon";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState<{
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
  }>();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPokemon(id || 0);
        setPokemon(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <div>
        <img src={pokemon?.image_url} />
        <div>
          <div className="row">
            <div>
              <h2>Nome</h2>
              <p>{pokemon?.name}</p>
            </div>
            <div>
              <h2>Id</h2>
              <p>{pokemon?._id}</p>
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
              <Type color={type.color} className="type" key={type.name}>
                {type.name}
              </Type>
            ))}
          </div>
        </div>
      </div>
      {/* <div>
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
      </div> */}
      <div>
        <div className="search_header">
          <h2>Movimentos</h2>
          <input placeholder="Pesquisar" />
        </div>
      </div>
      <div>
        {pokemon?.moves.map((move, index) => (
          <div className="move" key={move.name}>
            <h3>Move {index + 1}</h3>
            <p>{move.name}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Pokemon;
