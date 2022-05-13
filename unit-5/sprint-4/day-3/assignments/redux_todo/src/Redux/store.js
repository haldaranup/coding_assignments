import { legacy_createStore as createStore} from "redux"; // redux-toolkit
import { counterReducer} from "./reducer";
export const store = createStore(counterReducer ,{todo:[]}); //(reducer,initialState)