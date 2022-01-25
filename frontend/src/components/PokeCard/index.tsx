import Container from "./styles";
import imageCardTest from "../../assets/imageCardTeste.png";

const PokeCard = () => (
  <Container>
    <div className="image_container">
      <img src={imageCardTest} />
    </div>
    <div className="footer">
      <p className="id">#001</p>
      <p className="name">Nome</p>
      <div className="container_types">
        <button type="button">Grama</button>
        <button type="button">Grama</button>
      </div>
    </div>
  </Container>
);

export default PokeCard;
