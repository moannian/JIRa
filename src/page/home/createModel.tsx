import React from "react";
import { Drawer } from "antd";
import { useSelector, useDispatch } from "react-redux"

import { IReducers } from "@/store/content"
import { ICreateModelState } from "@/store/reducers/createModel"
import { closeProjectCreateModel } from "@/store/action/ProjectCeateModel"
const CreateModel = () => {
    const state = useSelector<IReducers, ICreateModelState>(state => state.CreateModel);
    const dispatch = useDispatch();

    let ui = (<Drawer
        width={"100%"}
        visible={state.isCreateMOdel}
        onClose={() => { dispatch(closeProjectCreateModel()) }}
        placement={"left"}
        title={state.title}>

    </Drawer>)
    return { ui }
}

export default CreateModel