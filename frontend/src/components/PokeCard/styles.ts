import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: 16.87rem;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 0px 0px 16px 16px;

  .image_container {
    flex: 3;
    max-height: 60%;
    position: relative;
    display: flex;

    align-items: center;
    justify-content: center;
    border: none;
    outline: none;

    img {
      height: 100%;
      width: 100%;
      padding: 1rem;
      object-fit: contain;
    }
  }

  .footer {
    flex: 1;
    background: ${({ theme }) => theme.background.primary};
    border-radius: 0px 0px 16px 16px;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    align-items: start;
    padding-left: 0.5rem;
    justify-content: space-between;

    .id {
      color: #fff;
      font-size: 0.5rem;
    }

    .name {
      font-size: 1.5rem;
      color: #fff;
      font-weight: bold;
    }

    .container_types {
      button {
        width: 3.6rem;
        height: 1.3rem;
        background: #408861;
        border: none;
        margin-right: 0.5rem;
        color: #fff;
      }
    }
  }
`;
