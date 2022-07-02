console.log("hello");

const person = {
    name: "Mike",
    age: 34
}
console.log(person.age)

person.age = 37;
console.log(person.age)

person[`age`] = 40;
console.log(person.age)

person["hair color"] = "brown";
console.log(person["hair color"]);

