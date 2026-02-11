// ! Practice sheet  for Raja Software Labs

// ! Q.1 Write a program to find the angle between the hour and minute hands of a clock, given the time as input. The expected output is the angle in degrees.

// Ans. Calculate the angle between the hour and minute hands of a clock based on the given time.
// Approach
// Extract the hour and minute from the input time.
// Calculate the position of the hour hand in degrees.
// Calculate the position of the minute hand in degrees.
// Find the absolute difference between the two angles.
// Adjust the angle to ensure it is the smallest angle between the hands.

function clockAngle(time) {
    const [hour, minute] = time.split(':').map(Number);
    const hourAngle = (hour % 12) * 30 + (minute / 60) * 30;
    const minuteAngle = minute * 6;
    const angle = Math.abs(hourAngle - minuteAngle);
    return Math.min(angle, 360 - angle);
}

// Time Complexity
// O(1)

// Space Complexity
// O(1)

// ! Q.2 How can you determine if a year is a leap year using a single if condition?

// Ans.Determine leap year using a single if condition
// Approach
// Check divisibility by 400
// Check divisibility by 4 but not by 100;

function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

// Time Complexity;
// O(1)

// Space Complexity;
// O(1);

// ! Q.3 How do you reverse a string with elements separated by dots?
// Ans.Reverse the elements of a string separated by dots.
// Approach
// Split the string by the dot character.
// Reverse the list of split elements.
// Join the reversed elements back using dot as the separator.

function reverseDotString(s) {
    return s.split('.').reverse().join('.');
}

// Time Complexity
// O(n) where n is the length of the string

// Space Complexity
// O(n) due to the array used for splitting

// ! Q.4 Given an integer array, find the second largest difference.
// Ans. Find the second largest difference between any two elements in an integer array.
// Approach
// Sort the array in ascending order.
// Calculate the largest difference as the difference between the last and first element (max - min).
// Calculate the second largest difference as the maximum difference obtained by either the second largest minus the first element or the last element minus the second smallest element.
// Return the second largest difference.


function secondLargestDifference(arr) {
    arr.sort((a, b) => a - b);
    const option1 = arr[arr.length - 2] - arr[0];
    const option2 = arr[arr.length - 1] - arr[1];
    return Math.max(option1, option2);
}
// Example usage:
// console.log(secondLargestDifference([1,5,9,12]));

// Time Complexity
// O(n log n) due to sorting

// Space Complexity
// O(1) if sorting in-place, otherwise O(n)

// ! Q.5 Given an array of numbers, how do you print all subsequences with a given sum?
// Ans. Print all subsequences of an array whose elements sum to a given target sum.
// Approach
// Use backtracking to explore all subsequences by including or excluding each element.
// Maintain a running sum and a temporary list to store the current subsequence.
// When the running sum equals the target sum, print/store the current subsequence.
// Recursively continue until all elem  nts are processed.

function printSubsequencesWithSum(arr, target) {
    const result = [];
    // declare recursion function
    function backtrack(index, currentSubsequence, currentSum) {
        // base codition to stop recursion when reached at last element
        if (index === arr.length) {
            if (currentSum === target) {
                result.push([...currentSubsequence]);
            }
            return;
        }
        //Exclude-->call recursion excluding current element
        backtrack(index + 1, currentSubsequence, currentSum);
        //Include-->call recursion including current element
        currentSubsequence.push(arr[index]);
        backtrack(index + 1, currentSubsequence, currentSum + arr[index]);
        //reset currentSubsequence to previous as it is shared due to array(pass by reference)
        currentSubsequence.pop();
    }
    backtrack(0, [], 0);
    result.forEach(subseq => console.log(subseq));
}

// Time Complexity
// O(2^n * k) where n is array length and k is average subsequence length

// Space Complexity
// O(n) due to recursion stack and temporary subsequence storage

// ! Q.6 Write a function to print a string, removing repeating characters. For example, input 'helper' should output 'helpr'.
// Ans. Remove repeating characters from a string while preserving original order
// Approach
// Initialize an empty set to track seen characters
// Iterate through each character in the input string
// For each character, if it is not already in the set, add it to the result and mark it as seen
// Return or print the combined result of unique characters

function removeRepeatingCharacters(s) {
    const seen = new Set();
    let result = '';
    for (const char of s) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    console.log(result);
}

// Time Complexity
// O(n), where n is the length of the input string

// Space Complexity
// O(min(n, k)), where k is the character set size (for the set of seen characters)

// ! Q.7 How can you sort an array of 0s and 1s in only one loop using the two-pointer technique?
// Ans. Sort an array of 0s and 1s in one pass using the two-pointer technique
// Approach
// Initialize two pointers: left at the start and right at the end of the array
// Traverse the array with the left pointer and swap elements if a 1 is found on the left pointer and 0 on the right pointer
// Move left pointer forward when element is 0 and right pointer backward when element is 1 until pointers meet or cross

function sortZerosOnes(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        if (arr[left] === 1 && arr[right] === 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
        if (arr[left] === 0) {
            left++;
        }
        if (arr[right] === 1) {
            right--;
        }
    }
    return arr;
}

// Time Complexity
// O(n), where n is the length of the array

// Space Complexity
// O(1)

// ! Q.8 Given a binary array, find the maximum span of consecutive 1s.
// Ans. Find the maximum length of consecutive 1s in a binary array.
// Approach
// Initialize counters for current consecutive ones and maximum span.
// Iterate through the array elements.
// If element is 1, increment current count; if 0, reset current count to zero.
// Update maximum span with the current count when it exceeds the previous maximum.
// Return the maximum span after completing the iteration.

function maxConsecutiveOnes(arr) {
    let maxSpan = 0;
    let currentSpan = 0;
    for (let num of arr) {
        if (num === 1) {
            currentSpan++;
            if (currentSpan > maxSpan) {
                maxSpan = currentSpan;
            }
        } else {
            currentSpan = 0;
        }
    }
    return maxSpan;
}

// Time Complexity
// O(n) where n is the length of the array

// Space Complexity
// O(1)

// ! Q.9 Write a program to print an upside-down triangle pattern.
// Ans. Print an upside-down triangle pattern of stars
// Approach
// Take the number of rows as input
// For each row from top to bottom, print a decreasing number of stars starting from the max rows
// Move to the next line after each row

function printUpsideDownTriangle(n) {
    for (let i = n; i > 0; i--) {
        console.log('* '.repeat(i));
    }
}

printUpsideDownTriangle(5);

// Time Complexity
// O(n^2) where n is the number of rows

// Space Complexity
// O(1)

// ! Q.10 You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k. Find the maximum profit you can achieve. You may complete at most k transactions: i.e. you may buy at most k times and sell at most k times. Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
// Ans.Find the maximum profit from at most k transactions given daily stock prices.
// Approach
// If k is large compared to prices length, treat as unlimited transactions and sum all positive differences between consecutive prices.
//     Otherwise, use dynamic programming with two arrays: buy and sell, each of size k + 1.;
// buy[j] maintains the max profit after jth buy, initialized with -infinity except buy[0].
//     sell[j] maintains the max profit after jth sell.
// Iterate over each price, update buy and sell arrays for each transaction count from 1 to k.
// At the end, the answer is sell[k], the maximum profit after at most k transactions.

var maxProfit = function(k, prices) {
    let n = prices.length;
    if (n === 0) return 0;
    if (k >= n / 2) {
        let profit = 0;
        for (let i = 1; i < n; i++) {
            profit += Math.max(0, prices[i] - prices[i - 1]);
        }
        return profit;
    }
    let buy = new Array(k + 1).fill(Number.NEGATIVE_INFINITY);
    let sell = new Array(k + 1).fill(0);
    for (let price of prices) {
        for (let j = 1; j <= k; j++) {
            buy[j] = Math.max(buy[j], sell[j - 1] - price);
            sell[j] = Math.max(sell[j], buy[j] + price);
        }
    }
    return sell[k];
};

// Time Complexity
// O(n*k), where n is number of prices and k is number of transactions

// Space Complexity
// O(k), using two arrays of size k+1

// ! Q.11 Write a program to print prime numbers up to 50.
// Ans. Print all prime numbers up to 50 using the Sieve of Eratosthenes algorithm.
// Approach
// Initialize a boolean array of size 51 with True values except index 0 and 1 set to False.
// Starting from 2, mark all multiples of each prime as False.
// Collect and print all indices which remain True as these are prime numbers.

function printPrimesUpTo50() {
    const n = 50;
    const sieve = Array(n + 1).fill(true);
    sieve[0] = false;
    sieve[1] = false;
    for (let i = 2; i * i <= n; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= n; j += i) {
                sieve[j] = false;
            }
        }
    }
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (sieve[i]) primes.push(i);
    }
    console.log(primes.join(' '));
}
printPrimesUpTo50();

// Time Complexity
// O(n log log n) where n is 50

// Space Complexity
// O(n) for the boolean array

// ! Q.12 How would you find spaces in a given string?
// Ans. Find all spaces in a given string
// Approach
// Iterate through each character in the string
// Check if the character is a space
// Collect indexes or count of spaces found

function findSpaces(s) {
    let spaces = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            spaces.push(i);
        }
    }
    return spaces;
}

// Time Complexity
// O(n), where n is the length of the string

// Space Complexity
// O(k), where k is the number of spaces found

// ! Q.13 Given an integer, find the nearest prime number to it.
// Ans. Find the nearest prime number to a given integer.
// Approach
// Check if the input number itself is prime; if yes, return it.
// Initialize two pointers: one decreasing from the input number and one increasing.
// Iteratively check if the lower pointer is prime or the higher pointer is prime.
// Return the prime number that is closest in absolute distance to the input number.
// If two primes are equally distant, return the smaller one.

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function nearestPrime(n) {
    if (isPrime(n)) return n;
    let lower = n - 1;
    let higher = n + 1;
    while (true) {
        if (lower >= 2 && isPrime(lower)) return lower;
        if (isPrime(higher)) return higher;
        lower--;
        higher++;
    }
}

// Time Complexity
// O(sqrt(N) * D) where D is the distance to the nearest prime from N

// Space Complexity
// O(1)

// ! Q.14 You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1. You may assume that you have an infinite number of each kind of coin. Example 1: Input: coins = [1,2,5], amount = 11 Output: 3 Explanation: 11= 5+5 + 1 Example 2: Input: coins = [2], amount = 3 Output: -1 Example 3: Input: coins = [1], amount = 0 Output: 0 Constraints: 1 <= coins.length <= 12 1 <= coins [i] <= 2^31 - 1 0 <= amount <= 10^4
// Ans. Find the minimum number of coins needed to make a given amount using infinite supply of given coin denominations.
// Approach
// Create a DP array of size amount+1 where each element represents the minimum coins needed to make that amount.
// Initialize dp[0] as 0 since no coins are needed to make amount 0.
// For each amount from 1 to the given amount, compute the minimum coins required by checking all coins with value less or equal to the current amount.
// If the amount cannot be made with given coins, dp[amount] will remain a large initial value and return -1.

var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let a = 1; a <= amount; a++) {
        for (const coin of coins) {
            if (coin <= a) {
                dp[a] = Math.min(dp[a], dp[a - coin] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};


// Time Complexity
// O(amount * number_of_coins)

// Space Complexity
// O(amount)

// ! Q.15 Longest Palindromic Substring Given a string s, return the longest palindromic substring in s. A string is called a palindrome if it reads the same forward and backward. Example 1: Input: s = "babad" Output: "bab" Explanation: "aba" is also a valid answer. Example 2: Input: s = "cbbd" Output: "bb" Constraints: 1 <= s.length <= 1000 s consist of only digits and English letters.
// Ans. Find the longest substring of a string that reads the same forwards and backwards.
// Approach
// Initialize variables to track the start and max length of the longest palindrome found.
// Iterate over the string, for each index expand around it to check for longest odd length palindrome.
// Similarly, expand around the gap between current and next index to check for longest even length palindrome.
// Update tracking variables whenever a longer palindrome is found during the expansions.
// Return the substring corresponding to the longest palindrome tracked.

var longestPalindrome = function(s) {
  if (!s) return "";
  let start = 0, maxLen = 1;

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(i, i);
    let len2 = expandAroundCenter(i, i + 1);
    let len = Math.max(len1, len2);
    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }
  return s.substring(start, start + maxLen);
};

// Time Complexity
// O(n^2) where n is the length of the string due to expanding around centers for each character

// Space Complexity
// O(1) - only a fixed number of variables used, no additional data structures proportional to input size

// ! Q.16 Write a program to count the number of times each character appears in a given word
// Ans. Count the frequency of each character in a given word
// Approach
// Initialize an empty map/dictionary to store character counts
// Iterate through each character in the input word
// For each character, update the count in the map/dictionary
// Return or print the character-frequency map/dictionary

function countCharacters(word) {
    const counts = {};
    for (const char of word) {
        counts[char] = (counts[char] || 0) + 1;
    }
    return counts;
}

// Time Complexity
// O(n), where n is the length of the word

// Space Complexity
// O(k), where k is the number of unique characters in the word

// ! Q.17 How would you write a program to generate Fibonacci numbers?
// Ans. Generate Fibonacci numbers up to a specified count.
// Approach
// Initialize the first two Fibonacci numbers.
// Iteratively compute the next numbers by summing the previous two.
// Continue until the desired count of Fibonacci numbers is generated.

function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

// Time Complexity
// O(n)

// Space Complexity
// O(n)

// ! Q.18 How do you compute the sum of the digits of a given number efficiently?
// Ans. Compute the sum of digits of a given number efficiently
// Approach
// Initialize sum to 0
// Iteratively extract the last digit by taking modulo 10
// Add the extracted digit to sum
// Remove the last digit by integer division by 10
// Repeat until the number becomes 0

function sumOfDigits(num) {
    num = Math.abs(num);
    let total = 0;
    while (num > 0) {
        total += num % 10;
        num = Math.floor(num / 10);
    }
    return total;
}

// Time Complexity
// O(log n) where n is the input number

// Space Complexity
// O(1)

// ! Q.19 Write a JavaScript method to find the second smallest number in an array of integers.
// Ans. Find the second smallest number in an array of integers.
// Approach
// Initialize two variables to store the smallest and second smallest values as Integer.MAX_VALUE.
// Traverse through the array and update the smallest and second smallest values accordingly.
// Return the second smallest value if found; otherwise, handle edge cases if the array has less than two distinct elements.

// ! Q.20 Nearest Prime number
// Ans. To find the nearest prime number, iterate from the given number in both directions until a prime number is found.
// Start iterating from the given number in both directions to find the nearest prime number.

// Check if a number is prime by dividing it by all numbers less than its square root.

// Keep track of the closest prime number found during the iteration.

// ! Q.21 Second Maximum Number in Array
// Ans. Find the second maximum number in an array of strings.
// Convert the array of strings to an array of integers.

// Sort the array in descending order.

// Return the second element in the sorted array.