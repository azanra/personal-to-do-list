import { refActivityContainer, refActivityText } from "../views/activity/activity.js";
import { Task } from "../models/task.js";
import { refInputId } from "../views/submit/idSubmit.js";
import { refInputDetail } from "../views/submit/detailSubmit.js";
import { refInputStatus } from "../views/submit/statusSubmit.js";

function refSubmitContainer() {
    const submitContainer = document.querySelector('.submit-container');
    return submitContainer;
}

function setMultipleAttribute(element, attribute) {
    for(let key in attribute){
        element.setAttribute(key, attribute[key]);
    }
} 

function setTextContent(element, content) {
    element.textContent = content;
}

function appendElement(parent, child){
    parent.appendChild(child);
}

function updateActivityText(content) {
    const activityContainer = refActivityContainer();
    const activityText = refActivityText();
    setTextContent(activityText, content);
    appendElement(activityContainer,activityText);
}

function checkElementExistToDelete(element) {
    if(element !== null) {
        element.remove();
    }
}

function getValueFromInput(element) {
    element = element.value; 
    return element;
}

function assignInput(idInput, detailInput, statusInput) {
    let updateInputId = idInput;
    let inputDetail = detailInput;
    let inputStatus = statusInput;
    
    return new Task(updateInputId, inputDetail, inputStatus); 
}

function removeInputValue(){
    let inputId = refInputId();
    let inputDetail= refInputDetail();
    let inputStatus = refInputStatus();
    removeValue(inputId);
    removeValue(inputDetail);
    removeValue(inputStatus);
}

function removeValue(element){
    element.value = "";
}

function enableElement(ref) {
    ref.disabled = false;
}

export {enableElement, removeValue, removeInputValue, assignInput, getValueFromInput, checkElementExistToDelete, setTextContent, appendElement, updateActivityText, refSubmitContainer, setMultipleAttribute};