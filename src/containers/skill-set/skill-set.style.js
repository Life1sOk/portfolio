import styled from "styled-components";

export const SkillSetStyle = styled.div`
  width: 90%;
  min-width: 360px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1044px) {
    min-width: initial;
  }
`;

export const BasicsContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  font-size: 12px;

  display: grid;
  grid-template-columns: repeat(3, minmax(44px, 1fr));
  justify-items: center;
  grid-gap: 22px;

  @media only screen and (max-width: 411px) {
    grid-gap: 15px;
    font-size: 10px;
  }
`;

export const FrameworksContainer = styled(BasicsContainer)`
  border-top: 1px solid var(--blue);
  border-bottom: 1px solid var(--blue);
`;
