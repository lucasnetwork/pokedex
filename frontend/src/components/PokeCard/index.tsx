import Container, { TypePokemon } from "./styles";
import imageCardTest from "../../assets/imageCardTeste.png";
import React from "react";

interface pokeCardProps {
  name: string;
  imageUrl: string;
  id: number;
  types: Array<{ name: string; color: string }>;
}

const PokeCard: React.FC<pokeCardProps> = ({ name, imageUrl, id, types }) => (
  <Container>
    <div className="image_container">
      <img src={imageUrl} />
    </div>
    <div className="footer">
      <p className="id">#{id}</p>
      <p className="name">{name}</p>
      <div className="container_types">
        {types.map((type) => (
          <TypePokemon color={type.color} key={type.name}>
            {type.name}
          </TypePokemon>
        ))}
      </div>
    </div>
  </Container>
);

export default PokeCard;
