// for ([initialization]; [condition]; [final-expression]) {
//   [statement]
// }

var emails = [
  "kaitlyn@turing.edu",
  "justina@turing.edu",
  "amy@turing.edu",
  "launa@turing.edu",
  "nikki@turing.edu",
  "naomi@turing.edu"
];

for (var i = 0; i < 4; i++) {
  console.log(i);
};

for (var i = 0; i < emails.length; i++) {
  console.log(`${emails[i]} is an email address`)
};

emails.forEach((email) => console.log(email));
