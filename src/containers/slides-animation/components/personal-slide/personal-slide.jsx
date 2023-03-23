import React from "react";

import { Top, Bottom } from './personal.style';
import { SlideContainerLayout, MainColumnLayout, TitleLayout } from "../../layouts";

import Figur from "../figur/figur.component";

const top = [
    {
        width: '45%',
        height: '90%',
        color: 'lightblue',
        type: 'box'
    },
    {
        width: '45%',
        height: '90%',
        color: 'lightblue',
        type: 'box'
    },
];

const bottom = [
    {
        width: '25%',
        height: '50%',
        color: 'lightblue',
        type: 'line'
    },
    {
        width: '25%',
        height: '50%',
        color: 'lightblue',
        type: 'line'
    },
    {
        width: '25%',
        height: '50%',
        color: 'lightblue',
        type: 'line'
    },
];

const PersonalSlide = () => {
    return (
        <SlideContainerLayout duration='1.5s'>
            <TitleLayout>Personal</TitleLayout>
            <MainColumnLayout>
                <Top>
                    {
                        top.map((box, index) => <Figur key={index} datas={box} />)
                    }
                </Top>
                <Bottom>
                    {
                        bottom.map((line, index) => <Figur key={index} datas={line} />)
                    }
                </Bottom>
            </MainColumnLayout>
        </SlideContainerLayout>
    )
};

export default PersonalSlide;