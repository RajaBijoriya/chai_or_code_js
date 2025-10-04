// let obj1 = {name: "raja"};
// let obj2 = obj1;
// obj2.name = "bijoriya"
// console.log(obj1.name) // raja change hokr bijoriya ho jyga

// let obj1 = {
//     name: "king",
//     value: "22"
// }

// // for deleting the obj 
// // delete object ka name . property ka name;
// delete obj1.value;
// console.log(obj1)

// 3
// const obj1 = {
//     name : "raja"
// }
// const obj2 = {
//     name: "raja"
// }
// console.log(obj1 === obj2) // false dega kyoki ye dono ke reference alg alg he


// 4
// dynamic property names
// const key = "score";

// const obj1 = {
//     name: "Raja",
//     [key]: 55
// }
// console.log(obj1.score) // 55 dega
// const obj1 = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: "s"
// }
// const result = Object.keys(obj1).reduce((sum, key) => sum+obj1[key], 0);
// console.log(result)


// 5 nested object destructuring

// const user = {
//     name: "raja",
//     address: {
//         city: "indore",
//         pincode: 4343
//     }
// }
// const { address: {city, pincode}} = user;
// console.log(pincode)


// 6
// const obj1 = {
//     a: 10,
//     b: 20,
// }
// const obj2 = {
//     ...obj1,
//     c: 30,
//     d: 40
// }
// // console.log(obj2)
// console.log({...obj1, ...obj2})

// 7
// const marks = {
//      Raja: 55,
//      Neha: 50,
//      Amit: 90,
     
// }
// const obj = Object.keys(marks).filter((val) => marks[val] >=80)
// console.log(obj)

// 8
// const arr = [1, 2, 2, 3, 5, 2, 4, 3, 3, 3];
// const count = arr.reduce((acc, val) =>  {
//     acc[val] = (acc[val] || 0) + 1;
//     return acc;

// }   ,{})

// console.log(count)

// same for loop se kra he

// const obj = {};
// for(let i = 0; i<arr.length; i++){
//     const val = arr[i];
//     if(obj[val]){
//         obj[val]++;
//     }
//     else{
//         obj[val] = 1;
//     }
// }
// console.log(obj)


// find the duplicate keys in an object
// const obj = {
//     name: 'king',
//     age: 34,
//     city: "indore",
//     name: 'raja',
// }

// // const value = Object.keys(obj).filter((val) => {
// //     if(obj[val] === "name"){

// //     }
// // })
// console.log(obj) // last me jo keys define kre he vahi rhege pahle define vali delete ho jygi 



// // count the frequency of elements using an object
// const arr = ["a", "b", "a", "c", "b", "c", "c", "d"];

// // const count = Object.keys(arr).reduce((val, num) => {
// //     val[num] = (val[num] || "a") + 1;
// //     return val;
// // }, {})
// // console.log(count)

// const obj= {};
// for(let i=0; i<arr.length; i++){
//     const val = arr[i];
//     if(obj[val]){
//         obj[val]++
//     }
//     else{
//         obj[val] = 1;
//     }
// }
// console.log(obj)


// convert an object to an Array of key-value pairs
// const User = {
//     name: "Raja",
//     age: 22,
//     city: "Indore"
// }
// const arr = [];

// for(let val in User){
//     const arr1 = [];
//     arr1.push(val);
//     arr1.push(User[val]);
//     arr.push(arr1);
// }
// console.log(arr)



// invert keys and values

// const obj = {a: 1, b: 2, c: 3};

// const obj2 = {};
// for(let i in obj){
//     obj2[obj[i]] = i;
// }
// console.log(obj2)


// const obj1 = {
//     a: 1,
//     b: 2,
// }
// const obj2 = {
//     b: 3,
//     c: 4,
// }

// const obj3 = {}
// for(let i in obj1){
//     obj3[i] = obj1[i];
// }

// for(let i in obj2){
//     if(obj3[i]){
//        obj3[i] = [].concat(obj3[i], obj2[i])
//     }
//     else{
//         obj3[i] = obj2[i]; 
//     }
// }
// console.log(obj3)

// const obj = {
//     name: "raja",
//     address : {
//         city: "Indore",
//         pincode: 452020,
//         location: {
//             lat: 12.5,
//             state: "mp"
//         }
//     }
// }


// const obj1 = {};

// const isObject = (obj, KEY = "") =>  {
//    for(let val in obj){
//       const hel = obj[val];
//        if (typeof(hel) == typeof(obj1) && hel !== null){
//         isObject(obj[val], hel);
//        }
//        else{
//         obj1[val] = obj[val];
//        }
//    }
// }

// isObject(obj);
// console.log(obj1)
// const isObject = (obj) =>  {
//    for(let val in obj){
//       const hel = obj[val];
//        if (typeof(hel) == typeof(obj1)){
//         isObject(obj[val]);
//        }
//        else{
//         obj1[val] = obj[val];
//        }
//    }
// }

// isObject(obj);
// console.log(obj1)



// remove keys with falsy values
const obj = {
    name: "raja",
    age: 0,
    city: "",
    isActive: false,
    country: "India"
}

// const obj1 = Object.keys(obj).filter((val) => obj[val] && 1)
// for(let i in obj){
//     if(obj[i] !== "false"){
//         obj1[i] = obj[i]
//     }
    
// }
// console.log(obj1)
// console.log(Object.entries(obj))

// const filteredObj = Object.fromEntries(
//     Object.entries(obj).filter(([key, value]) => value)
// );

// console.log(filteredObj);

// console.log(filteredObj)


// const obj1 = {a: 1, b: {x: 2, y: 3}};
// const obj2 = {a: 1, b: {x: 2, y: 3}};

// let value = true;

// const deepObjCheck = ()