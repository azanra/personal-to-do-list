import { refCreateBTn } from "../views/button/button.js";
import { updateActivityText, checkElementExistToDelete, getValueFromInput, assignInput, setTextContent, removeInputValue} from "./controller.js";
import { refInputId, checkIfExistCreateInput } from "../views/submit/idSubmit.js";
import { refInputStatus, checkIfExistCreateStatus } from "../views/submit/statusSubmit.js";
import { refInputDetail, checkIfExistCreateDetail } from "../views/submit/detailSubmit.js";
import { refSubmitBtn, createSubmitBtn } from "../views/submit/submitBtn.js";
import { pushToArr } from "../models/tasks.js";
import { refActivityText, textCreateTaskSuccessful, clearActivityText, textCreateTask } from "../views/activity/activity.js";
import { displayAllTask } from "../views/task/taskContainer.js";

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
        
        displayAllTask(arr);
    })
}

export {createBtnClick};