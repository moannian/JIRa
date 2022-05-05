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

// 处理异步函数
interface State<D> {
    error: Error | null,
    data: D | [],
    state: "padding" | "loading" | "error" | "success",
}



export const useAsync = <D>(initialState?: State<D>) => {

    const [state, setState] = useState<State<D>>({
        state: "padding",
        data: [],
        error: null,
        ...initialState
    });
    const [retry, setRetry] = useState(() => () => { })
    const setData = (data: D) => {
        setState({
            data,
            state: "success",
            error: null
        })


    };

    const setError = (error: Error) => {
        setState({
            error,
            data: [],
            state: "error"
        })

    }
    // 处理异步的请求
    const run = (promise: Promise<D>, runConfig?: { retry: Promise<D> }) => {
        if (!promise || !promise.then) {
            throw new Error("请传入异步的请求")
        }

        setRetry(() => () => {
            if (runConfig?.retry) {
                run(runConfig?.retry, runConfig)
            }
        })

        setState({
            ...state,
            state: 'loading',
        })
        return promise.then(data => {
            setData(data);

            return data
        }).catch(error => {
            setError(error)
            return error
        })
    }
    return {
        isLoading: state.state === "loading",
        setData,
        setError,
        run,
        retry,
        ...state
    }
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