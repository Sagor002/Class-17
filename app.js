"use strict";

// const isRainy = false
// if (isRainy) console.log("Bring out umbrella.");
// else console.log("Not bring out umbrella.");

// // isRainy ? console.log("Bring out umbrella.") : console.log("Not bring out umbrella.");

// const rainStatus = isRainy ? "Bring out umbrella."
// : "Not bring out umbrella."

// console.log(rainStatus)/*

// x = 10;
// console.log(x);

// const x = 10;
// console.log(x);

// const num = 0123;
// console.log(num);

// functions

// how to fry an egg
// 01. buy an egg
// 02. start the gas stove
// 03. put a pan on top of it
// 04. pour oil on that pan
// 05. dice your onions and chillies
// 06. spread onions and chillies on the pan
// 07. take the egg and break it
// 08. wisk the egg
// 09. spread the egg on the pan
// 10. wait until both sides are golden brown
// 11. serve it in a fancy dish
// 12. let's eat

// const a = 10;
// const b = 5;
// const sum = a + b;
// const sumProduct = sum * 5;
// console.log(sumProduct);

// const result4 = doSum(15,25); //hoisting

// console.log(result4)

// function doSum(num1, num2){
//   // function declaration
//   const sum = num1 + num2;

//   return sum;
// }

// // call a function / invokation
// const result1 = doSum(10, 25);
// const result2 = doSum(23, 27);
// const result3 = doSum(9, 45);

// console.log(result1)
// console.log(result2)
// console.log(result3)

// function declaration
// function greet(personName) {
//   const message = `Hello, ${personName}! 😊`;
//   return message;
// }

// console.log(greet("Rahim"));
// console.log(greet("Karim"));
// console.log(greet("Kuddus"));

// function doMath(a, b, c, d = 0) {
//   console.log(a, b, c, d);
//   const sum = a + b + c + d;
//   const diff = sum - d;
//   const prod = diff * c;

//   return prod;
// }

// // console.log(doMath(1, 2, 3,));

// // function expression
// const colorExpresser = function (colorName) {
//   const message = `This is ${colorName}! ❤`;

//   return message;
// };

// console.log(colorExpresser("Red"));

// // arrow function
// const doMath = (num1, num2) => num1 % num2;

// console.log(doMath(10, 2));

// const ageCalculator = (birthyear) => 2023 - birthyear;

// console.log(ageCalculator(1993));

// const velocityCalc = (distance, time) => {
//   const v = distance * time;

//   return v;
// };

// console.log(velocityCalc(10, 3));

// // F = ma
// const forceCalc = (mass, accelartion) => mass * accelartion;

// console.log(forceCalc(10, 2.5));

// const doMath2 = (num1, num2, num3 = 0) => {
//   const result = num1 * (num2 - num3);

//   return result;
// };

// const output = doMath2(10, 5);
// console.log(output);

// function calling another function
// function cutTrees(tree) {
//   return tree * 4;
// };

// function makeFurniture(tree) {
// // cut tree
// return cutTrees(tree);
// };

// console.log(makeFurniture(5));

// arrays

// const myRandomArray = ["Sagor", "Adiba", "akhon ami khabar khabo", true, -500, false, "20.876",];

const myNumbers = [5, 10, 15, 20, 40, 200];

// access elements
console.log(myNumbers[0]);
console.log(myNumbers[1]);
console.log(myNumbers[3]);
console.log(myNumbers[2]);
console.log(myNumbers[4]);
console.log(myNumbers[5]);

// access index or position
console.log(myNumbers.indexOf(5)); // 0
console.log(myNumbers.indexOf(10)); // 1
console.log(myNumbers.indexOf(15)); // 2
console.log(myNumbers.indexOf(40)); // 4
console.log(myNumbers.indexOf(200)); // 5
console.log(myNumbers.indexOf(400)); // -1

// length
console.log(myNumbers.length); // element count

// add an element at the end --- push()
myNumbers.push(75);
myNumbers.push(750);

// add an element at the beginning --- unshift() 
myNumbers.unshift(9);

//  remove an element at the end --- pop()
// myNumbers.pop(); last element out
// myNumbers.pop();

//  remove an element at the beginning --- shift()
// myNumbers.shift(); // first element out


console.log(myNumbers);


console.log(myNumbers.includes(40)) //true
console.log(myNumbers.includes(100)) //false
console.log(myNumbers.includes(50)) //false
console.log(myNumbers.includes(750)) //false
