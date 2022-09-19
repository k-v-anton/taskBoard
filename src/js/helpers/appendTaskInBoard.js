import { $ } from './selector.js'

function appendTaskInBoard(dataElement, boardElement) {
    const deleteElement = boardElement.querySelector('.task__delete')
    const backElement = boardElement.querySelector('.task__edit')
    const moveElement = boardElement.querySelector('.task__move')

    if (dataElement.board == 1) {
        $('#todoCards').append(boardElement)
    } else if (dataElement.board == 2) {
        $('#progressCards').append(boardElement)
        backElement.textContent = 'back'
        deleteElement.textContent = 'complited'
        moveElement.setAttribute('style', 'display: none')
    } else if (dataElement.board == 3) {
        $('#doneCards').append(boardElement)
        backElement.setAttribute('style', 'display: none')
        deleteElement.textContent = 'delete'
        moveElement.setAttribute('style', 'display: none')
    }
}

function changeBoard(data, task, bool) {
    data.map(element => {
        if (element.id == task.id) {
            bool ? element.board++ : element.board--
        }
    })
}

export { appendTaskInBoard, changeBoard }
