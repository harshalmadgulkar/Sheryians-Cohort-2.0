// npm init -y
// npm install -D typescript ts-node nodemon
// npx tsc --init
// npx nodemon --exec ts-node index.ts

// function reverseString(str:string):string{
//   return str.split("").reverse().join("");
// }

// const reversedString = reverseString("abcd");
// console.log(reversedString)


// function isPalindrome(str:string):boolean{
//     const reversed = str.split("").reverse().join("");
//     return reversed === str
// }

// console.log(isPalindrome("bob"))


// function findMax(arr:number[]):number{
//     return Math.max(...arr)
// }

// console.log(findMax([42,45,25,63,63,46,66]))



// Remove duplicate
// function removeDuplicate<T>(arr:T[]):T[]{
//     return [...new Set(arr)]
// }

// console.log(removeDuplicate([42,45,25,63,63,46,66,"t"]));


// Count vowels

function countVowels(str: string): number {
    return (str.match(/[aeiou]/gi) || []).length;
}

console.log(countVowels('harshal'))