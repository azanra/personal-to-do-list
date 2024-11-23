import { refSubmitContainer, setTextContent, appendElement } from "../../controllers/controller.js";

function refInputStatus() {
    const inputStatus = document.querySelector('#input-status');
    return inputStatus;
}

function refStatusLabel() {
    const statusLabel = document.querySelector('#status-label');
    return statusLabel;
}

function checkIfExistCreateStatus(element) {
    if(element === null) {
        createStatusSubmission();
    }
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

export {refStatusLabel, createStatusSubmission, refInputStatus, checkIfExistCreateStatus};