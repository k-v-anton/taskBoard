import { $ } from '../helpers/selector.js'
import { toggleActiveClass } from '../helpers/toggleActiveClass.js'

function handleEditTask(event) {
    event.preventDefault()

    const evTar = event.target
    const taskChangeId = evTar.closest('.task').id

    if (evTar.textContent.toUpperCase() === 'EDIT' &&
        evTar.classList.contains('task__edit')) {
        const popupElement = $('#popupChange')
        const inputhidden = popupElement.querySelector('.input__hiden')
        inputhidden.setAttribute('value', `${taskChangeId}`)
        toggleActiveClass(popupElement)
    }
}

export { handleEditTask }
