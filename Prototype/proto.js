// js ka ek protypeyal vahivaour hota he ke jb tk usko null value nhi mell
// jate voh uske bare me info nekalti he rhte hai 
// ese ke bjh se 
// new, this, function inhertance kaam krta he s 
// classes or arow function me this ka access ese ke karn nhi hota he 

// 1
// let arr = [1,2,1,2,3,3,4,5,5];
// let obj = {}
// let arr2 = []
// for(let i=0; i<arr.length; i++){
//     if(obj[arr[i]] === 1) continue;
//     else{
//         arr2.push(arr[i]);
//         obj[arr[i]] = 1;
//     }
// }
// console.log(arr2)

// 2

// let str = 'kingrb';

// let str2 = ""

// for(let i=str.length-1; i>=0; i--){
//     str2 = str2+str[i];
// }
// console.log(str)
// console.log(str2)

// let arr = [1,2,[3,4,[5,6]]];
// let arr2 = []
// function flateArr(arr) {
//    for(let i=0; i< arr.length; i++){
//      if (Array.isArray(arr[i])) {
//        flateArr(arr[i]);
//      } else {
//        arr2.push(arr[i]);
//      }
//    }
// }
// flateArr(arr)
// console.log(arr2)

let str = ""