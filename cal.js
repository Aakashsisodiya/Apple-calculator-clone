// let input=document.querySelector('.inp1');
// let boxes=document.querySelectorAll(".box");
// let span=document.getElementById("sp");
// let equal=document.getElementById('equ');
// let mul=document.getElementById('mul');
// let div=document.getElementById('div');
// let c=document.getElementById('c');
// let ce=document.getElementById('ce');
// let opp=document.querySelector('.opp');

// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         input.value+=box.textContent;
//     })
// })

// c.addEventListener('click',()=>{
//     input.value=""
// })
// ce.addEventListener('click',()=>{
//     input.value=input.value.slice(0,-1)
// })
// equal.addEventListener('click',()=>{
//     if(input.value==''){
//         return
//     }
//     let res=eval(input.value);
//     span.textContent=input.value;   
//     input.value=res

// })

// div.addEventListener('click',()=>{
//     input.value+='/';
// })
// mul.addEventListener('click',()=>{
//     input.value+='*';
// }) 
// opp.addEventListener('click',()=>{
//     if(input.value==''){
//        return
//     }
//     else if(input.value[0]=='-'){
//         input.value=input.value.slice(1);
//     }
// })

let input=document.querySelector('.inp1');
let sp=document.getElementById('sp');
let ce=document.getElementById('ce');
let c=document.getElementById('c');
let boxes=document.querySelectorAll('.box');
let span=document.getElementById('sp');
let div=document.getElementById('div');
let mul=document.getElementById('mul');
let equ=document.getElementById('equ');
let opp=document.querySelector('.opp');

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        input.value+=box.textContent;
    })
})
ce.addEventListener('click',()=>{
   input.value=input.value.slice(0,-1);
})
c.addEventListener('click',()=>{
    input.value=''
    span.textContent=''
})
equ.addEventListener('click',()=>{
    if(input.value==""){
        return
    }
    let res=eval(input.value);
    span.textContent=input.value;
    input.value=res
})
div.addEventListener('click',()=>{
    input.value+='/'
})
mul.addEventListener('click',()=>{
    input.value+='*'
})
opp.addEventListener('click',()=>{
    if(input.value==''){
        return
    }
    else if(input.value[0]=='-'){
        input.value=input.value.slice
    }
})
