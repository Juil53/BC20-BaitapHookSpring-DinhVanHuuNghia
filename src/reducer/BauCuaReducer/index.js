let initialState = {
  danhSachCuoc: [
    { ma: "bau", hinhAnh: "./imgBauCua/bau.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./imgBauCua/ca.png", diemCuoc: 0 },
    { ma: "cua", hinhAnh: "./imgBauCua/cua.png", diemCuoc: 0 },
    { ma: "ga", hinhAnh: "./imgBauCua/ga.png", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./imgBauCua/nai.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./imgBauCua/tom.png", diemCuoc: 0 },
  ],
  tongDiem: 500,
  danhSachXucXac: [
    { ma: "nai", hinhAnh: "./imgBauCua/nai.png" },
    { ma: "ga", hinhAnh: "./imgBauCua/ga.png" },
    { ma: "tom", hinhAnh: "./imgBauCua/tom.png" },
  ],
};

const baucuaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      const danhSachCuocUpdate = [...state.danhSachCuoc];
      const index = danhSachCuocUpdate.findIndex(
        (item) => item.ma === action.payload.ma
      );
      if (index !== -1) {
        if (action.tangGiam && state.tongDiem > 0) {
          danhSachCuocUpdate[index].diemCuoc += 100;
          state.tongDiem -= 100;
        } else if (
          action.tangGiam === false &&
          danhSachCuocUpdate[index].diemCuoc > 0
        ) {
          danhSachCuocUpdate[index].diemCuoc -= 100;
          state.tongDiem += 100;
        }
      }
      state.danhSachCuoc = danhSachCuocUpdate;
      return { ...state };
    }

    case "PLAY_GAME": {
      const mangNgauNhien = [];
      state.danhSachXucXac.map((xucxac, index) => {
        let soNgauNhien = Math.floor(Math.random() * 6);
        let xucXacNgauNhien = state.danhSachCuoc[soNgauNhien];
        return mangNgauNhien.push(xucXacNgauNhien);
      });
      state.danhSachXucXac = mangNgauNhien;
      //Xử lý cộng tổng điểm nếu trúng xúc xắc
      mangNgauNhien.forEach((xucxac, index) => {
        //tìm xúc xắc đã random trong mảng danh sách cược => trả về 3 con
        let indexXucXac = state.danhSachCuoc.findIndex(
          (quancuoc) => quancuoc.ma === xucxac.ma
        );
        if (indexXucXac !== -1) {
          state.tongDiem += state.danhSachCuoc[indexXucXac].diemCuoc;
        }
      });

      //Xử lý hoàn tiền
      state.danhSachCuoc.forEach((quancuoc, index) => {
        let indexDatCuoc = mangNgauNhien.findIndex(
          (xucxac) => quancuoc.ma === xucxac.ma
        );
        if (indexDatCuoc !== -1) {
          state.tongDiem += quancuoc.diemCuoc;
        }
      });

      //Xử lý làm mới game
      state.danhSachCuoc = state.danhSachCuoc.map((quancuoc, index) => {
        return { ...quancuoc, diemCuoc: 0 };
      });
      return { ...state };
    }

    case "CHOI_LAI": {
      state.tongDiem = 500;
      state.danhSachCuoc = state.danhSachCuoc.map((quancuoc, index) => {
        return { ...quancuoc, diemCuoc: 0 };
      })
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export { baucuaReducer };
