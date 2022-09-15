import { handleCreateTask } from './handleCreateTask.js'
import { toggleActiveClass } from './toggleActiveClass.js'
import { $ } from './selector.js'
import { startPage } from './startPage.js'
import { handleSaveStorage } from './handleSaveStorage.js'
import { handleDeleteSelectedTask } from './handleDeleteSelectedTask.js'
import { handleEditTask } from './handleEditTask.js'
import { handleConfirmChangeTask } from './handleConfirmChangeTask.js'
import { tasks } from './data.js'
import { renderTasks } from './renderTasks.js'

const addTodoElement = $('#addTodo')
const popupCreateElement = $('#popup')
const popupCanselCreateElement = $('#popupCansel')
const popupConfirmCreateElement = $('#popupConfirm')
const todoCardsElement = $('#todoCards')
const popupChangeElement = $('#popupChange')
const popupCanselChangeElement = $('#popupButtonCansel')
const popupConfirmlChangeElement = $('#popupButtonChange')

document.addEventListener('DOMContentLoaded', startPage)
addTodoElement.addEventListener('click', () => toggleActiveClass(popupCreateElement))
popupCanselCreateElement.addEventListener('click', () => toggleActiveClass(popupCreateElement))
popupConfirmCreateElement.addEventListener('click', handleCreateTask)
todoCardsElement.addEventListener('click', handleDeleteSelectedTask)
todoCardsElement.addEventListener('click', handleEditTask)
popupCanselChangeElement.addEventListener('click', () => toggleActiveClass(popupChangeElement))
popupConfirmlChangeElement.addEventListener('click', handleConfirmChangeTask)
window.addEventListener('beforeunload', handleSaveStorage)

todoCardsElement.addEventListener('click', (event) => {
    event.preventDefault()
    const task = event.target.closest('.task')

    if (event.target.textContent = '>' &&
        event.target.classList.contains('task__move')) {
        tasks.map((element) => {
            if (element.id == task.id) {
                element.board = 2
                task.querySelector('.task__edit').textContent = 'back'
            }
        })
    }
    renderTasks(tasks)
})
