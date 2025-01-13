//QUESTION 1 Arrange the following names in alphabetical order

let names = ["Zara", "Alice", "Michael", "Bob", "Christine"]

console.log(names.sort())

// QUESTION 2: Write a function in JavaScript to check if a given password contains repetitive
// numbers (e.g., 111, 222, 333, etc.).
// The function should return true if repetitive numbers are found and false
// otherwise.

function repetitiveNumbers(password) {
    const removeWords = password.replace(/\D/g, "");
    for (let i = 0; i < removeWords.length - 2; i++) {
        if (removeWords[i] === removeWords[i + 1] && removeWords[i] === removeWords[i + 2]) {
            return true;
        }
    }
    return false;
}

console.log(repetitiveNumbers("pass123111word")); 
console.log(repetitiveNumbers("secure456passsword"));

// Question Three
// Write a function that reverses a string


function reverseString(string) {
    const reversedString = string.toLowerCase().split("").reverse().join("");
    return reversedString
}

console.log(reverseString("Home"))

// Write a function in JavaScript to check if a given string is a pangram.
// A string is considered a pangram if it contains every letter of the English
// alphabet at least once, regardless of case.
// Example:
//  Input: &quot;The quick brown fox jumps over the lazy dog&quot; → Output: true
//  Input: &quot;Hello, world!&quot; → Output: false

function isPangram(str) {
    const regex = /([a-z])(?!.*\1)/g;
    return (str.toLowerCase().match(regex) || []).length === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"))
console.log(isPangram("Hello, world!"))
