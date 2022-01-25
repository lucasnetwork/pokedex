import { useEffect, useState } from "react";
import Button from "../../components/Button";
import PokeCard from "../../components/PokeCard";
import api from "../../config/api";
import Container from "./styles";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useContextProvider } from "../../services/context";
import { useParams } from "react-router-dom";
const Pokemon = () => {
  const [pokemon, setPokemon] = useState<{
    name: string;
    types: Array<{ slot: number; type: { name: string } }>;
    urlImage: string;
    id: number;
    weight: number;
    height: number;
    // evolutions: Array<{
    //   name: string;
    //   urlImage: string;
    // }>;
  }>();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get<{
          name: string;
          url: string;
          types: Array<{ slot: number; type: { name: string } }>;
          id: number;
          weight: number;
          height: number;
          sprites: {
            other: {
              dream_world: {
                front_default: string;
              };
            };
          };
        }>(`pokemon/${id}`);
        console.log(response);
        setPokemon({
          name: response.data.name,
          types: response.data.types,
          urlImage: response.data.sprites.other.dream_world.front_default,
          id: response.data.id,
          weight: response.data.weight,
          height: response.data.height,
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
          <div className="pokemon_container">
            <img src={pokemon?.urlImage} />
          </div>
        </div>
      </div>
      <div>
        <div className="search_header">
          <h2>Movimentos</h2>
          <input placeholder="Pesquisar" />
        </div>
      </div>
      <div>
        <div className="move">
          <h3>Teste</h3>
          <p>fsdfdjslkfjsdjfjdskjflkjdslkjfldjsjfkldsklfjsd</p>
        </div>
        <div className="move">
          <h3>Teste</h3>
          <p>fsdfdjslkfjsdjfjdskjflkjdslkjfldjsjfkldsklfjsd</p>
        </div>
        <div className="move">
          <h3>Teste</h3>
          <p>fsdfdjslkfjsdjfjdskjflkjdslkjfldjsjfkldsklfjsd</p>
        </div>
        <div className="move">
          <h3>Teste</h3>
          <p>fsdfdjslkfjsdjfjdskjflkjdslkjfldjsjfkldsklfjsd</p>
        </div>
        <div className="move">
          <h3>Teste</h3>
          <p>fsdfdjslkfjsdjfjdskjflkjdslkjfldjsjfkldsklfjsd</p>
        </div>
      </div>
    </Container>
  );
};

export default Pokemon;
