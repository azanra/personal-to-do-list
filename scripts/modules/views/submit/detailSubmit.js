import { setTextContent, appendElement, refSubmitContainer } from "../../../script.js";

function refInputDetail() {
    const inputDetail = document.querySelector('#input-detail');
    return inputDetail;
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

export {refInputDetail, createDetailSubmission};
