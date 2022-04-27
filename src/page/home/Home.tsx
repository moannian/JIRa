import React from 'react';
import { Form, Input, Select } from "antd"
import styled from '@emotion/styled';
import Header from "./header"
import Table from "./table"
const { Option } = Select;
const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <h1>项目列表</h1>
                <Form layout={"inline"}>
                    <Form.Item>
                        <Input placeholder='项目名' />
                    </Form.Item>
                    <Form.Item>
                        <Select defaultValue="项目负责人" style={{ width: 120 }}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </Form.Item>
                </Form>
                <Table />
            </Container>
        </>
    )
}


const Container = styled.div`
    padding:3.2rem;
`
export default Home

