// Functions Basics

let greet: Function; // Greet is of type function now

// greet = "Hey"

greet = () => {
  console.log("Hey");
};

const add = (a: number, b: number, c?:string|number) => {
  console.log(a + b);
//   console.log(c) => undefined
};
/* 
? Makes c optional

We can't use default parameter with the ?...
*/

add(10, 10);

const minus = (a:number, b:number) => {
    return a-b;
}

let res = minus(3,2)
// res = "" /// Type 'string' is not assignable to type 'void'.
console.log(minus(3,2));

const multiply= (a:number,b:number):number => {
    return a*b
}

let result = multiply(3,4)
console.log(result, typeof result);