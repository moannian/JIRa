import React, { useEffect } from "react";
import { Drawer, Form, Input, message, Select } from "antd";
import { useSelector } from "react-redux"

import { IReducers } from "@/store/content"
import { ICreateModelState } from "@/store/reducers/createModel"
import { useProjectModal } from "@/tool/url"
import useHttp from "@/http/usehttp";
import { Iproject } from "@/common";
import request from "@/http";
import { CustomButtom } from "@/components/lib";
import { getCurrentTime } from "@/tool/day"
import CustomForm from "@/components/libs/from"
const { Item } = Form

const CreateModel = () => {
    const state = useSelector<IReducers, ICreateModelState>(state => state.CreateModel);
    const { close, projectId } = useProjectModal()
    let { data, run } = useHttp<Iproject>()
    const { run: principalRun, data: principalData } = useHttp<{ name: string, principalID: string }[]>()

    let principalFetch = () => request({ url: "api/principallist" })

    useEffect(() => {
        principalRun(principalFetch())
    }, [])

    useEffect(() => {
        if (projectId) {
            run(request({ url: `api/projectlist/${projectId}` }))
        } else {
        }
    }, [projectId]);


    const finish = async (e: any) => {
        if (projectId) {
            let obj = { ...e }
            try {
                await request({
                    url: `api/projectlist/${projectId}`,
                    method: "put",
                    data: obj
                })
                message.success("修改成功")
                close()
            } catch (error) {
                message.error("修改失败")
            }
        } else {
            let time = getCurrentTime()
            let obj = { ...e, projectID: "2222", createTime: time, pin: 0 }
            try {
                await request({
                    url: "api/projectlist",
                    method: "POST",
                    data: obj
                })
                message.success("添加成功")
                close()
            } catch (error) {
                message.error("添加失败")
            }

        }
    }
    let ui = (<Drawer
        width={"100%"}
        visible={state.isCreateMOdel}
        onClose={() => { close() }}
        placement={"left"}
        title={state.title}>
        <CustomForm
            data={data as {}}
            onFinish={finish}
        >
            <Item label={"名称"} name="project">
                <Input />
            </Item>
            <Item label={"部门"} name="department">
                <Input />
            </Item>
            <Item label={"负责人"} name="principal">
                <Select>
                    {principalData?.map((item, index) => {
                        return (
                            <Select.Option value={item.name} key={index}>{item.name}</Select.Option>
                        )
                    })}
                </Select>
            </Item>
            <Item >
                <CustomButtom width={30} height={4} type={"primary"} htmlType={"submit"}>测试</CustomButtom>
            </Item>
        </CustomForm>

    </Drawer>)
    return { ui }
}



export default CreateModel