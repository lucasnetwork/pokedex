import styled from "styled-components";

export default styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-top: 2rem;

  > div {
    grid-template-columns: repeat(12, 1fr);
    display: grid;
    grid-column-gap: 2rem;
    grid-column: 2 / span 10;
    grid-row-gap: 2rem;
  }
  .button_container {
    justify-content: center;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .card_Container {
    grid-column: span 2;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
