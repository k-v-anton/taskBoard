function dateCreateTask(data) {
    const day = data.getDay() < 10 ? `0${data.getDay()}` : data.getDay()
    const month = data.getMonth() < 10 ? `0${data.getMonth()}` : data.getMonth()
    const year = data.getFullYear() < 10 ? `0${data.getFullYear()}` : data.getFullYear()

    const hour = data.getHours() < 10 ? `0${data.getHours()}` : data.getHours()
    const minuts = data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes()
    const seconds = data.getSeconds() < 10 ? `0${data.getSeconds()}` : data.getSeconds()

    return `${day}/${month}/${year} ${hour}:${minuts}:${seconds}`
}

export { dateCreateTask }
