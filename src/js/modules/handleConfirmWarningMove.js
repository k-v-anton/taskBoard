import { changeBoard } from '../helpers/appendTaskInBoard.js'
import { renderTasks } from '../helpers/renderTasks.js'
import { $ } from '../helpers/selector.js'
import { tasks } from '../helpers/data.js'
import { toggleActiveClass } from '../helpers/toggleActiveClass.js'

function handleConfirmWarningMove(event) {
    if (event.target.textContent.toUpperCase() === 'CONFIRM') {
        const popupWarningMove = $('#popupWarningMove')
        const taskId = popupWarningMove.querySelector('.popup-warning-input-hiden-id').value
        const task = document.getElementById(taskId)

        changeBoard(tasks, task, true)
        toggleActiveClass(popupWarningMove)
        renderTasks(tasks)
    }
}

export { handleConfirmWarningMove }
