import styled from 'styled-components';

export const ButtonBack = styled.div`
    /* display: none; */
    position: relative;

    width: ${({type}) => type === 'small' ? '32px' : '120px'};
    height: ${({type}) => type === 'small' ? '32px' : null};
    min-height: 42px;
    background-color: rgba(255,255,255);
    border-radius: 5px;
    flex-shrink: 0;

    box-shadow: 0px 0px 8px 2px rgba(229, 95, 63,0.75) inset;
    -webkit-box-shadow: 0px 0px 2px 4px rgba(0,21,40,1) inset;
    -moz-box-shadow: 0px 0px 8px 2px rgba(229, 95, 63,0.75) inset;

    @media only screen and (min-width: 992px) {
        width: ${({type}) => type === 'small' ? '120px' : '120px'};
        height: ${({type}) => type === 'small' ? 'null' : 'null'};
    };
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
    font-size: .8rem;

    transform: ${({open}) => open ? 'translate(5px, 5px)' : 'translate(0)'};
    transition: transform .5s;

    &:hover {
        border: 1px solid ${({open}) => open ? 'rgba(255,255,255, .3);' : 'rgba(255,255,255, .6)'};
    };

    &:active {
        background-color: rgba(0,21,40);
    };

    & span {
        margin-left: 2px;
    };
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
    transform: ${({type}) => type === 'small' ? 'translate(-91%, 50px)' : 'translate(-50%, 50px)'};

    display: flex;
    justify-content: center;
    align-items: center;

    animation-name: ${({type}) => type === 'small' ? 'smallWindow' : 'buttonWindow'};
    animation-duration: 1s;

    @keyframes smallWindow {
        0% {
            transform: translate(40%, 50px);
            opacity: 0;
        };

        50% {
            transform: translate(40%, 50px);
            opacity: 0;
        }

        100% {
            transform: translate(-91%, 50px);
            opacity: 1;
        }
    };

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
        right: ${({type}) => type !== 'small' ? null : '-4px'};
        top: ${({type}) => type !== 'small' ? '-4px' : null};
        left: ${({type}) => type !== 'small' ? '50%' : null};
        transform: ${({type}) => type !== 'small' ? 'translateY(-50%) rotate(45deg)' : 'translateY(-50%) rotate(135deg)'};

        content: '';
        width: 6px;
        height: 6px;
        border-top: 1px solid rgba(255,255,255, .3);
        border-left: 1px solid rgba(255,255,255, .3);
        background-color: rgba(0,21,40, .9);
    };

    @media only screen and (min-width: 992px) {
        transform: translate(-50%, 50px);
        animation-name: buttonWindow;

        &::after {
            position: absolute;
            top: -4px;
            left: 50%;
            transform: translateY(-50%) rotate(45deg);
        };
    };
`;

export const WindowActivator = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    cursor: pointer;
`;