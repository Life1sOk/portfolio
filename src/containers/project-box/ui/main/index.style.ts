import styled from "styled-components";

export const ProjectBoxStyle = styled.div`
  position: relative;

  width: 100%;
  height: fit-content;
  margin-bottom: 90px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media only screen and (max-width: 1044px) {
    flex-direction: column;
    gap: 10px;
  }

  @media only screen and (max-width: 848px) {
    margin-bottom: 66px;
  }
`;
