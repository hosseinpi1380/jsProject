let information = [
  { id: 1, name: "hossein", fname: "pirasbaghi", age: "22" },
  { id: 2, name: "ali", fname: "bageri", age: "21" },
  { id: 3, name: "rasol", fname: "mohammadi", age: "23" },
  { id: 4, name: "amir", fname: "askari", age: "21" }
];
let span = document.querySelector("span");
let i = 0;
function Next() {
    if(i<information.length){
        span.innerHTML=information[i].name;
        i++
    }
    else{
        i=0
    }
    console.log(i)
}
