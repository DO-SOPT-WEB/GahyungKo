import {addList} from './main.js';

/*모달 여닫는 버튼 추가(애니메이션 효과 포함)*/
const modalWrapper =document.querySelector(".modal_wrapper");
const modalBtn = document.getElementById("add_btn");
const closeBtn = document.getElementById("close");

modalBtn.onclick = () => {
    modalWrapper.style.bottom = "0";

    const backgroundElement = document.createElement("div");
    backgroundElement.classList.add("dark");

    modalWrapper.before(backgroundElement);
};
closeBtn.onclick = () => {
    modalWrapper.style.bottom = "-40rem";

    document.querySelector(".dark").remove();
};

/*모달 체크 박스 설정 및 카테고리 연동*/
const modalInbox = document.getElementById("input_modalbox");
const modalOutbox = document.getElementById("output_modalbox");
const modalInput = document.getElementById("select_input");
const modalOutput = document.getElementById("select_output");

let newCategory = document.getElementById("category_input");
let tempType = "input";

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

/*금액 칸에 숫자만 입력 받기*/
const newAmount = document.getElementById("amount");
const newTitle = document.getElementById("title");

function onlyNum(event){
    let val = event.target.value;
    val = val.replace(/,/g,"");

    if(val.match(/[^0-9]/g)){
        val = val.replace(/[^0-9]/g,"");
        alert('숫자만 입력해주세요.');
    }

    /[0-9]/g.test(event.target.value) === false
    ? event.target.value = ""
    :event.target.value = parseInt(val).toLocaleString();
}
newAmount.addEventListener('input',onlyNum);

/*리스트 새로 저장하기*/
const saveBtn = document.getElementById("save");

function newList(){
    let tempCategory = newCategory.value;
    let tempAmount = newAmount.value;
    let tempTitle = newTitle.value;
    
    if(tempCategory === ''|| tempAmount === ''|| tempTitle === ''){
        alert("모든 항목을 입력하세요.");
    }
    else{    
        let newObject = {
            category: tempCategory,
            title: tempTitle,
            type: tempType,
            amount: parseInt(tempAmount.replace(/,/g,""))
        }
        
        addList(newObject);

        alert("새로운 내역 저장 완료!");
    }
}

saveBtn.addEventListener('click', newList);

/*카테고리 값 불러오기*/
const categoryIn = document.getElementById("category_input");
const categoryOut = document.getElementById("category_output");

function loadCategory(){
    let keys = Object.keys(localStorage);

    for (let key of keys){
        let objOption = document.createElement("option");
        let tempObj = JSON.parse(localStorage.getItem(key));

        let type = tempObj.type;
        let name = tempObj.name;

        objOption.text = name;
        objOption.value = name;

        type === "input"
        ?categoryIn.appendChild(objOption)
        :categoryOut.appendChild(objOption);
    };
}

loadCategory();