import { useEffect, useState } from "react";
import Button from "../../components/Button";
import PokeCard from "../../components/PokeCard";
import api from "../../config/api";
import Container from "./styles";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useContextProvider } from "../../services/context";
import { Link } from "react-router-dom";
import { getPokemon } from "../../services/api/pokemon";
const Home = () => {
  const { search } = useContextProvider();
  const [pokemons, setPokemons] = useState<
    Array<{
      _id: string;
      name: string;
      image_url: string;
      types: Array<{
        _id: string;
        name: string;
        color: string;
      }>;
      moves: Array<{
        _id: string;
        name: string;
        description: string;
      }>;
    }>
  >([]);
  const [loading, setLoading] = useState(false);
  const [pokemonsFilter, setPokemonsFilter] = useState<
    Array<{
      _id: string;
      name: string;
      image_url: string;
      types: Array<{
        _id: string;
        name: string;
        color: string;
      }>;
      moves: Array<{
        _id: string;
        name: string;
        description: string;
      }>;
    }>
  >([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    console.log(search);
    console.log(pokemons);
    if (!search) {
      setPokemonsFilter(pokemons);
      return;
    }
    const newPokemonsFilter = pokemons.filter((poke) =>
      poke.name.includes(search)
    );
    setPokemonsFilter(newPokemonsFilter);
  }, [pokemons, search]);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await api.get<
          Array<{
            _id: string;
            name: string;
            image_url: string;
            types: Array<{
              _id: string;
              name: string;
              color: string;
            }>;
            moves: Array<{
              _id: string;
              name: string;
              description: string;
            }>;
          }>
        >("pokemon", {
          params: {
            limit: 20,
            offset: page * 20,
          },
        });
        // const pokemonUrls = response.data.map((pokemon) =>
        //   getPokemon(pokemon.name)
        // );
        // const responsePokemons = await Promise.all(pokemonUrls);
        // const mapPokemons = responsePokemons.map((pok) => ({
        //   name: pok.data.name,
        //   types: pok.data.types,
        //   urlImage: pok.data.sprites.other.dream_world.front_default,
        //   id: pok.data.id,
        // }));
        setLoading(false);
        setPokemons(response.data);
      } catch {
        setLoading(false);
      }
    }
    fetchData();
  }, [page]);

  return (
    <Container>
      <div>
        {pokemonsFilter.map((pokemon, index) => (
          <Link
            to={`/pokemon/${pokemon._id}`}
            key={pokemon._id}
            className="card_Container"
          >
            <PokeCard
              id={index}
              types={pokemon.types}
              name={pokemon.name}
              imageUrl={pokemon.image_url}
            />
          </Link>
        ))}
      </div>
      <div className="button_container">
        <Button
          type="button"
          loading={loading}
          onClick={() => {
            if (loading) {
              return;
            }
            setPage((props) => props + 1);
          }}
        >
          {loading ? <AiOutlineLoading3Quarters /> : "Mostrar Mais"}
        </Button>
      </div>
    </Container>
  );
};

export default Home;
