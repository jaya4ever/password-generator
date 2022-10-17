// Assignment Code
var generateBtn = document.querySelector("#generate");
window.onload = alert("Please click generate password to start");

// function to generate password and defining variables
function generatePassword() {
  var upperCaseP = "ABCDEFGHIJKLMNOPQUSTUVWXYZ";
  var lowerCaseP = "abcdefghijklmnopqustuvwxyz";
  var numbersP = "012345678";
  var specialCharP = ":'`~<,>.?/|%^&*()_-+=!@#{}[]";
  var passwordCriteria = "";

  // validating the input
  var numberOfCharacters = prompt("How many characters do you want in your password? Please Choose between 8 to 128 characters.");

  // check we have correct number of characters 1 character for 8, 3 for 128
  if (!(numberOfCharacters.length < 4 && numberOfCharacters.length > 0)) {
    alert("Password length must be a number between 8-128 characters. Please try again.");
    return (undefined);
  }

  // convert to a integer 
  numberOfCharacters = Number(numberOfCharacters);

  // Between 8 and 128
  if (!(numberOfCharacters > 7 && numberOfCharacters < 129)) {
    alert("start over please and enter a value between 8 and 128 for the number of characters in the password");
    return (undefined);
  }

  //defining lowercase variables to use in password
  var lowerCaseForPassword = confirm("Your password will have lowerCase");

  //defining uppercase variables to use in password
  var upperCaseForPassword = confirm("Your Password will have upperCase");

  //defining number variable to use in password
  var numbersForPassword = confirm("Your password will have numbers");

  //defining special character varible to use in password
  var specialCharForPassword = confirm("Your password will have special characters");

  //using if statement to alert to use the true condition
  if (lowerCaseForPassword == false && upperCaseForPassword == false && numbersForPassword == false && specialCharForPassword == false) {
    alert("Please select at least one character type.");
    return (undefined);
  };


  // including all variables to use it in the password
  if (lowerCaseForPassword) {
    passwordCriteria += lowerCaseP;
  }

  if (upperCaseForPassword) {
    passwordCriteria += upperCaseP;
  }

  if (numbersForPassword) {
    passwordCriteria += numbersP;
  }

  if (specialCharForPassword) {
    passwordCriteria += specialCharP;
  }

  //else {
  //  possibleCharacters += lowercaseCharacters + uppercaseCharacters + numberOfCharacters + specialCharacters;

  //alert(passwordCriteria);

  // picking random numbers for the password
  var result = "";
  for (let i = 0; i < numberOfCharacters; i++) {
    var randomForPassword = [Math.floor(Math.random() * passwordCriteria.length)];

    result += passwordCriteria.charAt(randomForPassword);

  }
  return result;

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  // Check that password is a string and is not empty. Size validation is in the function generatePassword
  if (typeof password === 'string' && (password.length > 0)) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
