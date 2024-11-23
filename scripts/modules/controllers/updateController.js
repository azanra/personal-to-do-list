import { refUpdateBtn } from "../views/button/button.js";
import { refInputDetail, refDetailLabel } from "../views/submit/detailSubmit.js";
import { checkElementExistToDelete, getValueFromInput, removeValue, setTextContent } from "./controller.js";
import { refSubmitBtn,createSubmitBtn } from "../views/submit/submitBtn.js";
import { refInputStatus, refStatusLabel, createStatusSubmission } from "../views/submit/statusSubmit.js";
import { refActivityText, updateStatusTextSuccessfull, clearActivityText } from "../views/activity/activity.js";
import { refInputId } from "../views/submit/idSubmit.js";
import { updateStatus } from "../models/tasks.js";
import { displayAllTask } from "../views/task/taskContainer.js";

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

export {updateBtnClick, updateSubmitBtnClick};