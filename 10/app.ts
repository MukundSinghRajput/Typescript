const anchor = document.querySelector("a");
console.log(anchor?.href)

// OR 

const anc = document.querySelector("a")!;
console.log(anc.href)

// const form = document.querySelector("form")!

// const particularform = document.getElementsByClassName('new-item-form')
const particularform = document.querySelector(".new-item-form") as HTMLFormElement
console.log(particularform)