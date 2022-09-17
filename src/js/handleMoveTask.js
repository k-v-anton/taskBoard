import { toggleActiveClass } from './toggleActiveClass.js'

function handleMoveTask(event) {
    event.preventDefault()

    const eT = event.target
    const task = eT.closest('.task')
    const popupWarning = document.querySelector('#popupWarningMove')

    if (eT.textContent === '>' ||
        eT.textContent.toUpperCase() === 'COMPLITED' ||
        eT.textContent.toUpperCase() === 'BACK') {
        const inpHiddenId = popupWarning.querySelector('.popup-warning-input-hiden-id')
        const inpHiddenEt = popupWarning.querySelector('.popup-warning-input-hiden-et')
        inpHiddenId.setAttribute('value', `${task.id}`)
        inpHiddenEt.setAttribute('value', `${eT.textContent}`)
        toggleActiveClass(popupWarning)
    }

    // const evTar = event.target
    // const task = evTar.closest('.task')

    // switch (true) {
    //     case evTar.textContent === '>' &&
    //         evTar.classList.contains('task__move'):
    //         changeBoard(task, true)
    //         break

    //     case evTar.textContent.toUpperCase() === 'COMPLITED' &&
    //         evTar.classList.contains('task__delete'):
    //         changeBoard(task, true)
    //         break

    //     case (evTar).textContent.toUpperCase() === 'BACK' &&
    //         evTar.classList.contains('task__edit'):
    //         changeBoard(task, false)
    //         break

    //     default:
    //         break
    // }

    // renderTasks(tasks)
}

export { handleMoveTask }
