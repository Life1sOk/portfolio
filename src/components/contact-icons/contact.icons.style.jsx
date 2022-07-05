import styled from "styled-components";

export const ContactIconsContainer = styled.div`
    width: 147px;
    height: 100%;
    margin: 8px 15px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    & img {
        width: 23px;
        padding: 2px;
        background-color: white;
        border-radius: 50%;

        &:hover {
            cursor: pointer;
        }
    }
`;