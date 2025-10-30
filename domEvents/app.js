// let btn=document.querySelectorAll("button");
// console.dir(btn);
// btn.onclick=function(){
//     console.log("aura");
// };


// function sayName(){
//     alert("Naitik");
// }
// function sayHello(){
//     alert("Hello");
// }
// for(btns of btn){
//     // btns.onclick=sayHello;
//     // btns.onmouseenter=function(){
//     //     console.log("entered a button");
//     // }

//     // btns.addEventListener("click",sayHello);
//     // btns.addEventListener("click",sayName);

//     btns.addEventListener("dblclick",sayName);
// }



// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// });


let inp=document.querySelector("input");
inp.addEventListener("keydown",function(event){
    console.log("code = ",event.code);
    if(event.code=="ArrowUp") console.log("charcter move forward");
    else if(event.code=="ArrowDown") console.log("charcter move downward");
    else if(event.code=="ArrowLeft") console.log("charcter move left");
    else if(event.code=="ArrowRight") console.log("charcter move right");


})