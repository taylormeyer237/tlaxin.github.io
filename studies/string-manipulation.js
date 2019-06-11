/* 0 String Manipulation:
* 
* String manipulation is a way to access and and alter strings in a number of ways.
* We may combine 2 or more strings together with an addition operator(+).
* We may also take out individual elements from Strings.
* We can also take out a single word, or multiple words, from a sentence.
* We may choose to capitalize/lowercase an entire string or just a single character.
* By doing these things, we may alter the strings how we desire
* to get a value that we are looking for.
*/

var a = 'Jiu';

var b = 'Jitsu';

console.log(a + b);     // prints => JiuJitsu

// We have concated our strings, but we need a space betwween words. 
// To do so we use the addition operator and concat a space.

console.log(a + ' ' + b);       // prints => Jiu Jitsu

/* Strings also have a .length property which allows us to see how many characters we
* have in a string. Length is useful to also isolate indivdual characters in loops.
*/
console.log(a[0]);        // prints => J

console.log(a.length);   // prints => 3

// We use the slice property to remove elemnts of a string we no longer need.
// We can do this with individual characters or full words.

var myGuard = 'full guard';

console.log(myGuard.slice(4));       // prints => guard

// We use the properties toUpperCase() and toLowerCase() to change the case size of a string.

console.log(myGuard.toUpperCase());     // prints => FULL GUARD

console.log(myGuard.toLowerCase());     // prints => full guard


// WE can use the . trim method to clean up white spaces on either end of our our stirngs.

var defense = '  In Jiu Jitsu, I like to pull to guard.          ';

console.log(defense.trim());      // prints => In Jiu Jitsu, I like to pull to guard.

console.log(defense);       // prints => '  In Jiu Jitsu, I like to pull to guard.          '
// note that the above reference would not print the parentheses, just used to show the spaces.

//We may also use the method .split() to seperate the sting by any character we give.

var submit = 'Triangle Choke';

submit = submit.split(' ');

console.log(submit, 1);  // prints [Triangle, Choke]
//splits at the character given, in this case it will split at any space.

var bestOffense = 'Is a good defense.'

bestOffense = bestOffense.slice(5, bestOffense.length);

console.log(bestOffense);  // prints good defense.

/* slice returns a extracted string from the original string.
* given a starting consition to know what character to start at.
* also a stopping condition may be given to tell exactly 
* how much of the string to take.
*/
