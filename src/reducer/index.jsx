import { combineReducers } from "redux";
import { paceReducer } from "./paceReducer";

const reducer = combineReducers({
  pace: paceReducer,
});

export default reducer;
