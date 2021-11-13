import { combineReducers } from "redux";
import IStore from "store/IStore";
import { registerAccountReducer } from "reducers/UserReducer";

const rootReducer = combineReducers<IStore>({
    registerAccount: registerAccountReducer,
});

export default rootReducer;
