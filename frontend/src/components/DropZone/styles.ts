import styled, { css } from "styled-components";

export default styled.div<{ existFile: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > div {
    flex: 1;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 100%;
  }

  ${({ existFile, theme }) =>
    !existFile &&
    css`
      border: 2px dashed ${theme.text.primary};
    `}
`;
