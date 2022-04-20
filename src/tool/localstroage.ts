let Storages = window.localStorage

export const setLoginStorage = (token: string) => {
    Storages.setItem("TOKEN", token)
}