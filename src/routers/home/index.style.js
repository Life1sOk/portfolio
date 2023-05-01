import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1299.98px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0 100px;
  overflow-x: hidden;
  background-color: var(--background);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 599px) {
    padding: 0 25px;
  }
`;
