// singleton 
// letrals se hamera single ton nhi banta he 
// contraction se single ton banta he 

// const mysum = Symbol("mykey")
// const jsUser = {
//     name: "Hitesh",
//     "full Name": "Hitesh ji",
//     age : 19,
//     // pass : 'key'
//     [mysum] : "mykey",

// }
// // access the value
// // console.log(jsUser.name)
// // console.log(jsUser["full Name"])
// // console.log(typeof jsUser["pass"])
// // console.log(jsUser["key"])

// // change the value 
// jsUser.name = "king";
// Object.freeze(jsUser);
// jsUser.age = 20;

// console.log(jsUser.name);
// console.log(jsUser.age)
// console.log(typeof jsUser["mysum"])


// single ton using this 
const tinder = new Object();

tinder.id = "212rer";
tinder.name = "king";
tinder.isLogin = true
// console.log(tinder)

const regular ={
    email: "king@gamil",
    fullName: {
        userFullname: {
            firstName : "king",
            lastName: "ji",
        }
    }
}

// console.log(regular.fullName.userFullname.firstName)
const obj1 = {1: "a", 2: "n"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = {obj1, obj2};
// console.log(obj3) // it not giving in one object so how to fix this issue
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)


// we also use spread
// const obj3 = {...obj1, ...obj2};
// console.log(obj3)

// console.log(Object.keys(tinder)) // gives arrays og keys
// console.log(Object.values(tinder)) // gives array of keys and values
// console.log(Object.entries(tinder)) // give key and value but in 2d array 

// // when we have to check if we have the property or not 
// console.log(tinder.hasOwnProperty('id'))

// destructing
const course = {
    courseName : "js in hindi",
    price: "999",
    course: "king"
}

// accesss in simple way
course.price
// is destructuig way 
const {price}  = course
console.log(price)
// we also change the name also 
const {price : rs}  = course
console.log(rs)