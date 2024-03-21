let pro = "Mukund"; // now pro has the type string which can't be changed further
//pro = 1 // Type 'number' is not assignable to type 'string'.

let num = 12;
// num = "hello" // Type 'string' is not assignable to type 'number'.

let think = false;
// think = 'Yes' // Type 'string' is not assignable to type 'boolean'.

const circ = (dia: number) => {
  return dia * Math.PI;
};

console.log(circ(3.14));
