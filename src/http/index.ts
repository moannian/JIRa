import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

const request = (config: AxiosRequestConfig) => {
    const instance = axios.create({
        baseURL: "http://localhost:9000",
        timeout: 5000,
        method: 'get'
    })
    instance.interceptors.response.use((response) => {
        return response.data
    })
    return instance(config)
}
export default request