console.log("Let's start writing loops!")
/**Part 1: Fizz Buzz 

Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.
Remember to commit your solution once it is working.







**/
for (let i = 1; i <= 100; i++) {
    
    switch (true) {
        case (i % 3 === 0 && i % 5 === 0):
            console.log("Fizz Buzz");
            break;
        case (i % 3 === 0):
            console.log("Fizz");
            break;
        case (i % 5 === 0):
            console.log("Buzz");
            break;
        default:
            console.log(i);
    }
}



/* Part 2:
Write a script that accomplishes the following:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.
Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
*/

let n = 4;


let numberToFind = n + 1;

let findPrime = false;


while (!findPrime) {
    // Assume the number is prime
    let isPrime = true;

   
    for (let i = 2; i < numberToFind; i++) {
        if (numberToFind % i === 0) {
            // not prime if divisible
            isPrime = false;
            break; // if prime exit loop
        }
    }

    // if not prime
    if (isPrime) {
        console.log(`The next prime number after ${n} is ${numberToFind}`);
        findPrime = true; // exit the loop if true
    } else {
        // check the next number if not prime
        numberToFind++;
    }
}
//////////////////////////////////////////////////////////////////////////////////////
//Let's confirm the loop by trying another n "numerical value"
let n2 = 5;


let numbToFind = n2 + 1;

let f1ndPrime = false;


while (!f1ndPrime) {
    // Assume the number is prime
    let isPrime = true;

   
    for (let i = 2; i < numbToFind; i++) {
        if (numbToFind % i === 0) {
            // not prime if divisible
            isPrime = false;
            break; // if prime exit loop
        }
    }

    // if not prime
    if (isPrime) {
        console.log(`The next prime number after ${n2} is ${numbToFind}`);
        f1ndPrime = true; // exit the loop if true
    } else {
        // check the next number if not prime
        numbToFind++;
    }
}




/*  ////////////////// Part 3: Feeling Loopy
a)
Your task is to write a script that accomplishes the following:
Loop through the characters of a given CSV string.
Store each “cell” of data in a variable.
When you encounter a comma, move to the next cell.
When you encounter the “\r\n” sequence, move to the next “row.”
Log each row of data.
You do not need to format the data, the following works well.
console.log(cell1, cell2, cell3, cell4);
You can make the following assumptions:
There will only be 4 cells per row.
There will be no escaped characters other than “\n”.
*/
