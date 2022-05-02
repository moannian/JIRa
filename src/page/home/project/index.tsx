import React, { useEffect } from "react"
import { Routes, Route, Navigate, Outlet, Link } from "react-router-dom";
import style from "@emotion/styled"

import { Row } from "@/components/lib"
import Header from "../header"

import { AppRouter } from "@/Router/index"


const Project = React.memo(() => {
    const { ProjectRouter, skipPath } = AppRouter()
    useEffect(() => {
        console.log(window.location, "测试")

    }, [])
    return (
        <>
            <Header />

            <DIV>
                <div>
                    <Link to="">看板</Link>
                    <Link to="taskBar">任务栏</Link>
                </div>
                <div>
                    <Outlet />
                </div>
            </DIV>
        </>
    )
})
const DIV = style(Row)``
export default Project