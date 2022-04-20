let loaclStorageKey = "__auth_provider_token";

export interface User {
    id: string;
    name: string;
    email: string;
    title: string;
    organization: string;
    token: string
}
export const getToken = () => window.localStorage.getItem(loaclStorageKey)
export const handleUserResponse = (user: User) => {
    window.localStorage.setItem(loaclStorageKey, user.token || "");
    return user
}

export const login = (data: { usename: string, password: string }) => {
    // 处理接口请求的地方
}