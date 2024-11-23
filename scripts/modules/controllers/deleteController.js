import { refDeleteBTn, refCreateBTn } from "../views/button/button.js";
import { refInputDetail, refDetailLabel } from "../views/submit/detailSubmit.js";
import { refInputStatus, refStatusLabel } from "../views/submit/statusSubmit.js";
import { refSubmitBtn, createSubmitBtn } from "../views/submit/submitBtn.js";
import { checkElementExistToDelete, enableElement, setTextContent, getValueFromInput, removeValue } from "./controller.js";
import { refActivityText, textDeleteTextSuccessfull, clearActivityText } from "../views/activity/activity.js";
import { refInputId } from "../views/submit/idSubmit.js";
import { deleteTask } from "../models/tasks.js";
import { displayAllTask } from "../views/task/taskContainer.js";

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

export {deleteBtnCLick, deleteSubmitBtnClick};