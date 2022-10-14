// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defining variables to use in the password
var upperCaseP = "ABCDEFGHIJKLMNOPQUSTUVWXYZ";
var lowerCaseP= "abcdefghijklmnopqustuvwxyz";
var numbersP = "012345678";
var specialCharP= "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var passwordCriteria = [""];

// this screen will pop up when browser will open
window.load = alert("Please start to generate your secured password");

// defining variables to check the password criteria needed
var passwordLengthRequired;
var upperCaseRequired;
var lowerCaseRequired;
var numbersRequired;
var specialCharRequired;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

