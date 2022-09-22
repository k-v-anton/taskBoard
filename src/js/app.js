import { startPage, handleSaveStorage } from './modules/handleLoadApp.js'
import { handleCreateTask } from './modules/handleCreateTask.js'
import { toggleActiveClass } from './helpers/toggleActiveClass.js'
import { dragTodo, dragProgress } from './helpers/dragAndDrop.js'
import { $ } from './helpers/selector.js'
import { clock } from './helpers/clock.js'
import { handleEditTask } from './modules/handleEditTask.js'
import { handleConfirmChangeTask } from './modules/handleConfirmChangeTask.js'
import { handleMoveTask, handleMoveElementTask as handleWarningMoveTask } from './modules/handleMoveTask.js'
import { handleConfirmDeleteAiiTasks } from './modules/handleConfirmDeleteAllTasks.js'
import {
    handleCanselDeleteAllTask,
    handleCanselMoveTask,
    handleDeleteAll,
    handleDeleteSelectedTask
} from './modules/handleDelete.js'

const clockElement = $('#clock')
const addTodoElement = $('#addTodo')
const deleteAllElement = $('#deleteAll')
const popupCreateElement = $('#popupCreateTask')
const popupCanselCreateElement = $('#popupCansel')
const popupConfirmCreateElement = $('#popupConfirm')

const todoCardsElement = $('#todoCards')
const progressCardsElement = $('#progressCards')
const doneCardsElement = $('#doneCards')

const popupChangeElement = $('#popupChange')
const popupCanselChangeElement = $('#popupButtonCansel')
const popupConfirmlChangeElement = $('#popupButtonChange')
const popupWarningDeleteAllElement = $('#popupWarningDeleteAll')
const popupWarningMoveElement = $('#popupWarningMove')

document.addEventListener('DOMContentLoaded', startPage)
addTodoElement.addEventListener('click', () => toggleActiveClass(popupCreateElement))
deleteAllElement.addEventListener('click', handleDeleteAll)
todoCardsElement.addEventListener('click', handleDeleteSelectedTask)
todoCardsElement.addEventListener('click', handleEditTask)
todoCardsElement.addEventListener('click', handleMoveTask)
progressCardsElement.addEventListener('click', handleMoveTask)
doneCardsElement.addEventListener('click', handleDeleteSelectedTask)
popupCanselChangeElement.addEventListener('click', () => toggleActiveClass(popupChangeElement))
popupConfirmlChangeElement.addEventListener('click', handleConfirmChangeTask)
popupCanselCreateElement.addEventListener('click', () => toggleActiveClass(popupCreateElement))
popupConfirmCreateElement.addEventListener('click', handleCreateTask)
popupWarningDeleteAllElement.addEventListener('click', handleCanselDeleteAllTask)
popupWarningDeleteAllElement.addEventListener('click', handleConfirmDeleteAiiTasks)
popupWarningMoveElement.addEventListener('click', handleCanselMoveTask)
popupWarningMoveElement.addEventListener('click', handleWarningMoveTask)
window.addEventListener('beforeunload', handleSaveStorage)

setInterval(() => clockElement.textContent = clock(), 1000)

todoCardsElement.addEventListener('mousedown', dragTodo)
progressCardsElement.addEventListener('mousedown', dragProgress)
