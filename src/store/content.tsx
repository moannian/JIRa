import { combineReducers, ReducersMapObject, AnyAction, Reducer } from "redux";
import Count, { IState } from "./reducers/index";
import CreateModel, { ICreateModelState } from "./reducers/createModel"
export interface IReducers {
    Count: IState,
    CreateModel: ICreateModelState
}
const reducers: ReducersMapObject<IReducers, any> = {
    Count,
    CreateModel
}
export type CombinedState = {
    [k in keyof typeof reducers]: ReturnType<typeof reducers[k]>
}
let reducer: Reducer<CombinedState, AnyAction> = combineReducers(reducers)

export default reducer