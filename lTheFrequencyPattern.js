// Write a function called same, which accepts two arrays. The function should return true if every value in the first array has it's 
// corresponding value squared in the second array. The frequency of values must be the same. Order does matter only frequency
// ===========================================
// Frequency Pattern O(N^2) Quadratic Solution
// ===========================================
function same(arr1, arr2) {

    // We check to see if the length of the first array is the same length as the second array
    // We can go straight into solving the solution without evaluating this condition but if they 
    // arrays are not the same length then there really isn't much point in checking for anything 
    // else because the challenge we are given is to check if every number in the first array has
    // a matching value in the second that is a squared value.
    if (arr1.length !== arr2.length) {
        return false;
    }

    // We loop through the first array 
    for (var i = 0; i < arr1.length; i++) {
        // Index of is also looping through the second array internally so this is technically two nested loops
        // We are checking to if the value in the first array to the second power is inside the first array and we save it in the 
        // variable correct index
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        // If the value inside correct index is not in the array and if it wasn't in the aray it would equal -1
        // we want to return false because that value isnt in the array
        if (correctIndex === -1) {
            return false;
        }
        // Otherwise we remove that value from the array and continue this process until either we dont find a match or make our way
        // through the whole array
        arr2.splice(correctIndex, 1);
    }
    // If everything went well we will return true or else by default we will return undefined since we are in a function
   return true;
}

// console.log(same([1,2,3,4], [1,4,9,16]));

// =======================================
// Frequency Pattern O(N) Linear Solution
// =======================================
// Refactored Code O(N) Linear as opposed to the quadratic one above Runtime Complexity
// Get actual question
function same(arr1, arr2) {

    // We check to see if the length of the first array is the same length as the second array
    // We can go straight into solving the solution without evaluating this condition but if they 
    // arrays are not the same length then there really isn't much point in checking for anything 
    // else because the challenge we are given is to check if every number in the first array has
    // a matching value in the second that is a squared value.
    if (arr1.length !== arr1.length) {
        return false;
    }

    // We create an empty object that will hold the value count of each number in the first array
    let frequencyCounter1 = {};
    // We create an second empty object that will hold the count of each number in the second array
    let frequencyCounter2 = {};

    // We loop each value in the first array
    for (let val of arr1) {
        // We check to see if the current val we are evaluating in the loop can be targeted in our first object
        // If the value is not already in the array then it will return false and simply be set to 0 and then we add 1
        // If we can target that value in the object then it will be true and we just increment it by 1
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    // We loop through the second array
    for (let val of arr2) {
        // We check to see if the current value we are evaluting in the array can be targeted in our second object
        // If it can't find it than it will be false and we will set that spot to 0 and increment by 1
        // If we can find it than it will be true and then we will just add 1
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    // We loop through all they keys values in the first object
    for (let key in frequencyCounter1) {
        // If we cannot find the value to the second power in the the second object we return false because that means not
        // all the values in the second array are the exponent to the second power of the first array
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        // If the value in the second object (the value not the key) is not equal to (or the count for that value) is not equal to
        // the number of occurances in the first objects value then we also return false.
        // Checking this may seem confusing but in the first conditional we are just checking to see if we can find a value based on the first 
        // object inside the second object that is the value in the first object to the second power inside the second object
        // In this conditional below we are checking to see how the number of times each value occurs in each object is equal
        // Meaning the frequency. Is the frequency of numbers that have occured when we populated our array into objects the same.
        if (frequencyCounter2[key**2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    // We don't need to log the objects but I'm doing it so we can see what our objects look like after they have been populated
    // console.log(frequencyCounter1);
    // console.log(frequencyCounter2);
    // We return true because otherwise in this case we will return undefined if everything prior is true and doesn't return false
    return true;

}

// console.log(same([1,2,3,4], [1,4,9,16]));

// ==========================================
// Using this pattern with numbers as inputs
// ==========================================
// Given two positive integers write a function to find out if two numbers have the same frequency of digits
// The solution must have the folowing complexities - Time O(N)
function sameFrequency(int1, int2){
    // good luck. Add any arguments you deem necessary.

    // Convert to strings so that we can analyze the length of each number
    let number1 = int1.toString();
    let number2 = int2.toString();
    
    // We check to see if the length of the first array is the same length as the second array
    // We can go straight into solving the solution without evaluating this condition but if they 
    // arrays are not the same length then there really isn't much point in checking for anything 
    // else because the challenge we are given is to check if every number in the first array has
    // a matching value in the second that is a squared value.
    if (int1.length !== int2.length) {
        return false;
    }
    
    // We create an empty object
    const lookup = {};
    
    // We loop through the length of the first number
    for (let i = 0; i < number1.length; i++) {
        // Create a varibale that will hold the place of the current value we are analyzing
        let digit = number1[i];
        // If lookup digit is in the object (meaning if can target this value)
        if (lookup[[digit]]) {
            // Then we will simply increment by 1
            lookup[digit] += 1;
        } else {
            // If it wasn't already in the object we will just set it equal to 1
            lookup[digit] = 1;
        }
    }

    // We loop through the second number
    for (let i = 0; i < number2.length; i++) {
        // Create a variable that will hold the place of the current value we are analyzing
        let digit = number2[i];
        // If we cannot find the current value we are analyzing in the object we will return false
        if (!lookup[digit]) {
            return false;
        } else {
            // Otherwise if we find the value we just subtract one from the count
            lookup[digit] -= 1;
        }
    }
    // We can log the value of the object and if the count for each value equals 0 then that means our second number canceled
    // out the first and we do have two numbers with the same frequency of digits and we return true so that our function will not
    // return undefined
    return true;
  }

//   console.log(sameFrequency(123, 231));

// ======================================
// Anagram Solution O(N) Time Complexity
// ======================================
function validAnagram(first, second) {

    // Checks if words are the same length
    if (first.length !== second.length) {
        return false;
    }

    // Creates an emoty object to store letter count as key value pairs
    const lookup = {};

    // Loops through first word to create letter count inside an object
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // If the letter exsists, increment by 1 otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    // Loops through second word to decrement matching letters
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // If we can't find the letter or the letter is 0 than our input is not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
       
    }
    return true;
}

// console.log(validAnagram('racecar', 'carrace'));
