// Level 1 – Pure Beginner Practice

// // 7. Ask user’s age and check if eligible to vote
// // If age >= 18 → “Eligible”, else → “Not eligible”

// let age = prompt("Tell your age");

// if (age === null) {
//     console.error("You cancelled the prompt.");
// } else {
//     age = age.trim()
//     if (age === '') {
//         console.error("Please enter input.");
//     } else if (isNaN(age)) {
//         console.error("You have not entered number.");
//     } else {
//         console.log(age >= 18 ? "Eligible" : "Not eligible");
//     }
// }


// // 8. Print multiplication table of 5
// // Use loop to print 5 × 1 to 5 × 10.
const num = prompt("Enter value")
for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
}

// // 9. Count how many numbers between 1 and 15 are greater than 8
// // Loop and count conditionally.

// let count = 0;

// for (let i = 0; i <= 15; i++) {
//     if (i > 8) console.log(i);
// }

// // 10. Ask user for password and print access status
// // Hardcoded correct password. Compare with user input.

// const CorrectPassword = "Harshal"

// let password = prompt()
// console.log(password === CorrectPassword ? 'Password Matched.' : 'Password Not Matched.');

// Level 2 – Slightly Tougher but Logical
// // 11. Allow only 3 attempts to enter correct password
// // If user gets it right early, stop. If not → “Account locked”

// const CorrectPassword = "Harshal"

// for (let attempts = 1; attempts <= 3; attempts++) {
//     const password = prompt(`Please Enter Password. This is attempt: ${attempts}`);
//     if (password === CorrectPassword) {
//         console.log("Logged in successfully");
//         break
//     }
//     if (attempts === 3) {
//         console.log("Account locked.");
//     }
// }


// // 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// // Loop until "stop" is typed. Count "yes".

// let yesCount = 0;
// while (true) {
//     let word = prompt("Enter a word (type 'stop' to exit):");
//     if (word === null) {
//         console.log("You cancelled prompt request.");
//         break;
//     }

//     word = word.trim();

//     if (word === "stop") {
//         console.log("You have stopped prompt request.");
//         break;
//     }

//     if (word === "yes") {
//         yesCount++;
//         console.log(`yes count: ${yesCount}`);
//     }
// }


// // 13. Print numbers divisible by 7 from 1 to 50
// // Use modulo % and loop.

// for (let i = 1; i <= 50; i++) {
//     if (i % 7 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 7; i <= 50; i += 7) console.log(i);


// // 14. Sum of all odd numbers from 1 to 30
// // Add only odd numbers. Print final sum.
// let sum = 0;
// for (let i = 1; i <= 30; i += 2) {
//     sum += i
// }
// console.log(sum);


// // 15. Keep asking number until user enters an even number
// // Use while loop. Stop only if input is even.

// let num;

// while (true) {
//     num = prompt("Enter a number");

//     if (num === null) {
//         console.log("You cancelled.");
//         break;
//     }

//     num = Number(num);
//     if (isNaN(num)) {
//         console.log("Please enter valid number");
//         continue;
//     }

//     if (num % 2 === 0) {
//         console.log("Even number entered:", num);
//         break;
//     } else {
//         console.log("Odd number. Try again.");
//     }
// }

// // 16. Print numbers between two user inputs
// // Input start and end using prompt() → print all between.

// let start = prompt("Enter start number")
// let end = prompt("Enter end number");

// start = Number(start);
// if (isNaN(start)) {
//     console.log("Enter a valid number for start");
// }

// end = Number(end);
// if (isNaN(end)) {
//     console.log("Enter a valid number for end");
// }

// for (let i = start; i <= end; i++) {
//     console.log(i);
// }


// // 17. Print only first 3 odd numbers from 1 to 20
// // Use loop. Stop with break after 3 odd prints.
// let oddCount = 0;

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 1) {
//         // if (i % 2 === 1 && oddCount < 3) {
//         console.log(i);
//         oddCount++;
//     }
//     if (oddCount === 3) {
//         break;
//     }
// }
// console.log(oddCount);


// // 18. Ask user 5 numbers. Count how many are positive
// // Use loop + condition + counter.

// let positiveCount = 0;

// for (let i = 1; i <= 5; i++) {
//     let num = prompt(`Enter number ${i}:`);

//     if (num === null) {
//         console.log("Input cancelled");
//         break;
//     }

//     num = Number(num);

//     if (isNaN(num)) {
//         console.log("Invalid number");
//         continue;
//     }

//     if (num > 0) {
//         positiveCount++;
//     }
// }

// console.log("Positive numbers count:", positiveCount);


// // 19. ATM Simulator – Allow 3 withdrawals
// // Start with ₹1000 balance. Ask withdrawal amount 3 times.
// // If enough balance → deduct
// // Else → print “Insufficient balance”

// let balance = 1000;
// let maxWithdrawalsCount = 3;

// for (let i = 1; i <= maxWithdrawalsCount; i++) {
//     let amount = prompt(`Enter withdrawl amount for ${i} / ${maxWithdrawalsCount}`);

//     if (amount === null) {
//         console.log("Transaction cancelled.");
//         break;
//     }
//     amount = Number(amount);

//     if (isNaN(amount) || amount <= 0) {
//         console.log("Please Enter Valid Amount.");
//         continue;
//     }

//     if (amount > balance) {
//         console.log("Insufficient balance in account");
//         console.log(`Remaing balance is ${balance}`);
//         continue;
//     } else {
//         balance -= amount;
//         console.log(`Remaining balance is ${balance}`);
//     }
// }