import styled, { css, keyframes } from "styled-components";

const loadingAnimation = keyframes`
    from{
        transform:rotate(0deg)
    }to{
        transform:rotate(360deg)

    }
`;

export default styled.button<{ loading: boolean }>`
  width: 100%;
  max-width: 26rem;
  height: 4rem;
  background: ${({ theme }) => theme.background.primary};
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  ${({ loading }) =>
    loading &&
    css`
      svg {
        animation: ${loadingAnimation} infinite 1s linear;
      }
    `}
`;
