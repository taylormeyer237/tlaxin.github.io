/*
Datatypes:
There are several datatypes that we use while coding. 
There are 2 categories that data types fall into:

Simple:
1. Number
2. String
3. Boolean
4. NaN
5. Undefined
6. Null

Complex:
1. Array
2. Object
3. Function
*/

/*
The Difference between Simple and Complex Data types:
Simple Data types can only hold one type of data
Complexe Data Types can hold any number of data and data types
Simple data types are copy by value,meaning they are taking a cpy of the value and setting it equal to that copy
Complex data types are copy by reference, meaing they reference where the value is being stored and equal to the value being referenced
*/


//Simple: 

//1. Number: 
//numeric data, can be positive, negative, or a decimal.
var num = 7;
console.log(7);

//2. String:
// a combination of characters enclosed in quotes.
// allows us to insert words and sentences.

var name= 'Taylor';
var myDog = 'Wednesday';

// we can access individual parts on strings with bracket notaion.

console.log(myDog[0]);  // prints W

// strings also have the length property
// returns the number of characters in the string, spaces included.

console.log(myDog.length)  //  returns 9

/* 3. Boolean: 
Booleans return true or false values. 
Normally are used to setermine if an action will take place, depending on the result of the boolean.
Can be thought of as an on/off switch, you see use them often when dealing with conditionals.
*/

console.log(2 > 3); // prints => false
console.log(3 < 2); // prints => true

// 4.NaN: 
//Stands for not a number

// 5. Undefined: undefined means that there is nothing assigned to that variable. 
// This does mean a decleration has happened.

var fruit;
console.log(fruit);  // prints undefined
fruit = 'apple';
console.log(fruit);  // prints apple


// 6. Null: 
// it shws a lack of data, we are looking at something that doesnt exisit.

// Complex
// 1. Array: 
// arrays are lists of data. Arrays are identified by [], and can hold any type of data. Arrays are  zero
// indexed.

var myArr = [];
console.log(myArr); // prints => []
// We defined myArr and gave it an array literal
myArr = [1, 'two', 3, 4, [1, 0]];
console.log(myArr); // prints => [1, 'two', 3, 4, [1, 0]]
// this array shows we can hold any kind of data in it.

// we may access arrays by its index position

console.log(myArr[1]);  // prints 'two'
console.log(myArr[3]);  // prints 4

/* 2. Object:
Object are another complex data type that we use to store any kind of data we need.
However unlike arrays, objects store data in key/value pairs.
We may access the values held by calling the keys directly.
Keys are all converted to strings.
*/
var myObj = {
    key1: 'paitience',
    key2: 'practice',
    key3: 'cardio'
};
console.log(myObj) // prints => {key1: 'paitience', key2: 'practice', key3: 'cardio'}
// we can use dot noation or bracket notation to call objects
console.log(myObj.key2);     // prints practice
console.log(myObj['key1']);  // prints 'paitience'

/* Functions:
Functions are reuseable blocks of code we can use by calling by name.
They accept inputs, process those inputs, and then returns a new value. 
There are 4 parts to a function
1. Name
2. Parameters/Arguments
3. Function body
4. Return Statement
*/

/* 
1. Name - after the keyword function we gave out function a name to call it by.

2. Parameters/Arguements - Parameters are placeholders while we build the function. Arguements
are what the code uses as it tests and runs the code. 

3. Function body -this is where we tell the function what we want to do in our code block.
this is where out parameters, if given any, will come into play.

4. Return statement -  They allow us to get a value out of a
function. By default without a return statement a function will be undefined when called.
*/


function sum (a, b) {
    return a + b;
}

console.log(sum(2,3)); // prints 5

//here we set up a sum function that when called on,
// took our arguments and replaced them with our parametes to complete the function.


//Infinity:
// the infinity data type is set up to the mathimatical infinity
// if you try to do any math to inifinty you will get back infintiy




 
