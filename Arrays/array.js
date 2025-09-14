// arrays 
const myArr = [0, 1, 2, 3, 4, 5];
//they are not fixed in size 
// 0 based indexing 
// shalow copy --> pointing the same refreance point 
// deep copy --> property same value ko repefer nhi krti 

// const myHeros = ['radha', 'syam', 'kanha', 'love'];
// const arr1 = new Array(1, 2, 3, 4);
// console.log(arr1[1]);


// // array methods

// myArr.push(6); // add last 
// myArr.pop();  // remove last
// myArr.unshift(8); // add first 
// myArr.shift(); // remove from first


// console.log(myArr.includes(100));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join(); // convert in string 
// console.log(myArr);
// console.log(newArr); 

// slice and splice 
// console.log('A', myArr);
// const myn1 = myArr.slice(1, 3); // it give a array but not change in orignal array
// console.log(myn1);
// console.log(myArr)
// const myn2 = myArr.splice(1, 3); // it also give new array and changes in the orignal array 

// console.log(myn2);
// console.log(myArr)


// const marvel = ['thoe', 'iron', 'spider'];
// const dc = ['super', 'flash', 'batman'];
// // marvel.push(dc);
// // console.log(marvel); // dc is a single element 
// // concat
// // const allH = marvel.concat(dc);
// // console.log(allH)

// // spread 
// const allArray = [...marvel, ...dc];
// console.log(allArray)

// const ano = [1,2,3,[4,5,6], 7, [6,[2,3,5,[4,3,[4,5,[2,2]]]]], [4,6]]
// const realArr = ano.flat(10);
// console.log(realArr)

// jb data kahi se aa rha ho or hamko pta krna ho ke data array me ho ya na ho

// console.log(Array.isArray('raja'))

// // hamko array bana ho kese chez ko kse krege
// console.log(Array.from("Hitesh"));

// console.log(Array.from({name: 'king'}))

let a = 1;
let b = 2;
let c = 3;
console.log(Array.of(a, b, c));