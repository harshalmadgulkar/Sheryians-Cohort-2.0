// ! JS Essentials
// import createPrompt from "prompt-sync";

// const prompt = createPrompt();

// let age = prompt('Enter your age');
// console.log(age);

// Q.2
// input string output => single char which is first non-repeated char from whole string

function findFirstUnique(str) {
    let exists = [];
    let uniqueChar = [];

    str.split("").forEach((char, index) => {
        console.log(char);
        let remainingString = str.slice(index + 1).split("");
        if (!remainingString.includes(char) && !exists.includes(char)) {
            console.log(remainingString);
            uniqueChar.push(char);
            return;
        } else {
            exists.push(char);
        }
    });
    return uniqueChar[0];
}

const uniqueChar = findFirstUnique("aabbccdeff");
console.log(uniqueChar);