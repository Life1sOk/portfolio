import React from "react";

import { LeftContainer, BasicsContainer } from './left-block.style';
import { basicLevel, secondLevel, topLevel } from "../../../../utils/tools-icons";

import Box from '../../components/box/box.component';


const LeftBlock = () => {
    return(
        <LeftContainer>
            <BasicsContainer>
                {
                    secondLevel.map((box, index) => <Box datas={box} key={index}/>)
                }
            </BasicsContainer>
            <BasicsContainer>
                {/* <Box datas={topLevel} key={0} /> */}
                {
                    basicLevel?.map((box, index) => <Box datas={box} key={index}/>)
                }
            </BasicsContainer>
        </LeftContainer>
    )
};

export default LeftBlock