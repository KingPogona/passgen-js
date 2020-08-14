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
  // debugger;
  return output;
}

function getPasswordSettings() {

  var options = {
    legth: getLength(),
    lowerCase: confirmTF("lowercase"),
    upperCase: confirmTF("uppercase"),
    numeric: confirmTF("numeric"),
    specialCharacter: confirmTF("special")
  };

  // console.log(options);
  // debugger;

  return options
}

//generate password function
function generatePassword() {

  var passwordOptions = getPasswordSettings()
  console.log(passwordOptions)
  debugger;





  //Characters to use for password: "this should be a variable of some kind to fill with what is listed below."
  //special characters: "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  //lower: "abcdefghijklmnopqrstuvwxyz"
  //upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  //numeric: "1234567890"


  return "test";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
