import styled from "styled-components";

export const TitleStyle = styled.h1`
    font-size: 38px;
    color: ${({tier}) => tier ? '#a9c6d9' : 'white' };

    .name {
        font-size: 44px;
        color: #f1a845;
    }

    @media only screen and (max-width: 551px) {
        font-size: 30px;

        .name {
            font-size: 35px;
        }
    };
`;