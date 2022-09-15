import { $ } from './selector.js'
import { counterTasks } from './counterTasks.js'
import { colorsBGTasks } from './data.js'

function renderTasks(data) {
    const boardTodo = $('#todoCards')
    const boardProgress = $('#progressCards')
    const boardDone = $('#doneCards')

    boardTodo.innerHTML = ''
    boardProgress.innerHTML = ''
    boardDone.innerHTML = ''

    data.forEach(element => {
        const newTask = $('#templateTask')
            .content
            .querySelector('.task')
            .cloneNode(true)

        newTask.setAttribute('style', `background-color: ${colorsBGTasks[Math.floor(Math.random() * 10)]}`)

        const title = newTask.querySelector('.task__title')
        const description = newTask.querySelector('.task__desckription')
        const timeCreate = newTask.querySelector('.task__timecreate')
        const implementer = newTask.querySelector('.task__implementer')

        newTask.setAttribute('id', `${element.id}`)
        title.textContent = `${element.title}`
        description.textContent = `${element.text}`
        timeCreate.textContent = `${element.timeCreate}`
        implementer.textContent = `${element.user}`

        if (element.board == 1) {
            boardTodo.append(newTask)
        } else if (element.board == 2) {
            boardProgress.append(newTask)
        } else if (element.board == 3) {
            boardDone.append(newTask)
        }
    })

    counterTasks($('#boardTodo'))
    counterTasks($('#boardInProgress'))
    counterTasks($('#boardDone'))
}

export { renderTasks }
