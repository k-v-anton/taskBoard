import { $ } from './selector.js'

function appendUsers(data) {
    data.forEach(element => {
        $('#popupCreateTask')
            .querySelector('.popup__drop-menu')
            .innerHTML += `<option class="popup__drop-menu-user">${element}</option>`
        $('#popupChange')
            .querySelector('.popup__drop-menu')
            .innerHTML += `<option class="popup__drop-menu-user">${element}</option>`
    })
}

export { appendUsers }
