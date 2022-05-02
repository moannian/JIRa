import React, { } from "react"
import { AppRouter } from "@/Router"
import { Routes, Route, Link, Navigate } from "react-router-dom";
import KanBanSystem from "@/page/kanbanSystem"
import TaskBar from "@/page/taskBar"
const Aside = React.memo(() => {
    const { skipPath } = AppRouter()
    return (
        <>
            <h1>ProjectScreen</h1>
            <Link to="">看板</Link>
            <Link to="/taskBar">任务栏</Link>

        </>
    )
})

export default Aside