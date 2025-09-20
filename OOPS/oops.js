// const user = { // object literals 
//     username : 'hitesh',
//     login: 8,
//     isSignIn : true,
//     getUsers : function() {
//         // this mainly current context mtlb object ke pass kudh ke varaibale he 
//         // function he kuch bhi he object ka voh sb hum (this.) krke use kr skte hai

//        console.log(`${this.username}`)
//     }

// }
// console.log(user.getUsers())


function User(username, age, gender){
    this.username = username
    this.age = age
    this.gender = gender

    return this
    // agr hum return likhe ya nhi ye implecitly return hota he hai
}

// const firstUser = User('raja', 20, 'male')
// const twoUser =  User('king', 20, 'male')

// jb hum User() krkr call kr rhi toh twouser ne firstuser ke values 
// ko overwrite kr deya he pr hame esa nhi chahye 
// yaha pr hum use krte hai (new) key words ak

const firstUser = new User("raja", 20, "male");
const twoUser = new User("king", 20, "male");

console.log(firstUser)
console.log(twoUser)

// new keyword -> 
// 1
// jb bhi hum new keyword use krte hai sbse pahle new intence 
// bn jata hai ya naya object create ho jata he 

// 2
// ab contructor function call hota he new keyword ke karn 

// 3
// jo bhi hum argument dete hai voh sb new function ya object me inject ho jate hai 

// 4 
// hamko function ya bject mell jata he


