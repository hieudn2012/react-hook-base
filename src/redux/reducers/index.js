import taskReducer from "./tudo";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  taskReducer,
});

export default rootReducer;