import React from "react"
import { Rate } from "antd"

type RateProps = React.ComponentProps<typeof Rate>
interface Iprops extends RateProps {
    clecked: boolean,
    onCheckedChange?: (checked: boolean) => void
}
export const Collect: React.FC<Iprops> = React.memo((props) => {
    let { clecked, onCheckedChange, ...resetProps } = props
    return (
        <Rate
            count={1}

            value={clecked ? 1 : 0}


            {...resetProps}
        ></Rate>
    )
})