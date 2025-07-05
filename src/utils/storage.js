function saveTaskData(tasks) {
    const convertedTasks = JSON.stringify(tasks)
    localStorage.setItem('Tasks', convertedTasks);
}

function loadTaskData() {
    const stringTasks = localStorage.getItem("Tasks");
    if (stringTasks === '') return [];
    return JSON.parse(stringTasks);
}

export { saveTaskData, loadTaskData }