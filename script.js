// Assignment Code
var generateBtn = document.querySelector(generate);

// Write password to the #password input
function writePassword(password) {
  var password = generatePassword(password);
  var password = document.querySelector(password);
var chars = abcdefghijklmnopqrstuvwxyz
var passwordLength = 9
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener(click, writePassword);