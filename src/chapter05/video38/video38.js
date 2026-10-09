console.log("video 38")

const names = ["hoidanit", "Alan", "Javascript"]

console.log("0 = ",names[0])

console.log("10 = ",names[10])

names[1] = "Jacky" //update name

console.log("before", names)

names.push(true,38)
names.unshift(null, "information")

names.pop()
names.shift()

console.log("after", names)
