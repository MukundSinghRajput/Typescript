// Arrays
let nam = ["Mukund", "Mayank"];

nam.push("Subh");

/*
ERROR

nam.push(3)
nam[0] = 3
*/

let num = [1, 2, 3, 4, 5];

num.push(1);

/*
ERROR

num.push("hello")
num[0] = "Hello"
*/

let mixed = ["Mukund", 12, 45, "Mayank"];

mixed.push("Pro");
mixed.push(112);
mixed[0] = 3;
// for (let x in nam) {
//     console.log(nam[x])
// }

// Objects

let ninja = {
  name: "Mukund",
  age: 10,
};

ninja.age = 20;
ninja.name = "Subh";
// ninja.name = 123;
// console.log(ninja)
// ninja.skill = ["pro", "coder"]

ninja = {
  name: "Mayank",
  age: 20,
};
