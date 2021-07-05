import {createStore} from "redux";
import daddyReducer from "./reducers/daddyReducer";

let store = createStore(daddyReducer);

export default store;