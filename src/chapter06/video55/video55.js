console.log("video 55")

const btn = document.getElementById("submitBtn");
const input = document.getElementById("name");

const prevElement = document.getElementById("prev");
const prevName = localStorage.getItem("hoidanit");
if(prevName{
    prevElement.innerHTML = `<b>${prevName}</b>`
})

btn.addEventListener('click', () => {
    // console.log(input.value)
    localStorage.setItem("hoidanit", input.value)
    document.getElementById("message").innerHTML = `<b>${input.value}</b>`
})