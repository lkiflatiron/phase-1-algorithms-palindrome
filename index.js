function isPalindrome(word) {
  // Write your algorithm here
 // 1. use javascript string reversal to check
//  const wordArr = word.split("")
//  wordArr.reverse()
//  const revString = wordArr.join("")
//  const revString = word.split("").reverse().join("")
//  return revString === word

 //====================
 const loopNum = Math.floor(word.length / 2)
 let lastIndex = word.length - 1
 for (i = 0; i < loopNum; i++) {
   if (word[i] !== word[lastIndex--]) return false
 }
 return true
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));
}

module.exports = isPalindrome;
