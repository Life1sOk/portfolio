import styled from 'styled-components';

export const ButtonBack = styled.div`
    position: relative;

    width: 120px;
    height: 44px;
    background-color: rgba(255,255,255);
    border-radius: 5px;

    box-shadow: 0px 0px 8px 2px rgba(229, 95, 63,0.75) inset;
    -webkit-box-shadow: 0px 0px 2px 4px rgba(0,21,40,1) inset;
    -moz-box-shadow: 0px 0px 8px 2px rgba(229, 95, 63,0.75) inset;
`;

export const ButtonFront = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;

    width: 100%;
    height: 100%;
    color: white;
    background-color: rgba(0,21,40, .9);
    border: none;
    border: 1px solid rgba(255,255,255, .3);
    border-radius: 5px;

    transform: ${({open}) => open ? 'translate(5px, 5px)' : 'translate(0)'};
    transition: transform .5s;

    &:hover {
        border: 1px solid ${({open}) => open ? 'rgba(255,255,255, .3);' : 'rgba(255,255,255, .6)'};
    }

    &:active {
        background-color: rgba(0,21,40);
    }

    & span {
        margin-left: 2px;
    }
`;

export const ButtonWindowContainer = styled.div`
    position: absolute;
    top: 0;
    left: 50%;

    min-width: 100%;
    min-height: 100%;
    padding: 10px;
    background-color: rgba(0,21,40, .9);
    border: 1px solid rgba(255,255,255, .3);
    border-radius: 5px;
    transform: translate(-50%, 50px);

    display: flex;
    justify-content: center;
    align-items: center;

    animation-name: buttonWindow;
    animation-duration: 1s;

    @keyframes buttonWindow {
        0% {
            transform: translate(-50%, 40px);
            opacity: 0;
        };

        50% {
            transform: translate(-50%, 40px);
            opacity: 0;
        }

        100% {
            transform: translate(-50%, 50px);
            opacity: 1;
        }
    };

    &::after {
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);

        content: '';
        width: 6px;
        height: 6px;
        border-top: 1px solid rgba(255,255,255, .3);
        border-left: 1px solid rgba(255,255,255, .3);
        background-color: rgba(0,21,40, .9);
    }
`;

export const WindowActivator = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    cursor: pointer;
`;