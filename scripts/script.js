function createObjTask(id, detail, status) {
    this.taskId = id;
    this.taskDetail = detail;
    this.taskStatus = status;
}

function getUserInput() {
    let userInput = [];
    userInput = prompt("Input in format: id,detail,status");
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

function main(arrObj) {
    let userInputArr = (splitInput(getUserInput()));
    console.log(userInputArr);
    
    const newTaskObj = assignInput(userInputArr);
    console.log(newTaskObj);

    pushToArr(arrObj, newTaskObj);
    console.log(arrObj);
    console.log(arrObj.length);
}

loopAmountTask(getAmountOfTask());