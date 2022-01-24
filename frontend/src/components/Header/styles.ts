import styled from "styled-components";

export default styled.header`
  width: 100%;
  height: 7.5rem;
  background-color: ${({ theme }) => theme.background.primary};
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: center;

  img {
    object-fit: contain;
  }

  .logo {
    width: 5.25rem;
    margin-right: 2rem;
  }

  .add {
    margin-left: 2rem;
    width: 3.5rem;
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .search_container {
    display: flex;
    flex: 1;
    background: #fff;
    height: 2.25rem;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    padding-right: 1rem;

    input {
      flex: 1;
      align-self: stretch;
      border-radius: 16px;
      padding-left: 1rem;
      border: none;
      outline: none;
    }
  }
`;
