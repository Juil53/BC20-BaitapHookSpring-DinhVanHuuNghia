import { combineReducers } from "redux";
import { baucuaReducer } from "./BauCuaReducer";

const rootReducer = combineReducers({
    baucuaReducer,
})

export default rootReducer