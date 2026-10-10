console.log("video 52")

const myBtnElement = document.getElementById("myBtn");
const backBtnElement = document.getElementById("backBtn");

const myTextElement = document.getElementById("myText");

console.log(myBtnElement, myTextElement);

myBtnElement.addEventListener("click", () => {
    console.log("You click my button");
    //myTextElement.innerText = "Just the content with hoidanit";
    myTextElement.innerHTML = "<strong>Chào bạn,</strong> <em>học lập trình với hoidanit!</em>";
})


backBtnElement.addEventListener("click", () => {
    console.log("You click my button");
    myTextElement.innerText = "video 52";
})