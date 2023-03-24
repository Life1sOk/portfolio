import styled from 'styled-components';

export const MainAbout = styled.div`
    width: 100%;
    padding: 99px 122px 99px 55px;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const FotoWrapper = styled.div`
    position: relative;

    width: 300px;
    height: 403.5px;
    border-radius: 10px;
    background-color: var(--background-secondary);

    box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.77);
    -moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);

    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;

        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: var(--blue);
        opacity: .5;
        transform: translate(-20px, -20px);
        transition: opacity .3s linear;
    }

    :hover {
        cursor: pointer;

        ::before {
            opacity: 0;
        }
    }
`;

export const Foto = styled.img`
    display: ${({ state }) => state ? 'initial' : 'none'};
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transform: translate(-20px, -20px);
    animation: openingFoto 1s ease-out;

    @keyframes openingFoto {
        from {
            transform: translate(-40px, -40px);
            opacity: 0;
        }

        to {
            transform: translateX(-20px) translateY(-20px);
            opacity: 1;
        }
    }
`;