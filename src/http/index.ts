import qs from "qs";
const api = "api请求地址";
interface Config extends RequestInit {
    token?: string,
    data?: Object
}
export const http = (endpoint: string, { data, token, headers, ...customConfig }: Config) => {
    const config: Config = {
        method: "GET",
        headers: {
            Authorization: token ? `Bearer ${token}` : ``,
            "Content-Type": data ? "application/json" : ""
        }
    }
    if (config.method.toUpperCase() === "GET") {
        endpoint += `?${qs.stringify(data)}`
    } else {
        config.body = JSON.stringify(data || {})
    }
    return window.fetch(`${api}/${endpoint}`, config)
}
