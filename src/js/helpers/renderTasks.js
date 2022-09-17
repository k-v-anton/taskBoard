import { $ } from './selector.js'
import { counterTasks } from './counterTasks.js'
import { colorFonTask } from './colorFonTask.js'
import { fillingTask } from './fillingTask.js'
import { appendTaskInBoard } from './appendTaskInBoard.js'

function renderTasks(data) {
    $('#todoCards').innerHTML = ''
    $('#progressCards').innerHTML = ''
    $('#doneCards').innerHTML = ''

    data.forEach(element => {
        const newTask = $('#templateTask')
            .content
            .querySelector('.task')
            .cloneNode(true)

        fillingTask(element, newTask)
        colorFonTask(element, newTask)
        appendTaskInBoard(element, newTask)
    })

    counterTasks($('#boardTodo'))
    counterTasks($('#boardInProgress'))
    counterTasks($('#boardDone'))
}

export { renderTasks }
