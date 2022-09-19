function dateCreateTask(data) {
    const day = data.getDate() < 10 ? `0${data.getDate()}` : data.getDate()
    const month = data.getMonth() + 1 < 10 ? `0${data.getMonth() + 1}` : data.getMonth() + 1
    const year = data.getFullYear() < 10 ? `0${data.getFullYear()}` : data.getFullYear()

    const hour = data.getHours() < 10 ? `0${data.getHours()}` : data.getHours()
    const minuts = data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes()
    const seconds = data.getSeconds() < 10 ? `0${data.getSeconds()}` : data.getSeconds()

    return `${day}/${month}/${year} ${hour}:${minuts}:${seconds}`
}

export { dateCreateTask }
