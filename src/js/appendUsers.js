import { $ } from './selector.js'

function appendUsers(data) {
    data.forEach(element => {
        $('#popup')
            .querySelector('.popup__drop-menu')
            .innerHTML += `<option >${element}</option>`
        $('#popupChange')
            .querySelector('.popup__drop-menu')
            .innerHTML += `<option >${element}</option>`
    })
}

export { appendUsers }
