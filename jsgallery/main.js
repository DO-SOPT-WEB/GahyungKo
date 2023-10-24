const hoverTarget = document.querySelectorAll('.roma_box');

//마우스 호버 효과
for (var i = 0; i < hoverTarget.length; i++) {
    hoverTarget[i].addEventListener('mouseenter', onHover);
    hoverTarget[i].addEventListener('mouseleave', outHover);
}

function onHover(e){
    e.target.children[0].style.filter = "brightness(0.5)"
    e.target.children[1].style.display ="inline";
    e.target.children[2].style.display ="inline";
}

function outHover(e){
    e.target.children[0].style.filter = "brightness(1)";
    e.target.children[1].style.display ="none";
    e.target.children[2].style.display ="none";
}

//버튼 변화
const topBtn = document.getElementById("top_btn");

//scroll이 작동하는 건 window이기 때문!(event 발생하는 곳)
window.addEventListener('scroll', function(){
    //전체 Y스크롤 값으로 나눔
    topBtn.style.opacity = window.scrollY / 3000;
});

