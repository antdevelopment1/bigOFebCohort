// ==========
// Question:
// ==========
// Why use Big O? Can we test how performant code is by using timing

// We can use a built in method called performance.now() (in the broswer) and do some basic subtraction to calculate how long it takes 
// to run this function when no arguments are passed to a function vs when we pass for example 10,000 as an argument. We can take the
// increased time from passing  a value to a function and subtract the value when no arguments were passed to the function to calculate 
// the difference for time elapsed. For example…

// Based on the value passed to n as argument accumulate the sum into a variable and return the total?
// ===========================
// Slower Linear O(N) Solution  
// ===========================
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
}
  
var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

// =============================
// Faster Constant O(1) Solution  
// =============================
function addUpTo(n) {
    return n * (n + 1) / 2;
}
  
var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

// =================================================
// The problem with using built in timing functions
// ================================================
// The problem with this approach is different computers will record different times. For this reason it isn’t reliable. 
// Though using this approach does tell us that the second solution is more performant, the output from doing it this way creates 
// a system that is inconsistently measurable. Also, even using the same computer to perform these calculations will vary and not 
// the same even when running the same function with the same inputs and outputs. And for fast algorithms, tracking the speed may 
// not be precise enough to really evaluate what’s happening under the hood or at least from a big picture perspective.
