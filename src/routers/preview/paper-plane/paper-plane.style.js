import styled from "styled-components";

export const PaperPlaneContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: -20px;
    transform: rotate3d(2, -1, -10, -0.11turn) scale(.7);
    
    /* left: -200px;
    bottom: -80px;
    transform: rotate3d(2, -1, -3, -0.117turn) scale(1.1); */

    animation-name: plane;
    animation-duration: 3s;
    /* animation-direction: alternate; */

    @keyframes plane {
        0%  {
            left: -500px;
            bottom: -100px;
            transform: rotate3d(2, -1, -10, -0.2turn) scale(1.2);
        };

        100% {
            left: 0;
            bottom: -20px;
            transform: rotate3d(2, -1, -10, -0.11turn) scale(0);
        };
    }
`;