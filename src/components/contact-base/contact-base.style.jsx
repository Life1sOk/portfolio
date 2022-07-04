import styled from "styled-components";

export const ContactBaseContainer = styled.div`
    width: 370px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 33px;
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