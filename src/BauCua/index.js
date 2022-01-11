import React from "react";
import "./baucua.css";
import DanhSachQuanCuoc from "./DanhSachQuanCuoc";
import DanhSachXucXac from "./DanhSachXucXac";
import DiemCuoc from "./DiemCuoc";

export default function GameBauCua(props) {
  return (
    <div className="gamebaucua container-fluid">
      <DiemCuoc />
      <div className="row">
        <div className="col-md-8">
            <DanhSachQuanCuoc/> 
        </div>
        <div className="col-md-4">
            <DanhSachXucXac/>
        </div>
      </div>
    </div>
  );
}
