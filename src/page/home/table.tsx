import React from 'react';
import { Table, TableProps, Button, Dropdown, Menu, message } from 'antd'
import { Iproject } from "@/common"
import { AppRouter } from "@/Router/index"
import { Collect } from "@/components/collect"
import { useProjectModal } from "@/tool/url"
import request from "@/http"
interface IProps extends TableProps<Iproject> {
    refresh: () => void,
}

const Tables = ({ ...props }: IProps) => {
    const { open } = useProjectModal()
    const { refresh } = props
    const { skipPath } = AppRouter()
    const columns = [
        {
            title: <Collect clecked={true} disabled={true} />,
            render(value: unknown, project: Iproject) {
                return (
                    <Collect clecked={Boolean(project.pin)} onChange={() => {
                        request({
                            url: `api/projectlist/${project.id}`,
                            method: "PUT",
                            data: {
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
            render: (value: string, project: Iproject) => {
                return <Dropdown overlay={
                    <Menu>
                        <Menu.Item>
                            <Button
                                type={"link"}
                                style={{ padding: 0 }}
                                onClick={() => { open("测试", project.id) }}
                            >修改</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button
                                type={"link"}
                                style={{ padding: 0 }}
                                onClick={async () => {
                                    await request({
                                        url: `api/projectlist/${project.id}`,
                                        method: "delete"
                                    })
                                    refresh();
                                    message.success("删除成功")
                                }}
                            >删除</Button>
                        </Menu.Item>
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