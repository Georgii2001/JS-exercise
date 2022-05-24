console.log("Hello from index.js");

//define variables using var, let, const

var name = "John";
let username;

name = "Jane"; //String
username = "Jane";

let a = true; //Boolean

if (a) {
  let i = 100; //Number
  console.log(i);
}

const age = 99;

let meters = "100";
console.log(typeof meters);

meters = 101;
console.log(typeof meters);

const user = { id: 1, name: "Jane", address: "Romania" }; //this is an object
const id = user.id;
const id1 = user["id"];

const numbers = [1, 2, 4, 8]; //this is an array
const firstNumber = numbers[0]; //=>1
const lastNumber = numbers[3]; //=>8
const arrayLength = numbers.length; //=>4

function sayHello(name) {
  console.log(`Hello, ${name}`);
}

sayHello("Jane");
