import styled from "styled-components";

export const MainContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 65.5px);
  background-color: var(--background);

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1280px) {
    justify-content: center;
  }
`;

export const Animation = styled.section`
  width: 34%;
  perspective: 700px;

  @media only screen and (max-width: 1280px) {
    display: none;
  }
`;
