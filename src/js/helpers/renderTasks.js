import { $ } from './selector.js'
import { counterTasks } from './counterTasks.js'
import { colorsTaskTodo, colorsTaskInProgress } from './data.js'

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
        const implementer = newTask.querySelector('.task__implementer')

        newTask.setAttribute('id', `${element.id}`)
        title.textContent = `${element.title}`
        description.textContent = `${element.text}`
        timeCreate.textContent = `${element.timeCreate}`
        implementer.textContent = `${element.user}`

        switch (true) {
            case element.board === 1:
                newTask.setAttribute('style', `background-color: ${colorsTaskTodo[Math.floor(Math.random() * 10)]}`)
                break
            case element.board === 2:
                newTask.setAttribute('style', `background-color: ${colorsTaskInProgress[Math.floor(Math.random() * 10)]}`)
                break
            case element.board === 3:
                newTask.setAttribute('style', 'background-color: #c0c0c0')
                break

            default:
                break
        }

        if (element.board == 1) {
            boardTodo.append(newTask)
        } else if (element.board == 2) {
            boardProgress.append(newTask)
            const backElement = newTask.querySelector('.task__edit')
            backElement.textContent = 'back'
            const complitedElement = newTask.querySelector('.task__delete')
            complitedElement.textContent = 'complited'
            const moveElement = newTask.querySelector('.task__move')
            moveElement.setAttribute('style', 'display: none')
        } else if (element.board == 3) {
            boardDone.append(newTask)
            const backElement = newTask.querySelector('.task__edit')
            backElement.setAttribute('style', 'display: none')
            const deleteElement = newTask.querySelector('.task__delete')
            deleteElement.textContent = 'delete'
            const moveElement = newTask.querySelector('.task__move')
            moveElement.setAttribute('style', 'display: none')
        }
    })

    counterTasks($('#boardTodo'))
    counterTasks($('#boardInProgress'))
    counterTasks($('#boardDone'))
}

export { renderTasks }
