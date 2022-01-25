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
      name: string;
      types: Array<{ slot: number; type: { name: string } }>;
      urlImage: string;
      id: number;
    }>
  >([]);
  const [loading, setLoading] = useState(false);
  const [pokemonsFilter, setPokemonsFilter] = useState<
    Array<{
      name: string;
      types: Array<{ slot: number; type: { name: string } }>;
      urlImage: string;
      id: number;
    }>
  >([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    console.log(search);
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
        const response = await api.get<{
          results: Array<{ name: string; url: string }>;
        }>("pokemon", {
          params: {
            limit: 20,
            offset: page * 20,
          },
        });
        const pokemonUrls = response.data.results.map((pokemon) =>
          getPokemon(pokemon.name)
        );
        const responsePokemons = await Promise.all(pokemonUrls);
        const mapPokemons = responsePokemons.map((pok) => ({
          name: pok.data.name,
          types: pok.data.types,
          urlImage: pok.data.sprites.other.dream_world.front_default,
          id: pok.data.id,
        }));
        setLoading(false);
        setPokemons((props) => [...props, ...mapPokemons]);
      } catch {
        setLoading(false);
      }
    }
    fetchData();
  }, [page]);

  return (
    <Container>
      <div>
        {pokemonsFilter.map((pokemon) => (
          <Link
            to={`/pokemon/${pokemon.id}`}
            key={pokemon.id}
            className="card_Container"
          >
            <PokeCard
              id={pokemon.id}
              types={pokemon.types}
              name={pokemon.name}
              imageUrl={pokemon.urlImage}
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
