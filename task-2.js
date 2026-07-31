// Task-2

// Input: a number
// Output: the number with digits reversed
// Returns: a number

function reverseNumber(num) {
  let str = num.toString();
  let reversedNum = "";
  // TODO: build the reversed string, then convert back to a number
  for (let i = str.length - 1; i >= 0; i--) {
    reversedNum += str[i];
  }
  return parseInt(reversedNum);
}

console.log(reverseNumber(1234)); // Expected: 4321
console.log(reverseNumber(7)); // Expected: 7