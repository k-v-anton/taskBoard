import { colorsTaskTodo, colorsTaskInProgress } from './data.js'

function colorFonTask(dataElement, taskElement) {
    switch (true) {
        case dataElement.board === 1:
            taskElement.setAttribute('style', `background-color: ${colorsTaskTodo[Math.floor(Math.random() * 10)]}`)
            break
        case dataElement.board === 2:
            taskElement.setAttribute('style', `background-color: ${colorsTaskInProgress[Math.floor(Math.random() * 10)]}`)
            break
        case dataElement.board === 3:
            taskElement.setAttribute('style', 'background-color: #c0c0c0')
            break

        default:
            break
    }
}

export { colorFonTask }
