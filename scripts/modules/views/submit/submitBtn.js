import { setMultipleAttribute, appendElement, refSubmitContainer } from "../../../script.js";

function refSubmitBtn() {
    const submitBtn = document.querySelector('#submit-btn');
    return submitBtn;
}

function createSubmitBtn() {
    const submitBtn = document.createElement('button');
    setMultipleAttribute(submitBtn, {"id":"submit-btn", "type":"button"});
    submitBtn.innerText = "Submit";
    appendElement(refSubmitContainer(), submitBtn);
}

export {refSubmitBtn, createSubmitBtn};
