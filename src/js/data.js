const users = ['anton', 'artem', 'maksim', 'rostislav']
const colorsBGTasks = ['#08BAA2', '#08BA80', '#08BA64', '#08BA54', '#23A94B', '#68D488', '#76F49B', '#76F4E4', '#76B7AE', '#516A6C']
let tasks = []

function storageUsers(data) {
    tasks = data || []
}

function addTask(data) {
    tasks.push(data)
}

export { users, colorsBGTasks, tasks, storageUsers, addTask }
