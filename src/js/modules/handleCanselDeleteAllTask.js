import { toggleActiveClass } from '../helpers/toggleActiveClass.js'

function handleCanselDeleteAllTask(event) {
    event.preventDefault()

    if (event.target.textContent.toUpperCase() == 'CANCEL') {
        toggleActiveClass(event.target.closest('#popupWarningDeleteAll'))
    }
}

function handleCanselMoveTask(event) {
    event.preventDefault()

    if (event.target.textContent.toLowerCase() == 'cancel') {
        toggleActiveClass(event.target)
    }
}

export { handleCanselDeleteAllTask, handleCanselMoveTask }
