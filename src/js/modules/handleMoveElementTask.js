import { tasks } from '../helpers/data.js'
import { renderTasks } from '../helpers/renderTasks.js'
import { changeBoard } from '../helpers/appendTaskInBoard.js'
import { toggleActiveClass } from '../helpers/toggleActiveClass.js'

function handleMoveElementTask(event) {
    event.preventDefault()

    const eT = event.target
    const popupWarningMoveElement = eT.closest('.popup-warning')
    const taskId = popupWarningMoveElement.querySelector('.popup-warning-input-hiden-id').value
    const [task] = tasks.filter(element => element.id == taskId)
    const taskContentTarget = popupWarningMoveElement.querySelector('.popup-warning-input-hiden-et').value

    if (eT.textContent.toUpperCase() === 'CONFIRM') {
        switch (true) {
            case taskContentTarget === '>':
                changeBoard(tasks, task, true)
                break

            case taskContentTarget.toUpperCase() === 'COMPLITED':
                changeBoard(tasks, task, true)
                break

            case taskContentTarget.toUpperCase() === 'BACK':
                changeBoard(tasks, task, false)
                break

            default:
                break
        }
    }
    toggleActiveClass(popupWarningMoveElement)
    renderTasks(tasks)
}

export { handleMoveElementTask }
