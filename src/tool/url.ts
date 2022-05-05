import { useSearchParams, URLSearchParamsInit } from "react-router-dom"
import { useState, useEffect, useCallback } from "react"

//判断某一个对象是否为空
export const isVoid = (value: unknown) => value === undefined || value === null || value === "";
export const cleanObject = (object?: { [key: string]: unknown }) => {
    if (!object) {
        return {};
    }
    const result = { ...object };
    Object.keys(result).forEach((key) => {
        const value = result[key];
        if (isVoid(value)) {
            delete result[key];
        }
    });
    return result;
};
/**
 * 返回页面url中指定键的参数值
 */
export const useQueryParam = <K extends string>(keys: K[]) => {
    const [searchParmas, setSearchParmas] = useSearchParams();
    const [state, setState] = useState<{ [Key in K]: unknown }>()

    useEffect(() => {
        setSearchParmas(state as URLSearchParamsInit)
    }, [state])


    return [
        keys.reduce((prev: { [key in K]: string }, key: K) => {
            return { ...prev, [key]: searchParmas.get(key) || '' }
        }, {} as { [key in K]: string }),

        (parms: Partial<{ [key in K]: unknown }>) => {
            parms = cleanObject(parms) as { [Key in K]: unknown }

            setState(parms as any)
        }
    ] as const

}