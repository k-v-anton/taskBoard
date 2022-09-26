import { startPage, handleSaveStorage } from './modules/handleLoadApp.js'
import { handleCreateTask } from './modules/handleCreateTask.js'
import { toggleActiveClass } from './helpers/toggleActiveClass.js'
import { handleDragTodo, handleDragProgress } from './helpers/dragAndDrop.js'
import { $ } from './helpers/selector.js'
import { Clock } from './class/Clock.js'
import { handleEditTask } from './modules/handleEditTask.js'
import { handleConfirmChangeTask } from './modules/handleConfirmChangeTask.js'
import { handleMoveTask, handleCanselWarning } from './modules/handleMoveTask.js'
import { handleConfirmDeleteAllTasks } from './modules/handleConfirmDeleteAllTasks.js'
import { handleDeleteAll, handleDeleteSelectedTask } from './modules/handleDelete.js'
import { handleConfirmWarningMove } from './modules/handleConfirmWarningMove.js'

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
doneCardsElement.addEventListener('click', handleDeleteSelectedTask)
popupCanselChangeElement.addEventListener('click', () => toggleActiveClass(popupChangeElement))
popupConfirmlChangeElement.addEventListener('click', handleConfirmChangeTask)
popupCanselCreateElement.addEventListener('click', () => toggleActiveClass(popupCreateElement))
popupConfirmCreateElement.addEventListener('click', handleCreateTask)
popupWarningDeleteAllElement.addEventListener('click', () => handleCanselWarning('#popupWarningDeleteAll'))
popupWarningDeleteAllElement.addEventListener('click', handleConfirmDeleteAllTasks)
todoCardsElement.addEventListener('mousedown', handleDragTodo)
progressCardsElement.addEventListener('mousedown', handleDragProgress)
todoCardsElement.addEventListener('click', handleMoveTask)
progressCardsElement.addEventListener('click', handleMoveTask)
popupWarningMoveElement.addEventListener('click', () => handleCanselWarning('#popupWarningMove'))
popupWarningMoveElement.addEventListener('click', handleConfirmWarningMove)
window.addEventListener('beforeunload', handleSaveStorage)

setInterval(() => {
    const clock = new Clock()
    clockElement.textContent = clock.getClock()
}, 1000)
