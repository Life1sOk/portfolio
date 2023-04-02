import styled from "styled-components";

export const MainWrapper = styled.div`
  padding: 99px 77px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1044px) {
    justify-content: center;
  }

  @media only screen and (max-width: 1242px) {
    padding: 99px 0;
  }
`;

export const MainSkills = styled.div`
  width: 100%;
  max-width: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;

  @media only screen and (max-width: 1044px) {
    width: 100%;
    max-width: 400px;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
`;

export const BoxWrapper = styled.div`
  width: 350px;

  @media only screen and (max-width: 1044px) {
    display: none;
  }
`;
