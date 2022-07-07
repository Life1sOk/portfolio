import React from "react";

import { words } from "../../utils/animation.array";
import AnimationWord from "../animation-wrap/animation.word.component";

const Animation = () => {

    return (
        <>
            {words.map(word => <AnimationWord key={words.indexOf(word)} name={word.name} delay={word.delay} left={word.left} />)}
        </>
    )
}

export default Animation;