import { $ } from './selector.js'

function appendUsers(data) {
    data.forEach(element => {
        $('.popup__drop-menu').innerHTML += `<option >${element}</option>`
    })
}

export { appendUsers }