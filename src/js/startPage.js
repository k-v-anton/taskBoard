import { appendUsers } from './appendUsers.js'
import { users, tasks, storageUsers } from './data.js'
import { counterTasks } from './counterTasks.js'
import { $ } from './selector.js'
import { renderTasks } from './renderTasks.js'

function startPage() {
    storageUsers(JSON.parse(localStorage.getItem('tasks')))
    appendUsers(users)
    renderTasks(tasks)
    counterTasks($('#boardTodo'))
    counterTasks($('#boardInProgress'))
    counterTasks($('#boardDone'))
}

export { startPage }
