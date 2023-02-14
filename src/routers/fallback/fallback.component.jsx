import React from "react";

import Hello from '../../assets/android-chrome-192x192.png';

import { FallbackPage, HelloIcon } from './fallback.style';

const Fallback = () => {
    return(
        <FallbackPage>
            <HelloIcon alt="hello" src={Hello}/>
        </FallbackPage>
    )
};

export default Fallback;