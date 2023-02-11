import styled from 'styled-components';

export const MainAbout = styled.div`
    height: 100vh;
    width: 100%;
    min-width: 320px;
    padding-top: 65px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 499.98px) and (min-height: 716.98px) {
        flex-direction: column;
        gap: 20px;
    };

    @media only screen and (min-width: 500px) and (max-width: 767.98px) {
        flex-direction: column;
        gap: 20px;
    };

    @media only screen and (min-width: 768px) and (max-width: 991.98px) {
        justify-content: space-around;
    };

    @media only screen and (min-width: 992px) {
        gap: 100px;
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
    width: 300px;
    height: 403.5px;
    border-radius: 10px;
    background-color: rgba(0, 21, 40, .8);

    box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.77);
    -moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);

    @media only screen and (min-width: 499.98px) {
        display: block;
    };

    @media only screen and (max-width: 499.98px) and (min-height: 716.98px) {
        margin: 0 auto;
        width: 50%;
        height: auto;
    };

    @media only screen and (min-width: 500px) and (max-width: 767.98px) {
        margin: 0 auto;
        width: 35%;
        height: auto;
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
    width: 90vw;
    max-width: 400px;
    padding: 20px 30px 40px 40px;
    border-radius: 10px;
    background-color: rgba(0, 21, 40, .8);

    box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.77);
    -moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);

    display: flex;
    flex-direction: column;
    gap: 20px;

    @media only screen and (min-width: 992px) {
        max-width: 500px;
    };
`;

export const PBlock = styled.p`
    font-size: 10px;
    line-height: 1.6;
    text-align: left;

    @media only screen and (min-width: 768px) {
        font-size: .9rem;
    };
`;