import React, { useEffect, useState } from 'react';
import { useImmerState } from "@shrugsy/use-immer-state"
import { Form, Input } from "antd"
import { useDebounce, useAsync, useDocumentTitle } from "@/tool/customHook";
import { useQueryParam } from "@/tool/url"
import { UserSelect } from "@/components/select"
import styled from '@emotion/styled';
import Header from "./header"
import Table from "./table";
import { list } from "@/mock/index"
import { Iproject } from "@/common"


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

    let { run, data, isLoading, retry } = useAsync<Iproject[]>();

    useEffect(() => {
        if (project.name && project.projectID) {
            run(Promise.resolve(list.filter(item => item.projectID === Number(project.projectID) && item.name === project.name)))
        } else if (project.projectID) {
            run(Promise.resolve(list.filter(item => item.projectID === Number(project.projectID))))
        } else if (project.name) {
            run(Promise.resolve(list.filter(item => item.name === project.name)))
        } else {
            run(Promise.resolve(list))
        }
    }, [search, project])

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
                <Table loading={isLoading} dataSource={data || []} refresh={retry} />
            </Container>
        </>
    )
}


const Container = styled.div`
    padding:3.2rem;
`
export default Home

