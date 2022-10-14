// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defining variables to use in the password
var upperCaseP = "ABCDEFGHIJKLMNOPQUSTUVWXYZ";
var lowerCaseP= "abcdefghijklmnopqustuvwxyz";
var numbersP = "012345678";
var specialCharP= ":'`~<,>.?/| $%^&*()_-+= ! @ # {}[]";
var passwordCriteria = [""];

// this screen will pop up when browser will open
window.load = alert("Please start to generate your secured password");

// defining variables to check the password criteria needed
//var passwordLengthRequired;
//var upperCaseRequired;
//var lowerCaseRequired;
//var numbersRequired;
//var specialCharRequired;

// creating function to check the password length
 function checkLength(){
  var passwordLengthRequired = prompt("choose a length of at least 8 characters and no more than 128 characters ");
  if(passwordLengthRequired <= 8 || passwordLengthRequired >= 128){
    alert("enter the length to meet the password critera");
    checkLength();
  }else{
    alert("follow the next screen");
    checkLength();
  }
  return passwordLengthRequired;
}

//creating upperCase function to include in the password
//function checkUpperCase (){
  //var upperCaseRequired = prompt("Press ok if you want upperCase in your passwod");
  //if(upperCaseRequired = )





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

