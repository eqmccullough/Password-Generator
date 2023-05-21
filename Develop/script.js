// define variables and arrays
var emptyArray = [];
var passwordLength; //stores length of password input by user
var lowercase; //user inputs value of Y or N to include or not include lowercase letters
var lowercaseInclude; //boolean value of true or false depending if lowercase letters are included or not
var lowerLetter; //randomly generated lowercase letter
var uppercaseInclude; //boolean value of true or false depending if uppercase letters are included or not
var upperLetter; //randomly generated uppercase letter
var uppercase; //user inputs value of Y or N to include or not include uppercase letters
var special; //user inputs value of Y or N to include or not include special characters
var specialInclude; //boolean value of true or false depending if special characters are included or not
var number; //user inputs value of Y or N to include or not include numbers
var numberInclude; //boolean value of true or false depending if numbers are included or not
var randomNumber; //randomly generated number
var randomSpecial; //randomly generated special character

// arrays containing characters for randomization
const lowercaseletters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] ;
const uppercaseletters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] ;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var randomArray = []; //array to store random characters from each character class
var doubleRandom = []; //array of random character chose from randomArray
var passwordArray = []; //array to store items to be used in password

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// define functions

function randomItem(arr) { //function to select random item from array

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
}

function lowercaseLetter() { //function to get random lowercase letter
  lowerLetter = randomItem(lowercaseletters);
  return lowerLetter;
}

function uppercaseLetter() { //function to get random uppercase letter
  upperLetter =  randomItem(uppercaseletters);
  return upperLetter;
}

function randomNumbers() { //function to get random number
  randomNumber =  randomItem(numbers);
  return randomNumber;
}

function randomSpecials() { //function to get random special character
  randomSpecial = randomItem(specials);
  return randomSpecial;
}

function randomizer() { //function to get random character from array of random characters from each charater type
  doubleRandom = randomItem(randomArray);
  return doubleRandom;
}


function generatePassword() {
  for (let i = 0; i < passwordLength; i++) {

    //if statements to include/not include different character types

  if (lowercaseInclude == true) { 
    lowercaseLetter();
    randomArray.push(lowerLetter); //adds character to randomArray
     }else {}

  if (uppercaseInclude == true) {
      uppercaseLetter();
      randomArray.push(upperLetter);
       }else {}
  
  if (numberInclude == true) {
        randomNumbers();
        randomArray.push(randomNumber);
         }else {}

  if (specialInclude == true) {
        randomSpecials();
        randomArray.push(randomSpecial);
           }else {}
  
  randomizer();
  randomArray = emptyArray; //clears randomArray for next loop
passwordArray.push(doubleRandom); //adds random character to password
console.log(passwordArray);

}
var password = passwordArray.join(""); //turns array into string to use as password
return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function passwordLengths(){
  passwordLength = prompt("How long will your password be?");
  if(passwordLength < 8) {
    alert("Password needs at least 8 characters and no more than 128 characters")
    passwordLengths();
  } else if (passwordLength > 128) {
    alert("Password needs at least 8 characters and no more than 128 characters")
    passwordLengths();
  } else {
  
  }
}

function caseInclude() {
  lowercase = prompt("Do you want to include lowercase letters? (Y/N)");
  if(lowercase == "Y"){
    lowercaseInclude = true;
  } else if (lowercase == "N") {
    lowewrcaseInclude = false;
  } else {
    alert("please enter Y or N");
    caseInclude();
  }
}

function uppercaseIncludes() {
  uppercase = prompt("Do you want to include uppercase letters? (Y/N)");
  if(uppercase == "Y"){
    uppercaseInclude = true;
  } else if (uppercase == "N") {
    uppercaseInclude = false;
  } else {
    alert("please enter Y or N");
    uppercaseIncludes();
  }
}

function numberIncludes() {
  number = prompt("Do you want to include numbers? (Y/N)");
  if(number == "Y"){
    numberInclude = true;
  } else if (number == "N") {
    numberInclude = false;
  } else {
    alert("please enter Y or N");
    numberIncludes();
  }
}


function specialIncludes() {
  special = prompt("Do you want to include special characters? (Y/N)");
  if(special == "Y"){
    specialInclude = true;
  } else if (special == "N") {
    specialInclude = false;
  } else {
    alert("please enter Y or N");
    specialIncludes();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {

  passwordLengths();
  caseInclude();
  uppercaseIncludes();
  numberIncludes();
  specialIncludes();
  writePassword();

}
);


