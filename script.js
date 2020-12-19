// Assignment Code
var generateBtn = document.querySelector("#generate");

//Init global arrays
var criteriaArray = {
  lowercaseArray: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  uppercaseArray: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  numericArray: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  specialArray: ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
}

function generatePassword() {
  //Init local variables
  var pwLength = 0;
  var pwString = "";
  var masterArray = [];
  var addLowercase;
  var addUppercase;
  var addNumeric;
  var addSpecial;

  //Prompt with check to see if length selected is <8 or > 128 and loop if it is
  do {
    alert("Please enter a value between 8 and 128");
    pwLength = prompt("How long do you want your password? Please enter a value between 8-128");
  } 
  while (pwLength < 8 || pwLength > 128);



  //prompt user for criteria to be added and add associated array to master array
  do {
    alert("Please select at least 1 criteria.");

    if (addLowercase = confirm("Include lowercase characters?")) {
      masterArray = masterArray.concat(criteriaArray.lowercaseArray);
    }
    if (addUppercase = confirm("Include uppercase characters?")) {
      masterArray = masterArray.concat(criteriaArray.uppercaseArray);
    }
    if (addNumeric = confirm("Include numerical characters?")) {
      masterArray = masterArray.concat(criteriaArray.numericArray);
    } 
    if (addSpecial = confirm("Include special characters?")) {
      masterArray = masterArray.concat(criteriaArray.specialArray);
    }
  } while (masterArray.length == 0);


  //for the requested length of a password, iterate, and add random index of masterArray
  for (var i = 0; i < pwLength; i++) {
    pwString = pwString.concat(masterArray[Math.floor(Math.random() * masterArray.length)]);
  }

  console.log(pwLength);
  console.log(pwString);

  return pwString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  alert("Your password has been generated below. Have a nice day!");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);