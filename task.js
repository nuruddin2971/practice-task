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

// function findSecondSmallest(numbers) {
//   let smallest = Infinity;
//   let secondSmallest = Infinity;
//   // TODO: loop through and update smallest/secondSmallest correctly
//   for (let i = 0; i < numbers.length; i++) {
//     let currentElement = numbers[i];
//     if (smallest < secondSmallest) {
//         secondSmallest = currentElement
//     }
//   }

//   return secondSmallest;
// }
// function findSecondSmallest(numbers) {
//   let smallest = Infinity;
//   let secondSmallest = Infinity;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < smallest) {
//       secondSmallest = smallest;
//       smallest = numbers[i];
//     } else if (numbers[i] > smallest && numbers[i] < secondSmallest) {
//       secondSmallest = numbers[i];
//     }
//   }
//   //   for (let num of numbers) {
//   //     if (num < smallest) {
//   //       secondSmallest = smallest;
//   //       smallest = num;
//   //     }
//   //   }
//   return secondSmallest;
// }

// console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8

// Task-6-B

// Input: an array of numbers
// Output: how many numbers are divisible by 3
// Returns: a number

// function countMultiplesOfThree(numbers) {
//   let count = 0;
//   // TODO: loop through and count multiples of 3
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 === 0) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countMultiplesOfThree([3, 4, 6, 7, 9, 10])); // Expected: 3

// Task-7-A

// Input: an array of numbers
// Output: the average of all numbers
// Returns: a number

// function averageOfArray(numbers) {
//   let total = 0;
//   // TODO: loop through, sum the numbers, then divide by the count
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   total /= numbers.length;

//   return total;
// }

// console.log(averageOfArray([2, 4, 6])); // Expected: 4

// Task-7-B

// Input: an array of numbers
// Output: array with only even numbers
// Returns: an array

// function keepEvenNumbers(numbers) {
//   let result = [];
//   // TODO: loop and push only even numbers
//   for (let i = 0; i < numbers.length; i++) {
//     if (0 % 2 === 0) {
//       result.push(numbers[i]);
//     }
//   }

//   return result;
// }

// console.log(keepEvenNumbers([3, -5, 8, -1, 0])); // Expected: [8, 0]

// Task-8-A

// Input: an object
// Output: array of the object's keys
// Returns: an array

// function listKeys(obj) {
//   let keys = [];
//   //   TODO: loop through the object and collect its keys
//     for (let key in obj) {
//       keys.push(key);
//     }

//   //  let keys = Object.keys(obj);
//   return keys;
// }

// console.log(listKeys({ name: "Sam", age: 25, city: "Dhaka" }));
// // Expected: ["name", "age", "city"]

// Task-8-B

// Input: an object, a key (string), a default value
// Output: the value at that key, or the default
// Returns: any value

// function getValueOrDefault(obj, key, defaultValue) {
//   // TODO: check if the key exists in the object
//   if (Object.hasOwn(obj, key)) {
//     return obj[key];
//   } else {
//     return defaultValue;
//   }
// }

// let person = { name: "Sam", age: 25 };
// console.log(getValueOrDefault(person, "age", 0)); // Expected: 25
// console.log(getValueOrDefault(person, "grade", "N/A")); // Expected: "N/A"

// Task-9

// Input: an array of words, a length threshold
// Output: array of words longer than the threshold
// Returns: an array

// function getWordsLongerThan(words, minLength) {
//   let longWords = [];
//   // TODO: loop, check condition, push the word
//   for (let i = 0; i < words.length; i++) {
//     if()
//   }

//   return longWords;
// }

// // Input: an array
// // Output: the number of elements in the array
// // Returns: a number

// function countArray(arr) {
//   let count = 0;
//   // TODO: write your loop here

//   return count;
// }

// let words = ["cat", "elephant", "dog", "hippopotamus", "ox"];
// let longWords = getWordsLongerThan(words, 3);
// let total = countArray(longWords);

// console.log(longWords); // Expected: ["elephant", "hippopotamus"]
// console.log(total); // Expected: 2

// Task-10-A

// Input: a number
// Output: true or false
// Returns: a boolean

// function isPerfectSquare(num) {
//   // TODO: write your logic here
//   if (Number.isInteger(Math.sqrt(num))) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPerfectSquare(16)); // Expected: true
// console.log(isPerfectSquare(20)); // Expected: false

// Task-10-B

// // Input: a sentence (string)
// // Output: sentence with word order reversed
// // Returns: a string

// function reverseWords(sentence) {
//   // TODO: split into words, reverse the order, and join back together
//   const reversedSentence = sentence.split(" ").reverse().join(" ");
//   // console.log(reversedSentence)
//   return reversedSentence;
// }

// console.log(reverseWords("hello world")); // Expected: "world hello"

// Task-10-C

// // Input: an array of numbers
// // Output: array with duplicates removed
// // Returns: an array

// function removeDuplicates(numbers) {
//   let unique = [];
//   // TODO: write your logic here
//   for (let i = 0; i < numbers.length; i++) {
//     if(!unique.includes(numbers[i])){
//         unique.push(numbers[i])
//     }
//   }
//   return unique;
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected: [1, 2, 3, 4, 5]

// Task-10-D

// // Input: an object (values are unique)
// // Output: a new object with keys and values swapped
// // Returns: an object

// function invertObject(obj) {
//   let inverted = {};
//   // TODO: loop through obj and swap each key/value pair into inverted
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       let value = obj[key];

//       inverted[value] = key;
//     }
//   }
//   return inverted;
// }

// console.log(invertObject({ a: 1, b: 2, c: 3 }));
// // Expected: { 1: "a", 2: "b", 3: "c" }
