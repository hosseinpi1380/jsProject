const span = document.querySelectorAll("span");
const display = document.querySelector(".display");
const clear=document.getElementById('clear')
let number = 0;
let operation = "";
span.forEach((element) => {
  element.addEventListener("click", (e) => {
    
    display.innerHTML+=e.originalTarget.innerHTML
  });
});
clear.addEventListener("click", () =>{
    display.innerHTML='';
})



