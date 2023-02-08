import styled from "styled-components";

export const LeftContainer = styled.div`
    width: 500px;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 805px) {
        width: 100%;
        height: 200px;
    };

    @media only screen and (max-width: 421px) {
        display: none;
    };
`;