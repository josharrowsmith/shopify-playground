import React, { useState, useEffect } from "react";
import { AnimatedTitle } from "./AnimatedTitle";

export const Wave = () => {
  // You can toggle this with intersection observer.
  const [inView, updateInView] = useState(false);

  // Don't do this in production :)
  useEffect(() => {
    let timeout = setTimeout(() => {
      updateInView(!inView);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [inView]);

  return (
      <AnimatedTitle currentInView={inView}>hello</AnimatedTitle>
  );
}
