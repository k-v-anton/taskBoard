import { renderTasks } from './renderTasks.js'
import { tasks, addTask } from './data.js'
import { toggleActiveClass } from './toggleActiveClass.js'
import { $ } from './selector.js'
import { dateCreateTask } from './dateCreateTask.js'


function handleCreateTask() {
    const popupElement = $('#popup')
    toggleActiveClass(popupElement)

    const dateCreate = new Date()
    const newTask = {
        id: Date.parse(dateCreate),
        title: popupElement.querySelector('.popup__tittle').value,
        text: popupElement.querySelector('.popup__text').value,
        timeCreate: dateCreateTask(dateCreate),
        user: $('.popup__drop-menu').value,
        board: 1,
    }

    if (tasks.length > 0) {
        addTask(newTask)
        $('#popup').querySelector('.popup__content').reset()
        renderTasks(tasks)
    }
}

export { handleCreateTask }
