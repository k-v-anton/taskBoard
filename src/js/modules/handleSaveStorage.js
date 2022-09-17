import { tasks } from '../helpers/data.js'

function handleSaveStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

export { handleSaveStorage }
