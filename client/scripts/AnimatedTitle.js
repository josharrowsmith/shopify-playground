import React from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

// Add staggering effect to the children of the container
export const letterContainerVariants = {
    before: { transition: { staggerChildren: 0.015 } },
    after: { transition: { staggerChildren: 0.03 } }
  };
  
  // Variants for animating each letter
  export const letterVariants = {
    before: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };
  

const StyledTitleElement = styled(motion.h2)`
  font-size: 2rem;
  font-family: poppins;
  text-transform: uppercase;

  position: relative;
  display: inline-block;
  max-width: 100%;

  word-break: break-word;
  z-index: 10;

  color: black;
`;

export const AnimatedTitle = (props) => {
  const { children, currentInView } = props;

  return (
    <AnimatePresence>
      {currentInView && (
        <StyledTitleElement
          {...props}
          variants={letterContainerVariants}
          initial={"before"}
          animate={"after"}
          exit={"before"}
          key={children}
          aria-label={children}
          aria-live={"polite"} // dont do this on production if it loops.
        >
          {children.split(" ").map((word, wordI) => (
            <div
              key={`word-${word}-${wordI}`}
              style={{
                display: "inline-block"
              }}
            >
              {Array.from(word).map((letter, index) => (
                <motion.span
                  key={`${index}-${letter}`}
                  style={{
                    position: "relative",
                    display: "inline-block",
                    width: "auto"
                  }} // Position elements
                  variants={letterVariants}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              {"\u00A0"}
            </div>
          ))}
        </StyledTitleElement>
      )}
    </AnimatePresence>
  )
}
