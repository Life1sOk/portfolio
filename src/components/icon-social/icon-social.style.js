import styled from "styled-components";

export const IconSocialStyle = styled.a`
    width: 27px;
    aspect-ratio: 1/ 1;
    color: var(--font-color);

    & svg {
        width: 100%;
        height: 100%;
    }

    &:hover {
        color: var(--blue)
    }
`;