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

    .container_image {
      grid-column: span 3;
    }

    .container_evolution {
      grid-column: span 12;
      background: #634646;
      border-radius: 32px;
      padding: 2rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      > div {
        display: flex;
        align-items: center;
        span {
          margin-left: 2rem;
          margin-right: 2rem;
        }
      }

      .pokemon_container {
        background: #3c3535;
        border-radius: 500px;
        width: 13.25rem;
        height: 13.25rem;
        padding: 2rem;
        display: flex;
        align-items: center;
        img {
          width: 100%;
        }
      }
    }

    .move {
      grid-column: span 12;
      display: flex;
      margin-bottom: 1rem;
      h3,
      p {
        font-weight: bold;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.text.primary};
      }
      p {
        margin-left: 1.5rem;
        font-weight: normal;
      }
    }

    .search_header {
      display: flex;
      grid-column: span 12;
      margin-top: 4rem;
      margin-bottom: 2rem;

      h2 {
        font-weight: bold;
        font-size: 2rem;
        color: ${({ theme }) => theme.text.primary};
        margin-right: 2rem;
      }
      input {
        height: 3.5rem;
        padding-left: 2rem;
        display: flex;
        flex: 1;
        height: 2.25rem;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        padding-right: 1rem;
        border: 1px solid #000000;
        box-sizing: border-box;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.text.primary};
      }
    }

    > h2 {
      grid-column: span 12;
      font-weight: bold;
      font-size: 2rem;
      color: ${({ theme }) => theme.text.primary};
    }

    > img {
      grid-column: span 3;
      width: 100%;
    }
    > div {
      grid-column: 5 / span 8;

      .row {
        display: flex;
        margin-bottom: 2rem;
        > div {
          margin-right: 2rem;
          h2 {
            font-weight: bold;
            font-size: 2rem;
            color: ${({ theme }) => theme.text.primary};
            margin-bottom: 1rem;
          }

          p {
            color: ${({ theme }) => theme.text.primary};
            font-size: 1.5rem;
          }
        }

        .type {
          width: 13.25rem;
          height: 2rem;
          margin-right: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #c4c4c4;
          font-size: 1.5rem;
          color: ${({ theme }) => theme.text.primary};
          font-weight: bold;
        }
      }

      .types {
        margin-top: 6rem;
      }
    }
    .move_container {
      margin-bottom: 2rem;
    }
  }
`;
