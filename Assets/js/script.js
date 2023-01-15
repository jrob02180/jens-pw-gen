// Variables for password criteria
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var characters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password function to generate password
function generatePassword() {
  var finalPassword = "";
  var passwordSize = prompt(
    "How many characters would you like your password to contain? Please choose a password length between 8 and 128 characters."
  );
  if (passwordSize < 8 || passwordSize > 128) {
    alert(
      "Invalid entry. Password length must be between 8 and 128 characters. Please try again."
    );
    return;
  }
  var checkLower = confirm(
    "Would you like to include lowercase letters in your password?"
  );
  var checkUpper = confirm(
    "Would you like to include uppercase letters in your password?"
  );
  var checkNumber = confirm(
    "Would you like to include numbers in your password?"
  );
  var checkChar = confirm(
    "Would you like to include special characters in your password?"
  );

  if (
    checkLower === false &&
    checkUpper === false &&
    checkNumber === false &&
    checkChar === false
  ) {
    alert("You much choose at least one character type. Please try again.");
    passwordText.value = password;
    return;
  }

  // User input
  for (let i = 0; i < passwordSize; i++) {
    if (checkLower === true && finalPassword.length < passwordSize) {
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

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event Listener
generateBtn.addEventListener("click", writePassword);
