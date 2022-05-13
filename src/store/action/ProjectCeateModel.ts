import { CLOSE_CREATE_MODEL, OPEN_CREATE_MODEL } from "../action-types";
export const closeProjectCreateModel = () => {
    return {
        type: CLOSE_CREATE_MODEL,
        value: {
            isCreateMOdel: false
        }
    }
}

export const openProjectCreateModel = (title: string) => {
    return {
        type: OPEN_CREATE_MODEL,
        value: {
            isCreateMOdel: true,
            title: title
        }
    }
}