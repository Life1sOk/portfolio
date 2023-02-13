import styled from "styled-components";

export const TitleStyle = styled.h1`
    font-size: 32.97px;
    color: ${({tier}) => tier ? '#a9c6d9' : 'white' };

    .name {
        font-size: 37px;
        color: #f1a845;
    }

    @media only screen and (min-width: 768px) {
        /* font-size: 39.97px;

        .name {
            font-size: 44px;
        } */
    };
`;