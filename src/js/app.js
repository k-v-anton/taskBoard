import { handleCreateTask } from './handleCreateTask.js'
import { toggleActiveClass } from './toggleActiveClass.js'
import { $ } from './selector.js'
import { startPage } from './startPage.js'
import { handleSaveStorage } from './handleSaveStorage.js'
import { handleDeleteSelectedTask } from './handleDeleteSelectedTask.js'
import { handleEditTask } from './handleEditTask.js'
import { handleConfirmChangeTask } from './handleConfirmChangeTask.js'
import { handleMoveTask } from './handleMoveTask.js'
import { handleDeleteAll } from './handleDeleteAll.js'
import { clock } from './clock.js'
import { handleConfirmDeleteAiiTasks } from './handleConfirmDeleteAiiTasks.js'
import { handleCanselDeleteAllTask } from './handleCanselDeleteAllTask.js'
import { handleMoveElementTask } from './handleMoveElementTask.js'

const clockElement = $('#clock')
const addTodoElement = $('#addTodo')
const deleteAllElement = $('#deleteAll')
const popupCreateElement = $('#popup')
const popupCanselCreateElement = $('#popupCansel')
const popupConfirmCreateElement = $('#popupConfirm')
const todoCardsElement = $('#todoCards')
const progressCardsElement = $('#progressCards')
const doneCardsElement = $('#doneCards')
const popupChangeElement = $('#popupChange')
const popupCanselChangeElement = $('#popupButtonCansel')
const popupConfirmlChangeElement = $('#popupButtonChange')
const popupWarningDeleteAllElement = $('#popupWarningDeleteAll')
const popupWarningMoveElement = document.querySelector('#popupWarningMove')

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
popupWarningDeleteAllElement.addEventListener('click', () => handleCanselDeleteAllTask(popupWarningDeleteAllElement))
popupWarningDeleteAllElement.addEventListener('click', handleConfirmDeleteAiiTasks)
popupWarningMoveElement.addEventListener('click', () => handleCanselDeleteAllTask(popupWarningMoveElement))
popupWarningMoveElement.addEventListener('click', handleMoveElementTask)
window.addEventListener('beforeunload', handleSaveStorage)

setInterval(() => clockElement.textContent = clock(), 1000)
