import { appendElement,  } from "../../../script.js";

function refTaskContainer() {
    const taskContainer = document.querySelector('.task-container');
    return taskContainer;
}

function refUnorderedList() {
    const UnorderedList = document.querySelector('#unorder-list');
    return UnorderedList;
}

function createUnorderedList() {
    const UnorderedList = document.createElement('ul');
    UnorderedList.setAttribute('id', 'unorder-list')
    return UnorderedList;
}   

function refListItem() {
    const listItem = document.querySelectorAll('li');
    return listItem;
}

function createListItem() {
    const listItem = document.createElement('li')
    return listItem;
}

function deleteExistingListItem() {
    const arrListItem = refListItem();
    console.log(arrListItem);
    if(arrListItem !== null) {
        arrListItem.forEach((element) => {
            element.remove();
        })
    }
}

function displayAllTask(inputArrObj) {
    const taskContainer = refTaskContainer();
    const UnorderedList = createUnorderedList();
    appendElement(taskContainer, UnorderedList);
    deleteExistingListItem();
    inputArrObj.forEach((element) => {
        let listItem = createListItem();
        listItem.textContent = element.id + " | " + element.detail + " | " + element.status;
        appendElement(refUnorderedList(), listItem);
    });
}

export {displayAllTask};