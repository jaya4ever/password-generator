// Assignment Code
var generateBtn = document.querySelector("#generate");

window.onload = alert("Please click generate password to start");

// function to generate password and defining variables
function generatePassword(){
var upperCaseP = "ABCDEFGHIJKLMNOPQUSTUVWXYZ";
var lowerCaseP= "abcdefghijklmnopqustuvwxyz";
var numbersP = "012345678";
var specialCharP= ":'`~<,>.?/| $%^&*()_-+= ! @ # {}[]";
var passwordCriteria = "";

// validating the input

var numberOfCharacters = prompt("How many characters do you want in your password? Please Choose between 8 to 128 characters.");



}






//Function used to determine the length of the password

/*function passwordLCheck(){
  //passLRequired = window.prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");

    if (passLRequired <= 8 || passLRequired >= 128 || isNaN(passLRequired)){
      alert("Password length must be a number between 8-128 characters");
      passwordLCheck();
      
    
    }else{
    alert("now follow the direction in the coming screen.");
    }
    return passLRequired;
  
console.log(passwordLCheck(passLRequired));
//Function used to determine whether the user wants to include uppercase characters in the password
function generatePassword(){
function upperCheck(){
   //uppercaseCheck = window.prompt("Do you want to include uppercase letters in your password? (yes/ok)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === "" ){
      alert("Please answer yes or no");
      
      upperCheck();
      return uppercaseCheck;

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
     
      uppercaseCheck = false;
      return uppercaseCheck;

    }else {
      alert("Please answer yes or ok");
     upperCheck();
    }
    return uppercaseCheck;
}



//Function used to determine whether the user wants to include numbers in the password

function numberCheckRequired(){
    //numberCheck = window.prompt("Do you want to include numbers in your password? (Y/N)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer yes or no");
      numberCheckRequired();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;

    }else {
      alert("Please answer Y or N");
     numberCheckRequired();
    }
    return numberCheck;
}


//Function used to determine whether the user wants to include special characters in the password

function specialCharRequired(){
  //specialCheck = window.prompt("Do you want to include special characters in your password? (Y/N)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer yes or no");
      specialCharRequired();

    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;

    }else {
      alert("nice, now follow the coming screen");
      specialCharRequired();
    }
    return specialCheck;
}


 //Function used to take all the input from the previous functions and generate a password using a random number generator and 
 //the charAt method 

  //passwordLCheck();
  console.log(passwordLCheck(passLRequired));
  //upperCheck();
  console.log(upperCheck(uppercaseCheck));
  //numberCheckRequired();
  console.log(numberCheckRequired(numberCheck));
  //specialCharRequired();
  console.log(specialCharRequired(specialCheck));


  var characters = lowerCaseP;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters += upperCaseP + numbersP + specialCharP;

}else if (uppercaseCheck && numberCheck){
  characters += upperCaseP + numbersP;

}else if (numberCheck && specialCheck){
  characters += numbersP + specialCharP;

}else if (uppercaseCheck && specialCheck){
  characters += upperCaseP + specialCharP;

}else if (uppercaseCheck){
  characters += upperCaseP;

}else if(numberCheck){
  characters += numbersP;

}else if (specialCheck){
  characters += specialCharP;

}else{
  characters === lowerCaseP;
}

  for(var i = 0; i < passLRequired; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

function resetText(){
  document.getElementById("password").value = "Your Secure Password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
};*/




