// define variables and arrays
var emptyArray = [];
var passwordLength;
var lowercase;
var lowercaseInclude;
var lowerLetter;
var uppercaseInclude;
var upperLetter;
var uppercase;
var special;
var specialInclude;
var number;
var numberInclude;
var randomNumber;
var randomSpecial;
const lowercaseletters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] ;
const uppercaseletters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] ;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var randomArray = [];
var doubleRandom = [];
var passwordArray = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// define functions

function randomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

function lowercaseLetter() {
  lowerLetter = randomItem(lowercaseletters);
  return lowerLetter;
}

function uppercaseLetter() {
  upperLetter =  randomItem(uppercaseletters);
  return upperLetter;
}

function randomNumbers() {
  randomNumber =  randomItem(numbers);
  return randomNumber;
}

function randomSpecials() {
  randomSpecial = randomItem(specials);
  return randomSpecial;
}

function randomizer() {
  doubleRandom = randomItem(randomArray);
  return doubleRandom;
}


function generatePassword() {
  for (let i = 0; i < passwordLength; i++) {
  if (lowercaseInclude == true) {
    lowercaseLetter();
    randomArray.push(lowerLetter);
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
  console.log(randomArray);
  randomizer();
  randomArray = emptyArray;
passwordArray.push(doubleRandom);
console.log(passwordArray);

}
var password = passwordArray.join("");
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
    console.log(passwordLength);
    // return passwordLength;
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


