// Array for lowercase
var lowercase = "abcdefghijklmnopqrstuvwxyz";
// Array for uppercase
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Array for numbers
var numbers = "1234567890";
// Array for special characters
var characters = "!@#$%^&*()";
// user input
// How many characters would you like your password to contain?
// Do we need to confirm lowecase, uppercase, numbers, special characters?

// If use chose to add lowercase characters
// Randomary select Y, # of char, push to the results array

// results = ["a", "b", "0", "?"]

//display results on to page (target text area, display results)
// document.write?





// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var finalPassword = "";
  var passwordSize = prompt("Choose a password length between 8 and 128 characters.");
  var checkLower = confirm("Would you like to include lowercase letters in your password?");
  var checkUpper = confirm("Would you like to include uppercase letters in your password?");
  var checkNumber = confirm("Would you like to include numbers letters in your password?");
  var checkChar = confirm("Would you like to include characters letters in your password?");

  if (passwordSize < 8 || passwordSize > 128) {
    alert("Invalid entry, please try again.");
    return;
  }
  for (let i = 0; i < passwordSize; i++) {

    if (checkLower === true && finalPassword.length < passwordSize ) {
      var position = Math.floor(Math.random() * lowercase.length);
      finalPassword = finalPassword + lowercase[position];
    }
    if (checkUpper === true && finalPassword.length < passwordSize) {
      var position = Math.floor(Math.random() * uppercase.length);
      finalPassword = finalPassword + uppercase[position];
    }
    if (checkNumber === true && finalPassword.length < passwordSize) {
      var position = Math.floor(Math.random() * numbers.length);
      finalPassword = finalPassword + numbers[position];
    }
    if (checkChar === true && finalPassword.length < passwordSize) {
      var position = Math.floor(Math.random() * characters.length);
      finalPassword = finalPassword + characters[position];
    }
  }

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
