const span = document.querySelectorAll("span");
const display = document.querySelector(".display");
const clear = document.getElementById('clear')
let number = 0;
let operation = "";
span.forEach((element) => {
  element.addEventListener("click", (e) => {
    let value = e.originalTarget.innerHTML
    
    if(display.innerHTML.length <16){
      display.innerHTML += value
      return;
    }

    console.log(display.innerHTML.length)
    let data = e.target.dataset.input;
    console.log(data)
  });
});

clear.addEventListener("click", () => {
  display.textContent = '';
})



