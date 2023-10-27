import {HISTORY_CATEGORY} from './initial.js';

const listIn = document.getElementById("list_in");
const listOut = document.getElementById("list_out");

/*최초 렌더링*/
HISTORY_CATEGORY.forEach((element)=>{
    addCategory(element);
});

/*카테고리 화면에 추가*/
function addCategory(element){
    const list = document.createElement("li");
    
    list.innerHTML = `
    <span>${element.name}</span>
    `;  

    element.type === "input"
    ? listIn.appendChild(list)
    : listOut.appendChild(list);
}

/*새 카테고리 생성*/
const inCategory = document.getElementById("categorypg_input");
const outCategory = document.getElementById("categorypg_output");

function createCateogry(element){
    if(element.keyCode === 13){
        let tempVal = {};

        element.target.id === "categorypg_input"
        ? tempVal.type = "input"
        : tempVal.type = "output";

        tempVal.name = element.target.value;
        
        addCategory(tempVal);
        addStorage(tempVal);
    }
}

/*로컬 저장소에 업데이트*/
function addStorage(element){
    localStorage.setItem(localStorage.length, JSON.stringify(element));
}

inCategory.addEventListener("keypress",createCateogry);
outCategory.addEventListener("keypress",createCateogry);

/*카테고리 값 불러오기*/
function loadCategory(){
    let keys = Object.keys(localStorage);

    for (let key of keys){
        let objOption = document.createElement("li");
        let tempObj = JSON.parse(localStorage.getItem(key));
        
        let type = tempObj.type;
        let name = tempObj.name;

        objOption.innerHTML = name;

        type === "input"
        ?listIn.appendChild(objOption)
        :listOut.appendChild(objOption);
    };
}

loadCategory();