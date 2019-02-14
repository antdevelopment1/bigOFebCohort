// Simplfying O(N) operations
// Question 1:
// Simplify the big O expression as much as possible:
O(n + 10) 

// Question 2:
// Simplify the big O expression as much as possible:
O(100 * n)

// Question 3:
// Simplify the big O expression as much as possible:
O(25)


// Question 4:
// Simplify the big O expression as much as possible:
O(n + n + n + n) 


// Question 1:
// Determine the time complexity for the following function: 

function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

// Question 2:
// Determine the time complexity for the following function:

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

// Question 3:
// Determine the time complexity for the following function

function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}

// Question 4:
// Determine the time complexity for the following function

function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}


