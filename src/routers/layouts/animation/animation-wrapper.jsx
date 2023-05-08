import React, { useState, useRef, useMemo, useEffect } from "react";

import {
  TopWrapper,
  AnimationWrapperStyle,
  CenterPointer,
} from "./animation-wrapper.style";

const AnimationView = ({ children }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const pointerRef = useRef(null);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !isAnimated) setIsAnimated(entry.isIntersecting);
      }),
    []
  );

  useEffect(() => {
    observer.observe(pointerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [pointerRef, observer]);

  return (
    <TopWrapper>
      <AnimationWrapperStyle isAnimated={isAnimated}>{children}</AnimationWrapperStyle>
      <CenterPointer ref={pointerRef} />
    </TopWrapper>
  );
};

export default AnimationView;
