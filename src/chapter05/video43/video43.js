console.log("video 43")

const person = {
    name: "Alan",
    age: 25
}

//get data
console.log("person before: ", person);

console.log("age: ", person.age);
console.log("name: ", person["name"]);

//set data
person.address = "hanoi";
person["language"] = "vietnam";

//delete
delete person.name
delete person.language;

console.log("person after: ", person);