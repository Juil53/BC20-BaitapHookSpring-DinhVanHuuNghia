import React from "react";
import { useSelector,useDispatch } from "react-redux";

export default function DiemCuoc(props) {
  const tongDiem = useSelector((state) => state.baucuaReducer.tongDiem);
  const dispatch = useDispatch();
  return (
    <div>
      <h3 className="text-center display-4" style={{ color: `green` }}>
        Game Bầu Cua
      </h3>
      <div className="text-center mt-5">
        <span
          style={{ fontSize: `20px`, borderRadius: `10px` }}
          className="p-3 text-white bg-danger"
        >
          Tổng điểm: <span className="text-warning">{tongDiem}$</span>
        </span>
      </div>
      <div className="text-center mt-5">
        <button
          onClick={()=>{
            dispatch({type:"CHOI_LAI"})
          }}
          style={{ fontSize: `20px`, borderRadius: `10px` }}
          className="p-1 text-white bg-info"
        >
          Chơi Lại!
        </button>
      </div>
    </div>
  );
}
