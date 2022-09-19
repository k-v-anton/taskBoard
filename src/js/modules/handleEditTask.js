import { $ } from '../helpers/selector.js'
import { toggleActiveClass } from '../helpers/toggleActiveClass.js'

function handleEditTask(event) {
    event.preventDefault()

    const evTar = event.target
    const taskChange = evTar.closest('.task')

    if (evTar.textContent.toUpperCase() === 'EDIT' &&
        evTar.classList.contains('task__edit')) {
        const popupElement = $('#popupChange')
        const inputhidden = popupElement.querySelector('.input__hiden')
        const titleInputElement = popupElement.querySelector('.popup__tittle')
        const textTextAreaElement = popupElement.querySelector('.popup__text')

        inputhidden.setAttribute('value', `${taskChange.id}`)
        titleInputElement.setAttribute('value', `${taskChange.querySelector('.task__title').textContent}`)
        textTextAreaElement.textContent = taskChange.querySelector('.task__desckription').textContent

        const userElement = popupElement.querySelector('.popup__drop-menu')
        const user = taskChange.querySelector('.task__implementer').textContent
        console.log(user)

        toggleActiveClass(popupElement)
    }
}

export { handleEditTask }
