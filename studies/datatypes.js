/**
 * DATA TYPES
 * 
 * 0: NUMBER
 *  This datatype is used to hold numeric values. ie(0,1,2,3,4,5,6,7,8,9)
 * */
    // 0a.
    let x = 5; // This variable holds the value 5. 5 is a number.
/*
 * 
 * 1: STRING
 * This data type is used to hold a sequence of characters surrounded by '', "", or ``. ie ('string')
 * 
 * */
    // 1a
    let string = 'Hello World'; // This variable holds the value of string that says hello world. You can use single quotations, double quotations or back ticks to surround your string.

/*
 * 
 * 2: BOOLEAN
 * This datatype is used to hold a value that is either true or false. Usually used to answer a conditional statement.
 * 
 */
  // 2a
  let boolOne = true; // This variable holds the boolean datatype, True as its value.
  let boolTwo = false; // This variable holds the boolean datatype, False, as its value.


 /* 
 * 3: ARRAY
 * This datatype is used to store an ordred list of values, which can be any type. It is zero index based. ie [1, 'two', null, true, {key:value}]
 */
// 3a:
let arr = [1, 2, 3, 4, 5] // This variable's value is a complex data type known as an array, it holds multiple values. This particular one holds the values of 5 different numbers.
let arrStr = ['hi', 'my', 'name', 'is', 'Brandon'] // This array holds multiple string values.
 
 /* 
 * 
 * 4: OBJECT
 * This data type is used to hold a collection of related data, often in the form of key-value pairs. It is surrounded by {} ie {key: value}
 */
//4a:
//This data type is used to hold a collection of related data. Here is holds keys that represent characteristics of me. Those keys hold values that can be other simple datatypes of complex datatypes.
let obj = {
    name: 'Brandon', // the key name holds the value of a string.
    age: 31, // the key age holds the value of a number
    isMale: true;, // the key isMale holds the value of a boolean
    favFood: ['wings', 'nachos', 'steak'] // the key favFood holds an array of strings.
}
 
 /* 
 * 
 * 5: FUNCTION
 * This datatype is used to hold a reference to a function, which can be invoked at any time. ie function test = (string){code block};
 * A function takes in any number of paramters that can get called later as arguments. It enables a quick way to do a task over and over again to different data sets.
 */
//5a:
//Declaring a function
function add(x, y){ //Here we are declaring a function that takes in two variables, x and y. 
    return x + y; // inside the function we type out our code block telling the function what we want it to do to the input paramters.
};
// Calling a function
add(3, 2);  // Here we have called the function giving the paramters x and y. The value of 3, and 2. This function will now return those two numbers added together.
add(1,2); //We cam call thios function as many times as we want and can always change the arguments.
 
 /* 
 * 6: UNDEFINED
 * This datatype is used to represent a value that has not been assigned or is not otherwise defined.
 */
// 6a:
let x; // This variable has been initialized but it has not been assigned a value. Therefore its value is undefined

 /* 
 * 
 * 
 * 7: NULL
 * This datatype is used to represent an absence of value. 
 */ 
  //7a
  let x = null; // This variable is assigned the value of null. This means it does not have a value.


 /* 
 * 
 * 8: NaN:
 * This datatype stands for Not a Number. Nan is a number that is not a number that javascript can read and implement. It is a globally scoped property
 */
//8a:
let y = 5
console.log(y === NaN); // We mostly use NaN to test whether or not a value is a number or not. In this case. It should return false. Becase y has the value of 5. 5 is a number.
 

 /* 
 * 
 * 9. INFINITY & -INFINITY
 * These datatypes are used to represent either the highest number possible or the lowest number possible. 
 */
//9a:
let x = Infinity; // used to give a variable the highest number possible.
let y = -Infinity; // used to give a variable the smallest number possible.
// These are great to use for comparisons when you dont know how big or small a number is going to be and need to compare it to something larger or smaller.
 
 /* 
 * 10: PRIMITIVE DATA TYPES
 * Primitive datatpes are simple single values that are not made up of any other values. Simple/Primitive data types include: Numbers, Strings, Booleans, Null, and undefined.
 * Primitive Data types are also immutable, which means once they are assigned a value, that value cannot be modifed.
 */
//10a:
let x = 1;
let y = 'cheese'
let z = true;

// These are all primitive data type values, they can not be modified, I cannot reassign these values to something new.

 /* 
 * 11: COMPLEX DATA TYPES
 * Complex Data Types are sata structures that can hold multiple values within a single variable. Examples of Complex Data Types are Objects, Arrays, and Functions.\
 * Complex Data types are muteable! This means their values can be altered. You can add, remove, or change the values in arrays and objects after its been created.
 */
//11a:
let arr = [1, 2 ,3 4]
let obj = {
    name: 'Brandon',
    age: 31
};
 //Arrays and objects are both complex data types. I am able to modify theyre values with special methods.
 arr.push(5) // for instance this will add the number 5 to the end of the array, arr.
 console.log(arr) // [1, 2, 3, 4, 5]
 obj.gender = 'Male' // This will add a new key called 'gender' with the value of 'Male; to the obj variable
 console.log(obj) 
   // let obj = {
  //  name: 'Brandon',
  //  age: 31
  //  gender: 'Male'
//    };

 /* 
 * 
 * 12: COPY BY VALUE/ COPY BY REFERENCE
 * 
 * 12a: Copy by valaue means that when a variable is assigned a value, a new copy of the value is created in memory, and the variable references this copy,
 * rather than the original variable. This method applies only to primitive data types like numbers, strings, and booleans.
 * 
 */
//12ab:
 let x = 10;
 let y = x;
 // In this case the value of x is copied by value and assigned to y. This means that a new copy of the value 10 is created in memory and y will reference this new copy.
 // Any changes made to x after this point will not affect the value of y. This is because they are referenceing different copies of the same value.
 /* 
 * 12b: Copy by reference means that when a variable is assigned a value, it simply refernces the original value in memory, rather than creating a brand new copy. 
 * This method is used for complex data types like objects and arrays, because they can hold multiple values.
 * 
 */
//12b-a:
let x = { value: 10 };
let y = x;

//Here the value of x is copied by reference and assigned to y. This means that y simply references the same object that x is referncing rather than creating a new copy of the object.
// Any changes made to the object through x or y WILL affect the other variable, because they are both referncing the same object.
 /* 
 * 
 */