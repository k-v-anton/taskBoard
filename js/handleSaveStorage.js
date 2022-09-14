import { tasks } from './data.js'

function handleSaveStorage() {
    localStorage.setItem('users', JSON.stringify(tasks))
}

export { handleSaveStorage }