import { tasks } from './data.js'

function handleSaveStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

export { handleSaveStorage }
