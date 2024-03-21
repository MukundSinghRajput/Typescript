let clone: any;
console.log(typeof clone);

clone = [];
console.log(typeof clone); // object
clone = {};
console.log(typeof clone);
clone = "Hey";
console.log(typeof clone);
clone = 1;
console.log(typeof clone);

let mixed: any[] = [];
mixed.push(4);
mixed.push("Hey");
mixed.push(false);
console.log(mixed);

let ninja: {
  name: any;
  age: any;
  present: boolean;
};

ninja = {
  name: 1024,
  age: 30,
  present: true,
};
