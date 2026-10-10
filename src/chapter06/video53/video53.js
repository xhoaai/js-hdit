console.log("video 53")

const myBtnElement = document.getElementById("myBtn");
const myTextElement = document.getElementById("myText");
const backBtnElement = document.getElementById("backBtn");

//console.log(myBtnElement, myTextElement, backBtnElement);

myBtnElement.addEventListener("click", () => {
  //  console.log("Click Me")
    myTextElement.style.color = "red";
    myTextElement.style.backgroundColor = "green";
    myTextElement.classList.add("hoidanit", "Alan");
    //{key: value}
})


backBtnElement.addEventListener("click", () => {
    //console.log("Click Me")
    myTextElement.style.color = "black";
    myTextElement.style.backgroundColor = "unset";
    myTextElement.classList.remove("hoidanit", "Alan");
})