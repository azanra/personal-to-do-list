function createObjTask(id, detail, status) {
    this.taskId = id;
    this.taskDetail = detail;
    this.taskStatus = status;
}

function getUserInput() {
    let userInput = prompt("Input in format: id,detail,status");
    return userInput;
}

function splitInput(inputStr) {
    let arrStr = inputStr.split(",");
    return arrStr;
}

function assignInput(inputArr) {
    inputId = inputArr[0];
    inputDetail = inputArr[1];
    inputStatus = inputArr[2];
    
    return new createObjTask(inputId, inputDetail, inputStatus); 
}

function pushToArr(originalArr, arrItem) {
    originalArr.push(arrItem);
    return originalArr;
}

function getAmountOfTask() {
    let taskAmount = prompt("Get the amount of task");
    return taskAmount;
}

function loopAmountTask(amountInput) {
    let arrObjTask = [];
    for(let i = 0; i < amountInput; i++){
        main(arrObjTask);
    }
}

function displayAllTask(inputArrObj) {
    inputArrObj.forEach(element => {
        console.log(element);
    });
    return inputArrObj;
}

function getTaskId() {
    let inputTaskId = prompt("Input task id");
    return inputTaskId;
}

function editStatus(inputId, arrObjInput) {
    arrObjInput.forEach(element => {
        if(element.taskId === inputId){
            element.taskStatus = "done";
        }
    });
    return arrObjInput;
}

function deleteTask(inputId, arrObjInput) {
    arrObjInput.forEach((element, index) => {
        if(element.taskId === inputId){
            arrObjInput.splice(index, 1);
        }
    });
    return arrObjInput;
}

function updateActivityText(content) {
    const activityContainer = document.querySelector('.activity-container');
    const activityText = document.querySelector('.activity-text');
    activityText.textContent = content;
    activityContainer.appendChild(activityText);
}

function textCreateTask() {
    textContent = "Create Task";
    return textContent;
}

function textCreateTaskSuccessful() {
    textContent = "Create Task is Successful";
    return textContent;
}

function main(arrObj) {
    // let userInputArr = (splitInput(getUserInput()));
      
    // const newTaskObj = assignInput(userInputArr);
    // arrObj = pushToArr(arrObj, newTaskObj);
    // displayAllTask(arrObj);

    // arrObj = editStatus(getTaskId(), arrObj);
    // displayAllTask(arrObj);

    // const deletedArrObj = deleteTask(getTaskId(), arrObj);
    // displayAllTask(deletedArrObj);
}

// loopAmountTask(getAmountOfTask());