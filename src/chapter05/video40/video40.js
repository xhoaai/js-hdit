console.log("video 40");

const scores = [10, 6, 8, 5, 7 ,4];

//read data
// scores.forEach((value , index ) => {
//     console.log("index = ", index, "value = ", value)
// })

//modify data
const scoresx2 = scores.map((value, index) => {
    // console.log("index = ", index, "value = ", value)
    return value * 2;
})

const otherscoresx2 = scores.map((value, index) => value * 2 )

console.log(" scores = ", scores)
console.log(" scoresx2 = ", scoresx2)

console.log("-----------------")
console.log(" otherscoresx2 = ", otherscoresx2)
