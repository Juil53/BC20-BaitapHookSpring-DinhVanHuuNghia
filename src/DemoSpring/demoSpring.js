import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Toggle from "./toggle";

export default function DemoSpring() {
  const fade = useSpring({
    from: { opacity: 0, color: `red` },
    opacity: 1,
    color: `green`,
  });

  return (
    <div>
      <animated.div style={fade}>This is Header</animated.div>
      <Toggle />
    </div>
  );
}
