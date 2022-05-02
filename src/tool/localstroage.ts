let Storages = window.localStorage
let sessionStorage = window.sessionStorage
export const setLoginStorage = (token: string) => {
    Storages.setItem("TOKEN", token)
}

export const getLoginStorage = () => {
    return Storages.getItem("TOKEN")
}

export const remoteLoginStorage = () => {
    Storages.removeItem("TOKEN");
    window.location.reload()
}

export const setRouterPath = (ptah: string) => {
    sessionStorage.setItem("ROUTERPATH", ptah)
}
export const getRouterPath = () => {
    return sessionStorage.getItem("ROUTERPATH")
}