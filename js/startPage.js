import { appendUsers } from './appendUsers.js'
import { users, storageUsers } from './data.js'
import { counterTasks } from './counterTasks.js'
import { $ } from './selector.js'

function startPage() {
    storageUsers(JSON.parse(localStorage.getItem('tasks')))
    appendUsers(users)
    counterTasks($('#boardTodo'))
    counterTasks($('#boardInProgress'))
    counterTasks($('#boardDone'))
}

export { startPage }