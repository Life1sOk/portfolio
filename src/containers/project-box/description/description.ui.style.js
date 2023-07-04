import styled from "styled-components";

export const DescriptionUiStyle = styled.div`
  position: relative;

  width: 100%;
  height: fit-content;
  grid-area: ${({ isLeftSide }) => (isLeftSide ? "1 / 7 / -1 / -1" : "1 / 1 / -1 / 7")};

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 1049px) {
    grid-area: ${({ isLeftSide }) => (isLeftSide ? "1 / 6 / -1 / -1" : "1 / 1 / -1 / 8")};
  }


  /* @media only screen and (max-width: 977px) {
    grid-area: ${({ isLeftSide }) => (isLeftSide ? "1 / 6 / -1 / -1" : "1 / 1 / -1 / 8")};
  } */

  /* @media only screen and (max-width: 770px) {
    height: 100%;
    grid-area: 1 / 1/ -1 / -1;
    background-color: rgba(0, 21, 40, 0.9);
    padding: 5%;
    border-radius: 3px;
  } */

  @media only screen and (max-width: 848px) {
    height: 100%;
    grid-area: 1 / 1/ -1 / -1;
    background-color: rgba(0, 21, 40, 0.9);
    padding: 5%;
    border-radius: 3px;
  }
`;

export const Title = styled.h3`
  font-size: 22px;
  margin: ${({ isLeftSide }) => (isLeftSide ? "0 7px 19px 0" : "0 0 19px 7px")};
  text-align: ${({ isLeftSide }) => (isLeftSide ? "right" : "left")};

  @media only screen and (max-width: 848px) {
    margin: 15px 0;
    text-align: left;
  }
`;

export const Main = styled.div`
  position: relative;
  z-index: 3;

  width: 100%;
  height: fit-content;
  padding: 20px;
  margin-bottom: 11px;
  font-size: 15.5px;

  border-radius: 10px;
  background-color: var(--background-secondary);

  & p {
    text-align: ${({ side }) => (side ? side : "left")};
  }

  @media only screen and (max-width: 848px) {
    padding: 0;
    background-color: transparent;

    & p {
      text-align: left;
    }
  }

  @media only screen and (max-width: 410px) {
    line-height: 1.6;
  }
`;

export const Tools = styled.ul`
  position: relative;
  z-index: 3;

  font-size: 14px;
  color: var(--light-yellow);
  margin: ${({ isLeftSide }) => (isLeftSide ? "25px 0 0 18%" : "25px 18% 0 0")};

  display: flex;
  justify-content: ${({ isLeftSide }) => (isLeftSide ? "flex-end" : "flex-start")};
  flex-wrap: wrap;

  & li {
    margin: ${({ isLeftSide }) => (isLeftSide ? "0 20px 5px 0" : "0 0 5px 20px")};
  }

  @media only screen and (max-width: 848px) {
    margin: 18px 0 0 0;
    justify-content: flex-start;
    gap: 11px;

    & li {
      margin: 0;
    }
  }
`;

export const Links = styled.div`
  width: 100%;
  margin-top: 4px;

  display: flex;
  justify-content: ${({ isLeftSide }) => (isLeftSide ? "flex-end" : "flex-start")};

  @media only screen and (max-width: 848px) {
    margin: 0;

    justify-content: flex-end;
  }
`;
