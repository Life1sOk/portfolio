import styled from "styled-components";

export const MainSkills = styled.div`
    width: 100vw;
    max-width: 100vw;
    min-width: 370px;
    height: 100vh;
    /* max-height: 100vh; */
    /* background-color: #001528; */
    padding-top: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    /* flex: 1 1 auto; */
    column-gap: 40px;

    @media only screen and (max-width: 805px) {
        flex-direction: column;
        /* row-gap: 40px; */
    };
`;