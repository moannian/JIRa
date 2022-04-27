import React, { Children, useEffect, useRef } from 'react'
import { Routes, Route, useNavigate, NavigateOptions, useRoutes, RouteObject } from "react-router-dom";
import Home from "@/page/home/Home"
import Error404 from "../components/Error404"
import Login from "../page/login/login"
import Register from "../page/register/index"



export const AppRouter = () => {
    const navigate = useNavigate();

    // TODO未完成的自动化
    // const list: RouteObject[] = [{
    //     path: "/home",
    //     element: <Home />,
    //     children: [{
    //         path: "/a"
    //     }]
    // }, {
    //     path: "/login",
    //     element: <Login />
    // },
    // {
    //     path: "/register",
    //     element: <Register />
    // }, {
    //     path: "*",
    //     element: <Error404 />
    // }] 


    // TODO:未完成的自动化
    // let routerOptionList: string[] = []
    // const getrouterOptionList = (list: RouteObject[], initialPath: string = "") => {
    //     list.forEach((item) => {
    //         let path = initialPath + item.path
    //         routerOptionList = [...routerOptionList, path]
    //         if (item?.children) {
    //             getrouterOptionList(item.children, item.path);
    //         }
    //     })
    //     return routerOptionList
    // }
    // type text = typeof list[number]["path"]
    type option = "/home" | "/login" | "/register"
    function skipPath(to: option, state?: NavigateOptions) {
        navigate(to, state)
    }


    const Router = (
        <>
            <Routes>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='*' element={<Error404></Error404>}></Route>
            </Routes>

        </>)


    return { skipPath, Router }
}
