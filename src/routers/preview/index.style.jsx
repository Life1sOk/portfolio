import styled from 'styled-components';

export const MainContainer = styled.main`
    height: 100vh;
    width: 100%;
    min-width: 320px;
    padding-top: 65px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 499.98px) {
        /* flex-direction: column; */

        /* gap: 20px; */
    };

    @media only screen and (min-width: 500px) and (max-width: 767.98px) {
        flex-direction: column;
        gap: 20px;
    };

    @media only screen and (min-width: 768px) and (max-width: 991.98px) {
        flex-direction: column;
        gap: 70px;
    };

    @media only screen and (min-width: 992px) and (max-width: 1199.98px) {
        column-gap: 50px;
    };

    @media only screen and (min-width: 1200px) { 
        column-gap: 20px;
    };
`;

export const Introduction = styled.section`
    width: 85%;
    max-width: 450px;
    padding: 20px;
    border-radius: 10px;
    background-color: rgba(0, 21, 40, .8);

    box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.77);
    -moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;

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

    @media only screen and (max-width: 499.98px) {
        padding: 30px;
        width: 85%;
    };

    @media only screen and (min-width: 500px) and (max-width: 767.98px) {
        padding-bottom: 10px;
        margin-bottom: 20px;
    };

    @media only screen and (min-width: 768px) and (max-width: 991.98px) {
        min-width: 400px;
    };

    @media only screen and (min-width: 992px) and (max-width: 1199.98px) {
        min-width: 450px;
    };

    @media only screen and (min-width: 1200px) { 
        margin-right: 100px;
    };
`;

export const IntroductionBottom = styled.div`
    width: 100%;
    max-width: 300px;
    margin: 10px 0;

    display: flex;
    justify-content: space-between;
    gap: 8px;
`;

export const ProfWrapper = styled.span`
    color: #a9c6d9;
    font-size: 26px;
`;

export const IdoWrapper = styled.p`
    margin-top: 10px;
    font-size: .9rem;
    max-width: 400px;
    line-height: 1.6;

    .stand {
        color: #e55f3f;
    };
`;

export const SmallAnimation = styled.div`
    width: 50%;
    perspective: 700px;

    animation-name: smallWindow;
    animation-duration: 2s;
    animation-direction: alternate;
    animation-iteration-count: infinite;

    @keyframes smallWindow {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.02);
        }
    };

    @media only screen and (max-width: 499.98px) {
        display: none;
    };

    @media only screen and (min-width: 992px) {
        display: none;
    };
`;

export const Animation = styled.section`
    width: 50%;
    height: 650px;
    perspective: 700px;

    display: none;
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

    @media only screen and (min-width: 992px) {
        display: flex;
    };
`;

export const MediaWrapper = styled.div`
    @media only screen and (max-width: 500px) and (min-height: 717px) {
        transform: scale(.8);
    };

    @media only screen and (min-width: 500px) {
        transform: scale(.75);
    };

    @media only screen and (min-width: 768px) and (max-width: 991.98px) {
        transform: scale(1);
    }; 

    @media only screen and (min-width: 992px) and (max-width: 1279.98px) {
        transform: scale(.85);
    };

    @media only screen and (min-width: 1280px) { 
        transform: scale(1);
    };
`;

