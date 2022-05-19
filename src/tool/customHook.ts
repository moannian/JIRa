import React, { useEffect, useRef, useState } from "react"
//处理防抖
export const useDebounce = <T>(value: T, delay: number) => {
    const [content, SetConent] = useState(value)

    useEffect(() => {
        let timeout = setTimeout(() => {
            SetConent(value)
        }, delay)
        return () => clearTimeout(timeout)
    }, [value])

    return content;

}


// 更换页面标题名称
export const useDocumentTitle = (title: string, keepOnUnmount: Boolean = true) => {
    const oldTitle = useRef(document.title).current
    useEffect(() => {
        document.title = title
    }, [title])
    useEffect(() => {
        return () => {
            if (!keepOnUnmount) {
                document.title = oldTitle
            }
        }
    }, [oldTitle, keepOnUnmount])
}

export const resetRouter = () => window.location.href = window.location.origin


// 返回组建的挂载状态，如果还没挂载或者已经卸载，返回false,反之返回true
export const useMountedRef = () => {
    const mounted = useRef(false);
    useEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false
        }
    }, [])
    return mounted
}


// 类型守卫
export let typeGuard = <D,>(value: any): value is D => value