/*
 * VARIABLES:
  0. To hold things in memory during the life-cycle of a program, we can use variables.
  Variables are named identifiers that can point to values of a particular type, like
  a Number, String, Boolean, Array, Object or another data-type.  Variables are called
  so because once created, wecan CHANGE the value (and type of value) to which they point.
  1. To create a variable we use the keyword, var, followed by a name (id or alias) for 
  our variable.
  2. There are 2 phases of using variables: declaration and initialization (or assignment).
  */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined


// 2. initialization or assignment //
myName = 'john';

console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// We can assign and re-assign anything to a variable - we cannot do this with constants 
var myVariable = 1;
myVariable = true;
myVariable = "someString";

/*
Var is also Hoisted, meaning it may be declared anywhere in the code
and the decleration will be pulled to the top of the code. The assignment process is 
not meet until it is first assigned. Var is scope blocked on functions only, meaning
they will be hoisted to the top of the function, but if declared in the function it will
not be accesible outside of the function. Var is not scoped to if/else blocks or loops
*/

console.log(sport);   // prints undefined, the decleration is hoisted 
// to the top of the global scope but not the value.
var sport = 'soccer'; 
console.log(sport);   // prints soccer
 
/*
In Addition to var, we can also use let and const to declare variables.
Let and Const are not hoisted. They are both scope blocked to all code blocks,
meaning they are not hoisted outside of the block of code they are declared in. 
Where ever you declare these variable are the first time they are accesible by code
*/

// console.log(food); prints an error because food had not been 
// declared yet and it is not hoisted
let food = 'breakfast';
const favFood = 'lasagna';

// similarly to how my favorite food doesnt change,
// const variables can not be reassigned.
// where as what im eating changes,
// i can reassign the let variables.

food = 'dinner';
// favFood = 'cheerios';

console.log(food);     //  prints dinner
console.log(favFood);  //  prints type error: assignment to constant variable, 
// if line 66 was active



/*Scopes are where a certain part of code is held. Several scopes exists at any time. 
The global scope is the base scope where you start at. When we write a function we are
creating a new scope. We can declare variables that are only accesible in that scope. 
ConditionalStatements and Loops also create their own scope. Scopes can be thought of 
as a puzzle box with a clue, or code, in each box. You start on the outside box, scope, 
and for every layer you go you will still have access to that last clue but before you 
got to that box, or scope, you didnt have the clue from before.
*/

var global = 'clue 1';
box1();
function box1 (){
    let prize = 'clue 2';
    console.log(global);  //prints clue 1
    console.log(prize);   // prints clue 2
}

console.log(global);     // prints clue 1
// console.log(prize);       we get an error, cant get the clue unless your in that box.
//this is becaus eof the scope, all variables are function scoped, meaning they cant be 
// accesible outside of their functions
