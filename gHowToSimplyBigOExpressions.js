// =============================
// Simplifying Big O Expressions
// =============================


// We dont need an exact count of how many operations an algorithm may have. We care about the general trend or pattern created.
// O(2n) = O(N) decent
// O(500) = O(1) constant great
// O(13n^2) = O(N^2) awful


O(n^2 + 5n + 8) =  O(N^2)


// Few rules to figuring out how to simplyfy and analyze big O
// 1. Arithmatic is constant
// 2. Variable assignment is constant
// 3. Accessing elements in an array (by index) or object (by key) is constant
// 4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the internal loop