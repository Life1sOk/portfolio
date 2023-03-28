import styled from "styled-components";

export const WelcomeStyle = styled.div`
    width: fit-content;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const HelloTitle = styled.h1`
    font-size: 16px;
    color: var(--light-yellow);
    text-align: left;
    margin-bottom: 20px;
`;

export const TextStyle = styled.div`
    color: white;
    font-family: 'Bebas Neue';
    font-style: normal;
    margin-bottom: 15px;;
`;

export const MyName = styled.h2`
    font-size: 56px;
    text-align: left;

    @media only screen and (max-width: 599px) {
       font-size: 44px;
    };
`;

export const MyProf = styled.h3`
    font-size: 50px;
    text-align: left;
    color: #8892b0;

    @media only screen and (max-width: 599px) {
        font-size: 33px;
    };
`;

export const AboutStyle = styled.p`
    margin-bottom: 50px;
    max-width: 540px;
    font-family: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
    color: #8892b0;
    font-size: 16px;
    text-align: left;
    line-height: 1.6;

    .acc {
        font-family: 'Tilt Warp', cursive;
        color: var(--light-yellow);
    }
`;

export const ButtonWrapper = styled.div`
    width: 160px;
    height: 55px;
`;