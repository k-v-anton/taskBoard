import { toggleActiveClass } from '../helpers/toggleActiveClass.js'

function handleCanselDeleteAllTask(event) {
    event.preventDefault()

    if (event.target.textContent.toUpperCase() === 'CANCEL') {
        toggleActiveClass(event.target.closest('.popup-warning'))
    }
}

export { handleCanselDeleteAllTask }
