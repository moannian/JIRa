import { useCallback, useState } from "react";
import { AxiosPromise } from "axios"
import { useMountedRef } from "@/tool/customHook"
import { Iproject } from "@/common/index"
import { useQuery } from "react-query";;
interface IState<D> {
    error: Error | null,
    data?: D | [],
    state: "padding" | "loading" | "error" | "success",
}

const useHttp = <D>(prosData?: { data: D }) => {
    const mountedRef = useMountedRef()
    const [data, setData] = useState<IState<D>>({
        state: "loading",
        data: [],
        error: null,
        ...prosData
    })
    const [retry, setRetry] = useState(() => () => { })
    let setSuccess = (data: D) => {

        setData({
            state: "success",
            data: data,
            error: null
        })
    }
    let setError = (err: Error) => {
        setData({ ...data, state: "error", error: err })
    }
    const run = useCallback((promise: AxiosPromise<D>, runConfig?: {
        retry: () => AxiosPromise<D>
    }) => {
        if (!promise || !promise.then) {
            throw new Error("请传入异步的请求")
        }
        setData({ ...data, state: "loading" })
        setRetry(() => () => {
            if (runConfig?.retry) {
                run(runConfig?.retry(), runConfig)
            }
        })
        return promise.then(res => {

            if (mountedRef) {
                setSuccess(res.data)
            }
            return res.data
        }).catch(err => {
            setError(err)
        })
    }, [])
    return { data: data.data, run, setError, retry }
}
export default useHttp

export const useProjects = (parms: Partial<Iproject>) => {
    return useQuery("projects", () => 123)
}
