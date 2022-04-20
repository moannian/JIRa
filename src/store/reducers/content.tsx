import { combineReducers, ReducersMapObject, AnyAction, Reducer } from "redux";
import Count, { IState } from "./index";

import { connectRouter } from "connected-react-router";
import history from "../../history"
export interface IReducers {
    Count: IState,
}
const reducers: ReducersMapObject<IReducers, AnyAction> = {
    Count,
}
export type CombinedState = {
    [k in keyof typeof reducers]: ReturnType<typeof reducers[k]>
}
let reducer: Reducer<CombinedState, AnyAction> = combineReducers(reducers)

export default reducer