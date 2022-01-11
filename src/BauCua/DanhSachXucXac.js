import React from "react";
import XucXac from "./XucXac";
import { useSelector, useDispatch } from "react-redux";

export default function DanhSachXucXac(props) {
  const danhSachXucXac = useSelector(
    (state) => state.baucuaReducer.danhSachXucXac
  );
  
  const dispatch = useDispatch();

  return (
    <div className="mt-5 ml-5">
      <div
        className="bg-white"
        style={{ width: `300px`, height: `300px`, borderRadius: `50%` }}
      >
        <div className="row">
          <div className="col-12" style={{ marginLeft: `80px` }}>
            <XucXac item={danhSachXucXac[0]} />
          </div>
          <div className="col-6" style={{ marginTop: `-40px` }}>
            <XucXac item={danhSachXucXac[1]} />
          </div>
          <div className="col-6" style={{ marginTop: `-40px` }}>
            <XucXac item={danhSachXucXac[2]} />
          </div>
        </div>
      </div>
      <div className="mt-3" style={{ marginRight: `45%` }}>
        <button
        onClick={()=>{
          dispatch({
            type: "PLAY_GAME"
          })
        }}
          className="p-3 btn btn-info"
          style={{
            fontSize: `20px`,
            borderRadius: `10px`,
            border: `1px solid black`,
          }}
        >
          Chơi Game!!!
        </button>
      </div>
    </div>
  );
}
