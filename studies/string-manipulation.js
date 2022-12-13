/**
 * STRING MANIPULATION 
 * 
 * //0. With Operators
 * //0a: Concatenate (+)
 */ // Concatenate two strings using the plus (+) operator
    let str1 = "Hello";
    let str2 = "world";
    let str3 = str1 + " " + str2;
    console.log(str3); // Output: "Hello world"
 /* 
 * 
 * // 1. String Methods
 * 
 */ // 1a: concat(): This method is used to concatenate (combine) two or more strings. 

    let str1 = "Hello";
    let str2 = "World";
    let str3 = str1.concat(" ", str2);

    // str3 = "Hello World"

    //1b:
 /* .indexOf(): This method is used to find the index of the first occurrence of a specified string or character in a string.

 */ let str = "Hello World";
    let index = str.indexOf("World");
    //index is now equal to 6

    //1c:
 /* .replace(): This method is used to replace a specified string or character with another string or character. The first item in the parenthesis is what you want to replace, and the next is what
 // you want to replace it with.
 */
    let str = "Hello World";
    let newStr = str.replace("World", "Universe");
 
    // newStr is now "Hello Universe"


/*
    //1d:
 * .replaceAll(): Similiar to the replace method, this method allows you to replace EVERY instance of the value, rather than just the first one.
 */ 
    let str = " My name is Brandon and Brandon and Brandon and Brandon"
    let newStr = str.replaceAll('Brandon', 'Bob')

    // newStr will now result is 'My name is Bob and Bob and Bob and Bob"

    //1e:
 /* .substr(): This method is used to extract a portion of a string and return it as a new string. 
 */ 
    let str = "Hello World";
    let newStr = str.substr(6, 5);
 
    // newStr is now "World"

    //1f:
 /* .toLowerCase(): This method is used to convert a string to lower case. 
 */ 
    let str = "Hello World";
    let lowerCaseStr = str.toLowerCase();
 
    // lowerCaseStr is now "hello world"

    //1g:
 /* .toUpperCase(): This method is used to convert a string to upper case. 
 */
    let str = "Hello World";
    let upperCaseStr = str.toUpperCase();
 
    // upperCaseStr is now "HELLO WORLD"
 /* 

    //1h:
 * // Bracket Notation: Similar to an array strings are also 0-indexed and can be accessed with bracket notation.
 */      let str = 'Whats good'
 *       let lil = str[0]
       // lil now equals 'W'
 /**
  *  //1i:
  *  .split() : This method is used to split a string into an array of substrings
  */
    let str = "Howdy Partner";
    let arr = str.split(" ");
 
    // arr is now ["Howdy", "Partner"]
  /* 

    //1j:
  *  .trim(): This method is used to remove empty space from the beginning and end of a string
  */ 
    let str = "  Hello World   ";
    let newStr = str.trim();
  
    // newStr is now "Hello World"

  /**
   * 
   * //1l:
   * .slice(): This method is used to extract a portion of a string and return it as a new string. It allows you to specify the starting and ending indexes you want to extract.
   */
        let str = "Hello World";
        let newStr = str.slice(6, 11);
  
        // newStr is now "World"
   /* 
  
   