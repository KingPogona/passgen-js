// Assignment Code
var generateBtn = document.querySelector("#generate");

// get value for options.length
function getLength() {
  let output = window.prompt("How Long do you want your password to be? Enter a value from 8 to 128.");
  
  while (output < 8 || output > 128 || output === null) {
    output = window.prompt("Invalid value. How Long do you want your password to be? Please enter a value from 8 to 128.");
  }
  return output
}

// get true or false for respective input
function confirmTF(promptText) {

  let output = window.confirm("Do you want your password to contain " + promptText + " characters? Select 'OK' if you do or 'Cancel' if you don't.");
  console.log(output);

  return output;
}

// sets passwordOptions object values by running relevant functions
function getPasswordSettings() {

  var options = {
    passLength: getLength(),
    lowerCase: confirmTF("lowercase"),
    upperCase: confirmTF("uppercase"),
    numeric: confirmTF("numeric"),
    special: confirmTF("special")
  };

  return options;
}

//generate password
function generatePassword() {

  // define variables
  var characterStrings = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "1234567890",
    special: "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"
  };

  var usedCharacters = "";
  var passwordOptions = getPasswordSettings();
  var strLength = 0;
  let generatedPassword = "";

  // console.log(passwordOptions);
  // debugger;

  // set characters to be used based on user input.
  if (passwordOptions.lowerCase === true) {usedCharacters = usedCharacters + characterStrings.lower};
  if (passwordOptions.upperCase === true) {usedCharacters = usedCharacters + characterStrings.upper};
  if (passwordOptions.numeric === true) {usedCharacters = usedCharacters + characterStrings.numeric};
  if (passwordOptions.special === true) {usedCharacters = usedCharacters + characterStrings.special};
  if (passwordOptions.lowerCase !== true && passwordOptions.upperCase !== true && passwordOptions.numeric !== true && passwordOptions.special !== true) {
    window.alert("A password was not generated because you didn't include any characters to be used. You must include at least one set of characters.")
  }
  
  // console.log(usedCharacters);
  // debugger;

  strLength = usedCharacters.length;

  // console.log(strLength);
  // debugger;

  for (var i = 0; i < passwordOptions.passLength; i++) {
    generatedPassword = generatedPassword + usedCharacters.charAt(Math.floor(Math.random() * strLength));
  }

  // console.log(generatedPassword.length)
  // debugger;

  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
