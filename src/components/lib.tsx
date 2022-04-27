import styled from "@emotion/styled"

/**
 * 注意这里的写法
 */
export const Row = styled.div<{
    gap?: number,
    bottom?: number
}>`
    display:flex;
    align-items:center;
    margin-bottom:${props => props.bottom ? props.bottom + "rem" : 0} ;
    >*{
        margin-top:0 !important;
        margin-bottom:0 !important;
        margin-right:${props => props.gap ? props.gap + "rem" : "2rem"}
    }
`