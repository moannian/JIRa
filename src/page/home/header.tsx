import React from 'react';
import { Dropdown, Menu, Space } from "antd"
import styled from "@emotion/styled"
import { Row } from "@/components/lib"
import { getLoginStorage, remoteLoginStorage } from "@/tool/localstroage";
import ProjectPopiver from "./peojectPopover"


let logo = require("@/assets/image/software-logo.svg")


const Header = () => {
    const username = getLoginStorage()

    const menu = (
        <Menu>
            <Menu.Item onClick={() => remoteLoginStorage()}>退出登录</Menu.Item>
        </Menu>
    );
    return (
        <>
            <Head>
                <HeaderLeft gap={3}>
                    <embed type="image/svg+xml" src={logo}></embed>
                    <ProjectPopiver />
                    <h3>用户</h3>
                </HeaderLeft>
                <HeaderRight>
                    <Dropdown overlay={menu}>
                        <a onClick={e => e.preventDefault()}>
                            <Space>
                                您好,{username}
                            </Space>
                        </a>
                    </Dropdown>
                </HeaderRight>
            </Head>
        </>
    )
}

const Head = styled.div`
    width:100%;
    height:5rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-shadow:rgba(0,0,0,0.1) 0 0 10px ;
    margin-bottom:2rem ;
    padding:3.2rem;
`
const HeaderLeft = styled(Row)`

  embed{
      width:20rem ;
  }
`
const HeaderRight = styled.div`
    
`
export default Header