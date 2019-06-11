/*
Loops allow us to run a block of code as many times as we need. 
We can use loops to cycle through array, or objects if we need.
We use different types of loops for each.
The three different types of loops are:
1. While loops
2. For loops
3. For in loops
*/

/*
1. While loops - allows us to run code several times until it reaches a set stop point.
 While loops are useful when we dont know how mant times we need the loop to run.
 We must set a stopping point and incriment by some number to get 
 to our stopping condition.
*/
 
var box = 0;
while (box < 4) {
    console.log(box); // prints => 0 1 2 3
    box ++;
}

/* 
* 2. For loops - For loops have 3 different parts to running them. 
* After initilizing it with the for keyword, we must set where the starting point,
* stoping point, and the incrementation level.
*/


for (let i = 0; i < 7; i++) {
    console.log(i);              // prints => 0 1 2 3 4 5 6
}
// you may also incriment backwards

for (let i = 7; i > 0; i--) {
    console.log(i);             // prints => 7 6 5 4 3 2 1
}
// we dont hae to incriment by 1, we can set it to any number
for (let i = 0; i <= 25; i += 5) {
    console.log(i);                 // prints => 0 5 10 15 20 25
}


/* 3. For in loops - used for looping in an object. This allows us to pull out data from 
some or all of the key/value pairs. 
*/
var myObj = {
    hobby1: 'jiu jitsu',
    hobby2: 'soccer',
    hobby3: 'cycling'
};
for (var key in myObj) {
    console.log(key);           // prints => hobby1 hobby2 hobby3
    console.log(myObj[key]);    // prints => jiu Jitsu soccer cycling
}

/*
We can loop forward and backwards through loops using the for loops.
We use the .length property on the array to make sure that we loop
through every element in the array.
*/
var myArr = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);             // prints => 1 2 3 4 5 6 7
}

for (let i = myArr.length-1; i >= 0; i--) {
    console.log(myArr[i]);              // prints => 7 6 5 4 3 2 1
}

/*
While Can be useful if we do not know the number of times we need a loop to run. Using a 
for loop, we can know that we are only looping until we reach the end of an array like we
just did.
*/

let n = 3;

while(n < 100){
   console.log(n = n * 3); //prints 9 27 81 243
}

// i wouldnt know how many times this would run without trying it.Accounts
// while 243 is over 100, it ran while it was 81 and then stoppedat 243.
// this is when you would need a while loop.
