/**
 * CONTROL FLOW
 * 0.   Control Flow refers to the order in whoch the code in a program is executed. In javascript the control flow is determined by the use od statements such as 
 *      If, else if, and else, that allow the program to make decisions and execute code based on certain conditions.
 * 
 * 1.   If, Else If, and Else
 *      - Most often the three conditional statements can be found chained together. 
 * 1a.  -If is the first conditional statement you will find in a chain of conditional statements.
 *      -If statements look something like this:
 * 
 *      if(boolean comparison){ // you start with the word 'IF' then in parenthesis you place a boolean comparison that will resolve to true or false;
 *      CODE BLOCK HERE    }         // Then inside curly braces you place the code block you wish to execute if the boolean comparison resolves to true.       
 *                              
 * 1b. // If the first if statement is false but you want the contol flow to continue you could chain an else if statement to the end of the if statement like so:
 * 
 *      if(boolean comparison){                         //if this boolean comparison is false the code will skip the code block and try to resolve the else if statement next.
 *            CODEBLOCK                                   
 *      } else if ( different boolean comparison){       // You can chain as many else if statements to this as you like.
 *            CODE BLOCK                        }
 *      
 * 
 * 1c. //Finally whatever the very last codeblock and statement you want to make in your code you will end with a Else statement.
 *      // The else statment has no boolean comparison it just resolves the codeblock if none of the other if else if statements were true;
 * 
 *          if(bool comparison){
 *          CODE BLOCK
 *      } else if (bool comparison){
 *          CODE BLOCK
 *      }else {
 *          CODE BLOCK
 *      }
 * 
 * 1d. Code Examples 
 */
        let name = 'Brandon'
        if(name === 'Kyle'){                    // we start by asking if if the name is strictly equal to 'kyle
            console.log('My name is Kyle')      // that is false so we do not enter the code block
        }else if (name === 'Nancy'){            // we enter the next boolean comparison, which is also false.
            console.log('My name is Nancy')     // We do not enter the code block because the else if statement is false
        }else if (name === 'Brandon'){          // this else if statement resolves to true!
            console.log('My name is Brandon')   // we enter the code block and will print this string to the console.
        }else {
            console.log('I dont know that name') // if it had been false as well the code would have came to the else statement and executed the codeblock.
        }
 /* 
 * 2. Switch Statements:
 *      // A Switch statement in Javascript allows a program to exeute a block of code depending on the value of an expressions. It is often used as an alternative to if/else if statements.
 *      // It can be a cleaner more readable way to handle control flow that has a lot of else if statments.
 * 
 * 2a. Working example.
 */
        var food = 'Hot Wings';                     // Here we have assigned the variable food to the string 'hot wings'

        switch (food) {                             // We start a switch statement with the keyword switch followed by the value we wish the compare
        case 'steak':                               // you must use the word case: followed by the value you are comparing with boolean values.
            console.log('steak is pretty good');    // if the value food is equal to the value of case it will execute the code block
            break;                                  // each new comparison must be seperated by a break; or the code will not work.
        case 'apple':                               // now the code is checkin 'apple
            console.log('Apples are okay');         // its not true so we dont execute the code block.
            break;                                  // we break because thats the end of that comparison before we start a new one.
        case 'Hot Wings':                           // AHA! this case is the same value as our variable in the switch statement.
            console.log('I love Hot Wings!');       // we will execute the code block and print 'I love Hot Wings' to the console.
            break;                                  // break again
        default:                                                // Had nothing matched our value we had the default to execute
            console.log('Sorry, we are out of ' + food + '.');  // the default performs the same way the else statement does. It doesnt need to compare anything it just executes its code if no other statements were true.
 }
 
 /* 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */