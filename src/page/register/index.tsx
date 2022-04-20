import React, { InputHTMLAttributes, useRef } from 'react';

export const Register = () => {
    const usernameRef = useRef<any>()
    const passwordRef = useRef<any>()
    const Submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let username = usernameRef.current.value;
        let password = passwordRef.current.vaule;
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
            <button type="submit">登陆</button>
        </form>)
}

export default Register 