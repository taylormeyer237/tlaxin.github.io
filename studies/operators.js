/*
Operators are applied to data in many ways, and the way they are applied depends 
how many operands there are and the operand itself
these are the main Operators we have focused on,
1. Assignment Operators
2. Arithmetic Operators
3. Comparison Operators
4. Logical Operators
5. Unary Operators
6. Ternary Operator
*/

/* 
1. Assignment Operators:
The Assignmetn Operators assigns the right hand operand to the left side.
here are a few types of Assignment Operators:
=: 'assignment',
+=: 'adds value on the right to the value from left and reassigns new value', 
-=: 'subtracts value on the right to the value from left and reassigns new value', 
*=: 'multiplies value on the right to the value from left and reassigns new value', 
/=: 'divides value on the left to the value from right and reassigns new value'
*/

// With the '=' operator, we can assign a variable to a value.

var favoriteNum = 7;
var myDogsName = 'Wednesday';

// As you can see we have now assigned these values to their variable
 
 console.log(favoriteNum)  // prints --> 7
 console.log(myDogsName)   // prints --> Wednesday
 
 // Other Operands do more than just assign the value
 // Some will assign the value after doing other things as well.
 
 var count = 0;
 count += 7;  // count now equals 7
 count -= 2;  // count now equals 5
 count *= 3;  // count now equals 15
 count /= 5;  // count now equals 3
 
 // the above operands took the exisiting value of count and used
 // the arithmatic operand that is next to its assignment operand

/*
2. Arithmatic Operators:
In plaint terms, these operators allow us to preform math.
Add, Subtract, Multiply, Divide you name it
Here are a few Arithmatic Operators:
+: 'addition',
-: 'subtraction',
*: 'multiplication',
/: 'division',  
%: 'remainder',  
++: 'equivalent of + 1',  
--: 'equivalent of - 1'  
*/

var add = 3 + 2 - 4;
console.log(add);  // prints --> 1

// these operators also follow PEDMAS Rules, or
// the Order of Operations.

var thing = 4 + 7 * 2;
console.log(thing); // prints --> 18
thing = thing % 4;
//divides thing/4, returns the remainder
console.log(thing); // prints --> 2

var math = 10/2
console.log(math);  // prints --> 5
math++;
//incriments 1
console.log(math);  // prints --> 6
math--;
//incrimetns -1
console.log(math);  // prints --> 5







/*
3. Comparision Operator:
We Use the comparision Operators to compare on value to another. 
After doing a comparison of the values, the result will return a Boolean Value.
Here are a few Comparision Operators
===: 'absolutley equals too', 
!==: '!abosolutley equal, not absolutley equal', 
>: 'greater than', 
<: 'less than', 
>=: 'greater than or equal to', 
<=: 'lass than or equal to' 
*/

var num1 = 2;
var num2 = 7;
var num3 = 3;
var num4 = 7;

console.log(num1 > num3);   // prints false
console.log(num2 < num4);   // prints false
console.log(num2 === num4); // prints true
console.log(num2 !== num4); // prints false
console.log(num4 >= num2);  // prints true
console.log(num1 <= num3);  // prints true

/*
4. Logical Operators:
Essentially this is a comparison operators with a second consition to meet.
&&: 'and, both must be true', 
||: 'or, onemust be true', 
!:'BANG, essentially it looks for all values except the value that follows the bang.'  
*/

//using the values above
console.log(num2 === num4 && num1 > num3); // prints false
console.log(num2 === num4 || num1 > num3); // prints true
console.log(num1 < num3 && num2 > num1);   // prints true
console.log(!num2 === num4)                // prints false

/* 
* 5. Unary Operators:work on only one operand, where arithmetic need atleast two operands
* to work and give us a new value. When using loops it is easier to use an unary operator
* than arithmetic as using arithmetic would cause us to take a variable and add one to it
* and set the new number back to the operator.
*/

for (let i = 0; i < 7; i++) {}

/* 
* i would start at 0, after every succeful loop i will incriment.
* i++ is the equivalent of i = i + 1
* the loop will continue until i = 7
*/

/* 
* 6. Ternary Operator: This operator takes 3 operands, and works like a conditional statement.
* Ternaries take and expression and evalue if it is true or not.
* After evaluation, it will return the code depending upon the result of the boolean
* value of the expression. The operator is used by putting the first operand in the ? 
* followed by what you want if it is true followed by : then what you want if it is false.
*/

var color1 = 'red';

var color2 = 'blue';

console.log(color1 === color2 ? 'yes' : 'nah'); // prints --> nah

console.log(color1 !== color2 ? 'yepp' : 'nope'); // prints --> 'yepp'
// This operator evaluates the first operand to determine what to return.