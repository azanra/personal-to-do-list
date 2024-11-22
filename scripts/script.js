import { Task } from "./modules/models/task.js";
import { updateStatus, deleteTask } from "./modules/models/tasks.js";
import { refUpdateBtn, refDeleteBTn } from "./modules/views/button/button.js";
import { refActivityContainer, refActivityText, textCreateTask, textCreateTaskSuccessful, textDeleteTextSuccessfull, updateStatusTextSuccessfull } from "./modules/views/activity/activity.js";
import { createIdSubmission } from "./modules/views/submit/idSubmit.js";
import { createDetailSubmission } from "./modules/views/submit/detailSubmit.js";
import { refSubmitBtn, createSubmitBtn } from "./modules/views/submit/submitBtn.js";
import { displayAllTask  } from "./modules/views/task/taskContainer.js";
import { createStatusSubmission } from "./modules/views/submit/statusSubmit.js";
import { createBtnClick } from "./modules/controllers/createController.js";


function enableElement(ref) {
    ref.disabled = false;
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
        displayAllTask(arr);
        removeValue(idInput);
        setTextContent(refActivityText(), textDeleteTextSuccessfull());
        setTimeout(clearActivityText, 1500);
    })
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
        displayAllTask(arr);
        removeValue(refInputId());
        removeValue(refInputStatus());
        setTextContent(refActivityText(), updateStatusTextSuccessfull());
        setTimeout(clearActivityText, 1500);
    })
}

function main() {
    let taskArrObj = []
    createBtnClick(taskArrObj);
    deleteBtnCLick(taskArrObj);
    updateBtnClick(taskArrObj);
}

main(); 
