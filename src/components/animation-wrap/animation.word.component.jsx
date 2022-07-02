import React from "react";

import './animation.word.style.jsx';
import { AnimationWordContainer } from "./animation.word.style.jsx";

const AnimationWord = ({ name, top, left, delay }) => {
    return (
        <AnimationWordContainer top={top} left={left} delay={delay}>{name}</AnimationWordContainer>
    )
}

export default AnimationWord;