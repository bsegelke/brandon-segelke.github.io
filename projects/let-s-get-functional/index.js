// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal: cd .. to workspace
 *
 *    npm start --prefix ./brandon-segelke.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
let males = _.filter(array, function(customer){
if(customer.gender === 'male'){
    return true;
}else {
    return false;
}
})// [{male}, {male}]
return males.length;
};

var femaleCount = function(array){
    let females = _.reduce(array, function(accumulator, current){
//determine if the current item in the array is female
if(current.gender === 'female'){
// if true add 1 to the accumulator
return accumulator + 1;}
return accumulator;
    }, 0) // number of females
    return females;
}

var oldestCustomer = functions(array){
let oldest = _.reduce(array, function(accumulator, current){
// accumulator = {name: 'Adele Mullen'}
// current = {name: 'Olga}
if(accumulator.age > current.age){
    return accumulator;
} else {
    return current;
}
}) return oldest.name;
};
// invoke reduce
// result = array[0] or {name: 'Adele Mullin'}
// iterate at the 1 index
//1
//result = result(result, {, 1, [...]})
var youngestCustomer;
//the balance is a string not a number, a string with a money symbol and commas.
//remove that first and then use a method to turn string into number
//try using the replace method to remove the $ and commas
var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;