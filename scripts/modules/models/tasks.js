function pushToArr(array, arrItem) {
    array.push(arrItem);
    return array;
}

function updateStatus(updateInputId, inputStatus, arrObjInput) {
    arrObjInput.forEach(element => {
        if(element.id === updateInputId){
            element.status = inputStatus;
        }
    });
}

function deleteTask(deleteInputId, arrObjInput) {
    arrObjInput.forEach((element, index) => {
        if(element.id === deleteInputId){
            arrObjInput.splice(index, 1);
        }
    });
}

export {pushToArr, updateStatus, deleteTask}