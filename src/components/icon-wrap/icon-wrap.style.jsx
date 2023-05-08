import styled from "styled-components";

export const IconWrapContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 15px 10px;
  border-radius: 5px;
  background-color: var(--background-secondary);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;

  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.75);
`;

export const IconWrap = styled.div`
  width: 55%;
  max-width: 55px;
  aspect-ratio: 1 / 1;
  color: var(--font-color);

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const NameFont = styled.span`
  font-size: 14px;
  color: var(--font-color);
`;
