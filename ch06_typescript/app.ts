function greet(name: string): string{
    return `Hello, ${name}!`;
}
console.log(greet("Typescript"));


let person: [string, number, ...string[]]=["Alice", 25];
console.log(person[0]);
person.push("Engineer");
person.push(30);
console.log(person);

const divide=(x: number, y: number): number=>x/y;

const greeting=(name: string, age?: number): string=>{
    return age ? `hello, ${name}. You are ${age} years old` : `hello ${name}`;
}

console.log(greeting("Noel"));
console.log(greeting("Noel", 20));

const add=(x: number, y: number): number=>{
    return x+y;
}

const greets=(name: string, age?: number)=>{}

const greets1=(name: string, greeting="hi")=>{

}

const sum=(...numbers: number[])=>{

}

interface Person{
    name: string;
    age: number;
}

interface Employee extends Person{
    jobTitle: string;
}

const employee: Employee={
    name: "Alice",
    age: 30,
    jobTitle: "Software Engineer",
};

interface Greeting {
    (name: string): string;
}

const sayHello: Greeting=(name)=>`hello, ${name}`;