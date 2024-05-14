let generateBtn = document.querySelector("#generate");
let prompts = document.querySelector("#prompts");
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numerals = "0123456789";
let specialCharacters = "!#$%&^()*-=_./:;<>?@[]{}~`";
let lowerCaseBox = document.querySelector("#lowercase");
let upperCaseBox = document.querySelector("#uppercase");
let numeralsBox = document.querySelector("#numerals");
let specialCharactersBox = document.querySelector("#special-characters");
let passwordLength = document.querySelector("#length");

// Returns a random number between 0 and a max that is passed in
function getRandom(max) {
  return Math.floor(Math.random()*(max + 1));
}

function generatePassword() {
  // TO DO: Generate the password from the selected parameters
  let numeralsArray = numerals.split('');
  let upperCaseArray = upperCase.split('');
  let lowerCaseArray = lowerCase.split('');
  let specialCharactersArray = specialCharacters.split('');
  let passwordArray = [];
  let password = [];
  let count = 0;

  // Add one of each selected character to the password string to guarantee it will contain at least one
  if(lowerCaseBox.checked) {
    password.push(lowerCaseArray[getRandom(25)]);
    passwordArray = passwordArray.concat(lowerCaseArray);
    count++;
  }
  if(upperCaseBox.checked) {
    password.push(upperCaseArray[getRandom(25)]);
    passwordArray = passwordArray.concat(upperCaseArray);
    count++;
  }
  if(numeralsBox.checked) {
    password.push(numeralsArray[getRandom(9)]);
    passwordArray = passwordArray.concat(numeralsArray);
    count++;
  }
  if(specialCharactersBox.checked) {
    password.push(specialCharactersArray[getRandom(24)]);
    passwordArray = passwordArray.concat(specialCharactersArray);
    count++;
  }

  // Populate the remaining length with random characters from the selected types
  let updatedLength = passwordLength.value - count;

  for(let i = 0; i < updatedLength; i++) {
    password.push(passwordArray[getRandom(passwordArray.length)])
  }

  // Convert the password from an array to a string
  password = password.join('');
  
  console.log(password);
  return password;


} 

// TO DO: Check if length is appropriate
function isLengthWrong() {
  if (passwordLength.value < 8 || passwordLength.value > 128 || passwordLength.value == undefined) {
    return true;
  }
  return false;
}

// TO DO: Check if at least character type is selected
function isCharacterBlank() {
    if (!lowerCaseBox.checked && !upperCaseBox.checked && !numeralsBox.checked && !specialCharactersBox.checked ) {
      return true;
    }
    return false;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  if (isLengthWrong() === true) {
    window.alert("Password must be between 8 and 128 characters, and at least one character type must be selected.");
  } else if (isCharacterBlank()) {
    window.alert("Password must be between 8 and 128 characters, and at least one character type must be selected.");
  } else {
    passwordText.value = password;
  }
}

// Display criteria list when button is clicked.
function showPrompts(event) {
  if (document.getElementById("prompts").style.display == "none");
    event.preventDefault();
    document.getElementById("prompts").style.display = "block";
}

// Add event listener to generate button
generateBtn.addEventListener("click", showPrompts);
generateBtn.addEventListener("click", writePassword);

