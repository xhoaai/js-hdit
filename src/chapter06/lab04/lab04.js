console.log("lab 04")

const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener('click',  () =>{
    //alert("click me")
    const username = usernameElement.value;
    const password = passwordElement.value;

    if(username === "hoidanit@gmail.com" && password === "123456"){
        alert("Dang nhap thanh cong")
        window.location.href = "success.html"
    }else {
        alert("Username/password khong chinh xac")
        usernameElement.style.borderColor = "red";
        passwordElement.style.borderColor = "red";
    }
    
})