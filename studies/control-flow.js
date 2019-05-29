
/*
Control flow:
The use of Conditionals, to determine if a block of code shoulf be exectuted or not.
The considitionals will check if the expression given evaluates to true or false, if true the code will run. 
We can use a couple different types of condtional statements:
1. If/else if/else statements
2. Switch statements
*/

/* 1. If/else if/else statements - chans together block of code that will be run if a the expression before is true.
Only 1 block of code in an if/else if/ else chain, may run. Anyhting after the code that is run is ignored.
you start with an if statement, followed by as many else if blocks that you would like.
The final statement will be an else statement. This can be thought of as the default code to run if none of the
other statements turn out to return a boolean value of true. 
*/


if (2 < 3) {
    console.log('check');  // prints check       
}

if (2 > 3) {
    console.log('problems');
} else {
    console.log('no problem');
}
// prints => 'no problem'

if (2 > 3) {
    console.log('wrong');
} else if (2 > 7) {
    console.log('math?');
} else if (7 > 2) {
    console.log('now we are cooking with gas');
} else {
    console.log('more problems');
}
// prints => 'now we are cooking with gas'


/* 2. Switch statements - switch statments are useful when you might want more than one block of code to be meet. 
Switch statements are better used when you know the value given, where if else chains are more of a series of checks.
Switch satements are looking for a true evaluation as well. they are looking for a case to be meet.
Once a case is meet a break line ends the switch case.
*/


var squad = 'The Citizens';
switch (squad) {
    case 'The Reds':
        console.log('Nah');
        break;
    case 'TheBlues':
        console.log('not much better');
        break;
    case 'The Citizens':
        console.log('Treble Champs');
        break;
}
// prints => 'Treble Champs'
var color = 'blue';
switch (color) {
    case 'red':
    case 'green':
        console.log('nope');
        break;
    case 'blue':
    case 'purple':
        console.log('here we go');
        break;
}
// prints => 'here we go'
