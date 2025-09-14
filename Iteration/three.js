// for of loop 
// ye loop arr, object, string kese pr bhi lg skta he 
// const arr = [1,2,3,4,5];
// for(const num of arr) {
//     console.log(num)
// }



// const greetings = "Hello world!";

// for(const greet of greetings){
//     console.log(greet)
// }

// // Maps they like same as array 
// // it only store unique and single values 

// const map = new Map();
// map.set('In', 'India');
// map.set('Usa', 'USA');
// map.set('Fr', 'France');
// map.set('In', 'India');

// console.log(map)

// for(const key of map){ // espe key and values dono sath me print krta he 
//     console.log(key)
// }

// for(const [key] of map) {
//     console.log(key) // only key he print hoti he 
// }
// for(const [value] of map){
//     console.log(value)
// }

// object pr for-of loop kaam nhi krta 
// object pr for-in loop he kaam krta he 

// const myObject = {
//     js: 'Javascipt',
//     cpp: 'C++',
//     c : 'c',
//     swift: 'swift by apple'
// }

// for(const key in myObject){
//     console.log(key) // for key
// }
// for(const key in myObject){
//     console.log(myObject[key]) // for values 
// }

// for-each loop 
// const coding = ['js', 'cpp', 'py', 'java'];
// // coding.forEach(function (item) {
// //     console.log(item)
// // })

// // coding.forEach((a) => console.log(a) )


// function printMe(item) {
//     console.log(item)
// }

// coding.forEach(printMe);
// // has three values items, index, and that array 
// coding.forEach((item, index, arr) => console.log(item, index, arr) );


// for-each kabhi balues ko return nhi krta ye buss values ko print he krta he 


// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFile: "js"
//     },
//     {
//         languageName: "c++",
//         languageFile: "cpp"
//     },
//     {
//         languageName: "python",
//         languageFile: "py"
//     },
//     {
//         languageName: "ruby",
//         languageFile: "rb"
//     },
// ]
// myCoding.forEach((item) => {
//     console.log(item.languageName)
// })

// filter 
// const myNumbs = [1,2,3,4,5,6,7,8,9,10];

// const nums = myNumbs.filter((num) => {
//     return num > 4
// } )
// console.log(nums)
// const newNums = [];

// myNumbs.forEach((item) => {
//     if(item > 4) {
//         newNums.push(item)
//     }
// })
// console.log(newNums)

// const users = [
//   { id: 1, name: "Alice", age: 25, isActive: true, score: 85 },
//   { id: 2, name: "Bob", age: 30, isActive: false, score: 90 },
//   { id: 3, name: "Charlie", age: 28, isActive: true, score: 70 },
//   { id: 4, name: "David", age: 22, isActive: false, score: 60 },
// ];

// // const userData = users.filter((us) =>  {
// //     return us.isActive === true;
// // })
// // console.log(userData)

// const userData = users.filter((a) => a.age > 25 && a.score == 90);
// console.log(userData)





// map 
const myNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNumbs.map((num) => num+10)
// console.log(newNum)

// const newNum = myNumbs.map((num) => num*10)
//                        .map((num) => num+1).filter((num) => num >= 40)

// console.log(newNum)


// reduce()   

// const initialValue = 0;
// const sumWithInitial = myNumbs.reduce(
//     (acc, curr) => acc + curr, initialValue
// );
// console.log(sumWithInitial)
const users = [
  { id: 1, name: "Alice", age: 25, isActive: true, score: 85 },
  { id: 2, name: "Bob", age: 30, isActive: false, score: 90 },
  { id: 3, name: "Charlie", age: 28, isActive: true, score: 70 },
  { id: 4, name: "David", age: 22, isActive: false, score: 60 },
];

const totalScore = users.reduce((acc, curr) => acc+curr.score,0)
console.log(totalScore)