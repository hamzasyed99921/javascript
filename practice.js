// var vs Let vs Const

// var myName = "hamza"
// var myName = "syed"
// console.log(myName);

// let myAge = 24;
// let myAge = 20;
// console.log(myAge);

// const lastName = "hamza"
// lastName = "syed"
// console.log(lastName);

// Scope of Var

// var myName = "hamza"

// function newFunc(){
//     var myAge = 23;
// }
// newFunc()
// console.log(myName);


// var times = 4;

// if (times > 3) {
//      let hello = "say Hello instead";
//      console.log(hello);
//  }
// console.log(hello)

// let myName = "hamza"

// function newFunc(){
//     let myAge = 23;
// }
// newFunc()
// console.log(myAge);

// Synchronous and asynchronous

// Synchronous

// console.log(" I ");

// console.log(" eat ");

// console.log(" Ice Cream ");

// asynchronous

// console.log("I");

// // This will be shown after 2 seconds

// setTimeout(()=>{
//   console.log("eat");
// },2000)

// console.log("Ice Cream")

// let order = (call_production) =>{

//     setTimeout( () => {
//         console.log("Order placed. Please call production")
//         // function 👇 is being called 
//       call_production();
//     },3000)
    
    
    
//     };
    
//     let production = (callback) =>{
    
//     console.log("Production has started")
//     callback();
//     };

//     let serve = () => {
//         console.log("ice cream Serve");
//     }

//     order(() => {
//         production(() => {
//             serve();
//         })
//     })


// let production = () =>{

//     setTimeout(() => {
//         console.log("production has started")
//         setTimeout(() => {
//             console.log("The fruit has been chopped")
//             setTimeout(() => {
//                 console.log("start the machine")
//                 setTimeout(() => {
//                     console.log(`Ice cream placed on`)
//                     setTimeout(() => {
//                         console.log("serve Ice cream")
//                     },1000)
//                 },3000)
//             },1000)
//         },2000)
//     },0000)
  
//   };

//   production()