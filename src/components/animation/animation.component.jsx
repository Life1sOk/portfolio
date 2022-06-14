import React from "react";
import { useSpring, animated, easings, config } from 'react-spring';

import './animation.style.scss';

const Animation = () => {

    const props = useSpring({ 
        loop: { reverse: true },
        from: { y: -300,  background: 'yellow', width: "100px", height: "100px"},
        to: { y: 0,  background: 'red', width: '100px', height: '80px' },
        config: {
            duration: 5000,
            easing: easings.easeOutQuint
          },
    })

    const props1 = useSpring({ 
        loop: { reverse: true },
        from: { y: -300,  background: 'yellow', width: "100px", height: "100px"},
        to: { y: 0,  background: 'red', width: '100px', height: '80px' },
        config: {
            duration: 5000,
            easing: easings.easeOutQuad
          },
    })

    const props2 = useSpring({ 
        loop: { reverse: true },
        from: { y: -300,  background: 'yellow', width: "100px", height: "100px"},
        to: { y: 0,  background: 'red', width: '100px', height: '80px' },
        config: {
            duration: 5000,
            easing: easings.easeOutSine
          },
    })


    return(
        <div className="animation-container">
            <animated.div style={props} className='ex'></animated.div>
            <animated.div style={props1} className='ex'></animated.div>
            <animated.div style={props2} className='ex'></animated.div>
        </div>
    );
}

export default Animation;