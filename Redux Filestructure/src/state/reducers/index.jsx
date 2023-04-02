import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import nameReducer from "./nameReducer";
import quntity from "./quntity";

const reducers = combineReducers({
    amount : amountReducer,
    name : nameReducer,
    qun : quntity
});

export default reducers;