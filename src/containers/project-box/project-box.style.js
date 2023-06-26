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

export const ImageWrapper = styled.div`
  height: 100%;
  position: relative;
  grid-area: ${({ isLeftSide }) => (isLeftSide ? "1 / 1 / -1 / 8" : "1 / 6 / -1 / -1")};

  border-radius: 5px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    width: 100%;
    height: inherit;
    border-radius: 5px;
    background-color: rgba(64, 87, 143, 0.7);
    border-bottom: 2px solid white;

    transition: opacity 0.3s linear;

    @media only screen and (max-width: 848px) {
      display: none;
    }
  }

  &:hover {
    cursor: pointer;

    ::before {
      opacity: 0;
    }
  }

  @media only screen and (max-width: 977px) {
    grid-area: ${({ isLeftSide }) => (isLeftSide ? "1 / 1 / -1 / 9" : "1 / 5 / -1 / -1")};
  }

  @media only screen and (max-width: 848px) {
    border-radius: 5px;
    grid-column: 1 / -1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Description = styled.div`
  position: relative;

  width: 100%;
  height: fit-content;
  grid-area: ${({ isLeftSide }) => (isLeftSide ? "1 / 7 / -1 / -1" : "1 / 1 / -1 / 7")};

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 977px) {
    grid-area: ${({ isLeftSide }) => (isLeftSide ? "1 / 6 / -1 / -1" : "1 / 1 / -1 / 8")};
  }

  @media only screen and (max-width: 848px) {
    height: 100%;
    grid-area: 1 / 1/ -1 / -1;
    background-color: rgba(0, 21, 40, 0.9);
    padding: 5%;
    border-radius: 5px;
    /* border: 1px solid rgba(255, 255, 255, 0.2); */
  }
`;

export const DesTitle = styled.h3`
  font-size: 22px;
  margin: ${({ isLeftSide }) => (isLeftSide ? "0 22px 22px 0" : "0 0 22px 22px")};
  text-align: ${({ isLeftSide }) => (isLeftSide ? "right" : "left")};

  @media only screen and (max-width: 848px) {
    margin: 15px 0 11px 0;
    text-align: left;
  }
`;

export const DesMain = styled.div`
  position: relative;
  z-index: 3;

  width: 100%;
  height: fit-content;
  padding: 25px;
  font-size: 16px;

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
  margin-top: 11px;

  display: flex;
  justify-content: ${({ isLeftSide }) => (isLeftSide ? "flex-end" : "flex-start")};

  @media only screen and (max-width: 848px) {
    margin: 0;

    justify-content: flex-end;
  }
`;

export const LinkWrapper = styled.a`
  width: 40px;
  aspect-ratio: 1/1;
  padding: 10px;

  & svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    cursor: pointer;
    color: var(--blue);
  }
`;
