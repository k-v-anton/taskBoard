import { tasks } from '../helpers/data.js'
import { renderTasks } from '../helpers/renderTasks.js'

function handleDeleteSelectedTask(event) {
    event.preventDefault()
    const evTar = event.target

    if (evTar.textContent.toUpperCase() === 'DELETE' &&
        evTar.classList.contains('task__delete')) {
        const taskId = evTar.closest('.task').id

        tasks.forEach((element) => {
            if (element.id == taskId) {
                const ind = tasks.indexOf(element)
                tasks.splice(ind, 1)
            }
        })
    }

    renderTasks(tasks)
}
export { handleDeleteSelectedTask }
