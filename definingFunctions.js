function greetATexan() {
  return "Howdy, partner!";
}
console.log(greetATexan())

function greetATexan(name) {
  return `Howdy, ${name}!`
}

console.log(greetATexan("Brandy"))

function subtract(max,min) {
  var difference = max - min;
  return difference;
}

console.log(subtract(10,3));

function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();
console.log(makeFreshPesto());