import styled from "styled-components";

export const ContactIconsContainer = styled.div`
    /* width: 147px;
    height: 100%; */
    width: 100%;
    height: 100%;
    /* margin: 8px 15px; */
    display: flex;
    flex-direction: column;
    /* justify-content: space-between;
    align-items: flex-end; */
    justify-content: center;
    gap: 30px;

    & img {
        width: 100%;
        /* padding: 2px; */
        background-color: white;
        border-radius: 50%;

        &:hover {
            cursor: pointer;
        }
    }
`;