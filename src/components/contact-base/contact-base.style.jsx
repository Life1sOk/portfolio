import styled from "styled-components";

export const ContactBaseContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 33px;

    @media only screen and (max-width: 880px) {
        & a button {
                max-width: 120px;
                min-width: 80px;
        }
    }

    @media only screen and (max-width: 760px) {
        ${'' /* max-width: 300px; */}
        justify-content: space-between;
        gap: 0;
    }

    @media only screen and (max-width: 400px) {
        & a {
            display: none;
        }
    }
`;

export const SendMeLocation = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    font-size: 13px;

    @media only screen and (max-width: 400px) {
        margin: 0 auto;
    }
`;

export const ContactLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;

    & .contact-line-icon {
        margin-right: 6px;
    }
`;