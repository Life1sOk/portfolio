import styled from "styled-components";

export const ContactBaseContainer = styled.div`
    width: 370px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 33px;

    @media only screen and (max-width: 760px) {
        width: 100%;
        justify-content: space-between;
        gap: 0;
    }
`;

export const SendMeLocation = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    font-size: 13px;
`;

export const ContactLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;

    & .contact-line-icon {
        margin-right: 6px;
    }
`;