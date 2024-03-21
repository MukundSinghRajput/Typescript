// Function signature

// let greet : Function;

// Example 1
let greet: (a:string, b:string) => void

greet = (name:string, greet:string) => {
    console.log(`${name} says ${greet}`)
}

// Example 2 
let calc: (a:number, b:number, c?:string) => number;

calc = (numOne, numTwo:number, action?:string) => {
    if (action === "add") {
        return numOne + numTwo;
    } else {
        return numOne- numTwo;
    }
}

console.log(calc(10, 20));

// Example 3 
let logDetails: (obj: {name:string, age:number}) => void;

logDetails= (obj) => {
    console.log(obj.name, "is of", obj.age, "years")
}

const data = {name:"Mukund", age:16}
logDetails(data)

type person = {name:string, age:number}

logDetails= (obj:person) => {
    console.log(obj.name, "is of", obj.age, "years")
}

const dataT = {name:"Mukund", age:16}
logDetails(dataT)