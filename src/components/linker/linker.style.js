import styled from "styled-components";

export const LinkWords = styled.span`
    font-size: 14px;
    padding: 5px;
    border-bottom: 2px solid ${({active}) => active ? 'rgba(229, 95, 63, 1)' : '#06223c'};

    &:hover {
        cursor: pointer;
        color: white;
        border-bottom: 2px solid ${({active}) => active ? 'rgba(229, 95, 63, 1)' : 'white'};
    }
`;