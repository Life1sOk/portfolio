import styled from 'styled-components';

export const MainContainer = styled.main`
    width: 100%;
    height: calc(var(--vh, 1vh) * 100 - 65.5px);
    max-width: 1299.98px;
    min-width: 320px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1049.98px) {
        height: 100%;
        /* padding-right: 40px; */
        min-height: calc(100vh - 65.5px);
        justify-content: space-between;
    };
`;

export const Introduction = styled.section`
    width: 100%;
    height: fit-content;
    max-width: 450px;
    max-height: 550px;
    margin-bottom: 20px;
    /* padding: 33px 20px; */

    display: flex;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
    gap: 20px;

    @media only screen and (min-width: 499.98px) {
        width: fit-content;
        min-width: 700px;
        min-height: 80vh;
        margin-bottom: 20px;
        gap: 30px;
    };
`;

export const PlanetWrapper = styled.div`
    position: relative;

    width: 100%;
    height: 300px;
`;

export const PrevWrapper = styled.div`
    width: 100%;
    height: 300px;

    border: 1px solid white;
`;

export const Animation = styled.section`
    display: none;

    @keyframes animationWindow {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.02);
        }
    };

    @media only screen and (min-width: 1049.98px) {
        width: 50%;
        height: 650px;
        perspective: 700px;

        display: flex;
        flex-direction: column;

        animation-name: animationWindow;
        animation-duration: 2s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
    };
`;

export const MediaWrapper = styled.div`
    @media only screen and (min-width: 992px) and (max-width: 1279.98px) {
        transform: scale(.85);
    };

    @media only screen and (min-width: 1280px) { 
        transform: scale(1);
    };
`;

