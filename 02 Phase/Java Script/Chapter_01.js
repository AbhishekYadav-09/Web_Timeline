// function printChai() {
//   console.log("Hello chai");
// }

// function bringBrush(numberOfBrush) {
//   console.log(`Hanji, le aaya ${numberOfBrush} brush`);
// }

// function addTwo(ekNum, doNum) {
//   return ekNum + doNum;
// }

// bringBrush(14);
// printChai();
// addTwo(1, 1);
// console.log(addTwo(2, 2));

// -----------------------        ------------------------------------------------        -------------------------------------------------------

// function greet(name) {           //name -> parameater
//   return `Hello, ${name}!`;
// }

// console.log(greet("Abhishek"));    // Abhishek -> Abhishek

// function describePerson(name, age, city, hobby) {
//   console.log(`${name} is ${age} years old, lives in ${city}, and loves ${hobby}.`);
// }

// describePerson("Abhishek", 20, "Prayagraj", "coding");

function add(a, b, c){
    // console.log(a+b+c)
    // console.log(arguments);
}
add(3, 5,9,8)

// =============================================== arguments ===============================================================
function demo(a, b) {
  console.log(arguments);
  console.log(arguments[0]); // first argument
  console.log(arguments[1]); // second argument
  console.log(arguments[2]); // third argument
}
demo(10, 20, 30);

// ye array ki tarah hota hai but pur array nahi hota hai 
// Ye function ke andar automatically available hota hai.
// Isme saare arguments store hote hain jo tum function call me dete ho (chahe parameters define kiye ho ya nahi).
// Ye array jaisa dikhta hai, lekin array nahi hai → isme length property hoti hai aur index (0,1,2...) keys hoti hain.


function test() {
  console.log(Array.isArray(arguments)); // false
}
test(1, 2, 3);

function sumAll(...nums) {
  console.log(nums); // [1,2,3,4]
  return nums.reduce((acc, val) => acc + val, 0);
}
console.log(sumAll(1,2,3,4)); // 10

// ... hamesha last parameter hona chahiye.

// ...args ek real array hota hai (reduce, map, filter sab chalega).



// ================================================ return wala mamala ======================================================

// return ka kaam hota hai value ko function ke scope se bahar bhejna.

// function add(a, b) {
//   console.log(a + b);
// }

// let result = add(2, 3); 
// console.log("Result:", result);
