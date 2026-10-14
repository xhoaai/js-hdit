console.log("video 64")

const doSomething = () => {
    const a = 10, b = 1;
    if (b === 0){
        throw new Error("Thuc hien chia cho 0")
    }
    return a / b;
}

try {
    doSomething();

} catch (error) {
    console.log("co loi xay ra", error)
} finally {
    console.log("run finally")

}

