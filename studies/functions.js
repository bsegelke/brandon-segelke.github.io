/**
 * //FUNCTIONS
 * 
 * // A Function
 *      //A function is a block of code that can be assigned and executed. They are used to define reusable blocks of code that can be called from multiple places in the program.
 * 
 * 1. Function Syntax:
 * 
 */ //1a Declaring a function.

        function sayHello(name) {           //The basic syntax is that you use the keyword 'function' followed by the name for the function, then your paramter(s) in parenthesis.
        console.log(`Hello, ${name}!`);     //inside the function you tell it what code you want it to execute.
        }                                   //Now we have declared our funciton, but technically its not doing anything like this.
 /* 
 * 
 * 1b. Calling a Function
 *  // For a function to properly work we have to call it. We can call a function as many times as we want whereever we want.
 */
        sayHello('Brandon')             // We call the function by using the unique name we gave it, and replacing the paramter with an argument the function will reference.
                                        // now the code block in the functino will execute and print 'Hello, Brandon'
 /* 
 */// 1c. Function Parameters

        //Each function must take in one or more parameter, a parameter is a placeholder for what in the input will be when its called later.
        function printString(string){   //here is a function that takes in one paramter, string.
            console.log(string)         //whenever we finally call this function and replace the paramter with an argument it will be replaced in every instance that parameter is used.
        }
 /* 
 * 1d. Function Arguments
        //The argument is what we actually pass into the paramter when we call the function.
 */ 
        printString('howdy'); //Now we have turned the paramter string, into the actual string argument 'howdy'. The function will now run its codeblock with this string in place of its parameter.


 /* 2. Different Function Syntax
 *  //There are multiple ways to declare a function. Here are a few.

 * 2a. Function with a Name
 */ 
        function nameOne(string){          //This is a common way to declare a function, you use the function keyword and then give it a name. That name can be used later to call it.
            return string;
        }

        nameOne('cheesehead');

 /* 2b. Assigning a Function a Variable
 */     
        let nameTwo = function(string){        //You can also give a variable the value of a function. It can then be called by using the name of the variable with the arguments youre passing.
            return string;
        }
 
        nameTwo('cheese');                     //passed the same way as a named function

 /* 2c. Declaring a function with arrows.
        //Or if you wanna be real slick you can just use => keys to stand in for the keyword function.
 */
        let slick = (string) => {

        }

        slick('cheese');

 /* 3. Function Scope and Closure
 * 
 * 3a. Scope:
 *  // In javascript Scope refers to the visibility and accesibility of variables and functions in different parts of the code.
 *      It is dtermined by the location of the variable or function within your code.
 * 
 */
        let global = 0 //this var is global because it is not inside a code block or function so it can be accessed anywhere
        function scope(){
            global += 1             //beacause global is a global scope variable this function can still access it.
            let functionScope = 1   // functionScope however is only reachable inside the function and therefore cannot be accessed outside of it
        }
        scope();

        console.log(global, functionScope) // this will result in error because it cannt reach functionScope.

 /* 
 * 3b. Closure
 *  // A closure is a function that has access to the variables in the outer scope where it was defined, even when the outer function has already returned. 
 *  // This is possible because the closure maintains a reference to the value of that function.
 * 
 */
            // This is the outer function
            function outerFunction(x) {
            // This is the inner function
            function innerFunction(y) {
            return x + y;
            }
  
            // Return the inner function
            return innerFunction;
        }
  
        
        var closure = outerFunction(3);  //its holding the value from the outer function/inner function
  
        // Call the closure and pass in a value for the `y` argument
        console.log(closure(4)); // Output: 7


 /* 
 */