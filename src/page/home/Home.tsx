import React, { useEffect } from 'react';
import { useImmerState } from "@shrugsy/use-immer-state"
import { Button, Form, Input } from "antd"
import { useDebounce, useDocumentTitle } from "@/tool/customHook";
import { useQueryParam, useProjectModal } from "@/tool/url"
import { UserSelect } from "@/components/select"
import { Row } from "@/components/lib"
import styled from '@emotion/styled';
import Header from "./header"
import Table from "./table";
import { Iproject } from "@/common"
import request from "@/http/index"
import useHttp from "@/http/usehttp"
import CreateModel from "./createModel"




const Home = () => {
    const { ui } = CreateModel()
    const [search, setSearch] = useImmerState<{
        name: string,
        projectID: string
    }>({
        name: "",
        projectID: ""
    })
    let [parms, setParms] = useQueryParam(["name", "projectID"])
    let project = useDebounce(search, 500)
    const { open } = useProjectModal()
    useDocumentTitle("项目列表", false)

    const { run, data, retry } = useHttp<Iproject[]>()
    const { run: principalRun, data: principalData } = useHttp<{ name: string, principalID: string }[]>()

    let fetch = () => request({ url: "api/projectlist" })
    useEffect(() => {
        run(fetch(), {
            retry: fetch
        })
    }, [])

    let principalFetch = () => request({ url: "api/principallist" })
    useEffect(() => {
        principalRun(principalFetch())

    }, [])
    useEffect(() => {
        setParms({ name: search?.name, projectID: search?.projectID })
    }, [search])


    return (
        <>
            <Header />
            <Container>
                <Row style={{ "justifyContent": "space-between" }} >
                    <h1>项目列表</h1>
                    <Button onClick={() => open("创建项目")}>创建项目</Button>
                </Row>
                <Form layout={"inline"}>
                    <Form.Item>
                        <Input placeholder='项目名' onChange={(e) => {
                            setSearch({ ...search, name: e.target.value })
                        }} value={parms.name} />
                    </Form.Item>
                    <Form.Item>
                        <UserSelect
                            defaultValue='负责人'
                            data={principalData as any}
                            onChange={(e) => {
                                setSearch({ ...search, "projectID": e as string })
                            }}></UserSelect>
                    </Form.Item>
                </Form>
                <Table
                    dataSource={data || []}
                    refresh={retry}
                />
            </Container>
            {ui}
        </>
    )
}


const Container = styled.div`
    padding:3.2rem;
`
export default Home

