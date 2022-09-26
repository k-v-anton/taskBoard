class Clock {
    #formatStringPad(number) {
        return number.toString().padStart(2, '0')
    }

    #parseDate(date) {
        const hours = this.#formatStringPad(date.getHours())
        const minutes = this.#formatStringPad(date.getMinutes())
        const seconds = this.#formatStringPad(date.getSeconds())

        return {
            hours,
            minutes,
            seconds
        }
    }

    getClock() {
        const { hours, minutes, seconds } = this.#parseDate(new Date())

        return `${hours}:${minutes}:${seconds}`
    }
}

export { Clock }
