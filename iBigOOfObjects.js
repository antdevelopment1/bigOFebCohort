// ====================================================
// Big O of Objects and Why They Can Be More Performant
// ====================================================
// When you don't need any kind of order objects are very efficient
// Insertion - O(1) 
// Removal - O(1)
// Searching - O(N) We have to visit each thing in array if we want to search for a value
// Access - O(1)


let programmingLanguage = {
    name: "JavaScript",
    awesome: true,
    type: ['node', 'react', 'vanilla' ]
}

// This evaluates to O(N) because we have to visit each key in the object and populate into an object so as n or our input grows so does
// the time it takes to execute the function
console.log(Object.keys(programmingLanguage))

// This evaluates to constant becuase we have direct access to the key's value and the key in this manner
console.log(programmingLanguage.hasOwnProperty("name"))
