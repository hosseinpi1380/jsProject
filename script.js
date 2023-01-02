// let information = [
//   { id: 1, name: "hossein", fname: "pirasbaghi", age: "22" },
//   { id: 2, name: "ali", fname: "bageri", age: "21" },
//   { id: 3, name: "rasol", fname: "mohammadi", age: "23" },
//   { id: 4, name: "amir", fname: "askari", age: "21" },
// ];
// let span = document.querySelector("span");
// let i = 0;
// function Next() {
//   if (i < information.length ) {
//     span.innerHTML = information[i].name;
//   } else {
//     i = 0;
//     span.innerHTML=information[0].name
//   }
//   console.log(information[i]);
//   console.log(i);
//   i++;
// }
// console.log(information);
// console.log(information.length);
let images = [
  { number: 1, src: "/img/moon.jpg" },
  { number: 2, src: "/img/Koala.jpg" },
  { number: 3, src: "/img/flower.jpg" },
  { number: 3, src: "/img/flower2.jpg" },
];
let imageHover = document.getElementsByClassName("image");

// imageHover.addEventListerner('onclick',(imageId)=>{
//     alert(imageId)
// })
console.log(imageHover);
images.forEach((img) => {
  document.body.insertAdjacentHTML(
    "beforebegin",
    `<img class="image" src="${img.src}"></img>`
  );
});
