import styled from "styled-components";

export default styled.button`
  width: 100%;
  max-width: 26rem;
  height: 4rem;
  background: ${({ theme }) => theme.background.primary};
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
`;
