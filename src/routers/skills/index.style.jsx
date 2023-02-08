import styled from "styled-components";

export const MainSkills = styled.div`
    width: 100vw;
    max-width: 100vw;
    min-width: 370px;
    height: 100vh;
    padding-top: 40px;
    /* background-color: #001528; */

    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
    column-gap: 100px;

    @media only screen and (max-width: 805px) {
        padding-top: 100px;
        flex-direction: column;
        /* row-gap: 30px; */
    };
`;