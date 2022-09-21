import { appendUsers } from '../helpers/appendUsers.js'
import { users, tasks, storageUsers } from '../helpers/data.js'
import { counterTasks } from '../helpers/counterTasks.js'
import { $ } from '../helpers/selector.js'
import { renderTasks } from '../helpers/renderTasks.js'

function startPage() {
    storageUsers(JSON.parse(localStorage.getItem('tasks')))
    appendUsers(users)
    renderTasks(tasks)
    counterTasks($('#boardTodo'))
    counterTasks($('#boardInProgress'))
    counterTasks($('#boardDone'))
}

function handleSaveStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

export { startPage, handleSaveStorage }
