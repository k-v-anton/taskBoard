import { toggleActiveClass } from '../helpers/toggleActiveClass.js'

function handleCanselDeleteAllTask(element) {
    event.preventDefault()

    if (event.target.textContent.toUpperCase() === 'CANCEL') {
        toggleActiveClass(element)
    }
}

export { handleCanselDeleteAllTask }
