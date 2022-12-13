/**
 * OPERATORS
 * 
 * 
 * 0: Assignment operators: This operator assisngs a value to a variable.
 * 
 * //0a: (=)
 */
   let x = 1; // here we have assigned x to the value of one with the '=' assignment operator

 /* 
 * //0b: (+=)
 */
   let x = 1;
    x += 2 
 // Here we are assigning x to equal what it already equals plus an additional 2. this is the same as saying x = x + 2.

 /* 
 * //0c: (-=)
 */
   let x = 2;
   x -= 1;
  // Here we are assigning x to equal what it already equals minus a one. This is the same as saying x = x - 1;

 /* 
 * //0d: (*=)
 */
    let x = 2
    x *= 2;
    // Here we are assigning x to equal what it already equals multiplied by a two. This is the same as saying x = x * 2;
 
 /* 
 * //0e: (/=)
 */
    let x = 2;
    x /= 2;
    // Here we are assigning x to equal what it already equals divided by a 2. This is the same as saying x = x / 2;
 
 /* 
 * //0f: (%=)
 */
    let x = 6
    x %= 2
    // Here we are assigning x to equal what it already equals as the remainder of 2. This is the same as saying x = x % 2

 /* 
 * 
 * /0g: (**=)
 */
   let x = 2
   x **= 2       
   // Here we are assinging x to equal what it alreasy equals to the power of 2

 /* 
 * 
 * 
 * 
 * 
 * 1: Arithmetic operators: These operators are used to perform some form of arithmetic equation on numbers.
 * 
 * // 1a. Addition (+)
 */
   var x = 5;
   var y = 3;
   var result = x + y; // result = 8

 /* 
 * 
 * // 1b. Subtraction (-)
 */
   var x = 5;
   var y = 3;
   var result = x - y; // result = 2
 /* 
 * //1c. Multiplication (*)
 */
   var x = 5;
   var y = 3;
   var result = x * y; // result = 15
   
 /* 
 * 
 * //1d. Exponentiation (**)
 */
   var x = 5;
   var y = 3;
   var result = x ** y; // result = 125
 /* 
 * //1e. Division (/)
 */
   var x = 5;
   var y = 3;
   var result = x / y; // result = 1.6666666666666667
 
 /* 
 * //1f. Modulus (Division Remainder) (%)
 */
   var x = 5;
   var y = 3;
   var result = x % y; // result = 2
 
 /* 
 * 
 * //1g. Increment (++) // The increment is a quick way to say + 1
 */
   let x = 0
   let result = x++ // result = 1
 /* 
 * 
 * //1h. Decrement (--) // The decrement is a quick way to say -1
 */
   let y = 1
   let result = x-- // result = 0
 
 /* 
 * 
 * 2: Comparison operators: This operator compares two or more values that results in a boolean expression.
 * 
 * //2a: Equal to (==) // compares two different values can be true if they are same value and differnt type.
 */
   let result = (3 == '3') // result = true
 
 /* //2b: Equal Value and Equal Type (===) Compares values as true if they are same value and same type.
 */ 
   let result = (3 === '3') //result = false;
   let result = (3 === 3) // result = true;
 /* 
 * //2c: Not Equal (!=) // asks if a value is not equal to another value.
 */
   let result = (3 != 3) // result = false;
   let result = (3 != '3') // result = false;
 /* 
 * //2d: Not Equal Value or Not Equal Type (!==) asks if a value is not the same value and not the same type
 */
   let result = (3 != '3') // result = true;
 
 /* //2e: Greater Than (>) //asks if a value is greater than another.
 */
let result = (3 > 4) // result = false
let result = (3 > 2) // result = true
 
 /* 
 * 2f: Less Than (<) // Asks if a value is less than another.
 */
 let result = (3 < 4) // result = true
 let result = (3 < 2) // result = false
 
 /* 
 * 2g: Greater Than or Equal to (>=) // compares if a value is greater than or equal to another
 */
 let result = (3 >= 4) // result = false
 let result = (3 >= 3) // result = true
 let result = (4 >= 3) // result = true
 
 /* 
 * 2h: Less Than or Equal to (<=) // compares if a value is less than or equal to another.
 */
 let result = (3 <= 4) // result = true
 let result = (3 <= 3) // result = true
 let result = (4 <= 3) // result = false
 
 /* 
 * 3: Logical operators: Logical operators are used to combine multiple boolean values and perform logical operations on them.
 * 
 * //3a: Logical And (&&) 
 * //This operator is used to combine two expressions and returns true only if both expressions are true
 */
   let x = 5
   let y = 6
    if( x > 1 && y > 1){
      return true // the code block will execute ONLY if both expressions are true.
    }
 
 /* //3b: Logical Or (||) 
   //This operator is used to combine two expressions and returns true if either of the expressions is true
 */
   let x = 5
   let y = 6
    if( x > 1 || y > 9){
      return true // the code block will execute if EITHER expressions are true. In this case only x is true, but the codeblock will still run as true.
    }
 /* //3c: Logical Not (!)
    // This operator is used to negate an expression, It reverses the value of the expression.
 */
    let x = 5
    if(!(x > 0)) { // the '!' makes this expression say if x is not greater than 0
      console.log( 'x is not greater than 0')
    }
    
 /* 
 * 4: Unary operators: This operator an be used to add or decrease a value or values to a variable. Similar to arithmetic operators this operator will results in a boolean value of true or false
 *    rather than a number.
 */ 
// 4a: Unary plus (+)
// Attempts to convert the operand into a number
console.log(+true); // Output: 1
console.log(+false); // Output: 0
console.log(+"42"); // Output: 42

// 4b: Unary negation (-)
// Negates the value of the operand
console.log(-true); // Output: -1
console.log(-false); // Output: -0
console.log(-42); // Output: -42

// 4c: Increment (++)
// Adds 1 to the value of the operand
let x = 5;
console.log(++x); // Output: 6

// 4d: Decrement (--)
// Subtracts 1 from the value of the operand
let y = 10;
console.log(--y); // Output: 9

// 4e: Typeof // This operator returns a string indicating the type of the operand.

console.log(typeof "hello world"); // Output: "string"
console.log(typeof true); // Output: "boolean"
console.log(typeof { name: "John Doe" }); // Output: "object"

 /*
 * 
 * 5: Ternary operators: A ternary operator evaluates a condition and executes a code block based on the condition. ( condition ? expression 1: expression2 )
 *    if Condition is true, expression1 is executed. if condition is false, expression 2 is executed. It takes in 3 operands, hence the name.
 * 
 * //5a: Examples:
 */
   //Often times a ternary operator can replace an if than statement. 
   let name = 'Brandon'
   let result;
//here is an example of an if else statement
   if(name === 'Brandon'){
    result = 'Hello, Brandon'
   }else {
    result = 'Youre not Brandon!'
   }
   console.log(result)
//Here is an example of the same code but written as a ternary operator.
let name = 'Brandon'
let result =
(name === 'Brandon') ? 'Hello Brandon' : 'Youre not Brandon!'
console.log(result)

//the output of both will be the same, but the ternary is a simplied version and can be easier to read.
/* 
 * 
 * 
 */