// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {}; // every property of this object will be a function


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
return value;
}
/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

    _.typeOf = function(value) {
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
        

}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number){
//if array is not array return []
var empty = []
if(Array.isArray(array) === false){
    return []
}  
//if number is not given or not a number return the first index of array
if(number === undefined || typeof number !== 'number'){
    return array[0]

}// if number is greater than the length of the array return the array as is
if(number > array.length){
    return array;
}

//other wise return the first number items of array
for(var i = 0; i < number; i++){
empty.push(array[i])
}
return empty
}
/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number){
    //if array is not an array, return []
    if(!Array.isArray(array)){
        return []
    }
    //if number is not given or not a number return the last value in the array
    if(number === undefined || typeof number !== 'number'){
        return array[array.length-1];
    }
    //if number is greater than array.length return array
    if(number > array.length){
        return array
    }
    //else return the last numbers of the array
    else{var empty = []
        for(var i = array.length-1; empty.length < number; i--){
            empty.unshift(array[i])
        }
    }return empty;
    }

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value){
    //loop through the array
    for(var i = 0; i < array.length; i++){
        //if array[i] === value
        if(array[i] === value){
            //return  i
            return i;
            //else return -1
        }  
    }  return -1
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value){
    //use a ternary operator to say if the value exists in the array
  let result = (array.indexOf(value) >= 0) ? true: false
   

 return result
 }
//higher order function godspeed baby
/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, func){
// determine if collection is an array
if(Array.isArray(collection)){
//call the function once for each item in the array
for (let i = 0; i < collection.length; i++){
func(collection[i], i, collection);
}
}else { //else its an object
    for (let key in collection){
        func(collection[key], key, collection);
    }
}
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
    var newArray = []
for(var i = 0; i < array.length; i++){
   if(_.indexOf(newArray, array[i]) < 0){
    
    newArray.push(array[i])
   }
   
}

return newArray;
}
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = (array, func) => {
    //create an empty array to store my values
    var newArray = []
    //loop through the array
    for(var i = 0; i < array.length; i++){
   // if the function which now has the values of the array looped index are true
        if(func(array[i], i, array) == true){
            //then push it to the empty array
        newArray.push(array[i])
        }
    }
    return newArray;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = (array, func) => {
    //empty array to store fale values
    var newArray = []
    //loop through my array
    for(var i = 0; i < array.length; i++){
 //if the function with the index values !== true
 if(func(array[i], i, array) !== true){
//push them to the array
newArray.push(array[i])
//return the array
 }
    }return newArray
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = (array,func) => {
    //create empty subarrays
    var subArray = [[],[]]
    //loop through array
    for(var i = 0; i < array.length; i++){
    //if the func results to true
    if(func(array[i], i, array) === true){
    //push it to the zero index array
    subArray[0].push(array[i])
    }else{
        //else push it to the 1 index array
        subArray[1].push(array[i])
    }
    }
    //return the new subarray
    return subArray
    }

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = (collection, func) => {
    //emptyArr
    var emptyArr =[];
    //if collection is array
    if(Array.isArray(collection)){
    //loop through array
    for(var i =0; i < collection.length; i++){
    //result = func(collection[i], i, collection) 
    result = func(collection[i], i, collection) 
        //push the result to the empty Array
    emptyArr.push(result);
    }
    //else if collection is object
    }else{
    //loop thorough object with for in loop
    for(var key in collection){
    //result = func(collection[key], key, collection)
    var result = func(collection[key], key, collection)
    //push result to the empty array
    emptyArr.push(result);
    }
    }
    //return emptyArr
    return emptyArr;
    }

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = (array, key) => {
    return _.map(array, function(x) {
      return x[key];
    });
  }

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
// determine if collectioin is array
if(Array.isArray(collection)){
// determine if func wasnt passed in
if (func === undefined){
    for(let i = 0; i < collection.length; i++){
if(!collection[i]){
    return false;
} // if the value is not truthy
    }
}else {
for (let i = 0; i < collection.length; i++){
    if (func(collection[i], i, collection) === false ){
return false;
    }
}
}
//else it was
} else {   if (func === undefined)  {

}    // else its an object
//determine if func wasnt passed in
//else it was
}
return true
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = (collection, func) => {
    if(typeof func == 'function'){
//if collection is an array
if(Array.isArray(collection)){
    //loop through array
    for(var i = 0; i < collection.length; i++){
        //function
//if atleast one of the index is true
var result = func(collection[i], i, collection);
if(result === true){
    //return true
    return true;
}
    //else return false    
}
    }
    //else collection is object
    //loop through object
 else{for(var key in collection){
//function
//if at least one of the index is true
var result = func(collection[key], key, collection);
if(result === true){
    return true;
}   

}
}
    }else if(typeof func !== 'function'){
        if(Array.isArray(collection)){
            for(var i = 0; i < collection.length; i++){
                if(collection[i]){
                    return true;
                }
            }
        }else{
            for(var key in collection){
                if(collection[key]){
                    return true;
                }
            }
        }
    }return false;
}

    

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
    // create result variable
    let result;
// determine if seed did did not recieve a value
if(seed === undefined){
result = array [0];
for (let i = 1; i < array.length; i++){
    result = func(result, array[i], i, array);
}
}else {
result = seed;
for(let i = 0; i < array.length; i++){
    result = func(result, array[i], i, array)
}
}
return result;
}

/** _.extend // use the spread operator to take in unkown ammount of args
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = (objectOne, objectTwo, ...objects) => {
    return Object.assign(objectOne, objectTwo, ...objects)
    };
    
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
