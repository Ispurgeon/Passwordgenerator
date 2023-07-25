// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a","b","c"]
var upperCase = ["A","B", "C"]
var numbers = ["1", "2", "3"]
var special = ["$", "%", "@"]
var chars = []
var finalpassword = []

function generatePassword() {
  var length = parseInt(prompt("what is the length of the password?"))
  if (length < 8 || length > 128) {
    alert("length is invalid")
    return;
  }
  var isUppercase = confirm("Do you want to include uppercase letters?")
  var isLowercase = confirm("Do you want to include lowercase letters?")
  var isSpecial = confirm("Do you want to include special characters?")
  var isNumbers = confirm("Do you want to include numbers?")
 

  console.log(length,isUppercase,isLowercase,isSpecial,isNumbers)
if(isUppercase===true){
  chars = chars.concat(upperCase)
}
if(isLowercase===true){
  chars = chars.concat(lowercase)
}
if(isNumbers===true){
  chars = chars.concat(numbers)
}
if(isSpecial===true){
  chars = chars.concat(special)
}
console.log(chars)

for (var i = 0; i < length; i++){
  var randomNumber = Math.floor(Math.random()* chars.length);
  var charvalue = chars [randomNumber]
  finalpassword.push(charvalue)
  console.log(finalpassword)
}
return finalpassword.join("")
// test


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var password = document.getElementById("password");

function genPassword(){
var chars =
"0123456789acbdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 12
var password = "";

for (var i = 0; i <= passwordLength; i++){
  var randomNumber = Math.floor(Math.random()* chars.length);
  
}
document.getElementById("password").value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);