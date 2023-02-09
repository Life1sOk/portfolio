import styled from 'styled-components';

export const MainAbout = styled.div`
    width: 100vw;
    max-width: 100vw;
    min-width: 370px;
    height: 100vh;
    padding-top: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 120px;

    @media only screen and (max-width: 805px) {
        padding-top: 100px;
        flex-direction: column;
    };
`;

export const LeftContainer = styled.div`
    width: fit-content;
    /* height: 100%; */
    border-radius: 40px;
    padding-top: 20px;
    /* perspective: 1000px; */
    /* transform: rotateY(26deg);
    transform-style: preserve-3d; */

    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const FotoWrapper = styled.div`
    /* width: 220px;
    height: 296.83px; */
    width: 300px;
    height: 403.5px;
    /* margin-top: 10px; */
    border-radius: 10px;
    background-color: rgba(0, 21, 40, .8);

    /* transform: rotateY(26deg);
    transform-style: preserve-3d; */

    box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.77);
    -moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
`;

export const QuoteWrapper = styled.p`
    width: 350px;
    padding: 10px 10px 10px 15px;
    background-color: rgba(0, 21, 40, .8);
    border-radius: 10px;
    font-size: 15px;
    line-height: 1.6;
    text-align: left;

    box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.77);
    -moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
`;

export const Quote = styled.q`
    /* text-align: left; */
`;

export const Foto = styled.img`
    display: ${({state}) => state ? 'initial' : 'none'};
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transform: translateX(20px) translateY(-20px);
    animation: openingFoto 1s ease-out;

    
    @keyframes openingFoto {
        from {
            transform: translateX(40px) translateY(-40px);
            opacity: 0;
        }

        to {
            transform: translateX(20px) translateY(-20px);;
            opacity: 1;
        }
    }
`;

export const RightContainer = styled.div`
    width: 550px;
    /* height: 100%; */
    padding: 40px 30px 40px 40px;
    border-radius: 40px;
    background-color: rgba(0, 21, 40, .8);

    box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.77);
    -moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);

    display: flex;
    flex-direction: column;
    gap: 20px;

    @media only screen and (max-width: 871px) {
    };

    @media only screen and (max-width: 805px) {
    };
`;

export const PBlock = styled.p`
    font-size: 15px;
    line-height: 1.6;
    text-align: left;
`;