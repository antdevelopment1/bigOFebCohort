// Examples of each runtime
// ============
// Constant
// ============
// Example 1
function addUpToSecond(n) {
    return n * (n + 1) / 2;
}
// Example 2
function printNumber(n) {
    return Number;
}

// ==========
// Linear
// ==========
// Example 1
function addUpToFirst(n) {
    var total = 0;
    for (var i = 0; i <= n; i++) {
      total += i;
    }
    return total;
}

function countUpAndDown(n) {
    console.log("Going up!");
    for (var i = 0; i < n; i++) {
      console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (var j = n - 1; j >= 0; j--) {
      console.log(j);
    }
    console.log("Back down. Bye!");
}

// ===========
// Quadratic
// ===========
function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        console.log(i, j);
      }
    }
}
  

  