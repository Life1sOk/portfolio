import styled from "styled-components";

export const ProjectBoxStyle = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  max-width: 1000px;
  margin-bottom: 111px;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  border-radius: 5px;

  @media only screen and (max-width: 848px) {
    margin-bottom: 66px;

    -webkit-box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 0.2);
    -moz-box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 8px -2px var(--light-yellow);
  }
`;
