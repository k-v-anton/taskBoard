function counterTasks(board) {
    const counter = board.querySelector('.board__header-counter')
    counter.textContent = board.querySelectorAll('.task').length
}

export { counterTasks }
