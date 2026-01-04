// ! 🟢 Level 1 – Basic Function, Array & Object Code
// Tasks (Easy)
// ? 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.

//  function sayHello() {
//     console.log("Hello JavaScript");
// }
// sayHello()

// ? 2. Create a function `add(a, b)` that returns their sum and log the result.

// function add(a, b) {
//     a = Number(a)
//     b = Number(b)
//     if (!isNaN(a) & !isNaN(b)) {
//         let sum = a + b
//         console.log(`Sum is ${sum}`);
//         return sum
//     } else {
//         console.log("Please enter valid parameters");
//         return null
//     }
// }
// add(2, 27)

// ? 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.

// function greet(name='Guest') {
//     console.log(`Hi ${name}`)
// }

// greet("Harsh")


// ? 4. Use rest parameters to make a function that adds unlimited numbers.

// function addUnlimited(...args) {
//     let sum = 0
//     for (let index in args) {    // for...in loops over indexes, while for...of loops over values.
//         sum += args[index]
//     }
//     console.log(sum);
// }
// addUnlimited(3, 5, 6, 8,2895298)

// function addUnlimited(...args) {
//     let sum = 0
//     for (let num of args) { //for...in loops over indexes, while for...of loops over values.
//         sum += num
//     }
//     console.log(sum);
// }
// addUnlimited(3, 5, 56, 8)

// function addUnlimited(...args) {
//     return args.reduce((sum, num) => sum + num, 0)
// }

// const sum = addUnlimited(3, 5, 78, 87)
// console.log(sum);


// ? 5. Create an IIFE that prints `"I run instantly!"`.

// Most common style
// (function() {
//     console.log("I run instantly!");
// })();

// With arrow function (ES6+)
// (() => {
//     console.log("I run instantly!");
// })();


// ? 6. Make a nested function where the inner one prints a variable from the outer one.

// todo Version 1: Most common (call the inner function inside outer)
// function outer() {
//     let a = 10

//     function inner() {
//         console.log(a);
//     }
//     inner();
// }
// outer()

// todo Version 2: Return the inner function (classic closure pattern)
// function outer() {
//     let a = 10
//     function inner() {
//         console.log(a)
//     }
//     return inner;
// }
// const closureFunc = outer();
// closureFunc()

// ? 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

// let fruits = ["Apple", "Banana", "Grapes", "Orange", "Guava"]
// console.log(fruits);
// fruits.shift()
// fruits.push("Watermelon");
// console.log(fruits);

// let fruits = ["Apple", "Banana", "Grapes", "Orange", "Guava"]
// console.log(fruits);
// fruits = fruits.slice(1);
// console.log(fruits);
// fruits.push("Watermelon")
// console.log(fruits);

// ? 8. Use a `for` loop to print all elements of an array.

// const arr = ["Amar", "Baban", "Chetan", "Danesh"]

// todo Classic for loop (most common & recommended for this exercise) ★
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// todo for...of loop (clean & modern — excellent alternative!)
// for (let value of arr) {
//     console.log(value)
// }

// todo for...in loop (works, but not recommended for arrays)
// todo Avoid for arrays in modern JavaScript
// for (let key in arr) {
//     console.log(arr[key])
// }


// ? 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.

// let person = {
//     name: "harshal",
//     age: 24,
//     city: "Pune"
// }

// todo Best & most common (recommended) – for...in
// for (let key in person) {
//     console.log(person[key])
// }

// todo Modern & clean (very popular today) – Object.keys()
// for (let key of Object.keys(person)) {
//     console.log(person[key])
// }

// let keys = Object.keys(person)
// console.log(keys);

// todo Even nicer – Object.values() (if you only want values)
// for (let value of Object.values(person)) {
//     console.log(value)
// }

// todo Most elegant & modern (my personal favorite)
// Object.entries(person).forEach(([key, value]) => console.log(`${key}:${value}`))


// ? 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.
// setTimeout(function () {
//     console.log("Time's up!")
// }, 2000)

// setTimeout(() => {
//     console.log("Time's up!")
// }, 2000)

// todo Bonus: How to cancel it (good to know)
// function sayTimesUp() {
//     console.log("Time's Up!")
// }

// const timer = setTimeout(sayTimesUp, 2000)
// clearTimeout(timer)

// ! 🟡 Level 2 – Functional Thinking & Logic Tasks (Intermediate)
// ? 1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.

// function runTwice(fn) {
//     fn()
//     fn()
// }

// runTwice(function () {
//     console.log("Hello High Order Function");
// })


// ? 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.

// info A pure function: Always returns the same output for the same input Has no side effects (no console.log, no modifying globals, no DOM changes, no network calls, etc.) Usually returns a value instead of printing it

// function pure(a, b) {
//     return a + b
// }
// console.log(pure(2, 3))
// console.log(pure(2, 3))

// let global = 0;
// function impure(a) {
//     global++;
//     console.log(global + a)
// }
// impure(7)
// impure(7)

// ? 3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.

// function destructure({ name, age }) {
//     console.log(age);
//     console.log(name);
// }
// destructure({ name: 'harshal', age: 24 })


// ? 4. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).

// let obj = {
//     name: "harshal",
//     fun: function () {
//         console.log(this);
//     },
//     fun2: () => {
//         console.log(this);
//     }
// }

// obj.fun()
// obj.fun2()

// ? 5. Given an array of numbers, use `map()` to create 2 new array where each number is squared and cubed.

// let numbers = [2, 4, 5, 8, 14, 24]
// let squared = numbers.map(n => n * n)
// let cubed = numbers.map(n => n ** 3)    //exponentiation operator
// console.log(squared);
// console.log(cubed);

// ? 6. Use `filter()` to get only even numbers from an array.

// let numbers = [2, 9, 5, 8, 13, 24]
// let evenNums = numbers.filter(n => n % 2 === 0)
// console.log(evenNums);
// evenNums = numbers.filter(n => !(n % 2))
// console.log(evenNums);

// ? 7. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.

// const salary = [1000, 2000, 3000]
// let sumSalary = salary.reduce((acc, sal) => acc + sal, 0)
// let sumSalary2 = salary.reduce(function (acc, sal) {
//     return acc + sal
// }, 0)
// console.log(sumSalary);
// console.log(sumSalary2);

// ? Count occurrences
// const fruits = ["apple", "banana", "apple", "orange", "banana"];
// const count = fruits.reduce((acc, fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     return acc;
// }, {});
// console.log(count);
// → { apple: 2, banana: 2, orange: 1 }

// ? 8. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).

// const names = ['Harshal', 'Avi', 'Nisha', 'Pol', 'Om', 'Sai']
// const isSomeLonger = names.some(function (val) { return val.length > 3 })
// console.log(isSomeLonger);
// const isAllLonger = names.every(function (val) { return val.length > 3 })
// console.log(isAllLonger);

// ? 9. Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.

// info seal() allows modification of existing properties, but does not permit addition or deletion of properties. Object. freeze(), on the other hand, prevents any modifications, additions, or deletions to properties

// const user = {
//     name: "harsh",
//     age: 24,
//     email: 'a@gmail.com'
// };

// ---------------------
// Case 1: Object.freeze(user)
// ---------------------
// Object.freeze(user);

// user.age = 67;           // ← silently fails (in strict mode → TypeError)
// user.social = ['insta']; // ← silently fails

// console.log(user);
// Output: { name: "harsh", age: 24, email: "a@gmail.com" }
// → nothing changed!

// ---------------------
// Case 2: Object.seal(user)
// ---------------------
// Object.seal(user);

// user.age = 67;           // ← SUCCESS! (existing property can be modified)
// user.social = ['insta']; // ← silently fails (cannot add new properties)

// console.log(user);
// Output: { name: "harsh", age: 67, email: "a@gmail.com" }
// → age changed, but no new property added

// Bonus: Check the status
// console.log(Object.isFrozen(user));   // true / false
// console.log(Object.isSealed(user));   // true / false
// console.log(Object.isExtensible(user)); // false in both cases

// ? 10. Create a nested object (`user → address → city`) and access the city name inside it.

// let user = {
//     name: 'harsh',
//     address: {
//         city: 'Pune'
//     }
// }

// let { city } = user.address
// console.log(city);
