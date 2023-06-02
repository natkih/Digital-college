const keyNum = [...document.querySelectorAll(".num")]
const keyOp = [...document.querySelectorAll(".op")]
const keyRes = document.querySelector(".res")
const display = document.querySelector(".display")
const kon = document.getElementById("kon")
const kclear = document.getElementById("kclear")
const tequal = document.getElementById("tequal")


let sinal = false
let decimal = false


keyNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal=false
        if(evt.target.innerHTML=="."){
            if(!decimal){
                decimal=true
                if(display.innerHTML=="0"){
                    display.innerHTML="0,"  
                }else{
                    display.innerHTML+=evt.target.innerHTML
                }
            }
        }else{
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            display.innerHTML+=evt.target.innerHTML
        }
    })
})

keyOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        if(!sinal){
            sinal = true
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            if(evt.target.innerHTML=="x"){
                display.innerHTML+="*"
            }else{
                display.innerHTML+=evt.target.innerHTML
            }
        }
    })
})

kclear.addEventListener("click",(evt)=>{
    sinal=false
    decimal = false
    display.innerHTML= "0"
})

tequal.addEventListener("click",(evt)=>{
    sinal=false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

kon.addEventListener("click",(evt)=>{
    display.innerHTML= null
})