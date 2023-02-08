import styled from 'styled-components';

export const MainContainer = styled.main`
    width: 100vw;
    max-width: 100vw;
    min-width: 370px;
    height: 100vh;
    /* background-color: #001528; */
    padding-top: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
    column-gap: 50px;

    @media only screen and (max-width: 1016px) {
        width: 100%;
    };
`;

export const Introduction = styled.section`
    width: 500px;
    padding: 30px 0;
    border-radius: 40px;
    background-color: rgba(0, 21, 40, .8);

    box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.77);
    -moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);

    display: flex;
    flex-direction: column;
    align-items: center;

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

    @media only screen and (max-width: 551px) {
        width: 100%;
        margin: 0 20px;
    };
`;

export const IntroductionBottom = styled.div`
    position: relative;
    width: 75%;
    height: fit-content;
    margin-top: 50px;

    display: flex;
    justify-content: flex-end;

    @media only screen and (max-width: 551px) {
        width: 80%;
    };

    @media only screen and (max-width: 430px) {
        width: 100%;
    };
`;

export const ProfWrapper = styled.span`
    color: #a9c6d9;
    font-size: 26px;
`;

export const IdoWrapper = styled.p`
    margin-top: 10px;
    font-size: 18px;
    max-width: 400px;
    line-height: 1.6;

    .stand {
        color: #e55f3f;
    };

    @media only screen and (max-width: 1016px) {
        max-width: 100%;
    };
`;

export const Animation = styled.section`
    width: 600px;
    height: 650px;
    perspective: 700px;

    display: flex;
    flex-direction: column;

    animation-name: animationWindow;
    animation-duration: 2s;
    animation-direction: alternate;
    animation-iteration-count: infinite;

    @keyframes animationWindow {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.02);
        }
    };

    @media only screen and (max-width: 1016px) {
        display: none;
    };
`;