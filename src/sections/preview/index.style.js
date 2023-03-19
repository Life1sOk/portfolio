import styled from 'styled-components';

import check from '../../assets/lines/line55.png';

export const MainWrapper = styled.div`
    position: relative;
    width: 100%;
    padding-top: 95.5px;
    background-color: #001528;
`;

export const Checker = styled.div`
    width: 650px;
    /* height: 100px; */
    aspect-ratio: 1 / 1;
    background-color: white;

    position: absolute;
    top: 40px;
    left: 390px;

    mask-image: url(${check});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;

    background: url(${check});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    transform: rotate(165deg);
`;

export const MainContainer = styled.section`
    width: 90vw;
    max-width: 1299.98px;
    min-width: 320px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Introduction = styled.section`
    width: 100%;
    height: fit-content;
    margin-bottom: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media only screen and (min-width: 499.98px) {
        width: fit-content;
        min-width: 700px;
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
    width: 90%;
    padding: 30px 10px 0 10px;

    display: flex;
    align-items: center;
    gap: 50px;
`;

export const ButtonWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
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
        perspective: 700px;

        display: flex;
        flex-direction: column;

        /* animation-name: animationWindow;
        animation-duration: 2s;
        animation-direction: alternate;
        animation-iteration-count: infinite; */
    };
`;

export const MediaWrapper = styled.div`
    margin-top: 30px;

    @media only screen and (min-width: 992px) and (max-width: 1279.98px) {
        transform: scale(.85);
    };

    @media only screen and (min-width: 1280px) { 
        transform: scale(1);
    };
`;

