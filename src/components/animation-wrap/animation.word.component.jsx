import React from "react";

import './animation.word.style.jsx';
import { AnimationWordContainer } from "./animation.word.style.jsx";

const AnimationWord = ({ name, left, delay }) => {

    return (
        <AnimationWordContainer left={left} delay={delay}>{name}</AnimationWordContainer>
    )
}

export default AnimationWord;