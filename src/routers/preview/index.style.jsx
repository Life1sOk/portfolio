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
        min-height: calc(100vh - 65.5px);
        justify-content: space-around;
    };
`;

export const Introduction = styled.section`
    width: 85%;
    height: fit-content;
    max-width: 450px;
    max-height: 550px;
    margin-bottom: 20px;
    padding: 33px 20px;
    border-radius: 10px;
    background-color: rgba(0, 21, 40, .8);

    box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.77);
    -moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    animation-name: animationIntro;
    animation-duration: 3s;
    animation-direction: alternate;

    @keyframes animationIntro {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    };

    @media only screen and (min-width: 499.98px) {
        max-width: 460px;
        max-height: 350px;
        height: 100%;
        padding: 20px;
        margin-bottom: 20px;
        gap: 17px;
    };
`;

export const IntroductionBottom = styled.div`
    width: 100%;
    max-width: 420px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    @media only screen and (max-width: 429.98px) and (min-height: 635px) {
        flex-direction: column;
        gap: 20px;
    };
`;

export const ProfWrapper = styled.span`
    color: #a9c6d9;
    font-size: 23px;

    @media only screen and (min-width: 768px) {
        font-size: 26px;
    };
`;

export const IdoWrapper = styled.p`
    font-size: 16px;
    max-width: 400px;
    line-height: 1.6;

    .stand {
        color: #e55f3f;
    };
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

