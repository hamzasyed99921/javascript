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

// Array Methods



// if we want to get the single data at a time  and also 
// if we want to change the data 


// var myFriends = ['vinod','ramesh','arjun','vishal'];

// console.log(myFriends[myFriends.length - 1]);

// if we want to check the length of elements of an array 

// console.log(myFriends.length);

// we use for loop to navigate 

// var myFriends = ['vinod','ramesh','arjun','vishal'];
// for(var i=0; i<myFriends.length; i++){
//   console.log(myFriends[i]);
// }

// After ES6 we have for..in and for..of loop too 

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// for(let elements in myFriends){
//   console.log(elements);
// }

// for(let elements of myFriends){
//   console.log(elements);
// }

// Array.prototype.forEach() 
// Calls a function for each element in the array.

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// myFriends.forEach(function(element, index, array) {
//       console.log(element + " index : " +
//         index + " " + array);
// });

// myFriends.forEach((element, index, array) => {
//   console.log(element + " index : " +
//     index + " " + array);
// });




//  Array Subsection  Searching and Filter in an Array 

// Array.prototype.indexOf()

// Returns the first (least) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element from the 
// 0th index number 

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.indexOf("Thapa", 3));





// Array.prototype.lastIndexOf() 
// Returns the last (greatest) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element last to first

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.lastIndexOf("Thapa",3));







// Array.prototype.includes() 
// Determines whether the array contains a value, 
// returning true or false as appropriate.

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical"];

// console.log(myFriendNames.includes("thapa"));








// Array.prototype.find() 

// arr.find(callback(element[, index[, array]])[, thisArg])

// Returns the found element in the array, if some element in the 
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

// const prices = [200,300,350,400,450,500,600];

// price < 400
// const findElem = prices.find((currVal) =>  currVal < 400 );
// console.log(findElem);

// console.log(  prices.find((currVal) => currVal > 1400 )  );




// Array.prototype.findIndex()

// Returns the found index in the array, if an element in the 
// array satisfies the testing function, or -1 if not found.


// console.log(  prices.findIndex((currVal) => currVal > 1400 )  );




// Array.prototype.filter() 

// Returns a new array containing all elements of the calling 
// array for which the provided filtering function returns true.

// const prices = [200,300,350,400,450,500,600];

// // price < 400
// const newPriceTag = prices.filter((elem, index) => {
//   return elem > 1400;
// })
// console.log(newPriceTag);





// Array.prototype.sort() 

// The sort() method sorts the elements of an array in place and 
//returns the sorted array. The default sort order is ascending, built 
//upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.

// const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];

// console.log(months.sort());

// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.sort());







// However, if numbers are sorted as strings, 
// "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect 
// result when sorting numbers.




// 2: sort the array in descending order

// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// let aFruits = fruits.sort();

// //Array.prototype.reverse() 
// // The reverse() method reverses an array in place. 
// // The first array element becomes the last, and 
// // the last array element becomes the first.





// Array  CRUD

// Array.prototype.push() 
// The push() method adds one or more elements to the 
// end of an array and returns the new length of the array.

// const animals = ['pigs', 'goats', 'sheep'];

// // const count = animals.push('chicken');
// // console.log(count);

// animals.push('chicken', 'cats','cow');
// console.log(animals);


// Array.prototype.unshift() 
// The unshift() method adds one or more elements to the 
// beginning of an array and returns the new length of the array.



// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.unshift('chicken');
// console.log(count);
// console.log(animals);

// animals.unshift('chicken', 'cats','cow');
// console.log(animals);


// 2nd example 

// const myNumbers = [1,2,3,5];

// myNumbers.unshift(4,6);
// console.log(myNumbers);


// Array.prototype.pop() 
// The pop() method removes the last element from an array and returns 
// that element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);


// Array.prototype.shift() 
// The shift() method removes the first element from an array and returns 
// that removed element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);



// Array.prototype.splice() 
// Adds and/or removes elements from an array.

// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: update march to March (update)?
// 4: Delete June from an array?


// sol1: 
// const newMonth = months.splice(months.length,0,"Dec");
// console.log(months);

// sol2:
// console.log(newMonth);

// sol3: 
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexOfMonth = months.indexOf('June');

// if(indexOfMonth != -1){
//   const updateMonth = months.splice(indexOfMonth,1,'june');
//   console.log(months);
// }else{
//   console.log('No such data found');
// }


// sol3: 
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexOfMonth = months.indexOf('April');

// if(indexOfMonth != -1){
//   const updateMonth = months.splice(indexOfMonth,2);
//   console.log(months);
//   console.log(updateMonth);
// }else{
//   console.log('No such data found');
// }

// let arr = [25, 36, 49, 64, 81];

// let arrSqr = arr.map((curElem) =>  Math.sqrt(curElem) )
// console.log(arrSqr);



// let arr = [5,6,2];

// let sum = arr.reduce((accumulator, curElem) => {
    //         debugger;
    //       return accumulator += curElem;
    // },4)
    // console.log(sum);
    
    // sol 2: 
    // let arr = [2, 3, 4, 6, 8]; 
    
    // let arr2 = arr.map((curElm) => curElm * 2).filter((curElem) => curElem > 10 ).reduce((accumulator, curElem) => {
    //      return accumulator += curElem;
    //    });
    // console.log(arr2);


    let arr =['zain','ali','hamza','khan']
    console.log(arr)
    // let newArr = arr.sort()
    console.log(arr.slice().sort());
    // console.log(newArr);
    console.log(arr);
    