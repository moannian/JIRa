import React from "react"

import styled from "@emotion/styled"
import { Button, Spin, Typography } from "antd";
/**
 * 注意这里的写法
 */
export const Row = styled.div<{
    gap?: number,
    bottom?: number,
}>`
    display:flex;
    align-items:center;
    justify-content:justify;
    margin-bottom:${props => props.bottom ? props.bottom + "rem" : 0} ;
    >*{
        margin-top:0 !important;
        margin-bottom:0 !important;
        margin-right:${props => props.gap ? props.gap + "rem" : "2rem"}
    }
`
// 类型守卫
const isError = (value: any): value is Error => value?.message;
export const ErrorBox = ({ error }: { error: unknown }) => {
    if (isError(error)) {
        return <Typography.Text type={"danger"}>{error?.message}</Typography.Text>;
    }
    return null;
};
export const FullPageErrorFallback = ({ error }: { error: Error | null }) => (
    <FullPage>
        <ErrorBox error={error} />
    </FullPage>
);
const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const CustomButtom = styled(Button) <{
    width?: number,
    height?: number
}>`
position:relative ;
left:50%;
transform:translateX(-50%);
width:${props => props.width ? props.width + "rem" : null};
height: ${props => props.width ? props.height + "rem" : null};
`
