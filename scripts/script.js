import { createBtnClick } from "./modules/controllers/createController.js";
import { updateBtnClick } from "./modules/controllers/updateController.js";
import { deleteBtnCLick } from "./modules/controllers/deleteController.js";

function main() {
    let taskArrObj = []
    createBtnClick(taskArrObj);
    deleteBtnCLick(taskArrObj);
    updateBtnClick(taskArrObj);
}

main(); 
