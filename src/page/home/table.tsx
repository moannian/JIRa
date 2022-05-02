import React from 'react';
import { Table, TableProps } from 'antd'
import { Iproject } from "./Home"
import { AppRouter } from "@/Router/index"

interface IProps extends TableProps<Iproject> {
}

const Tables = ({ ...props }: IProps) => {

    const { skipPath } = AppRouter()
    const columns = [
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