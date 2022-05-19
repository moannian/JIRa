import React from "react";
import { Select } from "antd"
import { Row } from "../common"

// 这样可以获取某一组件上的类型
type SelectProps = React.ComponentProps<typeof Select>
interface IdSelectProps extends Omit<SelectProps, "value" | "onChange" | "defaultOptionName" | "options"> {
    value?: Row | null | undefined,
    onChange: (value?: number) => void,
    defaultOptionName?: string,
    options: { name: string, id: number }[]
}
const { Option } = Select;

const toNumber = (value: unknown) => isNaN(Number(value)) ? 0 : Number(value);

interface ISelectProps extends SelectProps {
    data: { id: number, name: string, principalID: string }[],
    defaultValue: string
}
export const UserSelect: React.FC<ISelectProps> = React.memo((props) => {
    const { data, defaultValue, ...resetProps } = props
    return (
        <Select

            defaultValue={defaultValue}
            {...resetProps}
            style={{ width: 120 }}>
            value={1}
            {data.map(item => {
                return (
                    <Option value={item?.principalID} key={item?.id} >{item?.name}</Option>
                )
            })}
        </Select >
    )
})