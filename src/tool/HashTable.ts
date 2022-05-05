export const Horner = (str: string): number => {
    let x = 37;
    let result = str.charCodeAt(0)
    let index = 0
    while (str[index + 1] !== undefined) {
        index = index + 1
        result = result * x + str.charCodeAt(index)
    }
    return result
}

