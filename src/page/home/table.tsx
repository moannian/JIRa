import React from 'react';
import { Table, TableProps, Button, Dropdown, Menu } from 'antd'
import { useDispatch } from "react-redux"
import { openProjectCreateModel } from "@/store/action/ProjectCeateModel"
import { Iproject } from "@/common"
import { AppRouter } from "@/Router/index"
import { Collect } from "@/components/collect"
import request from "@/http"
interface IProps extends TableProps<Iproject> {
    refresh: () => void,
}

const Tables = ({ ...props }: IProps) => {
    const dispatch = useDispatch()
    const { refresh } = props
    const { skipPath } = AppRouter()
    const columns = [
        {
            title: <Collect clecked={true} disabled={true} />,
            render(value: unknown, project: Iproject) {
                return (
                    <Collect clecked={Boolean(project.pin)} onChange={() => {
                        request({
                            url: 'api/projectlist',
                            method: "PUT",
                            data: {
                                id: project.id,
                                pin: Number(!Boolean(project.pin))
                            }
                        })
                        refresh();
                    }}></Collect>
                )
            }
        },
        {
            title: '名称',
            dataIndex: 'project',
            render(value: string, project: Iproject) {
                return (
                    <a onClick={() => { skipPath(String(project.id)) }}>{value}</a>
                )
            }
        },
        {
            title: '部门',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: '负责人',
            dataIndex: 'principal',
            key: 'principal',
        },
        {
            title: "创建时间",
            dataIndex: "createTime",
            key: "createTime"
        }, {
            title: "操作",
            render: () => {
                return <Dropdown overlay={
                    <Menu>
                        <Menu.Item>
                            <Button
                                type={"link"}
                                style={{ padding: 0 }}
                                onClick={() => dispatch(openProjectCreateModel("修改项目"))}
                            >修改</Button>
                        </Menu.Item>
                        <Menu.Item>删除</Menu.Item>
                    </Menu>
                }>
                    <Button type={"link"}>...</Button>
                </Dropdown>
            }
        }
    ];
    return (
        <>
            <Table   {...props} columns={columns} rowKey={"id"} />
        </>
    )
}

export default Tables