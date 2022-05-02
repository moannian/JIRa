import React from 'react';

import { Button, Form, Input, Card, Divider, message } from "antd"
import styled from "@emotion/styled";
import { AppRouter } from "../../Router/index"
import { LongButton } from "@/components/style/button"
import { useDocumentTitle } from "@/tool/customHook"


const logoImg = require("@/assets/image/logo.svg")
const leftImg = require("@/assets/image/left.svg")
const rightImg = require("@/assets/image/right.svg")
export const Register = () => {
    const { skipPath } = AppRouter()

    useDocumentTitle("注册")

    const Submit = (vaule: { username: string, password: string, cPassword: string }) => {
        let username = vaule.username;
        let password = vaule.password
        let cPassword = vaule.cPassword;
        if (cPassword !== password) {
            message.error("请确保两次密码一致")
            return
        }

    }

    return (
        <Background>
            <Logo />
            <Wrapper title={<h4 style={{ "textAlign": "center" }}>注册</h4>}>
                <Form
                    autoComplete="off"
                    onFinish={Submit}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入您的用户名' }]}
                    >
                        <Input placeholder='用户名' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入您的密码' }]}
                    >
                        <Input.Password placeholder='密码' />
                    </Form.Item>
                    <Form.Item
                        name="cPassword"
                        rules={[{ required: true, message: "请确认密码" }]}
                    >
                        <Input.Password placeholder='请确认您的密码' />
                    </Form.Item>
                    <div style={{ "display": "flex", "justifyContent": "center" }}>
                        <LongButton type="primary" htmlType="submit" size="large"  >
                            登录
                        </LongButton>
                    </div>
                    <Divider></Divider>
                    <div style={{ "display": "flex", "justifyContent": "center" }}>
                        <Button type="link" htmlType="button" onClick={() => skipPath("/login")}>
                            已有账号，账号登录
                        </Button>
                    </div>
                </Form>
            </ Wrapper></Background>
    )
}

const Wrapper = styled(Card)`
    width:30vw;
    margin:3rem auto ;
    box-shadow:rgba(0,0,0,0.1) 0 0 10px ;
    min-height:30rem ;
`
const Logo = styled.div`
    width:5rem ;
    height:5rem ;
    margin: 2rem auto;
    background-color:red ;
    background:url(${logoImg}) no-repeat center;
`
const Background = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    background-repeat:no-repeat;
    background-attachment: fixed;
    background-position:left bottom,right bottom;
    background-size:40vw,40vw,cover;
    background-image:url(${leftImg}),url(${rightImg}) ;
`
export default Register