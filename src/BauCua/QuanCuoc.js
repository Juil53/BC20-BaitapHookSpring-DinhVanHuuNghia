import React from "react";
import { useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";

export default function QuanCuoc(props) {
  const { item } = props;
  const dispatch = useDispatch();
  
  // const [propsSpringIncrease, setIncrease] = useSpring(() => {
  //   return {
  //     to: { scale: 1.25 },
  //     from: { scale: 1 },
  //     reset: true,
  //   };
  // });
  

  // const [propsSpringDecrease, setDecrease] = useSpring(()=>{
  //   return{
  //     from: { scale: 0.5 },
  //     to: { scale: 1 },
  //     reset: true,
  //   }
  // });

  const propsSpringIncrease = useSpring({
    from: {scale: 0},
    scale: 1,
    reset: true,
  });

  return (
    <div className="mt-3">
      <img src={item.hinhAnh} alt="" style={{ width: `50%` }} />
      <div
        className="pb-1 bg-success"
        style={{ width: `50%`, borderRadius: `10px`, marginLeft: `95px` }}
      >
        <animated.button
          style={{
            transform: propsSpringIncrease.scale.to(
              (scale) => `scale(${scale})`
            ),
          }}
          onClick={() => {
            // console.log(propsSpringIncrease.scale);
            // setIncrease({ scale: 1.25 });

            dispatch({
              type: "DAT_CUOC",
              payload: item,
              tangGiam: true,
            });
          }}
          className="mt-1 btn btn-light"
        >
          +
        </animated.button>
        <span className="mx-2" style={{ color: `yellow`, fontSize: `20px` }}>
          {item.diemCuoc}$
        </span>
        <animated.button
          // style={{
          //   transform: propsSpringDecrease.scale.to(
          //     (scale) => `scale(${scale})`
          //   ),
          // }}
          onClick={() => {
            // setDecrease({ scale: 1 });
            dispatch({
              type: "DAT_CUOC",
              payload: item,
              tangGiam: false,
            });
          }}
          className="mt-1 btn btn-danger"
        >
          -
        </animated.button>
      </div>
    </div>
  );
}
