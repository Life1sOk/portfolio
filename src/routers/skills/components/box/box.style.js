import styled from "styled-components";

export const BoxWrapper = styled.div`
    position: absolute;
    top: ${({top}) => top ? `${top}px` : '0'};
    left: ${({left}) => left ? `${left}px` : '0'};
    perspective: 1000px;
    perspective-origin: 50% 50%;
    z-index: ${({number}) => number ? number : '0'};

    animation-name: animationBox;
    animation-duration: ${({duration}) => duration ? `${duration}s` : '0s'};
    animation-timing-function: ease-in;

    @keyframes animationBox {
        0%{
            opacity: 0;
            transform: translateY(-90px);
        }

        100%{
            transform: translateY(0px);
        }
    }
`;

export const BoxContainer = styled.div`
    position: relative;
    height: 50px;
    width: 50px;
    transform-style: preserve-3d;
    transform: ${({rotate}) => rotate ? `rotateY(${rotate}deg)`: '0'};

    #front {
        transform: translateZ(25px);
        box-shadow: inset 0 20px 100px #02203c;
    }

    #back {
        transform: translateZ(-25px) rotateY(180deg);
        box-shadow: inset 0 0 30px #02203c;
    }

    #left {
        right: 25px;
        transform: rotateY(-90deg);
        box-shadow: inset 0 0 35px #02203c;
    }

    #rigth {
        left: 25px;
        transform: rotateY(90deg);
        box-shadow: inset 0 0 35px #02203c;
    }

    #top{
        bottom: 25px;
        transform: rotateX(90deg);
        box-shadow: inset 0 0 35px #02203c;
    }

    #bottom {
        top: 25px;
        transform: rotateX(-90deg);
        box-shadow: inset 0 0 35px #02203c;
    }
`;

export const CardSide = styled.div`
    position: absolute;
    height: 50px;
    width: 50px;
    text-align: center;
    color: white;
    background-color: rgba(64, 87, 143, .9);
    border: 1px solid white;
    font-size: 14px;
    box-sizing: border-box;
    transition: all 1s;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IconWrap = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({color}) => color ? color : 'white'};

    svg {
        width: 60%;
        height: 60%;
    }
`;