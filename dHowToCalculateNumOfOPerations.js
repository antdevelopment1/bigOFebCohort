// ==========
// Question:
// ==========
// How can we figure out the number of operations in an algorithm?

// In the second function below we have three simple operations (or things happening in general). Addition, Multiplication, and Division. 
// There will be 3 simple operations regardless of the size of the number passed as an argument to the function. Whether it’s 1 or 
// 1,000,000 we still have to perform the same number of operations or steps that need to be taken. Compared to the first solution
// where we have several simple operations. We have to consider we are in a loop now so as n increases so do the number of simple 
// operations relative to the number passed as argument. For example…

function addSum(num) {
    let total = 0;
    for (let i = 0; i < num.length; i++) {
        total += num[i];
    }
    return total;
}


function addSum(num) {
    return num * (num + 1) / 2;
}

// We have 1 assignment (let total = 0), another assignment (let i = 0), that are independent operations outside the loop. Then we also 
// have addition and assignment for i++ as well as addition and assignment for total += num[i]; So as n grows so does the number of simple 
// operations and let’s not forget out the operations associated with comparison (i < num.length). It can add up pretty quickly.

