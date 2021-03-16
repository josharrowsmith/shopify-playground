import React, { useState, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import styled from "styled-components";
// import { ReactComponent as RotorTop } from "./front.svg"

const rotateV = {
    start: ({ rotate }) => ({
      rotate: rotate,
      transition: { type: "tween", duration: 5, ease: [.5,.1,.15,1] }
    }),
    stop: ({ endDeg }) => ({
      rotate: endDeg,
      transition: { type: "tween", duration: 0 }
    })
};
  
const CirleContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function Wheel() {
    const [isAnimationStart, setIsAnimationStart] = useState(false);
    const rotateControl = useAnimation();

    const spinCount = 2;
    const position = Math.floor(Math.random() * 10) + 1;
    const offset = (360 / 8) * position;
    const endValue = useMotionValue(360 * spinCount - offset);

    const onAnimationStart = () => {
        if (!isAnimationStart) {
          console.log("hey")
          setIsAnimationStart(true);
          rotateControl.start("start");
        }
    
        setTimeout(() => {
          rotateControl.start("stop");
          setIsAnimationStart(false);
        }, 8300);
      };
    
  return (
    <CirleContainer>
         <motion.div
          className="circleInner"
          onClick={() => onAnimationStart()}
          style={isAnimationStart ? { pointerEvents: "none" } : { pointerEvents: "auto" }}>
        
          <motion.div
            className="cta"
            style={{ x: "-50%", y: "-50%" }}
          >
            click me!
          </motion.div>  
          <motion.div
          custom={{
            rotate: [0, endValue.current],
            endDeg: endValue.current
          }}
          animate={rotateControl}
          variants={rotateV}> 
           {/* <RotorTop/> */}
          </motion.div>
        </motion.div>
    </CirleContainer>
  );
}