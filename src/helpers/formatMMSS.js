

export const formatMMSS = (secund) => {
    const min = Math.floor(secund / 60)
    const remainderSekund = Math.floor(secund % 60)
    return `${min} : ${remainderSekund}`
}