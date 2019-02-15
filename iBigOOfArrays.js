// =======================================
// Big O of Arrays and When Are They Slow
// =======================================
// When do use arrays?
// We use arrays when we need order


// Big O of arrays
// Insertion - It depends on the situation. When pushing to the end of the array there isn't much of an issue or much work that needs to be done
// The problem occurs when pushing to the front of an array all the indices have to change to accomadate that insertion.
// Pushing to the beginging of an array evaluates as an O(N) operation only because we have to do roughly one operation for each thing in an array
// Removal - It also depends on the situation. The same is true for removing from the begining of the array for the same reasons
// This would evaluate to O(N) .push and .pop are always faster than shift and unshift unless the array is empty. Then its the same
// because theres not a bunch of operations that we have to shift from left to right
// Searching - O(N)
// Accessing - 0(1)

// Big O for common array methods
// push - O(1)
// pop - O(1)
// shift - O(N)
// unshift - O(N) 
// concat - O(N)
// splice - O(N)
// splice - O(N)
// sort - O(N * log N)
// forEach/map/filter/reduce/etc. - O(N)

