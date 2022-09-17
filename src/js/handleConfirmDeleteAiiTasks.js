import { tasks, storageUsers } from './data.js'
import { renderTasks } from './renderTasks.js'
import { toggleActiveClass } from './toggleActiveClass.js'
import { $ } from './selector.js'

function handleConfirmDeleteAiiTasks(event) {
    event.preventDefault()

    const popupWarning = $('#popupWarningDeleteAll')
    if (event.target.textContent.toUpperCase() === 'CONFIRM' &&
        popupWarning.classList.contains('delete-all-done-tasks')) {
        toggleActiveClass($('#popupWarningDeleteAll'))

        const tas = tasks.filter(el => el.board === 3)
        const res = tasks.filter(el => !tas.includes(el))
        storageUsers(res)
    }

    popupWarning.classList.remove('delete-all-done-tasks')
    renderTasks(tasks)
}

export { handleConfirmDeleteAiiTasks }
