import { renderTasks } from '../helpers/renderTasks.js'
import { tasks, addTask } from '../helpers/data.js'
import { toggleActiveClass } from '../helpers/toggleActiveClass.js'
import { $ } from '../helpers/selector.js'
import { dateCreateTask } from '../helpers/dateCreateTask.js'

function handleCreateTask() {
    const popupElement = $('#popupCreateTask')

    toggleActiveClass(popupElement)

    const dateCreate = new Date()
    const newTask = {
        id: Date.parse(dateCreate),
        title: popupElement.querySelector('.popup__tittle').value,
        text: popupElement.querySelector('.popup__text').value,
        user: popupElement.querySelector('.popup__drop-menu').value,
        timeCreate: dateCreateTask(dateCreate),
        board: 1
    }

    addTask(newTask)
    $('#popupCreateTask').querySelector('.popup__content').reset()
    renderTasks(tasks)
}

export { handleCreateTask }
