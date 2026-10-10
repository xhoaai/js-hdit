
console.log("video 51")

const element = document.getElementById("hoidanitBtn");

// element.addEventListener("click",function(){
//     console.log("You click a button")
// })

const hanleClickBtn = () => {
    console.log("You click a button")
}
element.addEventListener("click",hanleClickBtn);



console.log(element);