function vowels()
{ 

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Input a string: ', (string) => {
  if(string != null){

var condition = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var match1 = string.match('a');
var match2 = string.match('e');
var match3 = string.match('i');
var match4 = string.match('o');
var match5 = string.match('u');
var match6 = string.match('A');
var match7 = string.match('E');
var match8 = string.match('I');
var match9 = string.match('O');
var match10 = string.match('U');


if (condition.some(el => string.includes(el))) {
  console.log(match1,match2,match3,match4,match5,match6,match7,match8,match9,match10);
}
else{
  console.log("No vowels");
}}})
}
vowels()
