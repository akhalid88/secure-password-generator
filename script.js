// Assignment Code
var generateBtn = document.querySelector("#generate");

//Init global arrays
var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialArray = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

function generatePassword() {
  //Init local variables
  var pwLength = 0;
  var pwString = "";
  var masterArray = [];
  var addLowercase;
  var addUppercase;
  var addNumeric;
  var addSpecial;

  console.log(pwLength);
  //Prompt with check to see if length selected is <8 or > 128 and loop if it is
  do {
    pwLength = prompt("How long do you want your password? Please enter a value between 8-128");
    if (pwLength < 8 || pwLength > 128) {
      alert("Please enter a value between 8 and 128");
      //DEBUG: check pwLength
      console.log("pwLength:  " + pwLength);
    }
  } 
  while (pwLength < 8 || pwLength > 128);

  //DEBUG:
  console.log(pwLength);
  console.log("Starting Array: " + masterArray);
  //Prompt for criteria; loops if none are selected
  do {
    alert("Please select at least 1 criteria.");
    
    addLowercase = confirm("Include lowercase characters?");
    addUppercase = confirm("Include uppercase characters?");
    addNumeric = confirm("Include numerical characters?");
    addSpecial = confirm("Include special characters?");

    if (addLowercase) {
      masterArray = masterArray.concat(lowercaseArray);
    }
    if (addUppercase) {
      masterArray = masterArray.concat(uppercaseArray);
    }
    if (addNumeric) {
      masterArray = masterArray.concat(numericArray);
    } 
    if (addSpecial) {
      masterArray = masterArray.concat(specialArray);
    }
  } while (masterArray.length == 0);

  //DEBUG: Log array to console
  console.log(masterArray);

  for (var i = 0; i < pwLength; i++) {
    pwString = pwString.concat(masterArray[Math.floor(Math.random() * masterArray.length)]);
  }
  console.log("Password" + pwString);
  console.log("Passowrd length " + pwString.length);

  //DEBUG: Log array to conosole
  console.log(masterArray);
  return pwString;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //DEBUG: 
  console.log("Password: " + password);
  console.log("------------------------");

  passwordText.value = password;
  
  alert("Your password has been generated below. Have a nice day!");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
