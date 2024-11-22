import { refSubmitContainer, setTextContent, appendElement } from "../../controllers/controller.js";

function refInputId() {
    const InputId = document.querySelector('#input-id');
    return InputId;
}

function checkIfExistCreateInput(element) {
    if(element === null){
        createIdSubmission();
    }
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

export {createIdSubmission, refInputId, checkIfExistCreateInput};