function fillingTask(dataElement, taskElement) {
    const title = taskElement.querySelector('.task__title')
    const description = taskElement.querySelector('.task__desckription')
    const timeCreate = taskElement.querySelector('.task__timecreate')
    const implementer = taskElement.querySelector('.task__implementer')

    taskElement.setAttribute('id', `${dataElement.id}`)
    title.textContent = `${dataElement.title}`
    description.textContent = `${dataElement.text}`
    timeCreate.textContent = `${dataElement.timeCreate}`
    implementer.textContent = `${dataElement.user}`
}

export { fillingTask }
