import React, { useEffect } from 'react';
import { Provider } from "react-redux"
import { AppRouter } from "./Router/index"
import store from "./store/index"
import 'antd/dist/antd.css';
import "./style/index"
import "./assets/css/app.css"
const App = () => {

    const { Router, skipPath } = AppRouter()

    useEffect(() => {
        skipPath("/login")
    }, [])
    return (




        <Provider store={store}>
            {Router}
        </Provider>



    )
}

export default App;