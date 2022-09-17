import { $ } from '../helpers/selector.js'
import { toggleActiveClass } from '../helpers/toggleActiveClass.js'

function handleDeleteAll(event) {
    event.preventDefault()

    const popupWarning = $('#popupWarningDeleteAll')
    popupWarning.classList.add('delete-all-done-tasks')
    toggleActiveClass(popupWarning)
}

export { handleDeleteAll }
