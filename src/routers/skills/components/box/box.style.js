import styled from "styled-components";

export const BoxWrapper = styled.div`
    perspective: 1000px;
`;

export const BoxContainer = styled.div`
        height: 250px;
        width: 250px;
        /* position: absolute;
        top: 100px;
        left: 100px; */
        transform-style: preserve-3d;
        /* animation-name: animation;
        animation-duration: 5s;
        animation-iteration-count: infinite; */

    /* @keyframes animation {
        0%{
            transform: rotateY(0deg) rotateX(0deg);
        }
        25%{
            transform: rotateY(90deg) rotateX(90deg);
        }
        50%{
            transform: rotateY(180deg) rotateX(180deg) ;
        }
        75%{
            transform: rotateY(270deg) rotateX(270deg) ;
        }
        100%{
            transform: rotateY(360deg) rotateX(360deg);
        }
    } */

    #front {
        transform: translateZ(-125px);
    }

    #back {
        transform: translateZ(125px);
    }

    #left {
        right: 125px;
        transform: rotateY(-90deg);
    }

    #rigth {
        left: 125px;
        transform: rotateY(90deg);
    }

    #top{
        bottom: 125px;
        transform: rotateX(90deg);
    }

    #bottom {
        top: 125px;
        transform: rotateX(-90deg);
    }
`;

export const CardSide = styled.div`
    height: 250px;
    width: 250px;
    text-align: center;
    padding: 100px 0px;
    color: white;
    background-color: rgb(63,94,251);
    border: 2px solid white;
    font-size: 32px;
    box-sizing: border-box;
    position: absolute;
    transition: all 1s;
`;