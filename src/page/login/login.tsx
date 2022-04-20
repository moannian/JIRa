import React, { useRef } from 'react';
import { Button } from "antd"
import { AppRouter } from "../../Router/index"
import { setLoginStorage } from "@/tool/localstroage"



export const Login = () => {
    const { skipPath } = AppRouter()
    const usernameRef = useRef<any>()
    const passwordRef = useRef<any>()
    const Submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let username = usernameRef.current.value;
        let password = passwordRef.current.vaule;
        setLoginStorage(username)
    }
    return (
        <form onSubmit={Submit}>
            <div>
                <label htmlFor='username'>用户名：</label>
                <input type="text" id='username' ref={usernameRef} />
            </div>
            <div>
                <label htmlFor='password'>密码：</label>
                <input type="password" id='password' ref={passwordRef} />
            </div>
            <Button >登陆</Button>
            <span onClick={() => skipPath("/register")}>注册</span>
            <span>忘记密码</span>
        </form>)
}

export default Login