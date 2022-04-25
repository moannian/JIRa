import React from 'react';
import { Button, Form, Input, Card, Divider } from "antd"
import { AppRouter } from "../../Router/index"
import { setLoginStorage } from "@/tool/localstroage"
import styled from '@emotion/styled';


export const Login = () => {
    const { skipPath } = AppRouter()
    const Submit = (vaule: { username: string, password: string }) => {
        let username = vaule.username;
        let password = vaule.password
        console.log(1);

    }
    return (
        <Wrapper title={<h4 style={{ "textAlign": "center" }}>登录</h4>}>
            <Form
                autoComplete="off"
                onFinish={Submit}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: '请输入您的用户名' }]}
                >
                    <Input placeholder='用户名' />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: '请输入您的密码' }]}
                >
                    <Input.Password placeholder='密码' />
                </Form.Item>



                <div style={{ "display": "flex", "justifyContent": "center" }}>
                    <Button type="primary" htmlType="submit" size="large"  >
                        登录
                    </Button>
                </div>
                <Divider></Divider>
                <div style={{ "display": "flex", "justifyContent": "center" }}>
                    <Button type="link" htmlType="button" onClick={() => skipPath("/register")}>
                        没有账号？注册新账号
                    </Button>
                </div>
            </Form>
        </ Wrapper>
    )
}

const Wrapper = styled(Card)`
    width:30vw;
    margin:3rem auto ;
    box-shadow:rgba(0,0,0,0.1) 0 0 10px ;
    min-height:30rem ;
`
export default Login