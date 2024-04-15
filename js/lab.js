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
//   A)
const csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

//                          split the CSV string into rows where '\n'
const rows = csvData.split('\n');

//                          allow an empty arrray to hold all the data
let dataArray = [];

//                           go through each row one by one
for (let i = 0; i < rows.length; i++) {
    //                       use commas to split each row into columns (',')
    const columns = rows[i].split(',');
    //                       add the array of columns to the main data array
    dataArray.push(columns);
}

//                          output the array to console
console.log(dataArray);


// B)
/*
Use the example string provided above to test your program. Once you are confident it is working correctly, try the following string to see if your program works properly with other data.
Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232


*/
const csvData2 = 'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232';

//                          split the CSV string into rows where '\n'
const rows2 = csvData.split('\n');

//                          allow an empty arrray to hold all the data
let dataArray2 = [];

//                           go through each row one by one
for (let i = 0; i < rows2.length; i++) {
    //                       use commas to split each row into columns (',')
    const columns = rows2[i].split(',');
    //                       add the array of columns to the main data array
    dataArray2.push(columns);
}

//                          output the array to console
console.log(dataArray2);

