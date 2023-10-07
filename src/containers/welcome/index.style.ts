import styled from "styled-components";

export const WelcomeStyle = styled.div`
  width: fit-content;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  animation-name: open;
  animation-duration: 1s;

  @keyframes open {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const HelloTitle = styled.h1`
  font-size: 16px;
  color: var(--light-yellow);
  text-align: left;
  margin-bottom: 20px;
`;

export const TextStyle = styled.div`
  color: white;
  font-family: var(--font-name);
  font-style: normal;
  margin-bottom: 30px;
`;

export const MyName = styled.h2`
  font-size: 56px;
  text-align: left;

  @media only screen and (max-width: 599px) {
    font-size: 44px;
  }
`;

export const MyProf = styled.h3`
  max-width: 555px;

  font-size: 40px;
  text-align: left;
  color: var(--font-color);

  @media only screen and (max-width: 599px) {
    font-size: 33px;
  }
`;

export const AboutStyle = styled.article`
  display: flex;
  flex-direction: column;

  margin-bottom: 34px;
  max-width: 566px;
  font-family: var(--font-main);
  color: var(--font-color);
  font-size: 15.5px;
  text-align: left;
  line-height: 1.6;

  .acc {
    margin-top: 14px;
    font-size: 16px;
    font-weight: 500;
    color: var(--light-yellow);
  }

  @media only screen and (max-width: 599px) {
    margin-bottom: 33px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 133px;
  height: 52px;
`;
