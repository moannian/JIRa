let Storages = window.localStorage

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