import { handleCreateTask } from './handleCreateTask.js'
import { toggleActiveClass } from './toggleActiveClass.js'
import { $ } from './selector.js'
import { startPage } from './startPage.js'
import { handleSaveStorage } from './handleSaveStorage.js'

const addTodoElement = $('#addTodo')
const popupElement = $('#popup')
const popupCanselElement = $('#popupCansel')
const popupConfirmElement = $('#popupConfirm')

document.addEventListener('DOMContentLoaded', startPage)
addTodoElement.addEventListener('click', () => toggleActiveClass(popupElement))
popupCanselElement.addEventListener('click', () => toggleActiveClass(popupElement))
popupConfirmElement.addEventListener('click', handleCreateTask)
window.addEventListener('beforeunload', handleSaveStorage)




