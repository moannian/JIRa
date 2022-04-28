import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Select } from "antd"
import { useDebounce, useAsync } from "@/tool/customHook"
import styled from '@emotion/styled';
import Header from "./header"
import Table from "./table";

const { Option } = Select;
export interface Iproject {
    id: number,
    name: string,
    department: string,
    functionary: string,
    createTime: string
}
const Home = () => {
    let list = [
        {
            id: 1,
            name: "骑手",
            department: "牛马",
            functionary: "张三",
            createTime: "121"
        },
        {
            id: 2,
            name: "团购app",
            department: "牛马",
            functionary: "李四",
            createTime: "121"
        }
    ]
    let [projectName, setprojectName] = useState<string | null>(null)
    let [dataList, setDataList] = useState<Iproject[]>([...list])
    let [test, setTest] = useState(1)


    let project = useDebounce(projectName, 2000)
    let { run, data, isLoading } = useAsync<Iproject[]>()

    useEffect(() => {
        if (project) {
            run(Promise.resolve(list.filter(item => item.name === project)))
        }
        run(Promise.resolve(list))

    }, [project])

    return (
        <>
            <Header />
            <Container>
                <h1>项目列表</h1>
                <Form layout={"inline"}>
                    <Form.Item>
                        <Input placeholder='项目名' onChange={(e) => {
                            setprojectName(e.target.value)
                        }} />
                    </Form.Item>
                    <Form.Item>
                        <Select defaultValue="项目负责人" style={{ width: 120 }}>
                            {dataList.map(item => {
                                return (
                                    <Option value={item.functionary} key={item.id}>{item.functionary}</Option>
                                )
                            })}
                        </Select>
                    </Form.Item>
                </Form>
                <Table loading={isLoading} dataSource={data || []} />
            </Container>
        </>
    )
}


const Container = styled.div`
    padding:3.2rem;
`
export default Home

