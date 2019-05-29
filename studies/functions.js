/* 
Functions:
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


function add (num1, num2) {
    var sum = num1 + num2;
    console.log(sum);
    return sum;
}


/* Above is a fuction that takes 2 Parameters(num1, num2). In the function body we will add the parameters together
and assign it to the sum variable. We have to call the function by name or else it will never run.
When we call the function we then put in the arguements we want it to use. Those arguements will go in the place of the parameters, which is why we can think
of the parameters as placeholders. 
*/

add(3,4);   // prints 7
// reuseable, we can call as many times as we need.
add(2,3);    // prints 5
add(7,3);    // prints 10


/* We can't forget about scope when talking abput functions. Everything has a scope and it starts in the global scope.
Each time you start a new function you create a new function scope. As I discussed before, each layer of scope is another box with a clue.
You only have access to the boxes you have already opened, but those boxes didnt have access to the box inside of it.
*/
var a = 7;
function sub (num) {
    var result = a - num;
    console.log(result);
    return result;
}

sub(2);    // prints => 5
sub(3);   // prints => 4

/* We created a function that subtracts a number given from a variable, variable a, created in our global scope. 
We do not have access to the result variable outside of the function. If we were to console log outside of
the function we would get a refernce error. It is not accessible nr saved to the global scope when called.
*/

/*Closure: 
Closures allows us use values from a parent scope that has closed already.
This is the only way to access the information unless using the function in which the stored data is used. 
Using functions inside of functions is helpful for doing this.
*/

function moreMath (x) {
    return function (y) {
        return x + y;
    };
}
var add7 = moreMath(7);
console.log(add7(2));      // prints => 9
console.log(add7(3));      // prints => 10