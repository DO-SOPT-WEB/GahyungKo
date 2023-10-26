const hoverTarget = document.querySelectorAll('.roma_box');

//마우스 호버 효과
for (var i = 0; i < hoverTarget.length; i++) {
    hoverTarget[i].addEventListener('mouseenter', onHover);
    hoverTarget[i].addEventListener('mouseleave', outHover);
}

function onHover(e){
    e.target.children[0].style.filter = "brightness(0.5)"
    e.target.children[1].style.display ="inline";
    e.target.children[2].style.display ="-webkit-box";
    moreText(e.target.children[2]);
}

function outHover(e){
    e.target.children[0].style.filter = "brightness(1)";
    e.target.children[1].style.display ="none";
    e.target.children[2].style.display ="none";

    if(e.target.lastChild.className === "read_more")
        e.target.lastChild.remove();
}

//버튼 변화
const topBtn = document.getElementById("top_btn");

//scroll이 작동하는 건 window이기 때문!(event 발생하는 곳)
window.addEventListener('scroll', function(){
    //전체 Y스크롤 값으로 나눔
    topBtn.style.opacity = window.scrollY / 3000;
});

//그림 설명 더보기
function moreText(e) {
    const moreBtn = document.createElement("button");
    moreBtn.innerHTML = "더보기";
    moreBtn.className = "read_more";
    moreBtn.addEventListener('click', loadText);

    if (e.clientHeight < e.scrollHeight){
        e.parentNode.appendChild(moreBtn);
    }
};

function loadText(e){
    let text = e.target.parentNode.children[2];

    text.style.overflow = "visible";
    text.style.display = "block";
    e.target.style.display = "none";
}

//스크롤 이동
const previewImg = document.querySelector(".preview_images");
const leftArrow = document.querySelector(".preview button:first-child");
const rightArrow = document.querySelector(".preview button:last-child");

leftArrow.onclick = () => {
    previewImg.scrollLeft -= 2488;
};
rightArrow.onclick = () => { 
    previewImg.scrollLeft += 2488;
};
