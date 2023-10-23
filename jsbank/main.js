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

/*리스트 추가 및 삭제 함수*/
function addList(element){
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
    list.children[3].addEventListener('click', deleteList);
    
    //자산 계산
    element.type === "input"
    ? tempInput += element.amount
    : tempOutput += element.amount

    tempAsset = tempInput-tempOutput;

    totalInput.innerHTML = `${tempInput}`; 
    totalOutput.innerHTML = `${tempOutput}`;
    totalAsset.innerHTML = `${tempAsset}`;

    listTotal.appendChild(list);
}

function deleteList(event){
    const motherList = event.target.parentElement;
    const list = motherList.children[2];
    const element = {};

    list.className === "input"
    ? element.type = "input"
    : element.type = "output";

    element.amount = Math.abs(list.innerHTML);

    //자산 계산
    element.type === "input"
    ? tempInput -= element.amount
    : tempOutput -= element.amount

    tempAsset = tempInput-tempOutput;

    totalInput.innerHTML = `${tempInput}`; 
    totalOutput.innerHTML = `${tempOutput}`;
    totalAsset.innerHTML = `${tempAsset}`;

    motherList.remove();
}

/*모달 여닫는 버튼 추가*/
const modal_wrapper =document.querySelector(".modal_wrapper");
const modalBtn = document.getElementById("add_btn");
const closeBtn = document.getElementById("close")

modalBtn.onclick = () => {
    modal_wrapper.style.display = "flex";
};
closeBtn.onclick = () => {
    modal_wrapper.style.display = "none";
};

/*모달 체크 박스 설정 및 카테고리 연동*/
const modalInbox = document.getElementById("input_modalbox");
const modalOutbox = document.getElementById("output_modalbox");
const modalInput = document.getElementById("select_input");
const modalOutput = document.getElementById("select_output");

let newCategory = document.getElementById("category_input");
let tempType = null;

function checkOnly(e){
    if(e.target === modalInbox){
        modalInbox.checked = true;
        modalOutbox.checked = false;

        modalInput.style.display = "flex";
        modalOutput.style.display = "none";

        tempType = "input";
        newCategory = document.getElementById("category_input");
    }
    else{
        modalInbox.checked = false;
        modalOutbox.checked = true;

        modalInput.style.display = "none";
        modalOutput.style.display = "flex";

        tempType = "output";
        newCategory = document.getElementById("category_output");
    }
}

modalInbox.addEventListener('click', checkOnly);
modalOutbox.addEventListener('click', checkOnly);

/*리스트 새로 저장하기*/
const saveBtn = document.getElementById("save");

const newAmount = document.getElementById("amount");
const newTitle = document.getElementById("title");

function newList(){
    let tempCategory = newCategory.value;
    let tempAmount = newAmount.value;
    let tempTitle = newTitle.value;

    let newObject = {
        category: tempCategory,
        title: tempTitle,
        type: tempType,
        amount: parseInt(tempAmount), 
    }

    addList(newObject);

    alert("새로운 내역 저장 완료!");
}

saveBtn.addEventListener('click', newList);