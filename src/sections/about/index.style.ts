import styled from "styled-components";

export const MainAbout = styled.section`
  width: 100%;
  padding: 99px 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 1044px) {
    flex-direction: column;
    align-items: center;
    gap: 22px;
  }

  @media only screen and (max-width: 1112px) {
    justify-content: space-between;
    gap: 44px;
  }
`;

export const FotoWrapper = styled.div`
  position: relative;

  width: 55%;
  min-width: 233px;
  max-width: 300px;
  aspect-ratio: 3 / 4;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 3%;
  background-color: var(--background-secondary);

  box-shadow: 0px 10px 8px 0px rgba(0, 0, 0, 0.77);
  -webkit-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.77);
  -moz-box-shadow: 0px 10px 8px 0px rgba(0, 0, 0, 0.77);
`;
