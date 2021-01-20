import {createStore , applyMiddleware , combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import AuthReducer from "./reducers/AuthReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducers = combineReducers({AuthReducer , });

const middleware = [thunkMiddleware];
const store = createStore(rootReducers , composeWithDevTools(applyMiddleware(...middleware)));
export default store;