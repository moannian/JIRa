import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { IReducers } from "../store/reducers/content";
import { test } from "../store/action/text"
import { createSelector } from "reselect"



let Counts: React.FC<any> = React.memo(() => {

    const selectNumCompletedTodos = createSelector(
        (state: IReducers) => state.Count.num,
        (todos) => todos
    )
    const disPatch = useDispatch()

    const add = useSelector(selectNumCompletedTodos, shallowEqual)

    useEffect(() => {
        console.log(add);

    }, [])
    return (
        <>
            <div>{add}</div>
            <button onClick={() => { disPatch(test()) }}>add</button>
        </>

    )
})



export default Counts