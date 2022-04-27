import React, { useEffect } from 'react';
import { Provider } from "react-redux"
import { AppRouter } from "./Router/index"
import { getLoginStorage } from "@/tool/localstroage"
import store from "./store/index"
import 'antd/dist/antd.css';
import "./style/index"
import "./assets/css/app.css"

const App = () => {

    const { Router, skipPath } = AppRouter()
    let loginToken = getLoginStorage()
    useEffect(() => {
        if (loginToken) {
            skipPath("/home")
        } else {
            skipPath("/login")
        }



    }, [])
    return (




        <Provider store={store}>
            {Router}
        </Provider>



    )
}

export default App;