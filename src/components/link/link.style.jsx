import styled from 'styled-components';

export const NavbarWords = styled.span`
    font-size: 1rem;
    padding: 5px;
    border: 2px solid #06223c;
    cursor: pointer;

    &:hover {
        color: white;
        border-bottom: 2px solid white;
    }
`;

export const MyName = styled.span`
    font-size: 2.4rem;
    font-weight: bolder;
    cursor: pointer;

    @media only screen and (max-width: 1068px) {
        margin: 0;
    };

    @media only screen and (max-width: 760px) {
        font-size: 1.9rem;
    }
`;