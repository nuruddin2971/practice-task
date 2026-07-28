// Task-1

// Input: a number
// Output: "Hot", "Cold", or "Normal"
// Returns: a string

// function checkTemperature(temp) {
//   // TODO: write your logic here
//   if (temp >= 30) {
//     return "Hot";
//   } else if (temp <= 15) {
//     return "Cold";
//   } else {
//     return "Normal";
//   }
// }

// console.log(checkTemperature(35)); // Expected: "Hot"
// console.log(checkTemperature(10)); // Expected: "Cold"
// console.log(checkTemperature(20)); // Expected: "Normal"

// Task-2

// Input: a number
// Output: the number with digits reversed
// Returns: a number

// function reverseNumber(num) {
//   let str = num.toString();
//   let reversedNum = "";
//   // TODO: build the reversed string, then convert back to a number
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedNum += str[i];
//   }
//   return parseInt(reversedNum);
// }

// console.log(reverseNumber(1234)); // Expected: 4321
// console.log(reverseNumber(7)); // Expected: 7

// Task-3-A

// Input: a number
// Output: product of its digits
// Returns: a number

// function productOfDigits(num) {
//   let str = num.toString();
//   let total = 1;
//   //   TODO: loop through each character, convert to number, and multiply
//   for (let i = 0; i < str.length; i++) {
//     let digit = Number(str[i]);
//     total = total * digit;
//   }
//   return total;

// }

// console.log(productOfDigits(123)); // Expected: 6
// console.log(productOfDigits(4040)); // Expected: 0

// Task-3-B

// Input: a number
// Output: array of odd numbers from 1 to n
// Returns: an array

// function getOddNumbers(n) {
//   let odds = [];
//   // TODO: write your loop here
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0) {
//       odds.push(i);
//     }
//   }
//   return odds;
// }

// console.log(getOddNumbers(10));
// Expected: [1, 3, 5, 7, 9]

// Task-4-A

// Input: a string (lowercase letters only)
// Output: count of vowels
// Returns: a number

// function countVowels(str) {
//   let vowels = "aeiou";
//   let count = 0;
//   // TODO: loop through the string and count vowels
//   for (let i = 0; i < str.length; i++) {
//     let letter = str[i];
//     if(vowels.includes(letter)){
//         count++
//     }
//   }

//   return count;
// }

// console.log(countVowels("javascript")); // Expected: 3

// Task-4-B

// Input: a string
// Output: the string without its first and last character
// Returns: a string

// function removeFirstAndLast(str) {
//   // TODO: slice out the middle portion of the string
//   //   let newStr = "";
//   //   for (let i = 0; i < str.length; i++) {
//   //     if (i === 0 || i === str.length - 1) {
//   //       continue;
//   //     }
//   //     newStr += str[i];
//   //   }
//   //   return newStr;
//   let getMiddle = str.slice(1, 4);
//   return getMiddle;
// }

// console.log(removeFirstAndLast("hello")); // Expected: "ell"

// Task-5-A

// Input: a string
// Output: true or false
// Returns: a boolean

// function isPalindrome(str) {
//   // TODO: reverse the string and compare it to the original
//   let reverseStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     let letter = str[i];
//     reverseStr += letter;
//   }
//   if (str === reverseStr) {
//     return "true";
//   } else {
//     return "false";
//   }
// }

// console.log(isPalindrome("level")); // Expected: true
// console.log(isPalindrome("hello")); // Expected: false

// Task-5-B

// Input: a sentence (string)
// Output: the shortest word
// Returns: a string

// function findShortestWord(sentence) {
//   let words = sentence.split(" ");

//   let shortest = words[0];
//   // TODO: loop through words and compare lengths
// //   for (let i = 0; i < words.length; i++) {
// //     let word = words[i];
// //     if (word.length < shortest.length) {
// //       shortest = word;
// //     }
// //   }

//   //   for (let word of words) {
//   //     if (word.length < shortest.length) {
//   //       shortest = word;
//   //     }
//   //   }
//   return shortest;
// }

// console.log(findShortestWord("JavaScript is a fun language")); // Expected: "a"

// Task-6-A

// Input: an array of numbers
// Output: the second smallest number
// Returns: a number
 
function findSecondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  // TODO: loop through and update smallest/secondSmallest correctly
 
  return secondSmallest;
}
 
console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8

