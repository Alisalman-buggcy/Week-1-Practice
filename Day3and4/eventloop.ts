
// process.nextTick vs setTimeout vs setImmediate


console.log("1. Start");

// setTimeout -> Task Queue
setTimeout(() => {
  console.log("2. setTimeout");
}, 0);

// setImmediate -> Check Phase
setImmediate(() => {
  console.log("3. setImmediate");
});

// Promise -> Microtask Queue
Promise.resolve().then(() => {
  console.log("4. Promise");
});

// process.nextTick -> Highest Priority Queue
process.nextTick(() => {
  console.log("5. nextTick");
});

console.log("6. End");


