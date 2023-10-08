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

  padding-top: 12px;
  font-size: 12px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;
