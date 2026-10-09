console.log("video39")

const myClass = ["hoidanit", "Alan", "hung", "nam", "bla bla" ]

// console.log(myClass, myClass.length)

// for (let i = 0; i < myClass.length; i++){
//     console.log("i = ", i, " and value = ", myClass[i] )
// }

// console.log("================")
// for (let i = 1; i <= myClass.length; i++){
//     console.log("i = ", i, " and value = ", myClass[i-1] )
// }

//for-each

myClass.forEach(function(v, i){
    console.log("value = ", v, "index = ", i)
}
)

//forEach with arraw funtion

console.log("==================")

myClass.forEach((v, i) => {
    console.log("value = ", v, "index = ", i)

})