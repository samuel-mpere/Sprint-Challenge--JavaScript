// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(arg1, arg2, cb){
  return cb(arg1, arg2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add (num1, num2){
  return num1 + num2;
}

function multiply (numb1, numb2){
  return numb1 * numb2;
}

function greeting (firstName, lastName){
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */

console.log(consume(2,2, add));
console.log(consume(10,16,multiply)); 
console.log(consume("Mary","Poppins", greeting));


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

/* 
when we invoke `nestedFunction()`, it is has to log the string of the variable `internal` into the console. Following the rules of closures, since the variable `internal` is not defined in the scope of `nestedFunction` it has to go look for the reference to `internal` in the chain of outer scopes.
the immediate outer scope is `myFunction` which contains the reference to the variable `internal`.
*/

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();