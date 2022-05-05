import React from 'react';
import { Table, TableProps } from 'antd'
import { Iproject } from "@/common"
import { AppRouter } from "@/Router/index"
import { Collect } from "@/components/collect"
import { useEditProject } from "@/http/projectRequestCumtomHook"
interface IProps extends TableProps<Iproject> {
    refresh?: () => void
}

const Tables = ({ ...props }: IProps) => {
    const { refresh } = props
    const { mutate } = useEditProject()
    const { skipPath } = AppRouter()
    const columns = [
        {
            title: <Collect clecked={true} disabled={true} />,
            render(value: unknown, project: Iproject) {
                return (
                    <Collect clecked={project.pin} onChange={() => {
                        mutate({ id: project.id, pin: !project.pin })
                        refresh
                    }}></Collect>
                )
            }
        },
        {
            title: '名称',
            dataIndex: 'name',
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
            dataIndex: 'functionary',
            key: 'functionary',
        },
        {
            title: "创建时间",
            dataIndex: "createTime",
            key: "createTime"
        }
    ];
    return (
        <>
            <Table   {...props} columns={columns} rowKey={"id"} />
        </>
    )
}

export default Tables