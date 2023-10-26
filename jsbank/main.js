import {INIT_BALANCE, HISTORY_LIST} from './initial.js';

/*초기 렌더링*/
const listTotal = document.querySelector("ul");

let tempInput = INIT_BALANCE;
let tempOutput = INIT_BALANCE;
let tempAsset = INIT_BALANCE;

const totalInput = document.querySelector(".total_inout :nth-child(2)");
const totalOutput = document.querySelector(".total_inout :nth-child(4)");
const totalAsset = document.querySelector(".total_asset");

HISTORY_LIST.forEach((element)=>{
    addList(element);
});

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

/*필터링시 display 변경 함수*/
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

/*리스트 추가 함수*/
function addList(element){
    const list = document.createElement("li");
    
    element.type === "input"
    ? list.className = "list_input"
    : list.className = "list_output";

    let amount = element.amount.toLocaleString();
    amount = element.type === "input" ? `+${amount}` : `-${amount}`;

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

    list.children[3].addEventListener('click', warnModal);
    
    //자산 계산
    element.type === "input"
    ? tempInput += element.amount
    : tempOutput += element.amount

    tempAsset = tempInput-tempOutput;

    totalInput.innerHTML = `${tempInput.toLocaleString()}`; 
    totalOutput.innerHTML = `${tempOutput.toLocaleString()}`;
    totalAsset.innerHTML = `${tempAsset.toLocaleString()}`;

    listTotal.appendChild(list);
}

/*삭제 확인 모달 창*/
const deletModal = document.querySelector(".delete_modal");

const allowBtn = document.getElementById("allow");
const rejectBtn = document.getElementById("reject");

function warnModal(element){
    const backgroundElement = document.createElement("div");
    backgroundElement.classList.add("dark");
    
    deletModal.before(backgroundElement);
    deletModal.style.display = "flex";

    allowBtn.onclick = () => {
        deleteList(element);

        document.querySelector(".dark").remove();
        deletModal.style.display = "none";
    }
    rejectBtn.onclick = () => {        
        document.querySelector(".dark").remove();
        deletModal.style.display = "none";
    };
}

/*리스트 삭제 함수*/
function deleteList(event){
    const motherList = event.target.parentElement;
    const list = motherList.children[2];

    const element = {};

    list.className === "input"
    ? element.type = "input"
    : element.type = "output";

    let val = list.innerHTML;
    val = parseInt(val.replace(/[,+-]/g,""));
    element.amount = val;

    //자산 계산
    element.type === "input"
    ? tempInput -= element.amount
    : tempOutput -= element.amount

    tempAsset = tempInput-tempOutput;

    totalInput.innerHTML = `${tempInput.toLocaleString()}`; 
    totalOutput.innerHTML = `${tempOutput.toLocaleString()}`;
    totalAsset.innerHTML = `${tempAsset.toLocaleString()}`;

    motherList.remove();
}
