import { Task } from "./modules/models/task.js";
import { pushToArr, updateStatus, deleteTask } from "./modules/models/tasks.js";

function assignInput(idInput, detailInput, statusInput) {
    let updateInputId = idInput;
    let inputDetail = detailInput;
    let inputStatus = statusInput;
    
    return new Task(updateInputId, inputDetail, inputStatus); 
}

function getTaskId() {
    let inputTaskId = prompt("Input task id");
    return inputTaskId;
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

function checkIfExistCreateInput(element) {
    if(element === null){
        createIdSubmission();
    }
}

function checkIfExistCreateDetail(element) {
    if(element === null) {
        createDetailSubmission();
    }
}

function checkIfExistCreateStatus(element) {
    if(element === null) {
        createStatusSubmission();
    }
}

function checkIfExistCreateSubmit(element) {
    if(element === null) {
        createSubmitBtn();
    }
}

function createBtnClick(arr) {
    const createBtn = refCreateBTn();
    createBtn.addEventListener("click", () => {
        updateActivityText(textCreateTask());
        let inputId = refInputId();
        let inputDetail = refInputDetail();
        let inputStatus = refInputStatus();
        let submitBtn = refSubmitBtn();
        checkIfExistCreateInput(inputId);
        checkIfExistCreateStatus(inputStatus);
        checkIfExistCreateDetail(inputDetail);
        checkElementExistToDelete(submitBtn);
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
    let textContent = "Create Task";
    return textContent;
}

function textCreateTaskSuccessful() {
    let textContent = "Create Task is Successful";
    return textContent;
}

function textEmpty() {
    let textContent = "";
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
    const InputId = document.querySelector('#input-id');
    return InputId;
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
        let inputId = refInputId();
        let inputDetail= refInputDetail();
        let inputStatus = refInputStatus();
        
        inputId = getValueFromInput(inputId);
        inputDetail = getValueFromInput(inputDetail);
        inputStatus = getValueFromInput(inputStatus);

        const taskObj = assignInput(inputId, inputDetail, inputStatus);

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
    let inputId = refInputId();
    let inputDetail= refInputDetail();
    let inputStatus = refInputStatus();
    removeValue(inputId);
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
        let listItem = createListItem();
        listItem.textContent = element.id + " | " + element.detail + " | " + element.status;
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
        const detailLabel = refDetailLabel();
        const inputStatus = refInputStatus();
        const statusLabel = refStatusLabel()
        const createBtn = refCreateBTn();
        const submitBtn = refSubmitBtn()
        checkElementExistToDelete(submitBtn);
        createSubmitBtn();
        enableElement(createBtn);
        checkElementExistToDelete(inputDetail);
        checkElementExistToDelete(detailLabel);
        checkElementExistToDelete(inputStatus);
        checkElementExistToDelete(statusLabel);
        setTextContent(refActivityText(), "Delete task");
        deleteSubmitBtnClick(arr);
    })
}

function refDetailLabel() {
    const detailLabel = document.querySelector('#detail-label');
    return detailLabel;
}

function refStatusLabel() {
    const statusLabel = document.querySelector('#status-label');
    return statusLabel;
}

function deleteSubmitBtnClick(arr) {
    const submitBtn = refSubmitBtn();
    submitBtn.addEventListener("click", () => {
        const idInput = refInputId();   
        let deleteInputId = getValueFromInput(idInput);
        deleteTask(deleteInputId, arr);
        deleteExistingListItem();
        displayAllTask(arr);
        removeValue(idInput);
        setTextContent(refActivityText(), textDeleteTextSuccessfull());
        setTimeout(clearActivityText, 1500);
    })
}

function textDeleteTextSuccessfull() {
    let textContent = "Delete task is successfull";
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
        const detailInputLabel = refDetailLabel()
        checkElementExistToDelete(detailInput);
        checkElementExistToDelete(detailInputLabel);
        const submitBtn = refSubmitBtn();
        checkElementExistToDelete(refInputStatus());
        checkElementExistToDelete(refStatusLabel());
        createStatusSubmission();
        setTextContent(refActivityText(), "Update task");
        checkElementExistToDelete(submitBtn);
        createSubmitBtn();
        updateSubmitBtnClick(arr);
    })
}

function updateSubmitBtnClick(arr) {
    const submitBtn = refSubmitBtn();
    submitBtn.addEventListener("click", () => {
        const inputId = refInputId();
        const inputStatus = refInputStatus();
        let updateInputId = getValueFromInput(inputId);
        let updateInputStatus = getValueFromInput(inputStatus);
        updateStatus(updateInputId, updateInputStatus, arr);
        deleteExistingListItem();
        displayAllTask(arr);
        removeValue(refInputId());
        removeValue(refInputStatus());
        setTextContent(refActivityText(), updateStatusTextSuccessfull());
        setTimeout(clearActivityText, 1500);
    })
}

function updateStatusTextSuccessfull() {
    let textContent = "Update task status successfull";
    return textContent;
}

function checkElementExistToDelete(element) {
    if(element !== null) {
        element.remove();
    }
}

function main() {
    let taskArrObj = []
    createBtnClick(taskArrObj);
    deleteBtnCLick(taskArrObj);
    updateBtnClick(taskArrObj);
}

main(); 