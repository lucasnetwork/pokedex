import Container from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../../assets/logo.png";
import addPokemon from "../../assets/addPokemon.png";

const Header = () => (
  <Container>
    <img className="logo" src={logo} />
    <div className="search_container">
      <input placeholder="Pesquisar" />
      <AiOutlineSearch />
    </div>
    <button>
      <img className="add" src={addPokemon} />
    </button>
  </Container>
);

export default Header;
