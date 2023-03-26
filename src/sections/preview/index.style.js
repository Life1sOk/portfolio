import styled from 'styled-components';

export const MainContainer = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: space-around;

    @media only screen and (max-width: 1366px) {
        justify-content: center;
        gap: 44px;
    };
`;

export const Animation = styled.section`
    width: 34%;
    perspective: 700px;

    @media only screen and (max-width: 1280px) {
        display: none;
    };
`;