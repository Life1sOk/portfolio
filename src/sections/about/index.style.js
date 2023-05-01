import styled from "styled-components";

export const MainAbout = styled.div`
  width: 100%;
  padding: 99px 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 944px) {
    padding: 66px 0;

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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    width: 100%;
    height: 100%;
    border-bottom: 2px solid white;
    border-radius: 10px;
    background-color: ${({ checked }) =>
      !checked ? "rgba(64, 87, 143, .5)" : "rgba(64, 87, 143, 0)"};
    transform: translate(-5%, -5%);
    transition: all 0.3s linear;
  }

  &:hover {
    cursor: pointer;

    &::before {
      opacity: 0;
    }
  }
`;

export const Foto = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  transform: translate(-5%, -5%);
  animation: openingFoto 1s ease-out;

  @keyframes openingFoto {
    from {
      transform: translate(-7%, -7%);
      opacity: 0;
    }

    to {
      transform: translate(-5%, -5%);
      opacity: 1;
    }
  }
`;
