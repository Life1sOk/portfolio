import styled from "styled-components";

export const TitleStyle = styled.h1`
    /* font-size: 32.97px; */
    font-size: 60px;
    /* color: ${({ tier }) => tier ? '#a9c6d9' : 'white'}; */
    color: rgba(0,21,40,.9);
    /* color: white; */
    text-shadow: 0px 0px 4px #F1A845;
    font-family: 'Bebas Neue';
    font-style: normal;
    font-weight: 900;

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