function changeBoard(data, task, bool) {
    data.map(element => {
        if (element.id == task.id) {
            bool ? element.board++ : element.board--
        }
    })
}

export { changeBoard }
