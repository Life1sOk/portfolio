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

    @media only screen and (max-width: 1069px) {
       justify-content: space-around;
       gap: 0;
    };

    @media only screen and (max-width: 805px) {

    };
`;

export const LeftContainer = styled.div`
    width: fit-content;
    border-radius: 40px;
    padding-top: 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const FotoWrapper = styled.div`
    width: 300px;
    height: 403.5px;
    border-radius: 10px;
    background-color: rgba(0, 21, 40, .8);

    box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.77);
    -moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);

    @media only screen and (max-width: 929px) {
        transform: scale(.8);
    };

    @media only screen and (max-width: 651px) {
        display: none;
    };
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
    padding: 20px 30px 40px 40px;
    border-radius: 10px;
    background-color: rgba(0, 21, 40, .8);

    box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.77);
    -moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);

    display: flex;
    flex-direction: column;
    gap: 20px;

    @media only screen and (max-width: 929px) {
        transform: scale(.9);
    };

    @media only screen and (max-width: 651px) {
        width: 100%;
        transform: scale(1);
    };
`;

export const PBlock = styled.p`
    font-size: 15px;
    line-height: 1.6;
    text-align: left;
`;