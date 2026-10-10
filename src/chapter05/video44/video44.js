
console.log("video 44")

const sv1 = {
    username: "Alan",
    score: 9
}

const sv2 = {
    username: "Eric",
    score: 4
}

const sv3 = {
    username: "bla bla",
    score: 7
}

const sinhvien = [sv1, sv2, sv3];
console.log(">>> check sinhvien: ", sinhvien)

// sinhvien.forEach((item, index) => {
//     console.log(">>index = ", index, " name = ", item.username, " diem = ", item.score)

// })

console.log("========================")
const person = {
    email: "alan@gmail.com",
    age: 25,
    address: "vietnam"
}

for (let key in person) {
  console.log(key, person[key]);
}



// for (let value of Object.values(person)) {
//   console.log(value);
// }

console.log("---------")
for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}
