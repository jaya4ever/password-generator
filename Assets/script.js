// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defining variables to use in the password
var upperCaseP = "ABCDEFGHIJKLMNOPQUSTUVWXYZ";
var lowerCaseP= "abcdefghijklmnopqustuvwxyz";
var numbersP = "012345678";
var specialCharP= "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var passwordCriteria = [""];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

