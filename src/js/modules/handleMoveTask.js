import { $ } from '../helpers/selector.js'
import { tasks } from '../helpers/data.js'
import { renderTasks } from '../helpers/renderTasks.js'
import { changeBoard } from '../helpers/appendTaskInBoard.js'
import { toggleActiveClass } from '../helpers/toggleActiveClass.js'

function handleMoveTask(event) {
    event.preventDefault()

    const eT = event.target
    const task = eT.closest('.task')

    switch (true) {
        case eT.textContent === '>':
            const boardMove = $('#progressCards')
            const counterTask = boardMove.querySelectorAll('.task').length
            if (counterTask < 6) {
                changeBoard(tasks, task, true)
            } else {
                const popupWarningMove = $('#popupWarningMove')
                const inputHidden = popupWarningMove.querySelector('.popup-warning-input-hiden-id')
                inputHidden.setAttribute('value', task.id)

                toggleActiveClass(popupWarningMove)
            }
            break
        case eT.textContent.toUpperCase() === 'COMPLITED':
            changeBoard(tasks, task, true)
            break
        case eT.textContent.toUpperCase() === 'BACK':
            changeBoard(tasks, task, false)
            break
    }
    renderTasks(tasks)
}

function handleCanselWarning(element) {
    event.preventDefault()
    if (event.target.textContent.toLowerCase() == 'cancel') {
        toggleActiveClass(event.target.closest(element))
    }
}

export { handleMoveTask, handleCanselWarning }
