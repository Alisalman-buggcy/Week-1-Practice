
// CALL STACK


// Ye sync code hai
// direct Call Stack me jayega
console.log("1");

// LIBUV + TASK QUEUE

// setTimeout async operation hai
// timer libuv handle karega
// complete hone ke baad callback Task Queue me jayega
setTimeout(() => {
  console.log("2 - setTimeout (Task Queue)");
}, 0);


// MICROTASK QUEUE


// Promise.then Microtask Queue me jata hai
Promise.resolve().then(() => {
  console.log("3 - Promise (Microtask Queue)");
});


// process.nextTick Queue


// process.nextTick sabse high priority queue hai
process.nextTick(() => {
  console.log("4 - nextTick Queue");
});

// CALL STACK


// Ye bhi sync code hai
// direct execute hoga
console.log("5");





// FINAL OUTPUT:
// 1
// 5
// 4
// 3
// 2