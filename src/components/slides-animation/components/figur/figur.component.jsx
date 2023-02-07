import React from "react";

import { FigurContainer } from './figur.style';

const Figur = ({datas}) => {
    const {type, height, width, color, radius} = datas;

    return(
        <FigurContainer type={type} height={height} width={width} color={color} radius={radius}/>
    )
};

export default Figur;