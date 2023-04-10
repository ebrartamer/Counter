const increase=document.querySelector('.increase')
const reset=document.querySelector('.reset')
const decrease=document.querySelector('.decrease')
const value=document.querySelector('.value')
const btn = document.querySelector('.buttons')

let count=0

btn.addEventListener('click',function(e){
    
     if(e.target.classList.contains('decrease')){
        value.style.color='red'
        count--
     }
     else if(e.target.classList.contains('reset')){
        value.style.color='rgb(27, 27, 68)'
        count=0
     }
     else if(e.target.classList.contains('increase')){
        value.style.color='green'
        count++
     }
     value.textContent=count
})