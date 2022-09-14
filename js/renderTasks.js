import { $ } from './selector.js'
import { counterTasks } from './counterTasks.js'


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

        const title = newTask.querySelector('.task__title')
        const description = newTask.querySelector('.task__desckription')
        const timeCreate = newTask.querySelector('.task__timecreate')

        newTask.setAttribute('id', `${element.id}`)
        title.textContent = `${element.title}`
        description.textContent = `${element.text}`
        timeCreate.textContent = `${element.timeCreate}`

        if (element.board == 1) {
            boardTodo.append(newTask)
        } else if (elementData.board == 2) {
            boardProgress.append(newTask)
        } else if (elementData.board == 3) {
            boardDone.append(newTask)
        }
    })

    counterTasks($('#boardTodo'))
    counterTasks($('#boardInProgress'))
    counterTasks($('#boardDone'))
}

export { renderTasks }