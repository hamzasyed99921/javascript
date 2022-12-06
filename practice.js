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

// function myFun() {
//     var userName = "hamza"
// }

// console.log(userName);
// var tester = "hey hi";
    
// function newFunction() {
//     var hello = "hello";
// }
// console.log(hello); // error: hello is not defined

// let greeting = "say Hi";
// let times = 4;

// if (times > 3) {
//      let hello = "say Hello instead";
//      console.log(hello);// "say Hello instead"
//  }
// console.log(hello) // hello is not defined



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
// // 6️:   Synchronous JavaScript Prog 

// const fun2 = () => {
//   console.log(`Function 2️ is called`);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again`);
// }

// fun1();

// Asynchronous JavaScript Prog 

// const fun2 = () => {
//     setTimeout(()=> {
//         console.log(`Function 2️  is called`);
//     }, 2000);
//   }
  
//   const fun1 = () => {
//     console.log(`Function 1 is called`);
//     fun2();
//     console.log(`Function 1 is called Again `);
//   }
  
//   fun1();

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


//  Callback hell

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

// Promises


// let order = () => {
//     return new  Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Order Placed");
//             resolve();
//         },1000)
//     })
// }
// let production = () => {
//     return new  Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("production has started");
//             resolve();
//         },3000)
//     })
// }
// let machine = () => {
//     return new  Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("machine has started");
//             resolve();
//         },4000)
//     })
// }
// let serve = () => {
//     return new  Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("ICe Cream Serve");
//             resolve();
//         },2000)
//     })
// }


// order().then(production).then(machine).then(serve).catch((error) => {
//     console.log(error);
// });


// Async Await

// let order = () => {
//     return new  Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Order Placed");
//             resolve();
//         },1000)
//     })
// }
// let production = () => {
//     return new  Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("production has started");
//             resolve();
//         },3000)
//     })
// }
// let machine = () => {
//     return new  Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("machine has started");
//             resolve();
//         },4000)
//     })
// }
// let serve = () => {
//     return new  Promise((resolve,reject) => {
//         setTimeout(() => {
//             // console.log("ICe Cream Serve");
//             reject('ice cream not serve');
//         },2000)
//     })
// }

// const process = async() => {
//     try{
//         await order();
//     await production();
//     await machine();
//     await order();
//     await serve();
//     } catch(error) {
//         console.log(error);
//     }
// }

// process()

