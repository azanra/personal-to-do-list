function createArrayTask() {
    let arrayTask = [];
    return arrayTask;
}

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
    
    const taskObj = new createObjTask(inputId, inputDetail, inputStatus);
    return taskObj;
}

function pushToArr(originalArr, arrItem) {
    originalArr.push(arrItem);
    return originalArr;
}

function main() {

    let userInputArr = (splitInput(getUserInput()));
    console.log(userInputArr);
    
    const newTaskObj = assignInput(userInputArr);
    console.log(newTaskObj);

    let taskArrObj = pushToArr(createArrayTask(),newTaskObj);
    console.log(taskArrObj);
}

main();