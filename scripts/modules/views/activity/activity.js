function refActivityContainer() {
    const activityContainer = document.querySelector('.activity-container');
    return activityContainer;
}

function refActivityText() {
    const activityText = document.querySelector('.activity-text');
    return activityText;
}

function textCreateTask() {
    let textContent = "Create Task";
    return textContent;
}

function textCreateTaskSuccessful() {
    let textContent = "Create Task is Successful";
    return textContent;
}

function textDeleteTextSuccessfull() {
    let textContent = "Delete task is successfull";
    return textContent;
}

function updateStatusTextSuccessfull() {
    let textContent = "Update task status successfull";
    return textContent;
}

export {refActivityContainer, refActivityText, textCreateTask, textCreateTaskSuccessful, textDeleteTextSuccessfull, updateStatusTextSuccessfull};