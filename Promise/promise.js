// const promise1 = new Promise((resolve, reject) => {
//     // Do an async task
//     // DB calls, crptograpfgh 
//     setTimeout(() => {
//         console.log("Async Complete")
//         resolve()
//     }, 1000)
// });


// // then() connect hota he resolve() se 
// // catch() connect hota he reject() se

// promise1.then(() => {
//     console.log("Promise Consumed")
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async Task 2");
//         resolve();
//     }, 1000);
// }).then(() => {
//     console.log("Async 2 is resolved")
// })

// // hum jo bhi data resolve me pass krege voh humko .then() me mell jata he 

// const promise3 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res({username: "raja", email: 'bijorya'})
//     }, 1000)
// })

// promise3.then((user) => {
//    console.log(user)
// })


// // 
// const promise4 = new Promise((res, rej) => {
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             res({username: 'king', pass: '12234'})
//         }else{
//             rej('Error is there')
//         }
//     }, 1000)
// })
// // hum agr wk .then() se value ko return kr rhi toh voh dusre .then() me recive hogi

//  promise4.then((user) => {
//    console.log(user)
//    return user.username
// }).then((username) => {
//     console.log(username);
// }).catch((err) => {
//    console.log(err)
// }).finally(() => {
//     console.log("Finally res or rej")
// })


// const promise5 = new Promise((res, rej) => {
//     setTimeout(() => {
//        let error = true;
//        if(!error) {
//         res({username: 'js', pass: "1234"})
//        }
//        else{
//         rej("error aa gya")
//        }
//     }, 1000)
// });
// // hum async await me direct error handle nhi kr skte esme humko try or catch use krna pdta he 

// const  consumePromise = async () => {
//     try {
//         const response = await promise5;
//         console.log(response);
        
//     } catch (error) {
//         console.log(error)
//     }
// } 
// consumePromise()

// const getAllUser =  async () => {
//     try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         // bena await ke ye kaam nhi kregea kykoi ye response bhi time 
//         // leta he esliye esko await me rkhana hoga
//         const data = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// getAllUser()


fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((err) => console.log(err));


// esme hamara last fetch jo he voh sbse pahle run hoga baki sare functions bd me run honge
