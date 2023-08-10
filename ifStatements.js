var isOpen = true;

if (isOpen == true) {
  console.log("Let's go!")
}

var age = 10

if (age >= 30) {
  console.log("You're, like, really old.")
} else if (age >= 13) {
  console.log('You are not yet destined for carousel')
} else {
  console.log("You're but a youngling")
}

var dysonsAge = 34
var helensAge = 98
var bothUnder100 = false
var oneUnder78 = false
var me18Her60 = false
var me21Her25 = false
var me20Her40 = new Boolean(false)

if (dysonsAge < 100 && helensAge < 100) {
  bothUnder100 = true
}

if (dysonsAge < 78 || helensAge < 78) {
  oneUnder78 = true
}

if (dysonsAge > 18 && helensAge < 60) {
  me18Her60 = true
}

if (dysonsAge > 21 || helensAge > 25) {
  me21Her25 = true
}

if (dysonsAge < 20 || helensAge > 40) {
  me20Her40 = true
}

console.log(bothUnder100)
console.log(oneUnder78)
console.log(me18Her60)
console.log(me21Her25)
console.log(me20Her40)

password1 = 'hello'
password2 = 'helloworld#'
password3 = '#'
password4 = 'hellomybaby'
password5 = 'hellomybaby#'

if (password1.length >= 8 && password1.includes('#')) {
  console.log(`${password1} is valid`)
} else {
  console.log(`${password1} is invalid`)
}
if (password2.length >= 8 && password2.includes(`#`)) {
  console.log(`${password2} is valid`)
} else {
  console.log(`${password2} is invalid`)
}
if (password3.length >= 8 && password3.includes(`#`)) {
  console.log(`${password3} is valid`)
} else {
  console.log(`${password3} is invalid`)
}
if (password4.length >= 8 && password4.includes(`#`)) {
  console.log(`${password4} is valid`)
} else {
  console.log(`${password4} is invalid`)
}
if (password5.length >= 8 && password5.includes(`#`)) {
  console.log(`${password5} is valid`)
} else {
  console.log(`${password5} is invalid`)
}