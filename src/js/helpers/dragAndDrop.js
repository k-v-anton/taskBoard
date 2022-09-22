import { colorFonTask } from './colorFonTask.js'
import { $ } from './selector.js'
import { tasks } from './data.js'

function dragTodo(event) {
    const task = event.target.closest('.task')
    const progressCardsElement = $('#progressCards')

    progressCardsElement.addEventListener('dragover', preventDefault)

    task.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('id', event.target.id)
    })

    progressCardsElement.addEventListener('drop', drop)
}

function dragProgress(event) {
    const task = event.target.closest('.task')
    const todoCardsElement = $('#todoCards')
    const doneCardsElement = $('#doneCards')

    todoCardsElement.addEventListener('dragover', preventDefault)
    doneCardsElement.addEventListener('dragover', preventDefault)

    task.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('id', event.target.id)
    })

    todoCardsElement.addEventListener('drop', drop)
    doneCardsElement.addEventListener('drop', drop)
}

function drop(event) {
    const taskId = event.dataTransfer.getData('id')
    const task = document.getElementById(taskId)

    tasks.map((element) => {
        if (element.id == taskId &&
            element.board == 1 &&
            event.target.closest('#progressCards')) {
            element.board = 2

            task.querySelector('.task__edit').textContent = 'back'
            task.querySelector('.task__delete').textContent = 'complited'
            task.querySelector('.task__move').setAttribute('style', 'display: none')

            colorFonTask(element, task)

            event.target.closest('#progressCards').append(
                task
            )
        }

        if (element.id == taskId &&
            element.board == 2 &&
            event.target.closest('#todoCards')) {
            const dropInElement = event.target.closest('#todoCards')

            element.board = 1

            task.querySelector('.task__edit').textContent = 'edit'
            task.querySelector('.task__delete').textContent = 'delete'
            task.querySelector('.task__move').setAttribute('style', 'display: block')

            colorFonTask(element, task)

            dropInElement.append(
                task
            )
        }

        if (element.id == taskId &&
            element.board == 2 &&
            event.target.closest('#doneCards')) {
            const dropInElement = event.target.closest('#doneCards')

            element.board = 3

            task.querySelector('.task__edit').setAttribute('style', 'display: none')
            task.querySelector('.task__delete').textContent = 'delete'
            task.querySelector('.task__move').setAttribute('style', 'display: none')

            colorFonTask(element, task)

            dropInElement.append(
                task
            )
        }
    })
}

function preventDefault(event) {
    event.preventDefault()
}

export { dragTodo, dragProgress }
