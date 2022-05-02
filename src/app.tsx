import React, { useEffect } from 'react';
import { Provider } from "react-redux"
import { AppRouter } from "./Router/index"
import { getLoginStorage } from "@/tool/localstroage"
import { ErrorBoundary } from "@/components/error-boundary"
import { FullPageErrorFallback } from "@/components/lib"
import { Routes, Route } from "react-router-dom";
import Home from "@/page/home/Home"
import Error404 from "@/components/Error404"
import Login from "@/page/login/login"
import Register from "@/page/register/index"
import Project from "@/page/home/project/index"
import store from "./store/index"
import KanBanSystem from "@/page/kanbanSystem"
import TaskBar from "@/page/taskBar";
import 'antd/dist/antd.css';
import "./assets/css/app.css"

const App = () => {

    const { Router, skipPath } = AppRouter();
    let loginToken = getLoginStorage();
    console.log(window.location.pathname);

    useEffect(() => {
        if (!loginToken) {
            skipPath("login")
        } else if (window.location.pathname === "/") {
            skipPath("home")
        }

    }, [])

    return (
        <Provider store={store}>

            <ErrorBoundary fallbackRender={FullPageErrorFallback}>
                <Routes>
                    <Route path='/home' element={<Home></Home>}></Route>
                    <Route path='/home/:id/*' element={<Project />}>
                        <Route index element={<KanBanSystem />} />
                        <Route path="taskBar" element={<TaskBar />} />
                    </Route>
                    <Route path='/login' element={<Login></Login>}></Route>
                    <Route path='/register' element={<Register></Register>}></Route>
                    <Route path='*' element={<Error404></Error404>}></Route>
                </Routes>
            </ErrorBoundary>
        </Provider>
    )
}

export default App;