import React, { useState } from "react";
import { useSpring,animated } from "react-spring";


export default function Toggle() {
  const [toggle, setToggle] = useState(false);
  const fade = useSpring({
      opacity: toggle ? 1 : 0
  })


  return (
    <div>
      <animated.h1 style={fade}>Hello World</animated.h1>
      <button onClick={()=> setToggle(!toggle)}>Toggle</button>
    </div>
  );
}
