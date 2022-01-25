import Container from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../../assets/logo.png";
import addPokemon from "../../assets/addPokemon.png";
import { useContextProvider } from "../../services/context";

const Header = () => {
  const { search, updateSearch } = useContextProvider();

  return (
    <Container>
      <img className="logo" src={logo} />
      <div className="search_container">
        <input
          value={search}
          onChange={(e) => updateSearch(e.target.value)}
          placeholder="Pesquisar"
        />
        <AiOutlineSearch />
      </div>
      <button>
        <img className="add" src={addPokemon} />
      </button>
    </Container>
  );
};

export default Header;
