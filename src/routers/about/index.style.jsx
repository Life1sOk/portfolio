import styled from 'styled-components';

export const MainAbout = styled.div`
    width: 100%;
    height: calc(var(--vh, 1vh) * 100 - 65.5px);
    max-width: 1117px;
    min-width: 320px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 992px) {
        justify-content: space-around;
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
    display: none;

    @media only screen and (min-width: 992px) {
        display: initial;
        width: 300px;
        height: 403.5px;
        border-radius: 10px;
        background-color: rgba(0, 21, 40, .8);

        box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
        -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.77);
        -moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
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
    width: 90%;
    max-width: 450px;
    padding: 10px 20px 20px 30px;
    border-radius: 10px;
    background-color: rgba(0, 21, 40, .8);

    box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.77);
    -moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);

    display: flex;
    flex-direction: column;
    gap: 10px;

    @media only screen and (min-width: 499px) {
        padding: 20px 30px 30px 40px;
    };

    @media only screen and (min-width: 768px) {
        max-width: 500px;
        gap: 20px;
    };
`;

export const PBlock = styled.p`
    font-size: 14px;
    line-height: 1.6;
    text-align: left;

    @media only screen and (min-width: 768px) {
        font-size: 16px;
    };
`;