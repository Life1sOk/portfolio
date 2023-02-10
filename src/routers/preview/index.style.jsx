import styled from 'styled-components';

export const MainContainer = styled.main`
    width: 100vw;
    height: 100vh;
    min-width: 370px;

    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 50px;


    @media only screen and (max-width: 1150px) {
        column-gap: 0px;
    };

    @media only screen and (max-width: 1016px) {
        justify-content: center;
    };
`;

export const Introduction = styled.section`
    width: 50%;
    max-width: 500px;
    padding: 30px;
    margin-top: 30px; // check thant
    border-radius: 10px;
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

    @media only screen and (max-width: 1150px) {
        max-width: 400px;
        padding: 30px 5px;
    };

    @media only screen and (max-width: 1016px) {
        width: 100%;
        max-width: 500px;
        padding: 30px;
    };

    @media only screen and (max-width: 551px) {
        padding: 20px;
        max-width: 400px;
    };
`;

export const IntroductionBottom = styled.div`
    position: relative;
    width: 75%;
    height: fit-content;
    /* margin-top: 50px; */
    margin: 25px 0;

    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1150px) {
        width: 90%;
    };

    /* @media only screen and (max-width: 551px) {
        width: 80%;
    };

    @media only screen and (max-width: 430px) {
        width: 100%;
    }; */
`;

export const ProfWrapper = styled.span`
    color: #a9c6d9;
    font-size: 26px;

    @media only screen and (max-width: 551px) {
        font-size: 20px;
    };
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

    @media only screen and (max-width: 551px) {
        font-size: 15px;
    };
`;

export const Animation = styled.section`
    /* width: 600px; */
    width: 50%;
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

    @media only screen and (max-width: 1189px) {
       width: 500px;
    };

    @media only screen and (max-width: 1016px) {
        display: none;
    };
`;

export const MediaWrapper = styled.div`
    margin-top: 40px; // check thant
    transform: scale(.9); // check thant

     @media only screen and (max-width: 1189px) {
       transform: scale(.8);
    };
`;