//Block scoping
// var variable = "initial";

// {
//   var variable = "changed";
// }

// console.log(variable);

// let variable2 = "initial2";

// {
//   let variable2 = "changed2";
// }

// console.log(variable2);

//Event listeners
// document
//   .querySelector("#options")
//   .children[0].addEventListener("click", function () {
//     document.querySelector("#options").children[0].textContent = document
//       .querySelector("#options")
//       .children[0].textContent.toUpperCase();
//   });
// document.querySelector("h1").addEventListener("mouseover", function () {
//   document.querySelector("h1").textContent = "hover";
// });
// document.querySelector("h1").addEventListener("mouseout", function () {
//   document.querySelector("h1").textContent = "Quiz.js";
// });

//Conditionals
// function compareNames(firstName, lastName) {
//   if (firstName.length > lastName.length) {
//     console.log("first name is longer");
//   } else if (firstName.length < lastName.length) {
//     console.log("second name is longer");
//   } else {
//     console.log("both names are equal length");
//   }
// }

// compareNames("Angel", "Ivanov");

// function isEmpty(array) {
//   return !(array.length > 0);
// }

// console.log(isEmpty([]));
// console.log(isEmpty([1, 2, 3]));

// function isTruthy(array) {
//   return Boolean(array);
// }

// console.log("empty arrays are truthy ", isTruthy([]));
// console.log("empty strings are falsy", isTruthy(""));

//CLOSURE
// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5)(2);
// const add10 = makeAdder(10);

// console.log(add5); // 7
// console.log(add10(2)); // 12
