import { $ } from '../helpers/selector.js'
import { toggleActiveClass } from '../helpers/toggleActiveClass.js'

function handleEditTask() {
    const evTar = event.target
    const taskChange = evTar.closest('.task')
    const popupElement = $('#popupChange')

    if (evTar.textContent.toUpperCase() === 'EDIT' &&
        evTar.classList.contains('task__edit')) {
        const inputhidden = popupElement.querySelector('.input__hiden')
        const titleInputElement = popupElement.querySelector('.popup__tittle')
        const textTextAreaElement = popupElement.querySelector('.popup__text')

        inputhidden.setAttribute('value', `${taskChange.id}`)
        titleInputElement.setAttribute('value', `${taskChange.querySelector('.task__title').textContent}`)
        textTextAreaElement.textContent = taskChange.querySelector('.task__desckription').textContent
        changeTaskEnterUser(taskChange)
        toggleActiveClass(popupElement)
    }
}

function changeTaskEnterUser(task) {
    const user = task.querySelector('.task__implementer').textContent
    const users = $('#popupChange').querySelectorAll('.popup__drop-menu-user')

    users.forEach(element => {
        element.removeAttribute('selected')
        if (element.textContent === user) {
            element.setAttribute('selected', 'selected')
            console.log(element)
        }
    })
}

export { handleEditTask }
