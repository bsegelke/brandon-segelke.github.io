// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return function that...
    return function(numTest){if(numTest > base){
        return true;
    }else {
        return false;
    }
// test whether value is greater than base (test means true or false if else maybe)
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(lessThan) {
        if(lessThan < base){
            return true;
        } else {
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //return a function
    return function(newString){
         //tests if newString starts with the char from startsWith also convert to same lowercase structure
         if(newString.toLowerCase()[0] === startsWith.toLowerCase()) {
            return true;
         } else {
            return false;
         }
    }
  
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE // //return a function
    return function(lowChar){
        //if last index of the input is the same then return true else false also convert to lowercase
        if(lowChar.toLowerCase()[lowChar.length - 1] === endsWith.toLowerCase()){
            return true;
        } else {
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */ //takes a function as a argument
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //collect reults in a collection aka make empty array var
    var output = [];
    //loop over each string
    for(var i = 0;i < strings.length; i++){
   output.push(modify(strings[i]))

    }
    return output;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
//takes function as argument

function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //loop through the string
    for(var i = 0;i < strings.length; i++){
        //if function is false return false
        if(test(strings[i]) === false) {
          return false;       
    }
    //return a boolean
   
}  
  return true;
}    
    // YOUR CODE ABOVE HERE //


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
