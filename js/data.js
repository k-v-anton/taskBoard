let users = ['anton', 'artem', 'maksim', 'rostislav']
let tasks = []

function storageUsers(data) {
    tasks = data
}

function addTask(data) {
    tasks.push(data)
}


export { users, storageUsers, addTask }