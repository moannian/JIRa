import React from "react";
import { Button, Divider, List, Popover, Typography } from "antd";
import { useProjectModal } from "@/tool/url"

import styled from "@emotion/styled"
import createMode from "./createModel"

const ProjectPopover = () => {
    const { open } = useProjectModal()
    const content = (<Container>
        <Typography.Text type={"secondary"}>收藏项目</Typography.Text>
        <List>
            <List.Item.Meta title={"测试1"}></List.Item.Meta>
            <List.Item.Meta title={"测试2"}></List.Item.Meta>
        </List>
        <Divider />
        <Button
            type={"link"}
            style={{ padding: 0 }}
            onClick={() => { open("创建项目") }}>
            创建目标
        </Button>
    </Container >)
    return <Popover placement={"bottom"} content={content}>
        项目
    </Popover>
}

const Container = styled.div`
   min-width:30rem ;
`
export default ProjectPopover
