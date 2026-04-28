let red;
let green;
let blue;
let array=[];
let prevClr=[];

let box = document.querySelector("#box");
let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let paletes=document.querySelectorAll(".palete");

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
    let prevClr=array.slice(-5);                        //to get the last 5 colors
    for(let i=0;i<5;i++){
        paletes[i].style.backgroundColor=prevClr[i];

        // pop animation: remove class first, then re-add to retrigger it
        paletes[i].classList.remove("pop");
        void paletes[i].offsetWidth;                    
        if(prevClr[i]) paletes[i].classList.add("pop");
    }
})

//get any previous color's details
for (palete of paletes){                                    
        palete.addEventListener("click",function(e){
           box.style.backgroundColor=e.target.style.backgroundColor;
           h1.innerText=e.target.style.backgroundColor;
           btn.style.borderColor=e.target.style.backgroundColor;
        })
    }
