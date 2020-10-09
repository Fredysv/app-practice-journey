import { combineReducers } from "redux";
import { user } from "./user";

import SesionReducer from "./SesionReducer";
import LoadingReducer from "./LoadingReducer";

const Reducers = combineReducers({
  userState: user,
  sesionList: SesionReducer,
  loadingReducer: LoadingReducer,
});

export default Reducers;
