import { $ } from '../helpers/selector.js'
import { toggleActiveClass } from '../helpers/toggleActiveClass.js'
import { tasks } from '../helpers/data.js'
import { renderTasks } from '../helpers/renderTasks.js'

function handleCanselDeleteAllTask(event) {
    event.preventDefault()

    if (event.target.textContent.toUpperCase() == 'CANCEL') {
        toggleActiveClass(event.target.closest('#popupWarningDeleteAll'))
    }
}

function handleCanselMoveTask(event) {
    event.preventDefault()

    if (event.target.textContent.toLowerCase() == 'cancel') {
        toggleActiveClass(event.target)
    }
}

function handleDeleteAll(event) {
    event.preventDefault()

    const popupWarning = $('#popupWarningDeleteAll')
    popupWarning.classList.add('delete-all-done-tasks')
    toggleActiveClass(popupWarning)
}

function handleDeleteSelectedTask(event) {
    event.preventDefault()
    const eT = event.target

    if (eT.textContent.toUpperCase() === 'DELETE' &&
        eT.classList.contains('task__delete')) {
        const taskId = eT.closest('.task').id

        tasks.forEach((element) => {
            if (element.id == taskId) {
                const ind = tasks.indexOf(element)
                tasks.splice(ind, 1)
            }
        })
    }

    renderTasks(tasks)
}

export {
    handleCanselDeleteAllTask,
    handleCanselMoveTask,
    handleDeleteAll,
    handleDeleteSelectedTask
}
