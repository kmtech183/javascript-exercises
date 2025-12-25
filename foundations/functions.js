var mul = 6;
let add = 7;
let result = add7(add);
// console.log("Add to number 7 is ", add7(add));
function add7(number) {
  return number + 7;
}

const addresult = (add) => add + 7;
console.log(`addresult ${mul} to number 7 is ${addresult(mul)}`);
// console.log("Type of addresult:", typeof addresult);

let mul2 = 12;
let mul3 = 24;
const multiply = (num1, num2) => num1 * num2;
console.log(`Multiplication of ${mul2} and ${mul3} is ${multiply(mul2, mul3)}`);

let string = "MRUNAL Koshti";
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
const capitalizestr = capitalize(string);
console.log(capitalizestr);

function lastletter(str) {
  return str.at(-1);
}
const strlastletter = lastletter(string);
console.log(strlastletter);
