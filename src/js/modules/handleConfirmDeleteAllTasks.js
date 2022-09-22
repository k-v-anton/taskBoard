import { tasks, storageUsers } from '../helpers/data.js'
import { renderTasks } from '../helpers/renderTasks.js'
import { toggleActiveClass } from '../helpers/toggleActiveClass.js'
import { $ } from '../helpers/selector.js'

function handleConfirmDeleteAllTasks(event) {
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

export { handleConfirmDeleteAllTasks }
