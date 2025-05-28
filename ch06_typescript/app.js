function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("Typescript"));
var person = ["Alice", 25];
console.log(person[0]);
person.push("Engineer");
person.push(30);
console.log(person);
var divide = function (x, y) { return x / y; };
var greeting = function (name, age) {
    return age ? "hello, ".concat(name, ". You are ").concat(age, " years old") : "hello ".concat(name);
};
console.log(greeting("Noel"));
console.log(greeting("Noel", 20));
