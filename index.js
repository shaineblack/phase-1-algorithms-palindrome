function isPalindrome(word) {
  // Write your algorithm here
}
function isPalindrome(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();

  // Loop through the string characters
  for (let i = 0; i < str.length / 2; i++) {
    // Compare characters at corresponding positions
    if (str[i] !== str[str.length - 1 - i]) {
      return false; // Not a palindrome
    }
  }

  return true; // Palindrome
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
}

module.exports = isPalindrome;
