import { refSubmitContainer, setTextContent, appendElement } from "../../controllers/controller.js";

function refInputDetail() {
    const inputDetail = document.querySelector('#input-detail');
    return inputDetail;
}

function refDetailLabel() {
    const detailLabel = document.querySelector('#detail-label');
    return detailLabel;
}

function checkIfExistCreateDetail(element) {
    if(element === null) {
        createDetailSubmission();
    }
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

export {createDetailSubmission, refInputDetail, refDetailLabel, checkIfExistCreateDetail};
