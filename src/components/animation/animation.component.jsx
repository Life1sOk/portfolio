import React from "react";

import { words } from "./animation.array";
import './animation.style.scss';
import AnimationWord from "../animation-wrap/animation.word.component";

const Animation = () => {

    return (
        <div className="animation-container">
            {
                words.map(word => <AnimationWord key={word.id} name={word.name} top={word.top} delay={word.delay} />)
            }
        </div>
    )
}

export default Animation;