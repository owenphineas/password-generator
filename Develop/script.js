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
let length = document.querySelector("#length").value;

function generatePassword() {
  // TO DO: Generate the password from the selected parameters
} 

// TO DO: Check if length is appropriate
function isLengthWrong() {
  if (length < 8 || length > 128 || length == undefined) {
  } return true;
}

// TO DO: Check if at least character type is selected
function isCharacterBlank() {
  let checkbox = document.getElementsByName("checkbox");
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      return true;
    }
  }
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  if (isLengthWrong()) {
    window.alert("Password must be between 8 and 128 characters, and at least one character type must be selected.");
  } else if (isCharacterBlank()) {
    window.alert("Password must be between 8 and 128 characters, and at least ONNNNNNNE character type must be selected.");
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

