// explicit types
let character: string;
let age: number;
let isloogedIn: boolean;

// age = "ergrtg"
age = 10;

// Arrays
let ninjas: string[];

// ninjas = [12,34]
// ninjas.push("Mukund"); // Variable 'ninjas' is used before being assigned.
/*
ninjas = []
ninjas.push("Mukund");
*/

// Union

let texnum: (string | number | boolean)[] = [];

texnum.push(1);
texnum.push("pro");
texnum.push(true);

let uid: string | number | boolean;
uid = 10;
uid = "pro";
uid = true;

// Objects
let ninjaOne: object;

ninjaOne = { name: "Mukund" };
ninjaOne = { name: "Mayank", age: 10 };
ninjaOne = ["hello"]; // works xD an array is a type of object
// ninjaOne = 1
// ninjaOne = "hello"

let ninjatwo: {
  name: string;
  age: number;
  present: boolean;
};

// ninjatwo = {}
ninjatwo = {
  name: "Mukund",
  age: 10,
  present: true,
};
