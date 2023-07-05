import styled from "styled-components";

export const MainAbout = styled.div`
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
  border-radius: 10px;
  margin-top: 6%;
  background-color: var(--background-secondary);

  box-shadow: 0px 10px 8px 0px rgba(0, 0, 0, 0.77);
  -webkit-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.77);
  -moz-box-shadow: 0px 10px 8px 0px rgba(0, 0, 0, 0.77);
`;

export const Foto = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  transform: translate(-5%, -5%);
`;

export const FotoFront = styled.div`
  display: ${({ isChecked }) => (isChecked ? "none" : "initial")};

  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(64, 87, 143, 0.7);
  border-bottom: 2px solid white;

  transform: translate(-5%, -5%);
  transition: opacity 0.3s linear;

  &:hover {
    opacity: 0;
  }
`;
