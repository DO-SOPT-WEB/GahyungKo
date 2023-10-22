import {INIT_BALANCE, HISTORY_LIST} from './initial.js';

const listTotal = document.querySelector("ul");

HISTORY_LIST.forEach((element)=>{
    const list = document.createElement("li");
    list.className = "list";

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