// Assignment Code
var generateBtn = document.querySelector("#generate");

////////////
//TEST CODE

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

console.log(lowercase);
console.log(uppercase);
console.log(numeric);
console.log(special);
console.log(special[23]);

var tempArray = lowercase.concat(uppercase);
tempArray = tempArray.concat(numeric);
tempArray = tempArray.concat(special);
console.log(tempArray);
console.log(tempArray.length);


//END TEST CODE
///////////////

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //============
  // GIVEN I need a new, secure password
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  // DEFAULT CODE
  
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  //create arrays for each type of criteria and fill with all possible options
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']; // , '\\' between [ and ]
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  //Should there be a default value?
  var chooseLength = prompt("How long do you want your password? Please enter a value between 8-128");

  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  //prompt user for each type and log to variable
  //store results in object? 
  // var criteria = {
  //   lowercase: false,
  //   uppercase: false,
  //   numeric: false,
  //   special: false
  // }
  //chooseLowercase, chooseUppercase, chooseNumeric, chooseSpecial
  //
  // if chooseLowercase true
  //criteria.lowercase = true
  //masterArray = masterArray.concat(lowercase)
  //else


  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  //if !chooseLowercase && !chooseUppercase && !chooseNumeric && !chooseSpecial
  //alert user "you must select at least 1 criteria"
  //loop back to beginning (maybe)

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  //with each selection of 

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  //alert(generatePassword());


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
