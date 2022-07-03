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

const sum = (a, b, c) => a + b + c;
console.log(sum(1, 2, 3));

function summ (a, b, c) {
   let result = a + b + c;
    return result;
};

console.log(summ(1, 2, 3));
