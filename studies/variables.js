/**
 * 
 * VARIABLES:
 * 
 * 
 * 0:Variables are named containers storing pieces of data in our code. They are a simple data type, that points to a value. That value may be a number, 
 * a string, a boolean, a function, an array, a object, or any other data type. Variables are muteable, which means they can be reasisgned later in the code.
 * They may be called are acted upon by calling out their unique name they were given upon declaration.
 * 
 * 
 * 1: Declaration and Assignment:
 * a. Decleration is when you declare a variable in your code. You declarea a variable by typing out the word var, after the word var you write a unique name to give the varaible an id.
 * b. Assignment: When you actually assign a value to a declared variable: This can be done later in the code after declaring a variable,
 * or it can be done at the same time you declare a varaible. See examples below.
 * c. Reassignment: Var is a muteable datatype, which allows it to be reassigned quite easily. To do this we just call the name and give it a new value. It will hold
 * that value from then on.
*/

 // 1 // Declaration
  var age; // Declares a Variable age


// 1a // Assignment
age = 35; // use the unique word you gave to your var and put a = operator to assign it a value.

//1b // Declaration & Assignemnt
var newOne = 'cheese'; // Here you can see we are able to declare and assign all in one.
console.log(newOne); // if we want to access that value later, all we habve to do is type the var's name.

//1c // Reassignment
newOne = 'pizza'; // Now if we console log newOne it will no longer = 'cheese', it has been reassigned the value of 'pizza'

/*
* 2. var, let, const
* a. Variable aren't the only simple datatype that can hold values, it has 2 other brothers that act differently than var.
* Let and Const. These two are declared and assigned the exact same way as var, however there are some important differences between the three.
* b. Var has a global scope, meaning it can be accessed from anywhere in your code, while Let has block scope. If you a let exists inside a function, that value
* only exists inside that function. While var van be redeclared any number of times, let cannot be redeclared only reassigned.
* c. Const: Const functions just like Let, being blocked scoped, however unlike var or let. When const is assigned a value, that value is immutable! It cannot be redeclared
* or reassigned, youre stuck with it!
* */
//var
var doubleTime = 'wow' // var is unique in that in can be redeclared and reassigned any number of times.
var doubleTime = 'not wow'

//let
let cool = 'nice' // let is able to re-assign value but not able to redeclare
cool = 'really nice'

var global ='here i am'

function blocked(){
    let inside = 'im stuck in here' 
}
console.log(inside) // this will print that inside is undefined because the let is block scoped and this value only exists in side the function.

//const
const forever = 'cant change me'
forever = 'please change' // attempting to change the const will give you a TypeError
console.log(forever) 
/*
* 
* 3. Hoisting
//Hoisting is the order in which the compiler reads the code you have created. In javascript hoising will take any declared functions or variables and move them to the top of their scopes.
*/

3//
var yo = 'yoyo'.       //the complier will read the code like this:
function hello(){         function hello(){                         
  let x = 'hello'          let x = 'hello'
  return x;                return x }
}                          var yo;
console.log(x)             yo = 'yoyo'
console.log(yo)            console.log(x) // x will not print because it only exists within its function scope
                           console.log(yo) // yo will print just find because it is gobally scoped and the order of the hoisting does not affect it

 //if I had switched the order of the console logs to the top, neither would print, because even though var's shoot up to the top, their value does not.                          