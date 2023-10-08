import styled from "styled-components";

export const IconWrapContainer = styled.div`
  width: 100%;
  /* height: fit-content; */
  aspect-ratio: 1 / 1;
  max-width: 75px;
  /* padding: 15px 10px; */
  border-radius: 5px;
  background-color: var(--background-secondary);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;

  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.75);
`;

export const IconWrap = styled.div`
  width: 55%;
  max-width: 25px;
  aspect-ratio: 1 / 1;
  color: var(--font-color);

  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 100%;
    height: 100%;
    fill: white;
  }
`;

export const NameFont = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--font-color);

  display: flex;
  align-items: center;
`;
