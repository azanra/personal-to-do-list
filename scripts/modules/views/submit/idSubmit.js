import { setTextContent, appendElement, refSubmitContainer } from "../../../script.js";

function refInputId() {
    const InputId = document.querySelector('#input-id');
    return InputId;
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

export {refInputId, createIdSubmission};