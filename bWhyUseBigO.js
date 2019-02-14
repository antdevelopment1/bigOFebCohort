// ==========
// Question:
// ==========
// Why use Big O? Can we test how performant code is by using timing

// We can use a built in method called performance.now() and do some basic subtraction to calculate how long it takes to run a file when 
// no arguments are passed to a function vs when we pass for example 10,000 as an argument. We can take the increased time from passing 
// a value to a function and subtract the value when no arguments were passed to the function to calculate the difference for time elapsed. 
// For example…

// Based on the value passed to n as argument calculate the sum and return the total    
function addSum(num) {
	let total = 0;
	for (let i = 0; i < num.length; i++) {
		total += num[i];
    }
    return total;
}

time1 = performance.now();
	addSum(100000)
	Time2 = performance.now()
	Time2 - Time1 / 1000  //(to convert into seconds) will equal the time elapsed
	// We do the same operations for this function
	function addSum(num) {
		return n * (num + 1) / 2;
}

time1 = performance.now();
	addSum(100000)
	Time2 = performance.now()
	Time2 - Time1 / 1000 //(to convert into seconds) will equal the time elapsed
// The time elapsed for the second function seems much faster and performant than the first.
