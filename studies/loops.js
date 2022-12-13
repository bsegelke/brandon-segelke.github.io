/**
 * //LOOPS
 * 
 * 0. // For Loops
 *      // A for loop is a way to repeat a block of code a set number of times. 
 *      // It can be useful to iterate through arrays or strings, or used to count or keep track of something.
 * 0a. //For Loop Syntax:
 */ 
            // Let say we want to count to ten using a for loop, and print each number.

            let count = 0                   //here we have a variable with a value set to 0
            for(let i = 0; i < 10; i++){    // to use a for loop we start with the word 'for' followed by parenthesis. we have a variabel that is where we start, and a conidition in which we end, and what to do on each loop
                count++                     //if the condition is true we execute the codeblock. Since we will keep looping as long as i is less than 10 this will cause us to loop 10 times, printing each time
                console.log(count)
            }

            //0b. For Loop Reverse
            // If we wanted to do the same thing but count down from ten we could simply reverse some of the values in the for loop.
           
            for(let i = 10; i > 0; i--){    //we tell the variable to start at 10, to stop when its no longer greater than 0, and to decrement each loop.
                console.log(i)              // It prints each iteration. Here we left out our count variable and just used i to show you the same thing.
            }

            //0c. Iterating through an Array with a For Loop.
            //One powerful ability the for loop does, is that it allows us to iterate through an array or a string. Because an irray is a zero index, we can access each index by counting through it.
            
            let arr= ['one', 'two', 'three', 'four', 'five']    //here is our array with a zero index.
            for(let i = 0; i < arr.length; i++){                // we start our index at 0, so it can access the first value in the array, we tell it to stop when its no longer less than the length meaning its outside the arry
                console.log(arr[i])                             //we print each value at each index.
            }

            //0d. Iterating through an array with a for loop in reverse.
            //if we needed to print the same array but in reverse we would do it like this.

            let arr= ['one', 'two', 'three', 'four', 'five']    //to go through the array backwards we will start with the array.length - 1 because that will give us the last index value, dynamically, 
            for(let i = arr.length - 1; i >= 0; i--){           //and stop when we reach the zero index. Then we decrement by one each time.
                console.log(arr[i])                             //print each iteration to print the array backwards.
            }

 /* 1. // While Loops
 *      // A While loop is another way to execute a block of code repeatedly while a certain condition remains true.
 */ 
            //1a. Basic Syntax

            let counter = 0;                //here we start with our counter variable

            while (counter <= 5) {          
            // This code block will be executed as long as the condition
            // (counter < 5) remains true.
            console.log('The value of counter is ' + counter);
            counter++;
            }

            //1b. While Loops Reversed

            let counter = 5;                //We start at 5 this time instead of 0 to count backwards from 5

            while (counter > 0 ) {          //stop condition
            console.log('The value of counter is ' + counter);  //code block to execute each time the condition is still true
            counter--;                                          //decrement the count
            }

            //1c. While Loop to iterate through an array

            let arr = ['one', 'two', 'three', 'four', 'five']

            let i = 0;                      //telling it to start at the 0 index
            while (i < arr.length ) {       //stop condition
            console.log(arr[i]);            //code to execute if true
            i++;                            //increment the index
            }

            //1d. While loop to iterate through an array in reverse

            let arr = ['one', 'two', 'three', 'four', 'five']

            let i = arr.length - 1;         //start at the last index value in the array
            while (i >= 0 ) {               //stop when you reach the first index value in the array
            console.log(arr[i]);            //code block if true
            i--;                            // decrement.
            }

 /* 
 * 2. // For-In Loops
 *      //For in Loops are used to loop through objects!
 */
            //2a. Basic Syntax
            const user = {                  //Here we have an object called user. But how would we print each key/value pair?
                name: "Brandon",
                age: 31,
                email: "bbsegelke@gmail.com"
              };
              
              for (let key in user) {               //start with the word for and in parentheses use let key in object
                console.log(key + ':' + user[key]); //key will represent each property/key and the name of the object[key] will access each value.
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