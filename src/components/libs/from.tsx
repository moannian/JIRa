import React, { useEffect } from "react"
import { Form } from "antd"
type form = React.ComponentProps<typeof Form>
interface IProps<D> extends form {
    data: D
}
const Page = <D,>(props: IProps<D>) => {


    const [form] = Form.useForm()
    const { children, data, ...reset } = props;
    const formItemLayout = {
        labelCol: {
            sm: { span: 1 },
        },
    };
    useEffect(() => {
        if (data) {
            console.log(3);
            console.log(data);

            form.setFieldsValue(data)
        } else {

            form.resetFields()
        }

    }, [data])
    return (
        <Form
            form={form}
            initialValues={data}
            {...reset}
            {...formItemLayout}
        >
            {children}
        </Form>
    )
}


export default Page