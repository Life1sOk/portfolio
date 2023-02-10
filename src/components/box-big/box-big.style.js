import styled from "styled-components";

export const BoxWrapper = styled.div`
    perspective: 750px;
    perspective-origin: 50% 100px;

    animation: animationBox 2s ease-in;

    @keyframes animationBox {
        0%{
            transform: translateY(-100px);
        }

        100%{
            transform: translateY(0px);
        }
    };

    @media only screen and (max-width: 805px) {
        transform: scale(.5);
    };
`;

export const BoxContainer = styled.div`
    position: relative;
    height: 300px;
    width: 300px;
    transform-style: preserve-3d;
    animation: spinner 45s linear infinite;

    @keyframes spinner {
        0%{
            transform: rotateY(0);
        }

        100%{
            transform: rotateY(1turn);
        }
    };

    #front {
        transform: translateZ(150px);
        box-shadow: inset 0 20px 100px #02203c;
    };

    #back {
        transform: translateZ(-150px) rotateY(180deg);
        box-shadow: inset 0 0 30px #02203c;
    };

    #left {
        right: 150px;
        transform: rotateY(-90deg);
        box-shadow: inset 0 0 35px #02203c;
    };

    #rigth {
        left: 150px;
        transform: rotateY(90deg);
        box-shadow: inset 0 0 35px #02203c;
    };

    #top{
        bottom: 150px;
        transform: rotateX(90deg);
        box-shadow: inset 0 0 35px #02203c;
    };

    #bottom {
        top: 150px;
        transform: rotateX(-90deg);
        box-shadow: inset 0 0 35px #02203c;
        filter: drop-shadow(0px 0px 100px #7E57C2);

        animation: shadow 2s ease-in;

        @keyframes shadow {
            0%{
                filter: drop-shadow(0px 0px 0px #7E57C2);
            }

            100%{
                filter: drop-shadow(0px 0px 40px #7E57C2);
            }
        };
    };
`;

export const CardSide = styled.div`
    position: absolute;
    height: 300px;
    width: 300px;
    text-align: center;
    color: white;
    background-color: rgba(64, 87, 143, .6);
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
    };
`;