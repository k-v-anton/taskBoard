const users = ['anton', 'artem', 'maksim', 'rostislav']
const colorsTaskTodo = ['#FF1930', '#FF311E', '#FF3B14', '#FF1E44', '#FF1E29', '#FF5546', '#FF3F2D', '#FF3758', '#FF2D3E', '#FF441E']
const colorsTaskInProgress = ['#B2FF23', '#97FF28', '#69FF1E', '#47FF19', '#1EFF40', '#23FF44', '#4BFF60', '#4BFF51', '#84FF50', '#99FF46']
let tasks = []

function storageUsers(data) {
    tasks = data || []
}

function addTask(data) {
    tasks.push(data)
}

export { users, colorsTaskTodo, colorsTaskInProgress, tasks, storageUsers, addTask }
