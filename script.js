let red;
let green;
let blue;
let array=[];
let prevClr=[];

let box = document.querySelector("#box");
let h1 = document.querySelector("h1");
let btn = document.querySelector("button");

btn.addEventListener("click",function(){

    //color generation
    red=Math.floor(Math.random()*255+1);
    green=Math.floor(Math.random()*255+1);
    blue=Math.floor(Math.random()*255+1);

    //document manipulation
    let color=box.style.backgroundColor=`rgb(${red},${green},${blue})`;
    h1.innerText=color;
    btn.style.borderColor=color;
    
    //for previous colors
    array.push(color);
    let palletes=document.querySelectorAll(".pallete");
    let prevClr=array.slice(-5)                         //to get the last 5 colors
    for(let i=0;i<=5;i++){
        palletes[i].style.backgroundColor=prevClr[i];         
    }

})