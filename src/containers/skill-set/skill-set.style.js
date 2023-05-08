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

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(97px, 1fr));
  justify-items: center;
  grid-gap: 22px;
`;

export const FrameworksContainer = styled(BasicsContainer)`
  border-top: 1px solid var(--blue);
  border-bottom: 1px solid var(--blue);
`;
