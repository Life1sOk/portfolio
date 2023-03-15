import styled from "styled-components";

export const FigurContainer = styled.div`
    width: ${({width}) => width ? width : '60%'};
    height: ${({height}) => height ? height : '20%'};
    background-color: ${({color}) => color ? color : 'white'};
    border-radius: ${({radius}) => radius ? radius : '7px'};
    animation-name: ${ ({type}) => 
        type === 'line' ? 'line' : 
        type === 'box' ? 'box' : 'none'
    };
    animation-duration: 2.5s;

    @keyframes line {
        from {
            width: 0;
        }
        to {
            ${({width}) => width ? width : '60%'}
        }
    };

    @keyframes box {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    };
`;