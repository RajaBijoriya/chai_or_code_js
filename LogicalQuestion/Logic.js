// 1. Create a function that returns the last element of an array.

// let arr = [1,2,3,4,5,6,7]
// function Last(arr) {
//   return arr[arr.length - 1];   
// }
// console.log(Last(arr));

// 2. Find the combination of two arrays. 

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// let arr3 = [];
// for(let i=0; i<arr1.length; i++){
//     arr3.push(arr1[i])
// } 
// for(let i=0; i<arr2.length; i++){
//     arr3.push(arr2[i])
// } 

// console.log(arr3)



//3
// console.log(Math.floor(Math.random() * 18) + 1  )

//4
// Create a function that takes an array containing both numbers and strings, and returns a
// new array containing only the string values.

// let arr = [1,"two", 3, "four", 5, "six"];

// let newArr = [];
// let s = "str"
// for(let i=0; i<arr.length; i++){

//     if(typeof(arr[i]) === typeof(s)){
//         newArr.push(arr[i]);
//     }
// }

// console.log(newArr)


// 5. Find the maximum number in an array.

// let arr = [1,2,3,4,5,6];
// let maxNum = 0;
// arr.forEach((val) => {
//     if(val>maxNum){
//     maxNum = val;
//     }
// })
// console.log(maxNum)


// 6. Write a function that returns the length of a given object (number of keys). ***

// let obj = {
//     name : "king",
//     age: 20,
//     gender: "male",
//     job: false
// }

// function objLen(obj){
//    let  val =  Object.keys(obj).length
//    return val;

// }

// console.log(objLen(obj))


// 7. In an array of objects filter out those objects which have gender's value male.

// let arr = [
//     {
//         name: 'a',
//         age: 20,
//         gender: "male"
//     },
//     {
//         name: 'b',
//         age: 20,
//         gender: "female"
//     },
//     {
//         name: 'ac',
//         age: 20,
//         gender: "female"
//     },
//     {
//         name: 'd',
//         age: 20,
//         gender: "male"
//     },
//     {
//         name: 'e',
//         age: 20,
//         gender: "male"
//     },
// ]

// // let findGen = arr.filter((val) => val.gender === 'male')
// // console.log(findGen)
// let newArr = [];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i].gender === "male"){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)

// 8. Given an array of strings, return a new array where all strings are in uppercase.

// let str = ["king", "Raja", "Neha", "Pooja", "On"];

// let str2 = str.map((val) => val.toUpperCase())
// console.log(str2)


// 9. Check if an object is empty (has no keys). ***

// let obj = {

// }

// function checkObj(obj){
//    for(let i=0; i<obj.length; i++){
    
//    }
// }


// 10. Create an array of numbers and double each value using .map().

// let arr = [1,2,3,4,5,6,7,8];
// let arr2 = arr.map((val) => val*2)
// console.log(arr2)


// 11. Convert an array of strings into a single comma-separated string.

// let arr = [1,"two", 3, "four", 5]
// let str = "";
// for(let i = 0; i<arr.length; i++){
//     str = str + arr[i] + ",";
// }
// console.log(str)


// 12. Write a function to flatten a nested array (one level deep).(e.g., [1, [2, 3], 4] → [1, 2, 3, 4])

// let arr = [1,[2,[4], [5]],6,[7,[8,[9,[10,[11]]]]]];
// let arr1 = [];

// function func(arr) {
//   for(let i=0; i<arr.length; i++){
//       if (Array.isArray(arr[i])) {
//         func(arr[i]);
//       } else {
//         arr1.push(arr[i]);
//       }
//   }
// }
// func(arr)
// console.log(arr1)

// 13. Write a function that checks if all elements in an array are numbers.

// let arr = [1,2,3,4,5];
// let a = 3;
// let isNum = true;
// function isCheck(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if(typeof(arr[i]) === typeof(a)) {
//         continue;
//       } else {
//         isNum = false;
//         break;
//       }
//     }
// }
// isCheck(arr);
// console.log(isNum)


// 14. Build a simple isPrime() function to check if a number is prime.

// const isPrime = (num) => {
//     let i = 0
//     for(i = 2; i<num; i++){
//         if(num % i == 0){
//             break;
//         }
//     }
//     if(i==num){
//         return "Prime";
//     }
//     else{
//         return "Not Prime";
//     }
// }
// console.log(isPrime(7))


// 15. Create a function that removes duplicate values from an array.
// let arr = [1,1,2,2,3,3,3,4,4,4,4,5,5,5,5];
// let arr1 = [];
// let obj = {};
// for(let i=0; i<arr.length; i++){
//     if(obj[arr[i]] === 1) continue;
//     else{
//         arr1.push(arr[i]);
//         obj[arr[i]] = 1;
//     }
// }
// console.log(arr1)

// 16. What’s the difference between parseInt and Number()?

// parseInt()

// Purpose: Parses a string and extracts an integer.

// Behavior:

// Reads from left to right until it finds a non-numeric character.

// Ignores trailing characters after the number.

// Can take a second argument (radix) to specify base (e.g., binary, octal, hex).

// Returns: An integer or NaN if it can’t parse.

// Example:

// console.log(parseInt("42"));       // 42
// console.log(parseInt("42px"));     // 42 (stops at "px")
// console.log(parseInt("3.99"));     // 3 (decimal part is removed)
// console.log(parseInt("abc"));      // NaN
// console.log(parseInt("1010", 2));  // 10 (binary to decimal)

// Number()

// Purpose: Converts a value to a number (integer or float).

// Behavior:

// Tries to convert the entire string/variable into a number.

// If any invalid character is present, it returns NaN.

// Returns: An integer or float, depending on input.

// Example:

// console.log(Number("42"));     // 42
// console.log(Number("42px"));   // NaN (entire string invalid)
// console.log(Number("3.99"));   // 3.99 (keeps decimals)
// console.log(Number(""));       // 0 (empty string becomes 0)
// console.log(Number(true));     // 1
// console.log(Number(false));    // 0

// ✅ Main Differences
// Feature	parseInt()	Number()
// Decimals	Removes decimals → gives integer	Keeps decimals (float allowed)
// Extra characters	Ignores them after a valid number	Returns NaN if extra characters
// Empty string	NaN	0
// Radix	Can specify base (binary, hex, etc.)	Always base 10
// Output type	Always integer	Integer or float

// 👉 Example to compare:

// console.log(parseInt("12.34")); // 12
// console.log(Number("12.34"));   // 12.34


// Would you like me to also show real-world cases where you should prefer parseInt() vs Number()?



// 17. Why does 0.1 + 0.2 !== 0.3 in JavaScript?
// console.log(0.1 + 0.2 !== 0.3) true











// 18. Explain floating-point precision issues in JavaScript.
// 🔹 Floating-Point Precision Issues in JavaScript

// JavaScript uses the IEEE 754 double-precision floating-point format (64-bit) to represent numbers.

// This format cannot precisely represent all decimal numbers.

// As a result, calculations with decimals can give unexpected results.

// ⚠️ Example:
// console.log(0.1 + 0.2);  // 0.30000000000000004
// console.log(0.1 + 0.7);  // 0.7999999999999999
// console.log(0.3 / 0.1);  // 2.9999999999999996


// 👉 We expect 0.1 + 0.2 === 0.3, but it’s slightly off.
// This happens because 0.1 and 0.2 cannot be represented exactly in binary floating-point.

// 🔹 Why does this happen?

// Computers store numbers in binary (base-2).

// Some decimals like 0.1, 0.2, and 0.3 don’t have an exact binary representation, just like 1/3 doesn’t have an exact decimal representation (0.333...).

// So, the result is very close but not exact, leading to tiny rounding errors.

// 🔹 How to Fix / Workaround

// Rounding using toFixed()

// let sum = 0.1 + 0.2;
// console.log(sum.toFixed(2)); // "0.30" (string)
// console.log(+sum.toFixed(2)); // 0.3 (number)


// Using Math.round()

// let sum = 0.1 + 0.2;
// console.log(Math.round(sum * 100) / 100); // 0.3


// Use Number.EPSILON for comparison

// function isEqual(a, b) {
//   return Math.abs(a - b) < Number.EPSILON;
// }

// console.log(isEqual(0.1 + 0.2, 0.3)); // true


// Use libraries for financial/math precision
// (e.g., Big.js, decimal.js, bignumber.js).

// ✅ Interview-Style Summary

// JavaScript numbers are 64-bit floating point (IEEE 754).

// Some decimals cannot be represented exactly in binary.

// This causes precision issues (e.g., 0.1 + 0.2 !== 0.3).

// Solutions: rounding (toFixed, Math.round), tolerance checks (Number.EPSILON), or libraries for high precision.

// Would you like me to also explain BigInt vs Number and how BigInt avoids precision issues with large integers (but not decimals)?

















// 19. How would you handle high-precision decimal math in JS?

// 20. What is the difference between slice and splice?

// let arr = [1,2,3,4,5];
// console.log(arr.slice(1,4), arr);

// console.log(arr.splice(1, 4), arr)
// [(2, 3, 4)][(1, 2, 3, 4, 5)]
// [(2, 3, 4, 5)][1];








// 21. Create a function that reverse each word of a given sentence. E.g., Mai hun
// manas → sanam nuh iam

// let str = "Mai hun manas";

// let str1 = "";
// for(let i=str.length -1; i>=0; i--){

//     str1 = str1 + str[i];
// }
// console.log(str1)








// 22. In an array of numbers and strings, only add those numbers which are not strings.




// let arr = [1, "two", 3, "four", 5, "six"];
// let a = 1;
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     if(typeof(arr[i]) === typeof(a)){
//         sum = sum+arr[i];
//     }
// }
// console.log(sum)













// 23. How would you check if a number is an integer?



















// 24. Write a JavaScript function that reverse a number.









// 🔎 What’s happening

// num = num / 10 divides by 10 but keeps decimals (floating-point division).

// Example:

// 12345 / 10 = 1234.5

// 1234.5 / 10 = 123.45

// 123.45 / 10 = 12.345

// … this never reaches 0 exactly, because it keeps shrinking but remains a positive decimal.

// So while(num) never ends → infinite loop.

// When JavaScript loops infinitely, the output eventually overflows and may look like Infinity.

// ✅ Fix

// You should use integer division so that digits drop off properly. In JavaScript, use Math.floor():

// let num = 12345;
// let val = 0;

// while (num) {
//     let rem = num % 10;
//     val = val * 10 + rem;
//     num = Math.floor(num / 10); // drop decimal part
// }
// console.log(val); // 54321

// 🔹 Output:
// 54321


// 👉 This way, you’re reversing the number correctly.

// let num = 12345;
// let val = 0;

// while(num){
//     let rem = num % 10;
//     val = val * 10 + rem;
//     num = Math.floor(num / 10)
// }
// console.log(val)



















// 25. Write a javascript function that returns a passed string with letters in alphabetical order. ***




// let str = 'dcba' // abcd
// function sortString(str) {
//     let arr = str.split('');   // convert string to array

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // swap characters
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }

//     return arr.join('');  // join back to string
// }

// // Example
// let str = 'dcba';
// console.log(sortString(str)); // abcd



// for(let )







// 26. Write a Javascript function that accepts a string as a parameter and conversts the first
// letter of each word of the string in upper case.


// let str = "raja bijoriya";
// let str2 = ""
// const convertFirstLetter = (str) => {
//     for(let i=0; i<str.length; i++){
//         if(i === 0){
//             str2 = str2 + str[i].toUpperCase();
//         }
//         else{
//             str2 = str2 + str[i]
//         }

//     }
// } 
// convertFirstLetter(str);
// console.log(str2)


// function capitalizeWords(str) {
//   return str
//     .split(" ")
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(" ");
// }

// console.log(capitalizeWords("raja bijoriya and i love to code")); // "Raja Bijoriya"















// 27. Write a javascript function to get the first element of an array. Passing a parameter 'n' will
// return the first 'n' elements of the array.



// let arr = [1,2,3,4,5,6,7,8,9,10];
// let n = 8;
// let arr1 = [];
// const First_N_number = (arr, n) => {
//     for(let i=0; i<n; i++){
//         arr1.push(arr[i]);
//     }
// }

// First_N_number(arr, n);
// console.log(arr1)















// 28. Write a javascript function to get the number of occurrences of each letter in specified
// string.





// let str = "aaabbbbcccccdddd";
// let str2 = ""

// for(let i=0; i<str.length; i++){
//     let count = 0;
    
//      // for skip if char is already present
//      if (str2.includes(str[i])) continue;


//     for(let j = 0; j<str.length; j++){
//          if(str[i] === str[j]) count++;
//     }
//     str2 = str2 + str[i] + count + " ";
// }
// console.log(str2)







// 29. write a javascript program to find the most frequent item of an array.




// let arr = [1,2,3,4,4,4,5,5,6,6,3,3,3,3];
// let val = 0;
// let num = 0;

// for(let i = 0; i<arr.length; i++){
//      let count  = 0;
//     for(let j = 0; j<arr.length; j++){
//        if(arr[i] == arr[j]) count++;
//     }
//     if(val < count) {
//         val = count;
//         num = arr[i];
//     }
// }
// console.log(`${num} is present most frequents times that is ${val}`)














// 30. write a javascript program to shuffle an array.







// let arr = [3, 4, 5, 6, 7, 8];
// let arr1 = []
// let n = arr.length;

// while(n) {
//    arr1.push(arr[Math.floor(Math.random() * n)]);
//    n--;
// }

// console.log(arr1)













// 31. How can you update the DOM based on user input in real-time (e.g., live preview of a
// form)?















// 32. How would you handle form validation in real time and show error messages
// dynamically?













// 33. How do you find the closest ancestor element that matches a selector?













// 34. How would you toggle a class on an element when another element is clicked (e.g.,
// show/hide sidebar)?








// 35. Create a Show/Hide Password Toggle







// 36. Create a Sticky Header on Scroll. The header becomes fixed to the top after scrolling
// down. (Key concepts: scroll event, window.scrollY, classList.add/remove)









// 37. What is a pure function, and why is it useful in UI rendering?

// 38. How would you use .map() to transform a list of products into a list of HTML elements?

// 39. How do you use .reduce() to calculate the total price in a shopping cart?

// 40. Explain immutability and how you would update an object in an array without mutating the original.

// 41. How would you compose multiple functions to transform data step-by-step (e.g., sanitize → trim →
// capitalize)? Scenario: You’re preparing user input before storing it. (Expected knowledge: Function
// composition, chaining, pipe or compose logic.)

// 42. What is the difference between forEach and map, and when is it wrong to use map?

// 43. How do you implement your own version of .map() function on arrays?

// 45. Validate that a user's selected date range is no longer than 30 days.

// 46. Calculate difference between two dates in the format of “_ years _ months _days _ hours _ minutes _ sec”.

// 47. Add or subtract n days from a given date. (E.g., Add 7 days to "2025-05-01“)

// 48. Calculate the user's age from their date of birth.

// 49. Write a formatDate(dateStr) function that returns a user-friendly format like Jan 1, 2025. Why is it better to
// centralize this logic in a utility?

// 50. What are the different options and parameters available in toLocaleString



// second last number in a array 


// let arr = [1,2,3,4,5,6];
// let firstMax = 0;
// let secondMax = 0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i] > firstMax){
//         firstMax = arr[i];
//     }
//      if (arr[i] > secondMax && arr[i] < firstMax)
//     {
//      secondMax = arr[i]

//     }
// }

// console.log(secondMax, firstMax)

//  let arr = [1, 2, 3, 4, 5, 6];
//  // [6, 5, 4, 3, 2, 1]

//  arr.sort((a,b) => b-a)
//  console.log(arr[1])




// 4. Infinite Currying

// Implement a function that supports infinite currying.

// add(1)(2)(3)(4)() // Output: 10

// const add = (a) => {
//    return (b) => {
//        return (c) => {
//           return (d) => {
//             return a+b+c+d;
//           }
//        }
//    }
// }
// console.log(add(1)(2)(3)(4));



// 1. Deep Clone an Object

// Write a function to deep clone an object without using structuredClone() or JSON.parse(JSON.stringify()).
// ChatGPT said:

// Great pick 👌 Deep cloning is a classic JavaScript interview challenge, because shallow cloning ({...obj} or Object.assign()) doesn’t copy nested objects/arrays properly.

// Here’s how you can implement a deep clone function without using structuredClone() or JSON.stringify().

// ✅ Solution: Recursive Deep Clone
// function deepClone(obj) {
//   // if obj is null or not an object, return it (base case)
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }

//   // Handle Date
//   if (obj instanceof Date) {
//     return new Date(obj);
//   }

//   // Handle Array
//   if (Array.isArray(obj)) {
//     return obj.map(item => deepClone(item));
//   }

//   // Handle Object
//   const clonedObj = {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       clonedObj[key] = deepClone(obj[key]); // recursive call
//     }
//   }
//   return clonedObj;
// }

// 🔎 Example:
// const original = {
//   name: "Raja",
//   age: 22,
//   skills: ["React", "Node", "AI"],
//   address: { city: "Delhi", pin: 110001 },
//   joined: new Date("2024-01-01")
// };

// const copy = deepClone(original);

// copy.name = "Bijoriya";
// copy.skills.push("JavaScript");
// copy.address.city = "Mumbai";

// console.log("Original:", original);
// console.log("Copy:", copy);


// 👉 Output shows that changes in copy don’t affect original, proving it’s a true deep clone.

// 9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 

// const Fibbo = (num) => {

//     if(num == 1) return 0;
//     if(num == 2) return 1;

//     let a = 0;
//     let b = 1;
//     console.log(a)
//     console.log(b)
//     let c = 0;
//     for(let i = 2; i<=num; i++){
//         c = a+b;
//         console.log(c);
//         a = b;
//         b = c;
//     }
// }

// Fibbo(5);



// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// let nums = [4,2,3,4];


// var triangleNumber = function(nums) {
    
//     let nums1 = nums.sort((a,b) => a-b);
//     return nums1;
// };
// console.log(triangleNumber(nums))



// js interview questions 

// function outer(outerVar){
//     return function inner(innerVal){
//         console.log(`outer: ${outerVar}, inner: ${innerVal}`)
//     }
// }

// const clousrEx = outer("hello")
// clousrEx("world")




// 

//2.5 Years Experienced Best JavaScript Interview
// function name() {
  
// }
// console.log(typeof(name)) // function
// class hello {
  
// }
// console.log(typeof(hello)) // function



// create a promise without using new Promise()

// const promise = async () => {
//     return "hello" 
// }

// const res = promise(); 
// console.log(res)


// we reject this promise 
// const promise = async () => {
//     throw new Error;
// }

// const res = promise()
// console.log(res)



// Find the First Non-Repeating Character
// Input: "aabbcddde" → Output: "c"

// let val = "aabbcddde";
// let str = ""
// for(let i=0; i<val.length; i++){
//   let count = 0;
//   for(let j=0; j<val.length; j++){
//     if(val[i] == val[j]) {
//       count++;
//     }
//   }
//   if(count==1){
//     str = val[i];
//   }
// }
// console.log(str);

// let arr = [4, 1, 1, 2];
// arr.sort((a,b) => a-b);
// // console.log(arr)
// let maxVal = 0; 
// for(let i=0; i<arr.length; i++){
//   if(arr[i] > maxVal) maxVal = arr[i];
// }

// // console.log(maxVal);

// let missValue;
// for(let i=0; i<arr.length; i++){
//   for(let j=0; j<=maxVal; j++){
//     if(arr[i] === j) break;
//     else{
//       missValue = j;
//     }
//   }
// }

// console.log(missValue);





// let val = "aabbccdeffg";
// let str = ""
// for(let i=0; i<val.length; i++){
//   let count = 0;
//   for(let j=0; j<val.length; j++){
//     if(val[i] == val[j]) {
//       count++;
//     }
//   }
//   if(count==1){
//     str += val[i] + ",";
    
//   }
// }

// console.log(str);