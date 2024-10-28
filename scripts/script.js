function createObjTask(id, detail, status) {
    this.taskId = id;
    this.taskDetail = detail;
    this.taskStatus = status;
}

function assignInput(idInput, detailInput, statusInput) {
    updateInputId = idInput;
    inputDetail = detailInput;
    inputStatus = statusInput;
    
    return new createObjTask(updateInputId, inputDetail, inputStatus); 
}

function pushToArr(originalArr, arrItem) {
    originalArr.push(arrItem);
    return originalArr;
}

function getTaskId() {
    let inputTaskId = prompt("Input task id");
    return inputTaskId;
}

function updateStatus(updateInputId, inputStatus, arrObjInput) {
    arrObjInput.forEach(element => {
        if(element.taskId === updateInputId){
            element.taskStatus = inputStatus;
        }
    });
}

function deleteTask(updateInputId, arrObjInput) {
    arrObjInput.forEach((element, index) => {
        if(element.taskId === updateInputId.value){
            arrObjInput.splice(index, 1);
        }
    });
}

function refCreateBTn() {
    const createBtn = document.querySelector('#create-btn');
    return createBtn;
}

function disableElement(ref) {
    ref.disabled = true;
}

function enableElement(ref) {
    ref.disabled = false;
}

function createBtnClick(arr) {
    const createBtn = refCreateBTn();
    createBtn.addEventListener("click", () => {
        disableElement(createBtn);
        updateActivityText(textCreateTask());
        createIdSubmission();
        createDetailSubmission();
        createStatusSubmission();
        createSubmitBtn();
        submitBtnClick(arr);
    });
}

function updateActivityText(content) {
    const activityContainer = refActivityContainer();
    const activityText = refActivityText();
    setTextContent(activityText, content);
    appendElement(activityContainer,activityText);
}

function textCreateTask() {
    textContent = "Create Task";
    return textContent;
}

function textCreateTaskSuccessful() {
    textContent = "Create Task is Successful";
    return textContent;
}

function textEmpty() {
    textContent = "";
    return textContent;
}

function refActivityContainer() {
    const activityContainer = document.querySelector('.activity-container');
    return activityContainer;
}

function refActivityText() {
    const activityText = document.querySelector('.activity-text');
    return activityText;
}

function setTextContent(element, content) {
    element.textContent = content;
}

function appendElement(parent, child){
    parent.appendChild(child);
}

function refSubmitContainer() {
    const submitContainer = document.querySelector('.submit-container');
    return submitContainer;
}

function createIdSubmission() {
    const idInputLabel = document.createElement('label');
    const idInput = document.createElement('input');
    setTextContent(idInputLabel, "ID");
    idInputLabel.setAttribute('id', 'id-label');
    idInput.setAttribute('id', 'input-id');
    appendElement(refSubmitContainer(), idInputLabel);
    appendElement(refSubmitContainer(), idInput);
}

function createDetailSubmission() {
    const detailInputLabel = document.createElement('label');
    const detailInput = document.createElement('input');
    setTextContent(detailInputLabel, "Detail");
    detailInputLabel.setAttribute('id', 'detail-label');
    detailInput.setAttribute('id','input-detail');
    appendElement(refSubmitContainer(), detailInputLabel);
    appendElement(refSubmitContainer(), detailInput);
}

function createStatusSubmission() {
    const statusInputLabel = document.createElement('label');
    const statusInput = document.createElement('input');
    setTextContent(statusInputLabel, "Status");
    statusInputLabel.setAttribute('id','status-label');
    statusInput.setAttribute('id', 'input-status');
    appendElement(refSubmitContainer(), statusInputLabel);
    appendElement(refSubmitContainer(), statusInput);
}

function setMultipleAttribute(element, attribute) {
    for(let key in attribute){
        element.setAttribute(key, attribute[key]);
    }
} 

function createSubmitBtn() {
    const submitBtn = document.createElement('button');
    setMultipleAttribute(submitBtn, {"id":"submit-btn", "type":"button"});
    submitBtn.innerText = "Submit";
    appendElement(refSubmitContainer(), submitBtn);
}

function refSubmitBtn() {
    const submitBtn = document.querySelector('#submit-btn');
    return submitBtn;
}

function refInputId() {
    const updateInputId = document.querySelector('#input-id');
    return updateInputId;
}

function refInputDetail() {
    const inputDetail = document.querySelector('#input-detail');
    return inputDetail;
}

function refInputStatus() {
    const inputStatus = document.querySelector('#input-status');
    return inputStatus;
}


function submitBtnClick(arr) {
    const submitBtn = refSubmitBtn();
    submitBtn.addEventListener("click", () => {
        updateInputId = refInputId();
        inputDetail= refInputDetail();
        inputStatus = refInputStatus();
        
        updateInputId = getValueFromInput(updateInputId);
        inputDetail = getValueFromInput(inputDetail);
        inputStatus = getValueFromInput(inputStatus);

        const taskObj = assignInput(updateInputId, inputDetail, inputStatus);

        pushToArr(arr, taskObj);

        setTextContent(refActivityText(), textCreateTaskSuccessful());

        console.log(arr);
        console.log(arr.length);

        removeInputValue();
        
        setTimeout(clearActivityText, 1500);

        deleteExistingListItem();
        displayAllTask(arr);
    })
}

function clearActivityText() {
    setTextContent(refActivityText(), textEmpty())
}

function getValueFromInput(element) {
    element = element.value; 
    return element;
}

function removeValue(element){
    element.value = "";
}

function removeInputValue(){
    updateInputId = refInputId();
    inputDetail= refInputDetail();
    inputStatus = refInputStatus();
    removeValue(updateInputId);
    removeValue(inputDetail);
    removeValue(inputStatus);
}

function refTaskContainer() {
    const taskContainer = document.querySelector('.task-container');
    return taskContainer;
}

function createUnorderedList() {
    const UnorderedList = document.createElement('ul');
    UnorderedList.setAttribute('id', 'unorder-list')
    return UnorderedList;
}

function refUnorderedList() {
    const UnorderedList = document.querySelector('#unorder-list');
    return UnorderedList;
}

function createListItem() {
    const listItem = document.createElement('li')
    return listItem;
}

function refListItem() {
    const listItem = document.querySelector('li');
    return listItem;
}

function deleteExistingListItem() {
    const arrListItem = document.querySelectorAll('li');
    arrListItem.forEach((element) => {
        element.remove();
    })
}

function displayAllTask(inputArrObj) {
    const taskContainer = refTaskContainer();
    const UnorderedList = createUnorderedList();
    appendElement(taskContainer, UnorderedList);
    inputArrObj.forEach((element) => {
        listItem = createListItem();
        listItem.textContent = element.taskId + " | " + element.taskDetail + " | " + element.taskStatus;
        appendElement(refUnorderedList(), listItem);
    });
}

function refDeleteBTn() {
    const deleteBtn = document.querySelector('#delete-btn');
    return deleteBtn;
}

function deleteBtnCLick(arr) {
    const deleteBtn = refDeleteBTn();
    deleteBtn.addEventListener("click", () => {
        const inputDetail = refInputDetail();
        const inputStatus = refInputStatus();
        const createBtn = refCreateBTn();
        const submitBtn = refSubmitBtn()
        submitBtn.remove();
        createSubmitBtn();
        enableElement(createBtn);
        inputDetail.remove();
        removeDetailLabel();
        inputStatus.remove();
        removeStatusLabel();
        setTextContent(refActivityText(), "Delete task");
        deleteSubmitBtnClick(arr);
    })
}

function refDetailLabel() {
    const detailLabel = document.querySelector('#detail-label');
    return detailLabel;
}

function removeDetailLabel(){
    const detailLabel = refDetailLabel();
    detailLabel.remove();
}

function refStatusLabel() {
    const statusLabel = document.querySelector('#status-label');
    return statusLabel;
}

function removeStatusLabel() {
    const statusLabel = refStatusLabel();
    statusLabel.remove();
}

function deleteSubmitBtnClick(arr) {
    const submitBtn = refSubmitBtn();
    submitBtn.addEventListener("click", () => {
        const idInput = refInputId();   
        deleteInputId = getValueFromInput(idInput);
        deleteTask(updateInputId, arr);
        deleteExistingListItem();
        displayAllTask(arr);
        removeValue(idInput);
        setTextContent(refActivityText(), textDeleteTextSuccessfull());
        setTimeout(clearActivityText, 1500);
    })
}

function textDeleteTextSuccessfull() {
    textContent = "Delete task is successfull";
    return textContent;
}

function refUpdateBtn() {
    const updateBtn = document.querySelector('#update-btn');
    return updateBtn;
}

function updateBtnClick(arr) {
    const updateBtn = refUpdateBtn();
    updateBtn.addEventListener("click", () => {
        const detailInput = refInputDetail();
        detailInput.remove();
        removeDetailLabel();
        const submitBtn = refSubmitBtn();
        submitBtn.remove();
        createSubmitBtn();
        setTextContent(refActivityText(), "Update task");
        updateSubmitBtnClick(arr);
    })
}

function updateSubmitBtnClick(arr) {
    const submitBtn = refSubmitBtn();
    submitBtn.addEventListener("click", () => {
        const inputId = refInputId();
        const inputStatus = refInputStatus();
        updateInputId = getValueFromInput(inputId);
        updateInputStatus = getValueFromInput(inputStatus);
        updateStatus(updateInputId, updateInputStatus, arr);
        deleteExistingListItem();
        displayAllTask(arr);
        setTextContent(refActivityText(), updateStatusTextSuccessfull());
        setTimeout(clearActivityText, 1500);
    })
}

function updateStatusTextSuccessfull() {
    textContent = "Update task status successfull";
    return textContent;
}

function main() {
    let taskArrObj = []
    createBtnClick(taskArrObj);
    deleteBtnCLick(taskArrObj);
    updateBtnClick(taskArrObj);
}

main(); 