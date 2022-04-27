import React from 'react';
import { Table } from 'antd'
const Tables = () => {
    const dataSource = [
        {
            id: 1,
            name: "liquan",
            department: "牛马",
            functionary: "Liq",
            createTime: "121"
        }
    ];

    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
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
            <Table dataSource={dataSource} columns={columns} rowKey={"id"} />;
        </>
    )
}

export default Tables