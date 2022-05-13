import { CLOSE_CREATE_MODEL, OPEN_CREATE_MODEL } from "../action-types";
import { Action } from "redux";

export interface ICreateModelState {
    isCreateMOdel: boolean,
    title?: string
}
interface IAction {
    type: string,
    value: ICreateModelState
}
let initState: ICreateModelState = {
    isCreateMOdel: false
}



export default function (state: ICreateModelState = initState, action: IAction): ICreateModelState {
    switch (action.type) {
        case OPEN_CREATE_MODEL:
            return { ...action.value }
        case CLOSE_CREATE_MODEL:
            return { isCreateMOdel: false }
        default:
            return state
    }
}