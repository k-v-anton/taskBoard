import { $ } from '../helpers/selector.js'
import { tasks } from '../helpers/data.js'
import { renderTasks } from '../helpers/renderTasks.js'
import { toggleActiveClass } from '../helpers/toggleActiveClass.js'

function handleConfirmChangeTask(event) {
    event.preventDefault()
    
    const taskChangeId = $('.input__hiden').value
    const popupElement = $('#popupChange')

    tasks.map((element) => {
        if (element.id == taskChangeId) {
            element.title = popupElement.querySelector('.popup__tittle').value
            element.text = popupElement.querySelector('.popup__text').value
            element.user = $('.popup__drop-menu').value
        }
    })

    $('#popupChange').querySelector('.popup__content').reset()
    toggleActiveClass(popupElement)
    renderTasks(tasks)
}

export { handleConfirmChangeTask }
