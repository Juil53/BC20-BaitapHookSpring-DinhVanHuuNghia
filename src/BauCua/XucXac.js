import React from "react";
import { useSpring, animated } from "react-spring";

export default function XucXac(props) {
  const { item } = props;
  const [propsDice, set] = useSpring(() => ({
    to: {
      xyz: [360, 360, 360],
    },
    from: {
      xyz: [0, 0, 0],
    },
    config: {
      duration: 1000,
    },
    reset: true,
  }));
  set({ xyx: [0, 0, 0] });

  return (
    <>
      <div className="scene ml-5">
        <animated.div
          className="cube"
          style={{
            transform: propsDice.xyz.to(
              (x, y, z) =>
                `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
            ),
          }}
        >
          <div className="cube__face front">
            <img style={{ width: `100%` }} src={item.hinhAnh} alt="" />
          </div>
          <div className="cube__face back">
            <img style={{ width: `100%` }} src="./imgBauCua/bau.png" alt="" />
          </div>
          <div className="cube__face left">
            <img style={{ width: `100%` }} src="./imgBauCua/ga.png" alt="" />
          </div>
          <div className="cube__face right">
            <img style={{ width: `100%` }} src="./imgBauCua/ca.png" alt="" />
          </div>
          <div className="cube__face top">
            <img style={{ width: `100%` }} src="./imgBauCua/cua.png" alt="" />
          </div>
          <div className="cube__face bottom">
            <img style={{ width: `100%` }} src="./imgBauCua/nai.png" alt="" />
          </div>
        </animated.div>
      </div>
    </>
  );
}
