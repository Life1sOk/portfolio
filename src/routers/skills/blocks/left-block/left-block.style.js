import styled from "styled-components";

export const LeftContainer = styled.div`
    width: 500px;
    height: 650px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 805px) {
        width: 300px;
        height: 200px;
    };

    @media only screen and (max-width: 421px) {
        display: none;
    };
`;

export const BasicsContainer = styled.div`
    position: relative;
    filter: drop-shadow(-21px 2px 6px #000);
    width: 50%;
    transform: scale(2.5) translateY(30px) translateX(20px);

    @media only screen and (max-width: 871px) {
        transform: scale(2) translateY(30px) translateX(20px);
    };

    @media only screen and (max-width: 805px) {
        transform: scale(1) translateY(30px) translateX(0px);
    };
`;