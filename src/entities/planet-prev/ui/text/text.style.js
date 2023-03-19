import styled from "styled-components";

export const TextStyle = styled.div`
    position: absolute;
    top: ${({ top }) => top ? `${top}px` : 0};
    left: ${({ left }) => left ? `${left}px` : 0};;

    width: 657.5px;
    height: fit-content;
    font-family: 'Bebas Neue';
    font-style: normal;
    font-size: 58px;
    line-height: 64px;
    letter-spacing: 1px;
    z-index: 15;

    color: ${({ type }) => type === 'snow' ? '#0E86D4' : 'var(--light-yellow)'};
    /* text-shadow: ${({ type }) => type === 'snow' ? 'rgb(0, 128, 255) 1px 0px 0px, rgb(0, 128, 255) 0.540302px 0.841471px 0px, rgb(0, 128, 255) -0.416147px 0.909297px 0px, rgb(0, 128, 255) -0.989992px 0.14112px 0px, rgb(0, 128, 255) -0.653644px -0.756802px 0px, rgb(0, 128, 255) 0.283662px -0.958924px 0px, rgb(0, 128, 255) 0.96017px -0.279415px 0px' : 'rgb(255,255,255) 1px 0px 0px, rgb(255,255,255) 0.540302px 0.841471px 0px, rgb(255,255,255) -0.416147px 0.909297px 0px, rgb(2255,255,255) -0.989992px 0.14112px 0px, rgb(255,255,255) -0.653644px -0.756802px 0px, rgb(255,255,255) 0.283662px -0.958924px 0px, rgb(255,255,255) 0.96017px -0.279415px 0px;'}; */
    text-shadow: ${({ type }) => type === 'snow' ? '0px 0px 9px #000000' : null};
`;

export const TextLine = styled.p`
    width: 100%;
    text-align: left;
`;