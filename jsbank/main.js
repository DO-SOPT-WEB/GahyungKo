import {INIT_BALANCE, HISTORY_LIST} from './initial.js';

/*초기 렌더링*/
const listTotal = document.querySelector("ul");

HISTORY_LIST.forEach((element)=>{
    const list = document.createElement("li");
    element.type === "input"
    ? list.className = "list_input"
    : list.className = "list_output";

    const amount = element.type === "input" ? `+${element.amount}` : `-${element.amount}`;

    list.innerHTML = `
        <span>${element.category}</span>
        <span>${element.title}</span>
        <span class = "${
            element.type === "input" ?
            "input" :
            "output"
        }">${amount}</span>
        <button type="button" class="list_btn">x</button>    
    `;
    listTotal.appendChild(list);
});

let totalInput = INIT_BALANCE;
let totalOutput = INIT_BALANCE;
let totalAsset = INIT_BALANCE;

HISTORY_LIST.forEach((element)=>{
    element.type === "input"
    ? totalInput += element.amount
    : totalOutput += element.amount
});

totalAsset = totalInput-totalOutput;

document.querySelector(".total_asset").innerHTML = `${totalAsset}`;
document.querySelector(".total_inout :nth-child(2)").innerHTML = `${totalInput}`; 
document.querySelector(".total_inout :nth-child(4)").innerHTML = `${totalOutput}`;

/*버튼 필터링*/
const inputBox = document.getElementById("input_box");
const outputBox = document.getElementById("output_box");

function filtering(){
    const inputList = document.querySelectorAll(".list_input");
    const outputList = document.querySelectorAll(".list_output");

    if(inputBox.checked){
        showList(inputList);
    }
    else{
        hideList(inputList);
    }

    if(outputBox.checked){
        showList(outputList);
    }    
    else{
        hideList(outputList);
    }  
}

function showList(list) {
    list.forEach((element) => {
        element.style.display = "flex";
    });
}
  
function hideList(list) {
    list.forEach((element) => {
        element.style.display = "none";
    });
}

inputBox.addEventListener('change', filtering);
outputBox.addEventListener('change', filtering);