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