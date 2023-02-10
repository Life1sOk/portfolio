import styled from "styled-components";

export const ContactIconsContainer = styled.div`
    position: fixed;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);

    width: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;

    & img {
        width: 100%;
        background-color: white;
        border-radius: 50%;

        &:hover {
            cursor: pointer;
        }
    }
`;