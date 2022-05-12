import React, { useEffect } from 'react';
import { useImmerState } from "@shrugsy/use-immer-state"
import { Form, Input } from "antd"
import { useDebounce, useDocumentTitle } from "@/tool/customHook";
import { useQueryParam } from "@/tool/url"
import { UserSelect } from "@/components/select"
import styled from '@emotion/styled';
import Header from "./header"
import Table from "./table";
import { Iproject } from "@/common"
import request from "@/http/index"
import useHttp from "@/http/usehttp"

const Home = () => {

    const [search, setSearch] = useImmerState<{
        name: string,
        projectID: string
    }>({
        name: "",
        projectID: ""
    })
    let [parms, setParms] = useQueryParam(["name", "projectID"])
    let project = useDebounce(search, 500)
    useDocumentTitle("项目列表", false)

    const { run, data, retry } = useHttp<Iproject[]>()

    let fetch = () => request({ url: "api/projectlist" })
    useEffect(() => {
        run(fetch(), {
            retry: fetch
        })
    }, [run])

    useEffect(() => {
        setParms({ name: search?.name, projectID: search?.projectID })
    }, [search])

    return (
        <>
            <Header />
            <Container>
                <h1>项目列表</h1>
                <Form layout={"inline"}>
                    <Form.Item>
                        <Input placeholder='项目名' onChange={(e) => {
                            setSearch({ ...search, name: e.target.value })
                        }} value={parms.name} />
                    </Form.Item>
                    <Form.Item>
                        <UserSelect
                            defaultValue='负责人'
                            data={data as any}
                            onChange={(e) => {
                                setSearch({ ...search, "projectID": e as string })
                            }}></UserSelect>
                    </Form.Item>
                </Form>
                <Table dataSource={data.data || []} refresh={retry} />
            </Container>
        </>
    )
}


const Container = styled.div`
    padding:3.2rem;
`
export default Home

