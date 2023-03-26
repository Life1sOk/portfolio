import styled from "styled-components";

export const ContactStyle = styled.div`
    position: relative;

    width: 100%;
    height: 100vh;
    padding: 0 22px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Info = styled.div`
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translate(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & p {
        display: inline-block;
        font-size: 10px;
        padding: 5px;
        color: var(--font-color);
    }
`;