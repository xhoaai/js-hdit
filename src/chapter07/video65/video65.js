console.log("video 65")


const greeting = (name, callback) => {
    console.log("Xin chao: ", name);
    callback()
}

const hello = () => {
    console.log("learn callback ...")
}

const hi = () => {
    console.log("say hi ...")
}

greeting("Alan", hello)
greeting("bla bla", hi)