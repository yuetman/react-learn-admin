import { legacy_createStore, combineReducers,compose,applyMiddleware } from "redux";
import {thunk} from 'redux-thunk'

import handleNum from "./NumStatus/reducer.ts";
import handleArr from "./ArrStatus/reducer.ts";

// 组合reducer模块
const reducers = combineReducers({
    handleNum,
    handleArr,
});
// 创建数据仓库
let composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__({}):compose;
const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(thunk)));
export default store;
