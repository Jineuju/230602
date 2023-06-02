// // 1. load이벤트에 적용해서 그려지는 애니메이션을 연동하는 코드

// const block = document.querySelectorAll(".block");

// window.addEventListener("load",function(){
//    block.forEach((el)=>{
//       let numElement = el.querySelector(".num");
//       let num = parseInt(numElement.innerText);
//       // parseInt는 ()의 값을 무조건 정수로 변환합니다
//       let count = 0;
//       let time = 2000 / num;
//       let circle = el.querySelector(".circle");
//       setInterval(()=>{
//         if(count == num){
//             clearInterval();
//         }else{
//             count += 1;
//             numElement.innerText = count;
//         }
//       },time);

//       circle.style.strokeDashoffset = 503 - (503 * (num / 100));

//       let dots = el.querySelector(".dots");
//       dots.style.transform = `rotate(${360 * (num / 100)}deg)`;

//       if(num == 100){
//         dots.style.opacity = 0;
//       }
//    });
// });

// 2. 스크롤 연동으로 구현
// index에 해당 section.two앞뒤로 section을 형성

// let sections = document.querySelectorAll("section");
// let posArr = [];

// for(let el of sections) posArr.push(el.offsetTop);
// // console.log(posArr);

// window.addEventListener("scroll",()=>{
//     const scroll = window.screenY || window.pageYOffset;
//     scroll > posArr[1] && startSVG();
// });

// function startSVG(){
//     const block = document.querySelectorAll(".block");
//        block.forEach((el)=>{
//       let numElement = el.querySelector(".num");
//       let num = parseInt(numElement.innerText);
//       // parseInt는 ()의 값을 무조건 정수로 변환합니다
//       let count = 0;
//       let time = 2000 / num;
//       let circle = el.querySelector(".circle");
//       setInterval(()=>{
//         if(count == num){
//             clearInterval();
//         }else{
//             count += 1;
//             numElement.innerText = count;
//         }
//       },time);

//       circle.style.strokeDashoffset = 503 - (503 * (num / 100));

//       let dots = el.querySelector(".dots");
//       dots.style.transform = `rotate(${360 * (num / 100)}deg)`;

//       if(num == 100){
//         dots.style.opacity = 0;
//       }
//    });
// };

// 3. 제대로된 scroll연동코드 : 함수가 1번만 실행되는 코드
let sections = document.querySelectorAll("section");
let posArr = [];

for (let el of sections) posArr.push(el.offsetTop);
const block = document.querySelectorAll(".block");

let isOn = true;

window.addEventListener("scroll", () => {

    if (isOn && window.scrollY >= posArr[1]) {
        isOn = false;
        block.forEach((el) => {
            let numElement = el.querySelector(".num");
            let num = parseInt(numElement.innerText);
            // parseInt : ()의 값을 무조건 정수로 변환합니다
            let count = 0;
            let time = 2000 / num;
            let circle = el.querySelector(".circle");
            setInterval(() => {
                if (count == num) {
                    clearInterval();
                } else {
                    count += 1;
                    numElement.innerText = count;
                }
            }, time);
            circle.style.strokeDashoffset = 503 - (503 * (num / 100));
            let dots = el.querySelector(".dots");
            dots.style.transform = `rotate(${360 * (num / 100)}deg)`;
            if (num == 100) {
                dots.style.opacity = 0;
            }
        });
    }


})