// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
 function isArray(value) {
    // YOUR CODE BELOW HERE //
    //if value is array return true
    if(Array.isArray(value) === true){
        return true
    }else {
        // else return false
        return false
    }
    // typeof operator use Array.isArray method to find array
    
    
    // YOUR CODE ABOVE HERE //
}
/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */

 function isObject(value) {
    // YOUR CODE BELOW HERE //
    //if value does equal object and is not array && not null && not a date 
    if (typeof value === 'object' && value !== null && !Array.isArray(value) && value instanceof Date !== true){
       //return true
        return true
        //return false
    }
     
    return false
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
        //if value does equal object or is an array && not null && not a date 
        if (typeof value === 'object' && value !== null && !Array.isArray(value) && value instanceof Date !== true || Array.isArray(value)){
            //return true
             return true
             //return false
         }
          
         return false
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
 function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //if string return string
    if (typeof value == 'string'){
        return 'string'
        //if array return array
    }else if(Array.isArray(value) == true){
        return 'array'
        //object return object
    }else if (typeof value === 'object' && value !== null && !Array.isArray(value) && value instanceof Date !== true){
        return 'object'
        //if undefined return undefined
    }else if(typeof value == 'undefined'){
        return 'undefined'
        //if number return number
    }else if(typeof value == 'number'){
        return 'number'
        //if boolean return bool
    }else if(typeof value == 'boolean'){
        return 'boolean'
        //if null return null
    }else if(value == null){
        return 'null'
        //if function return function
    }else if(typeof value == 'function'){
        return 'function'
        //if date retunr date
    }else if(value instanceof Date == true){
        return 'date'
    }
    

    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
