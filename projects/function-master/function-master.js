//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// use the funciton master html tests to figure out what function to make
function objectValues(object) {
var emptyArray = Object.values(object)

 return emptyArray;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var string = Object.keys(object)
    return string.join(' ')
    }
    
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //if the value of an object is a string
    var newArr = []
    for(var key in object){
        if (typeof object[key] == 'string'){
            newArr.push(object[key])
        }
    } return newArr.join(' ')
    
    }
       

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take one argument and return 'array' if its an array and 'object' if its an object"
function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return 'array'
    }else return 'object'
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of one word, and return the word with its first letter capitalized"
function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1, string.length)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of words and return a string with all the words capitalized "
function capitalizeAllWords(string) {
   //turn string into an array of strings
    var newArray = string.split(' ')
//loop through the array to get index values
    for( var i = 0; i < newArray.length; i++){
        //newArray at index equals first letter capitilized plus the rest of that word
        newArray[i] = newArray[i][0].toUpperCase() + newArray[i].substring(1)
    // join them back into a string seperated with spaces
    } return newArray.join(' ')
}   


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name property and return 'Welcome <Name>!'"
function welcomeMessage(object) {
    //capitilize first letter of the name
    var caps = object.name[0].toUpperCase() + object.name.substring(1)
    //return the message
    return 'Welcome ' + caps + '!'
    }
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name an a species and return '<Name> is a <Species>
function profileInfo(object) {
    //container for capitilixed name and species
    var newName = object.name[0].toUpperCase() + object.name.substring(1);
    var newSpecies = object.species[0].toUpperCase() + object.species.substring(1);
    //capitlize name and species
    return newName + ' is a ' + newSpecies;
    
        //return object.name + 'is a ' object.species
    }
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'"
function maybeNoises(object) {
    //check if object has a noises array
    if('noises' in object && object.noises.length > 0){
        //if it does have noises check that its not empty
        //if its not empty return the array as a string with spaces
        return object.noises.join(' ')
    
    }//if it doesnt exist or index is empty return 'there are no noises'
    else{ return 'there are no noises'}
    }
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false."
//Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false."
function hasWord(string, word) {
    //turn string into an array
    var arr = string.split(' ');
    //loop through the array
    for( var i = 0; i < arr.length; i++){
    //if the index of the array = word,
    if(arr[i] == word){
        //return true
       return true
    } 
        //else return false
    }
    return false;
    }
    

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and an object and add the name to the object's friends array then return the object"
function addFriend (name, object) {
    //add the name to the friends key in object
    object.friends.push(name);
    //return object
    return object;
    }
//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise"
function isFriend(name, object) {
    //check if friends is even in the object first!
    if('friends' in object){
        //loop through friends
    for(var i = 0; i < object.friends.length; i++){
    //if name = object.friends return true
    if (object.friends[i] === name){
        return true
    }
    }
    }
    return false
    //return false
    }
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var emptyArray = [];
    //find that persons name in the object
    for (var i = 0; i < array.length; i++) {
        // console.log(object[i].name)
        if (array[i].name == name) {
            for(var x = 0; x < array.length; x++)
      if(array[i].friends.includes(array[x].name) === false && array[x].name !== name){
        emptyArray.push(array[x].name)
      }
  return emptyArray

}
    }
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
object[key] = value
return object
}
    
    
    
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //loop through the array
    for(var i = 0; i < array.length; i++){
        //loop through the object
    for(var key in object){
        //if the array index is == to the object index, then remove that property.
        if(array[i] === key){
            delete object[key]
        }
    }
    }return object
    }
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //create an empty array to send stuff to
    var empty = []
    //loop through the main array
    for(var i = 0; i < array.length; i++){
    //if array includes array[i] && doesnt exist in empty array
    if(array.includes(array[i]) && empty.includes(array[i]) != true){
        //send it to the empty array
        empty.push(array[i])
    }
    }
    //return the empty array
    return empty
    }

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}