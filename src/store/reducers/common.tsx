import { USER_NAME, PASSWORd } from "../action-types";
import { Action } from "redux";

export interface IState {
    userName: string,
    password: string
}

const initState: IState = {
    userName: '',
    password: ""
}

export default function (state: IState = initState, action: Action): IState {
    switch (action.type) {

        default:
            return state
    }
}

